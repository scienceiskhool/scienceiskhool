/* Science is Khool — site engine. You normally don't need to edit this file;
   content lives in /data. */
(function () {
  "use strict";

  var SITE = window.SITE || { levels: [] };
  var COURSES = window.COURSES || {};
  var app = document.getElementById("app");

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  // Light formatting for content strings: **bold**, _sub_ via ~x~ and ^x^ for superscript.
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/~([^~\s]+)~/g, "<sub>$1</sub>")
      .replace(/\^([^\^\s]+)\^/g, "<sup>$1</sup>")
      .replace(/-&gt;/g, "→");
  }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem("sik:" + key));
      localStorage.setItem("sik:" + key, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function courseMeta(entry) {
    var c = COURSES[entry.id];
    if (c) return c;
    return { id: entry.id, name: entry.name, short: entry.short, blurb: entry.blurb, chapters: [] };
  }
  function findChapter(id) {
    for (var cid in COURSES) {
      var ch = (COURSES[cid].chapters || []).filter(function (x) { return x.id === id; })[0];
      if (ch) return { course: COURSES[cid], chapter: ch };
    }
    return null;
  }
  var COLOURS = ["teal", "orange", "yellow", "pink"];
  function colourOf(c) { return COLOURS.indexOf(c && c.color) !== -1 ? c.color : "teal"; }
  function mascot(src, cls) { src = src || SITE.mascot; return src ? '<img class="mascot ' + (cls || "") + '" src="' + esc(src) + '" alt="">' : ""; }
  function hero(opts) {
    return '<section class="hero ' + (opts.cls || "") + '" style="--hero:' + (opts.bg || "var(--pink)") + '"><div class="hero-text">' +
      (opts.eyebrow ? '<span class="eyebrow">' + esc(opts.eyebrow) + "</span>" : "") +
      "<h1>" + opts.title + "</h1>" + (opts.sub ? "<p" + (opts.subCls ? ' class="' + opts.subCls + '"' : "") + ">" + opts.sub + "</p>" : "") +
      (opts.extra || "") + "</div>" + mascot(opts.mascot, opts.mascot ? "pose" : "") + "</section>";
  }
  function best(chId) { return store("best:" + chId); }
  function setTitle(t) { document.title = t ? t + " · " + SITE.title : SITE.title; }

  /* ---------- views ---------- */
  function viewHome() {
    setTitle("");
    var t = esc(SITE.title).replace(/(\S+)$/, "<em>$1</em>");
    var html = hero({ title: t, sub: esc(SITE.tagline) });
    SITE.levels.forEach(function (level) {
      html += '<section class="level"><h2 class="level-title">' + esc(level.name) + '</h2><div class="course-grid">';
      level.courses.forEach(function (entry) {
        var c = courseMeta(entry);
        var ready = entry.ready && COURSES[entry.id];
        var done = 0, total = (c.chapters || []).length;
        (c.chapters || []).forEach(function (ch) { if (best(ch.id)) done++; });
        if (ready) {
          html += '<a class="sticker c-' + colourOf(c) + '" href="#/course/' + esc(c.id) + '">' +
            '<span class="tag">' + esc(c.short || "") + "</span>" +
            "<h3>" + esc(c.name) + "</h3><p>" + esc(c.blurb || "") + "</p>" +
            '<div class="progress" aria-label="' + done + " of " + total + ' chapter quizzes done"><span style="width:' + (total ? (100 * done / total) : 0) + '%"></span></div>' +
            '<span class="small">' + total + " chapters · " + done + " quizzes done</span></a>";
        } else {
          html += '<div class="sticker soon c-yellow"><span class="tag">' + esc(c.short || "") + "</span><h3>" + esc(c.name) +
            "</h3><p>" + esc(c.blurb || "") + '</p><span class="badge">Coming soon</span>' +
            (entry.oldLink ? ' <a class="small old-link" href="' + esc(entry.oldLink) + '" target="_blank" rel="noopener">Use the old site for now ↗</a>' : "") +
            "</div>";
        }
      });
      html += "</div></section>";
    });
    app.innerHTML = html;
  }

  function viewCourse(cid) {
    var c = COURSES[cid];
    if (!c) return viewNotFound();
    setTitle(c.name);
    var html = crumbs([[c.name]]) +
      hero({ cls: "small-hero", bg: "var(--" + colourOf(c) + ")", eyebrow: c.short, title: esc(c.name), sub: esc(c.blurb || ""),
        extra: c.syllabus ? '<p class="small"><a style="color:inherit;font-weight:700" href="' + esc(c.syllabus.url) + '" target="_blank" rel="noopener">' + esc(c.syllabus.label) + " ↗</a></p>" : "" })
        .replace("--hero:var(--teal)\"", "--hero:var(--teal);color:#fff\"");
    var groups = [];
    c.chapters.forEach(function (ch) {
      var g = ch.group || "";
      if (!groups.length || groups[groups.length - 1].name !== g) groups.push({ name: g, items: [] });
      groups[groups.length - 1].items.push(ch);
    });
    groups.forEach(function (g) {
      if (g.name) html += '<h2 class="group-title">' + esc(g.name) + "</h2>";
      html += '<div class="chapter-grid">';
      g.items.forEach(function (ch) {
        var b = best(ch.id);
        var col = COLOURS[(c.chapters.indexOf(ch)) % 4];
        html += '<a class="sticker chapter-card c-' + col + '" href="#/chapter/' + esc(ch.id) + '">' +
          '<span class="ch-num">' + esc(ch.num) + "</span>" +
          '<span class="ch-body"><strong>' + esc(ch.title) + "</strong>" +
          (ch.question ? '<span class="q-hint">' + esc(ch.question) + "</span>" : "") + "</span>" +
          (b ? '<span class="tick" title="Best quiz score">' + b.score + "/" + b.total + "</span>" : "") +
          "</a>";
      });
      html += "</div>";
    });
    app.innerHTML = html;
  }

  function crumbs(parts) {
    var h = '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>';
    parts.forEach(function (p) {
      h += ' <span aria-hidden="true">/</span> ' + (p[1] ? '<a href="' + p[1] + '">' + esc(p[0]) + "</a>" : "<span>" + esc(p[0]) + "</span>");
    });
    return h + "</nav>";
  }

  function viewChapter(id) {
    var found = findChapter(id);
    if (!found) return viewNotFound();
    var c = found.course, ch = found.chapter;
    setTitle(ch.title);
    var idx = c.chapters.indexOf(ch);
    var prev = c.chapters[idx - 1], next = c.chapters[idx + 1];

    var html = crumbs([[c.short || c.name, "#/course/" + c.id], ["Ch " + ch.num + " · " + ch.title]]);
    html += hero({ cls: "small-hero", eyebrow: (c.short || "") + " · Chapter " + ch.num, title: esc(ch.title),
      sub: ch.question ? esc(ch.question) : "", subCls: "inquiry", mascot: ch.mascot });

    // in-page nav
    var sections = [["summary", "Summary"]];
    if (ch.video || (ch.videos && ch.videos.length)) sections.push(["watch", "Watch"]);
    if (ch.sims && ch.sims.length) sections.push(["explore", "Explore"]);
    if (ch.quiz && ch.quiz.length) sections.push(["check", "Quiz"]);
    html += '<nav class="subnav" aria-label="Chapter sections">' + sections.map(function (s, i) {
      return '<a href="#" data-jump="' + s[0] + '"><span>' + (i + 1) + "</span>" + s[1] + "</a>";
    }).join("") + "</nav>";

    // summary
    html += '<section id="summary" class="block"><div class="block-head"><h2>Summary</h2>' +
      '<button class="btn ghost small" data-print>Print</button></div>';
    if (ch.images && ch.images.length) {
      html += '<div class="sheets' + (ch.images.length > 1 ? " multi" : "") + '">' + ch.images.map(function (im, i) {
        return '<figure class="sheet"><button class="sheet-btn" data-zoom="' + i + '" aria-label="Zoom in: ' + esc(im.title || ch.title) + '">' +
          '<img src="' + esc(im.src) + '" alt="Summary sheet: ' + esc(im.title || ch.title) + '" loading="lazy">' +
          '<span class="zoom-hint">🔍 Tap to zoom</span></button>' +
          '<figcaption><span>' + esc(im.title || "Summary sheet") + '</span>' +
          '<a class="btn small sun" href="' + esc(im.src) + '" download>⬇ Download</a></figcaption></figure>';
      }).join("") + "</div>";
    }
    if (ch.objectives && ch.objectives.length) {
      html += '<div class="objectives"><h3>By the end of this chapter, I can…</h3><ul>' +
        ch.objectives.map(function (o) { return "<li>" + fmt(o) + "</li>"; }).join("") + "</ul></div>";
    }
    (ch.summary || []).forEach(function (s) {
      html += '<div class="sum-card"><h3>' + fmt(s.heading) + "</h3>";
      if (s.text) html += "<p>" + fmt(s.text) + "</p>";
      if (s.points) html += "<ul>" + s.points.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ul>";
      if (s.steps) html += "<ol>" + s.steps.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ol>";
      if (s.table) {
        html += '<div class="table-wrap"><table><thead><tr>' + s.table[0].map(function (h) { return "<th>" + fmt(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" + s.table.slice(1).map(function (r) {
            return "<tr>" + r.map(function (d) { return "<td>" + fmt(d) + "</td>"; }).join("") + "</tr>";
          }).join("") + "</tbody></table></div>";
      }
      if (s.tip) html += '<p class="tip">' + fmt(s.tip) + "</p>";
      html += "</div>";
    });
    if (ch.keyTerms && ch.keyTerms.length) {
      html += '<details class="terms" open><summary>Key terms (' + ch.keyTerms.length + ')</summary><dl>' +
        ch.keyTerms.map(function (t) { return "<div><dt>" + fmt(t[0]) + "</dt><dd>" + fmt(t[1]) + "</dd></div>"; }).join("") +
        "</dl></details>";
    }
    if (ch.extra && ch.extra.length) {
      html += '<div class="extra"><h3>More practice</h3><ul>' + ch.extra.map(function (e) {
        return '<li><a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + esc(e.label) + " ↗</a></li>";
      }).join("") + "</ul></div>";
    }
    html += "</section>";

    // videos — a chapter can have `video: {…}` (one) or `videos: [{…}, {…}]` (several)
    var vids = ch.videos || (ch.video ? [ch.video] : []);
    if (vids.length) {
      html += '<section id="watch" class="block"><div class="block-head"><h2>Watch</h2>' +
        (vids.length > 1 ? '<span class="muted small">' + vids.length + " videos</span>" : "") + '</div><div class="videos' + (vids.length > 1 ? " multi" : "") + '">';
      vids.forEach(function (v) {
        // Click-to-play thumbnail. The real player only loads on click (faster pages), and
        // YouTube needs the page to be served from a web address to play embeds (Error 153 otherwise).
        html += '<div class="video-item">' + (v.label ? '<h3 class="video-label">' + fmt(v.label) + "</h3>" : "") +
          '<div class="video"><button class="video-facade" data-yt="' + esc(v.id) + '" aria-label="Play video: ' + esc(v.title) + '">' +
          '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="" loading="lazy">' +
          '<span class="play" aria-hidden="true">▶</span></button></div>' +
          '<p class="small muted">' + esc(v.title) + ' · <a href="https://www.youtube.com/watch?v=' + esc(v.id) + '" target="_blank" rel="noopener">Open on YouTube ↗</a></p>' +
          (v.think ? '<div class="think"><strong>While you watch:</strong> ' + fmt(v.think) + "</div>" : "") +
          "</div>";
      });
      html += "</div></section>";
    }

    // simulations
    if (ch.sims && ch.sims.length) {
      html += '<section id="explore" class="block"><div class="block-head"><h2>Explore</h2></div><div class="sims">';
      ch.sims.forEach(function (s, i) {
        var src = s.source || (/phet\.colorado/.test(s.url) ? "PhET" : /javalab/.test(s.url) ? "JavaLab" : "");
        html += '<div class="sim"><div class="sim-head"><div><strong>' + esc(s.title) + '</strong> <span class="badge">' + esc(src) + "</span></div>" +
          '<a class="btn small" href="' + esc(s.url) + '" target="_blank" rel="noopener">Open full screen ↗</a></div>' +
          (s.task ? '<div class="think"><strong>Try this:</strong> ' + fmt(s.task) + "</div>" : "");
        if (s.embed) {
          html += '<div class="sim-frame" data-src="' + esc(s.url) + '"><button class="btn" data-load-sim="' + i + '">▶ Load simulation here</button></div>';
        }
        html += "</div>";
      });
      html += "</div></section>";
    }

    // quiz
    if (ch.quiz && ch.quiz.length) {
      html += '<section id="check" class="block"><div class="block-head"><h2>End-of-chapter quiz</h2>' +
        '<span class="muted small">' + ch.quiz.length + " questions</span></div><div id=\"quiz\"></div></section>";
    }

    html += '<nav class="pager">' +
      (prev ? '<a href="#/chapter/' + esc(prev.id) + '">← Ch ' + esc(prev.num) + " " + esc(prev.title) + "</a>" : "<span></span>") +
      (next ? '<a href="#/chapter/' + esc(next.id) + '">Ch ' + esc(next.num) + " " + esc(next.title) + " →</a>" : "<span></span>") +
      "</nav>";

    app.innerHTML = html;

    app.querySelectorAll("[data-jump]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var el = document.getElementById(a.getAttribute("data-jump"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    var pr = app.querySelector("[data-print]");
    if (pr) pr.addEventListener("click", function () { window.print(); });
    app.querySelectorAll("[data-zoom]").forEach(function (b) {
      b.addEventListener("click", function () { openViewer(ch.images, +b.getAttribute("data-zoom")); });
    });
    app.querySelectorAll("[data-yt]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-yt");
        if (!/^https?:$/.test(location.protocol)) {
          // Opened from a file on the computer: YouTube refuses embeds here, so open YouTube instead.
          window.open("https://www.youtube.com/watch?v=" + encodeURIComponent(id), "_blank", "noopener");
          return;
        }
        var f = document.createElement("iframe");
        f.src = "https://www.youtube.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0&playsinline=1&origin=" + encodeURIComponent(location.origin);
        f.title = b.getAttribute("aria-label");
        f.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        f.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen");
        f.setAttribute("allowfullscreen", "");
        b.parentNode.replaceChild(f, b);
      });
    });
    app.querySelectorAll("[data-load-sim]").forEach(function (b) {
      b.addEventListener("click", function () {
        var box = b.parentNode;
        box.innerHTML = '<iframe src="' + esc(box.getAttribute("data-src")) + '" title="Simulation" allowfullscreen></iframe>';
        box.classList.add("loaded");
      });
    });
    if (ch.quiz && ch.quiz.length) renderQuiz(document.getElementById("quiz"), c, ch);
  }

  /* ---------- zoomable image viewer ---------- */
  function openViewer(images, start) {
    var idx = start, scale = 1, tx = 0, ty = 0;
    var pointers = {}, lastDist = 0, lastMid = null, dragging = null;
    var ov = document.createElement("div");
    ov.className = "viewer";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.innerHTML =
      '<div class="viewer-bar"><span class="viewer-title"></span><div class="viewer-tools">' +
      '<button class="vbtn" data-act="out" aria-label="Zoom out">−</button>' +
      '<button class="vbtn" data-act="in" aria-label="Zoom in">+</button>' +
      '<button class="vbtn" data-act="fit" aria-label="Fit to screen">⤢</button>' +
      '<a class="vbtn dl" download aria-label="Download">⬇</a>' +
      '<button class="vbtn close" data-act="close" aria-label="Close">✕</button></div></div>' +
      '<div class="viewer-stage"><img alt="" draggable="false"></div>' +
      (images.length > 1 ? '<button class="vnav prev" data-act="prev" aria-label="Previous">‹</button><button class="vnav next" data-act="next" aria-label="Next">›</button>' : "") +
      '<p class="viewer-help">Scroll or pinch to zoom · drag to move · double-tap to zoom</p>';
    document.body.appendChild(ov);
    document.body.style.overflow = "hidden";
    var img = ov.querySelector("img"), stage = ov.querySelector(".viewer-stage");
    function apply() { img.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + scale + ")"; }
    function load() {
      var im = images[idx];
      img.src = im.src; img.alt = im.title || "Summary sheet";
      ov.querySelector(".viewer-title").textContent = (im.title || "Summary sheet") + (images.length > 1 ? "  (" + (idx + 1) + "/" + images.length + ")" : "");
      ov.querySelector(".dl").setAttribute("href", im.src);
      scale = 1; tx = 0; ty = 0; apply();
    }
    function zoomAt(f, cx, cy) {
      var r = stage.getBoundingClientRect();
      var ox = (cx == null ? r.width / 2 : cx - r.left) - r.width / 2, oy = (cy == null ? r.height / 2 : cy - r.top) - r.height / 2;
      var ns = Math.min(6, Math.max(1, scale * f));
      tx = ox - (ox - tx) * (ns / scale); ty = oy - (oy - ty) * (ns / scale);
      scale = ns; if (scale === 1) { tx = 0; ty = 0; } apply();
    }
    function close() { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; ov.remove(); }
    function onKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "+" || e.key === "=") zoomAt(1.4);
      else if (e.key === "-") zoomAt(1 / 1.4);
      else if (e.key === "ArrowRight" && images.length > 1) { idx = (idx + 1) % images.length; load(); }
      else if (e.key === "ArrowLeft" && images.length > 1) { idx = (idx - 1 + images.length) % images.length; load(); }
    }
    document.addEventListener("keydown", onKey);
    ov.addEventListener("click", function (e) {
      var a = e.target.closest("[data-act]"); if (!a) return;
      var act = a.getAttribute("data-act");
      if (act === "close") close();
      else if (act === "in") zoomAt(1.4);
      else if (act === "out") zoomAt(1 / 1.4);
      else if (act === "fit") { scale = 1; tx = 0; ty = 0; apply(); }
      else if (act === "next") { idx = (idx + 1) % images.length; load(); }
      else if (act === "prev") { idx = (idx - 1 + images.length) % images.length; load(); }
    });
    stage.addEventListener("wheel", function (e) { e.preventDefault(); zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX, e.clientY); }, { passive: false });
    stage.addEventListener("dblclick", function (e) { if (scale > 1) { scale = 1; tx = 0; ty = 0; apply(); } else zoomAt(2.5, e.clientX, e.clientY); });
    stage.addEventListener("pointerdown", function (e) {
      stage.setPointerCapture(e.pointerId); pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pointers);
      if (ids.length === 1) dragging = { x: e.clientX, y: e.clientY };
      if (ids.length === 2) { var a = pointers[ids[0]], b = pointers[ids[1]]; lastDist = Math.hypot(a.x - b.x, a.y - b.y); lastMid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; dragging = null; }
    });
    stage.addEventListener("pointermove", function (e) {
      if (!pointers[e.pointerId]) return;
      pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pointers);
      if (ids.length === 2) {
        var a = pointers[ids[0]], b = pointers[ids[1]], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (lastDist) zoomAt(d / lastDist, (a.x + b.x) / 2, (a.y + b.y) / 2);
        lastDist = d;
      } else if (dragging && scale > 1) {
        tx += e.clientX - dragging.x; ty += e.clientY - dragging.y; dragging = { x: e.clientX, y: e.clientY }; apply();
      }
    });
    function up(e) { delete pointers[e.pointerId]; lastDist = 0; var ids = Object.keys(pointers); dragging = ids.length === 1 ? pointers[ids[0]] : null; }
    stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);
    load();
    ov.querySelector(".close").focus();
  }

  /* ---------- quiz ---------- */
  function renderQuiz(root, course, ch) {
    // Shuffle question order and option order every attempt.
    var qs = shuffle(ch.quiz).map(function (q) {
      var order = shuffle(q.options.map(function (_, i) { return i; }));
      return { q: q.q, options: order.map(function (i) { return q.options[i]; }), answer: order.indexOf(q.answer), explain: q.explain, picked: null };
    });
    var html = '<ol class="quiz">';
    qs.forEach(function (q, qi) {
      html += '<li class="q" data-q="' + qi + '"><p class="q-text">' + fmt(q.q) + '</p><div class="opts">' +
        q.options.map(function (o, oi) {
          return '<button class="opt" data-q="' + qi + '" data-o="' + oi + '"><span class="letter">' + "ABCD"[oi] + "</span><span>" + fmt(o) + "</span></button>";
        }).join("") + '</div><div class="feedback" hidden></div></li>';
    });
    html += '</ol><div class="quiz-result" hidden></div>';
    root.innerHTML = html;

    root.querySelectorAll(".opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qi = +btn.getAttribute("data-q"), oi = +btn.getAttribute("data-o");
        var q = qs[qi];
        if (q.picked !== null) return;
        q.picked = oi;
        var li = root.querySelector('.q[data-q="' + qi + '"]');
        li.querySelectorAll(".opt").forEach(function (b, i) {
          b.disabled = true;
          if (i === q.answer) b.classList.add("correct");
          if (i === oi && oi !== q.answer) b.classList.add("wrong");
        });
        var fb = li.querySelector(".feedback");
        fb.hidden = false;
        fb.className = "feedback " + (oi === q.answer ? "good" : "bad");
        fb.innerHTML = "<strong>" + (oi === q.answer ? "Correct!" : "Not quite.") + "</strong> " + fmt(q.explain || "");
        if (qs.every(function (x) { return x.picked !== null; })) finish();
      });
    });

    function finish() {
      var score = qs.filter(function (x) { return x.picked === x.answer; }).length;
      var total = qs.length;
      var prevBest = best(ch.id);
      if (!prevBest || score > prevBest.score) store("best:" + ch.id, { score: score, total: total });
      var pct = Math.round(100 * score / total);
      var msg = pct === 100 ? "Perfect! 🎉" : pct >= 75 ? "Well done — review the ones you missed." : pct >= 50 ? "Good try — re-read the summary, then try again." : "Go through the summary and video once more, then retry.";
      var res = root.querySelector(".quiz-result");
      res.hidden = false;
      var h = '<div class="score">' + ((ch.mascot || SITE.mascot) ? '<img src="' + esc(ch.mascot || SITE.mascot) + '" alt="">' : "") + '<span class="big">' + score + "/" + total + "</span><span><strong>" + msg + "</strong></span></div>" +
        '<div class="row"><button class="btn ghost" data-retry>Try again (new order)</button></div>';
      if (SITE.submitUrl) {
        h += '<form class="submit-form"><h3>Submit to teacher</h3><div class="fields">' +
          '<label>Name<input name="name" required maxlength="60" autocomplete="name"></label>' +
          '<label>Class<select name="cls" required><option value="">Choose…</option>' +
          (SITE.classes || []).map(function (k) { return "<option>" + esc(k) + "</option>"; }).join("") + "</select></label>" +
          '<label>Register no.<input name="reg" inputmode="numeric" maxlength="3"></label></div>' +
          '<button class="btn" type="submit">Submit my score</button><p class="small muted form-msg"></p></form>';
      }
      res.innerHTML = h;
      res.scrollIntoView({ behavior: "smooth", block: "center" });
      res.querySelector("[data-retry]").addEventListener("click", function () {
        renderQuiz(root, course, ch);
        root.scrollIntoView({ behavior: "smooth" });
      });
      var form = res.querySelector(".submit-form");
      if (form) {
        var saved = store("student") || {};
        if (saved.name) form.name.value = saved.name;
        if (saved.cls) form.cls.value = saved.cls;
        if (saved.reg) form.reg.value = saved.reg;
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          var payload = {
            name: form.name.value.trim(), cls: form.cls.value, reg: form.reg.value.trim(),
            course: course.short || course.name, chapter: "Ch " + ch.num + " " + ch.title,
            score: score, total: total,
            wrong: qs.filter(function (x) { return x.picked !== x.answer; }).map(function (x) { return x.q; }).join(" | ")
          };
          store("student", { name: payload.name, cls: payload.cls, reg: payload.reg });
          var msgEl = form.querySelector(".form-msg");
          var btn = form.querySelector("button[type=submit]");
          btn.disabled = true; msgEl.textContent = "Sending…";
          fetch(SITE.submitUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) })
            .then(function () { msgEl.textContent = "Sent! Your teacher has your score."; })
            .catch(function () { msgEl.textContent = "Couldn't send — check your internet and try again."; btn.disabled = false; });
        });
      }
    }
  }

  /* ---------- how to learn ---------- */
  function viewHowTo() {
    setTitle("How to learn well");
    app.innerHTML = crumbs([["How to learn well"]]) +
      '<section class="block"><h1>How to use this site</h1>' +
      '<div class="sum-card"><h3>For each chapter</h3><ol>' +
      "<li><strong>Summary</strong> — read it once, then cover it and say the key ideas out loud.</li>" +
      "<li><strong>Watch</strong> — answer the 'While you watch' question in your notebook.</li>" +
      "<li><strong>Explore</strong> — do the 'Try this' task. Predict first, then test.</li>" +
      "<li><strong>Quiz</strong> — aim for at least 6/8. Read every explanation, even for questions you got right.</li></ol></div>" +
      '<div class="sum-card"><h3>Study habits that work</h3><ul>' +
      "<li><strong>Retrieval practice</strong>: test yourself instead of re-reading. The quiz reshuffles every time.</li>" +
      "<li><strong>Spacing</strong>: come back to a chapter's quiz a week later.</li>" +
      "<li><strong>Explain it</strong>: teach a friend (or your pet) one idea from today's lesson.</li>" +
      "<li><strong>Mix it up</strong>: do quizzes from two different chapters in one sitting.</li></ul></div></section>";
  }

  function viewNotFound() {
    setTitle("Not found");
    app.innerHTML = '<section class="block"><h1>Page not found</h1><p><a href="#/">Back to home</a></p></section>';
  }

  /* ---------- search ---------- */
  var searchInput = document.getElementById("search");
  var searchBox = document.getElementById("search-results");
  var index = [];
  Object.keys(COURSES).forEach(function (cid) {
    var c = COURSES[cid];
    c.chapters.forEach(function (ch) {
      index.push({ label: "Ch " + ch.num + " · " + ch.title, sub: c.short, hay: (ch.title + " " + (ch.question || "")).toLowerCase(), id: ch.id });
      (ch.keyTerms || []).forEach(function (t) {
        index.push({ label: t[0].replace(/[*~^]/g, ""), sub: c.short + " · Ch " + ch.num + " " + ch.title, hay: (t[0] + " " + t[1]).toLowerCase(), id: ch.id });
      });
    });
  });
  searchInput.addEventListener("input", function () {
    var q = searchInput.value.trim().toLowerCase();
    if (q.length < 2) { searchBox.hidden = true; return; }
    var hits = index.filter(function (x) { return x.hay.indexOf(q) !== -1; }).slice(0, 8);
    searchBox.innerHTML = hits.length ? hits.map(function (h) {
      return '<a href="#/chapter/' + esc(h.id) + '"><strong>' + esc(h.label) + '</strong><span class="muted small">' + esc(h.sub) + "</span></a>";
    }).join("") : '<p class="muted small" style="padding:10px 12px">No matches</p>';
    searchBox.hidden = false;
  });
  searchBox.addEventListener("click", function () { searchBox.hidden = true; searchInput.value = ""; });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-wrap")) searchBox.hidden = true;
  });

  /* ---------- router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/");
    if (!h) viewHome();
    else if (parts[0] === "course") viewCourse(parts[1]);
    else if (parts[0] === "chapter") viewChapter(parts[1]);
    else if (parts[0] === "how-to-learn") viewHowTo();
    else viewNotFound();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
