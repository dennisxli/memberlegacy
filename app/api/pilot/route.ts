const requiredFields = [
  "name",
  "workEmail",
  "company",
  "productService",
  "businessObjective",
] as const;

type PilotRequest = Record<
  | (typeof requiredFields)[number]
  | "companyWebsite"
  | "targetCustomerGroup"
  | "familyOutcome"
  | "eligiblePopulation"
  | "faxNumber",
  unknown
>;

function cleanValue(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 24_000) {
    return Response.json({ error: "The request is too large." }, { status: 413 });
  }

  let rawBody: PilotRequest;

  try {
    rawBody = (await request.json()) as PilotRequest;
  } catch {
    return Response.json({ error: "Please complete the form and try again." }, { status: 400 });
  }

  if (cleanValue(rawBody.faxNumber, 200)) {
    return Response.json({ ok: true });
  }

  const payload = {
    name: cleanValue(rawBody.name, 100),
    workEmail: cleanValue(rawBody.workEmail, 160),
    company: cleanValue(rawBody.company, 160),
    companyWebsite: cleanValue(rawBody.companyWebsite, 240),
    productService: cleanValue(rawBody.productService, 300),
    targetCustomerGroup: cleanValue(rawBody.targetCustomerGroup, 300),
    businessObjective: cleanValue(rawBody.businessObjective, 200),
    familyOutcome: cleanValue(rawBody.familyOutcome, 2000),
    eligiblePopulation: cleanValue(rawBody.eligiblePopulation, 100),
    sourceUrl: new URL("/design-a-pilot", request.url).toString(),
  };

  if (requiredFields.some((field) => !payload[field])) {
    return Response.json({ error: "Please complete every required field." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.workEmail)) {
    return Response.json({ error: "Please enter a valid work email." }, { status: 400 });
  }

  if (payload.companyWebsite) {
    try {
      const parsedUrl = new URL(payload.companyWebsite);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error("Unsupported protocol");
      }
    } catch {
      return Response.json({ error: "Please enter a valid company website." }, { status: 400 });
    }
  }

  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      { error: "We could not submit your request. Please email dennis@memberlegacy.com." },
      { status: 503 },
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
    });
    const responseText = await webhookResponse.text();

    if (!webhookResponse.ok || !responseText.includes('"ok":true')) {
      throw new Error("Program inquiry webhook rejected the request.");
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "We could not submit your request. Please email dennis@memberlegacy.com." },
      { status: 502 },
    );
  }
}
