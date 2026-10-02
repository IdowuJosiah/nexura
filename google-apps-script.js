/**
 * Nexura: Google Sheets receiver for creator applications.
 *
 * Setup (5 minutes):
 * 1. Create a new Google Sheet named "Nexura Applications".
 * 2. Extensions → Apps Script. Delete the sample code and paste this whole file.
 * 3. Change SHARED_SECRET below to a long random string. Use the same value
 *    as SHEETS_SHARED_SECRET in your Vercel environment variables.
 * 4. Deploy → New deployment → type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Authorise when prompted, then copy the Web app URL.
 * 5. Paste that URL into GOOGLE_SHEETS_WEBHOOK_URL in Vercel (and .env.local for local dev).
 *
 * If you edit this script later: Deploy → Manage deployments → Edit → Version: New version.
 */

const SHARED_SECRET = "CHANGE-ME-to-a-long-random-string";
const SHEET_NAME = "Applications";

const HEADERS = [
  "Submitted at", "Name", "Email", "Instagram", "TikTok", "X", "Other social",
  "Country", "Time zone", "Niche", "Monthly earnings", "OnlyFans link", "Goals",
  "Confirmed 18+", "Status", "Notes",
];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.secret !== SHARED_SECRET) return json({ ok: false, error: "unauthorised" });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#0a0a0b").setFontColor("#c9a86a");
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(d.submittedAt), d.name, d.email, d.instagram, d.tiktok, d.x, d.otherSocial,
      d.country, d.timezone, d.niche, d.earnings, d.ofLink, d.goals, d.isAdult, "New", "",
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
