/**
 * Science is Khool — score collector for quizzes AND games, plus a teacher dashboard.
 *
 * SET-UP (paste this file AND Dashboard.html into the Sheet's Extensions > Apps Script project)
 * 1. Score collector (already set up): Deploy > Manage deployments > (pencil) Edit >
 *    Version: New version > Deploy. This keeps the same Web app URL the games use.
 * 2. Web dashboard (once): Deploy > New deployment > Web app,
 *    Execute as: Me, Who has access: Only myself > Deploy. Bookmark that URL — it is your dashboard.
 *    (Even if someone finds a URL, the dashboard only shows to the owner of this Sheet.)
 * 3. Dashboard tab: reload the Sheet, then use the menu  Science is Khool > Refresh dashboard tab.
 *    Science is Khool > Turn on hourly refresh keeps it up to date by itself.
 *
 * Each course or game gets its own tab, which is created automatically.
 * Quizzes fill columns A–I. Games also fill J–L (time taken, game points, summary).
 */
var HEADERS = ["Timestamp", "Class", "Reg no.", "Name", "Chapter", "Score", "Total", "%", "Questions wrong",
               "Time taken (s)", "Game points", "Summary"];
var DASH_TAB = "Dashboard";
var SKIP_TABS = [DASH_TAB, "Roster"];   // tabs that are not score tabs

/* =================== SCORE COLLECTOR =================== */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tabName = String(d.course || "Scores").slice(0, 40);
    if (SKIP_TABS.indexOf(tabName) > -1) tabName += " scores";
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

/* =================== WEB DASHBOARD =================== */
// Only the Sheet's owner sees the dashboard. Everyone else (e.g. the public score-collector URL) sees a status line.
function doGet() {
  var me = Session.getEffectiveUser().getEmail(), who = Session.getActiveUser().getEmail();
  if (!who || who !== me) return ContentService.createTextOutput("Science is Khool score collector is running.");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var t = HtmlService.createTemplateFromFile("Dashboard");
  t.payload = JSON.stringify({ rows: readAll_().map(function (r) {
      return [r.t, r.game, r.chapter, r.cls, r.reg, r.name, r.score, r.total, r.pct, r.time, r.errs, r.wrong.slice(0, 400)];
    }), updated: Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "d MMM yyyy, h:mm a"), sheetUrl: ss.getUrl() })
    .replace(/</g, "\\u003c");
  return t.evaluate().setTitle("Game dashboard · Science is Khool")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

/* =================== READING THE SCORE TABS =================== */
function readAll_() {
  var out = [];
  SpreadsheetApp.getActiveSpreadsheet().getSheets().forEach(function (sh) {
    var name = sh.getName();
    if (SKIP_TABS.indexOf(name) > -1 || sh.getLastRow() < 2) return;
    var v = sh.getDataRange().getValues();
    if (String(v[0][0]) !== "Timestamp") return;
    for (var i = 1; i < v.length; i++) {
      var r = v[i]; if (!r[0] && !r[3]) continue;
      var t = r[0] instanceof Date ? r[0].getTime() : Date.parse(r[0]) || 0;
      var score = Number(r[5]) || 0, total = Number(r[6]) || 0;
      out.push({
        t: t, game: name, chapter: String(r[4] || ""), cls: String(r[1] || "Other").trim() || "Other",
        reg: String(r[2] || "").trim(), name: String(r[3] || "").replace(/\s+/g, " ").trim(),
        score: score, total: total, pct: total ? Math.round(100 * score / total) : (r[7] === "" ? null : Number(r[7])),
        time: Number(r[9]) || 0, errs: errorsOf_(String(r[11] || "")), wrong: String(r[8] || "")
      });
    }
  });
  return out;
}

// Pulls "label xN" items out of a game's Summary ("... | Errors: A x2; B x1 | ...").
function errorsOf_(summary) {
  var m = /(?:^|\|)\s*(?:Errors|Wrong most):\s*([^|]*)/i.exec(summary);
  if (!m || /^\s*(none|-)?\s*$/i.test(m[1])) return [];
  return m[1].split(/;\s*/).map(function (x) {
    x = x.trim(); var mm = /^(.*?)\s+[x×](\d+)$/.exec(x);
    return mm ? [mm[1], Number(mm[2])] : [x, 1];
  }).filter(function (e) { return e[0] && !/^none$/i.test(e[0]); });
}

function studentKey_(r) { return r.cls + "|" + (r.reg ? String(Number(r.reg) || r.reg) : r.name.toLowerCase()); }

var LEVELS = ["S1", "S2", "S3", "S4"], VALUES = ["Charity", "Courage", "Faith", "Hope", "Humility", "Integrity", "Love", "Respect", "Joy"];
function classRank_(c) {
  var p = c.split(" "), l = LEVELS.indexOf(p[0]), v = VALUES.indexOf(p[1]);
  if (l > -1 && v > -1) return l * 10 + v;
  if (/^(S)?5 Faith$/.test(c)) return 50;
  return c === "Visitor" ? 90 : c === "Other" ? 91 : 80;
}
function byClass_(a, b) { return classRank_(a) - classRank_(b) || (a < b ? -1 : a > b ? 1 : 0); }

