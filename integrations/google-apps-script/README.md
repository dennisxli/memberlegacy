# Program inquiry connection

The website sends program inquiries to a Google Apps Script web app. The script records each request in the `Program Inquiries` worksheet and emails `dennis@memberlegacy.com`.

The worksheet header row must contain these columns in order:

`Submitted At`, `Name`, `Work Email`, `Company`, `Company Website`, `Product or Service`, `Target Customer Group`, `Business Objective`, `Family Outcome`, `Eligible Population`, `Source URL`, `Status`

1. Open the Google Sheet and select **Extensions**, then **Apps Script**.
2. Replace the default script with `Code.gs` from this folder.
3. Select **Deploy**, then **New deployment**, and choose **Web app**.
4. Set **Execute as** to yourself and **Who has access** to anyone.
5. Authorize the script, deploy it, and copy the web app URL ending in `/exec`.
6. Add that URL to Vercel as `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` for Production, Preview, and Development.
7. Redeploy the site and submit one test request from `/design-a-pilot`.

The destination spreadsheet is:

https://docs.google.com/spreadsheets/d/1sapJp0DSWR4LW2B9xCUtCSxYwQ8kMgINC5d0R5iAzAg
