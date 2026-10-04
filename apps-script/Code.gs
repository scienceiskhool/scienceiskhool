/**
 * Science is Khool — quiz score collector.
 * Paste this into a Google Sheet: Extensions > Apps Script. Then Deploy > New deployment > Web app
 * (Execute as: Me, Who has access: Anyone). Copy the Web app URL into data/site.js -> submitUrl.
 * Each course gets its own tab, which is created automatically.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tabName = String(d.course || "Scores").slice(0, 40);
    var sh = ss.getSheetByName(tabName) || ss.insertSheet(tabName);
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Timestamp", "Class", "Reg no.", "Name", "Chapter", "Score", "Total", "%", "Questions wrong"]);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, 9).setFontWeight("bold");
    }
    var score = Number(d.score) || 0, total = Number(d.total) || 0;
    sh.appendRow([
      new Date(),
      clean(d.cls), clean(d.reg), clean(d.name), clean(d.chapter),
      score, total, total ? Math.round(100 * score / total) : "",
      clean(d.wrong).slice(0, 2000)
    ]);
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error: " + err);
  } finally {
    lock.releaseLock();
  }
}

// Stop spreadsheet formula injection from student-typed text.
function clean(v) {
  var s = String(v == null ? "" : v).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function doGet() {
  return ContentService.createTextOutput("Science is Khool score collector is running.");
}
