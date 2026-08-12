const CONFIG = Object.freeze({
  spreadsheetId: "1sapJp0DSWR4LW2B9xCUtCSxYwQ8kMgINC5d0R5iAzAg",
  sheetName: "Program Inquiries",
  recipientEmail: "dennis@memberlegacy.com",
});

function doPost(event) {
  try {
    const payload = JSON.parse((event.postData && event.postData.contents) || "{}");
    const required = ["name", "workEmail", "company", "productService", "businessObjective"];

    if (required.some((field) => !String(payload[field] || "").trim())) {
      return jsonResponse({ ok: false, error: "Missing required fields" });
    }

    const lead = {
      name: safeCell(payload.name),
      workEmail: safeCell(payload.workEmail),
      company: safeCell(payload.company),
      companyWebsite: safeCell(payload.companyWebsite),
      productService: safeCell(payload.productService),
      targetCustomerGroup: safeCell(payload.targetCustomerGroup),
      businessObjective: safeCell(payload.businessObjective),
      familyOutcome: safeCell(payload.familyOutcome),
      eligiblePopulation: safeCell(payload.eligiblePopulation),
      sourceUrl: safeCell(payload.sourceUrl || "https://memberlegacy.com/design-a-pilot"),
    };

    const spreadsheet = SpreadsheetApp.openById(CONFIG.spreadsheetId);
    const sheet = spreadsheet.getSheetByName(CONFIG.sheetName);

    if (!sheet) {
      throw new Error("Lead sheet not found");
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const nextRow = sheet.getLastRow() + 1;
      sheet
        .getRange(nextRow, 1, 1, 12)
        .setValues([[
          new Date(),
          lead.name,
          lead.workEmail,
          lead.company,
          lead.companyWebsite,
          lead.productService,
          lead.targetCustomerGroup,
          lead.businessObjective,
          lead.familyOutcome,
          lead.eligiblePopulation,
          lead.sourceUrl,
          "New",
        ]]);
      sheet.getRange(nextRow, 1).setNumberFormat("yyyy-mm-dd hh:mm");
      sheet
        .getRange(nextRow, 12)
        .setDataValidation(
          SpreadsheetApp.newDataValidation()
            .requireValueInList(["New", "Contacted", "Qualified", "Closed", "Not a fit"], true)
            .build(),
        );
      sheet.getRange(nextRow, 9).setWrap(true);
    } finally {
      lock.releaseLock();
    }

    MailApp.sendEmail({
      to: CONFIG.recipientEmail,
      replyTo: lead.workEmail,
      subject: `New Member Legacy program inquiry from ${lead.name}`,
      htmlBody: [
        "<h2>New program inquiry</h2>",
        `<p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>`,
        `<p><strong>Work email:</strong> ${escapeHtml(lead.workEmail)}</p>`,
        `<p><strong>Company:</strong> ${escapeHtml(lead.company)}</p>`,
        `<p><strong>Company website:</strong> ${escapeHtml(lead.companyWebsite || "Not provided")}</p>`,
        `<p><strong>Product or service:</strong> ${escapeHtml(lead.productService)}</p>`,
        `<p><strong>Target customer group:</strong> ${escapeHtml(lead.targetCustomerGroup || "Not provided")}</p>`,
        `<p><strong>Business objective:</strong> ${escapeHtml(lead.businessObjective)}</p>`,
        `<p><strong>Desired family outcome:</strong><br>${escapeHtml(lead.familyOutcome || "Not provided").replace(/\n/g, "<br>")}</p>`,
        `<p><strong>Eligible population:</strong> ${escapeHtml(lead.eligiblePopulation || "Not provided")}</p>`,
        `<p><strong>Source:</strong> ${escapeHtml(lead.sourceUrl)}</p>`,
      ].join(""),
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: "Unable to record request" });
  }
}

function safeCell(value) {
  const cleaned = String(value || "").trim().replace(/\r/g, "");
  return /^[=+\-@]/.test(cleaned) ? `'${cleaned}` : cleaned;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
