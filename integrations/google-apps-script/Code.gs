const CONFIG = Object.freeze({
  spreadsheetId: "1sapJp0DSWR4LW2B9xCUtCSxYwQ8kMgINC5d0R5iAzAg",
  sheetName: "Pilot Inquiries",
  recipientEmail: "dennis@memberlegacy.com",
});

function doPost(event) {
  try {
    const payload = JSON.parse((event.postData && event.postData.contents) || "{}");
    const required = ["name", "workEmail", "company", "primaryUseCase"];

    if (required.some((field) => !String(payload[field] || "").trim())) {
      return jsonResponse({ ok: false, error: "Missing required fields" });
    }

    const lead = {
      name: safeCell(payload.name),
      workEmail: safeCell(payload.workEmail),
      company: safeCell(payload.company),
      primaryUseCase: safeCell(payload.primaryUseCase),
      businessObjective: safeCell(payload.businessObjective),
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
        .getRange(nextRow, 1, 1, 8)
        .setValues([[
          new Date(),
          lead.name,
          lead.workEmail,
          lead.company,
          lead.primaryUseCase,
          lead.businessObjective,
          lead.sourceUrl,
          "New",
        ]]);
      sheet.getRange(nextRow, 1).setNumberFormat("yyyy-mm-dd hh:mm");
      sheet
        .getRange(nextRow, 8)
        .setDataValidation(
          SpreadsheetApp.newDataValidation()
            .requireValueInList(["New", "Contacted", "Qualified", "Closed", "Not a fit"], true)
            .build(),
        );
      sheet.getRange(nextRow, 6).setWrap(true);
    } finally {
      lock.releaseLock();
    }

    MailApp.sendEmail({
      to: CONFIG.recipientEmail,
      replyTo: lead.workEmail,
      subject: `New Member Legacy pilot inquiry from ${lead.name}`,
      htmlBody: [
        "<h2>New pilot inquiry</h2>",
        `<p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>`,
        `<p><strong>Work email:</strong> ${escapeHtml(lead.workEmail)}</p>`,
        `<p><strong>Company:</strong> ${escapeHtml(lead.company)}</p>`,
        `<p><strong>Primary use case:</strong> ${escapeHtml(lead.primaryUseCase)}</p>`,
        `<p><strong>Business objective or question:</strong><br>${escapeHtml(lead.businessObjective || "Not provided").replace(/\n/g, "<br>")}</p>`,
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
