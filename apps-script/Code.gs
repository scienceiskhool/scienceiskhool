/**
 * Science is Khool — score collector for quizzes AND games.
 * Paste this into a Google Sheet: Extensions > Apps Script. Then Deploy > Manage deployments >
 * (pencil) Edit > Version: New version > Deploy. This keeps the same Web app URL.
 * (First time only: Deploy > New deployment > Web app, Execute as: Me, Who has access: Anyone,
 *  then copy the Web app URL into data/site.js -> submitUrl.)
 * Each course or game gets its own tab, which is created automatically.
 * Quizzes fill columns A–I. Games also fill J–L (time taken, game points, summary).
 */
var HEADERS = ["Timestamp", "Class", "Reg no.", "Name", "Chapter", "Score", "Total", "%", "Questions wrong",
               "Time taken (s)", "Game points", "Summary"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tabName = String(d.course || "Scores").slice(0, 40);
    var sh = ss.getSheetByName(tabName) || ss.insertSheet(tabName);
    ensureHeaders(sh);
    var score = Number(d.score) || 0, total = Number(d.total) || 0;
    sh.appendRow([
      new Date(),
      clean(d.cls), clean(d.reg), clean(d.name), clean(d.chapter),
      score, total, total ? Math.round(100 * score / total) : "",
      clean(d.wrong).slice(0, 2000),
      d.time == null ? "" : Number(d.time) || 0,
      d.points == null ? "" : Number(d.points) || 0,
      clean(d.summary).slice(0, 2000)
    ]);
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error: " + err);
  } finally {
    lock.releaseLock();
  }
}

// Writes the header row on a new tab, and adds the three new game headers to older tabs.
function ensureHeaders(sh) {
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  } else if (String(sh.getRange(1, 10).getValue()) === "") {
    sh.getRange(1, 10, 1, 3).setValues([HEADERS.slice(9)]);
  }
  sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
}

// Stop spreadsheet formula injection from student-typed text.
function clean(v) {
  var s = String(v == null ? "" : v).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function doGet() {
  return ContentService.createTextOutput("Science is Khool score collector is running.");
}
