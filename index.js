// Example: Send to Google Sheets
function sendToGoogleSheets(leadData) {
    const url = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(leadData)
    });
}