/* =================== DASHBOARD TAB IN THE SHEET =================== */
function onOpen() {
  SpreadsheetApp.getUi().createMenu("Science is Khool")
    .addItem("Refresh dashboard tab", "refreshDashboardTab")
    .addItem("Turn on hourly refresh", "turnOnHourlyRefresh")
    .addItem("Turn off hourly refresh", "turnOffHourlyRefresh")
    .addToUi();
}
function turnOnHourlyRefresh() {
  turnOffHourlyRefresh();
  ScriptApp.newTrigger("refreshDashboardTab").timeBased().everyHours(1).create();
  refreshDashboardTab();
  SpreadsheetApp.getActiveSpreadsheet().toast("The Dashboard tab will now refresh every hour.", "Science is Khool");
}
function turnOffHourlyRefresh() {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === "refreshDashboardTab") ScriptApp.deleteTrigger(t); });
}

function refreshDashboardTab() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(), tz = ss.getSpreadsheetTimeZone();
  var rows = readAll_();
  var sh = ss.getSheetByName(DASH_TAB) || ss.insertSheet(DASH_TAB, 0);
  sh.clear(); sh.clearConditionalFormatRules();
  var games = [], classes = {}, students = {};
  rows.forEach(function (r) {
    if (games.indexOf(r.game) < 0) games.push(r.game);
    var c = classes[r.cls] = classes[r.cls] || { students: {}, attempts: 0, pctSum: 0, pctN: 0, last: 0, errs: {} };
    var k = studentKey_(r); c.students[k] = 1; c.attempts++;
    if (r.pct != null && !isNaN(r.pct)) { c.pctSum += r.pct; c.pctN++; }
    c.last = Math.max(c.last, r.t);
    r.errs.forEach(function (e) { c.errs[e[0]] = (c.errs[e[0]] || 0) + e[1]; });
    var s = students[k] = students[k] || { cls: r.cls, reg: r.reg, name: r.name, t: 0, games: {} };
    if (r.t >= s.t) { s.t = r.t; s.name = r.name || s.name; }
    var g = s.games[r.game] = s.games[r.game] || { n: 0, best: null };
    g.n++; if (r.pct != null && !isNaN(r.pct)) g.best = g.best == null ? r.pct : Math.max(g.best, r.pct);
  });
  games.sort();
  var clsList = Object.keys(classes).sort(byClass_);
  var W = Math.max(5, 3 + games.length), row = 1;
  function put(values, opts) {
    values = values.map(function (v) { while (v.length < W) v.push(""); return v; });
    var rg = sh.getRange(row, 1, values.length, W); rg.setValues(values);
    if (opts && opts.head) sh.getRange(row, 1, 1, W).setFontWeight("bold").setBackground("#069494").setFontColor("#ffffff");
    row += values.length; return rg;
  }
  function title(t) { sh.getRange(row, 1).setValue(t).setFontWeight("bold").setFontSize(13).setFontColor("#FF8243"); row++; }

  sh.getRange(1, 1).setValue("Game dashboard").setFontSize(18).setFontWeight("bold");
  sh.getRange(2, 1).setValue("Updated " + Utilities.formatDate(new Date(), tz, "d MMM yyyy, h:mm a") + " · all time · menu Science is Khool ▸ Refresh dashboard tab").setFontColor("#5B6B70");
  row = 4;

  title("Class summary");
  put([["Class", "Students played", "Attempts", "Avg %", "Last played"]], { head: true });
  if (clsList.length) put(clsList.map(function (c) {
    var x = classes[c];
    return [c, Object.keys(x.students).length, x.attempts, x.pctN ? Math.round(x.pctSum / x.pctN) : "", x.last ? Utilities.formatDate(new Date(x.last), tz, "d MMM yyyy") : ""];
  }));
  row++;

  title("Common mistakes (top 5 per class)");
  put([["Class", "Times", "Mistake"]], { head: true });
  var mistakeRows = [];
  clsList.forEach(function (c) {
    var e = classes[c].errs, ks = Object.keys(e).sort(function (a, b) { return e[b] - e[a]; }).slice(0, 5);
    ks.forEach(function (k, i) { mistakeRows.push([i ? "" : c, e[k], k]); });
  });
  if (mistakeRows.length) put(mistakeRows); else put([["No mistake data yet", "", ""]]);
  row++;

  title("Who played what  (attempts · best %)");
  put([["Class", "Reg no.", "Name"].concat(games)], { head: true });
  var keys = Object.keys(students).sort(function (a, b) {
    var x = students[a], y = students[b];
    return byClass_(x.cls, y.cls) || ((Number(x.reg) || 999) - (Number(y.reg) || 999)) || (x.name < y.name ? -1 : 1);
  });
  if (keys.length) {
    var grid = [], bg = [];
    keys.forEach(function (k) {
      var s = students[k], line = [s.cls, s.reg, s.name], colors = ["#ffffff", "#ffffff", "#ffffff"];
      games.forEach(function (g) {
        var x = s.games[g];
        line.push(x ? x.n + " · " + (x.best == null ? "–" : x.best + "%") : "");
        colors.push(!x || x.best == null ? "#ffffff" : x.best >= 80 ? "#D8F3E4" : x.best >= 50 ? "#FEF8D9" : "#FFE6DA");
      });
      while (line.length < W) { line.push(""); colors.push("#ffffff"); }
      grid.push(line); bg.push(colors);
    });
    sh.getRange(row, 1, grid.length, W).setValues(grid).setBackgrounds(bg);
    row += grid.length;
  }
  sh.setFrozenRows(0);
  sh.setColumnWidth(1, 110); sh.setColumnWidth(2, 90); sh.setColumnWidth(3, 200);
  for (var i = 4; i <= W; i++) sh.setColumnWidth(i, 110);
  sh.getRange(1, 1, row, W).setFontFamily("Open Sans").setVerticalAlignment("middle");
}
