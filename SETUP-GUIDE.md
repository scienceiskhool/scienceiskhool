# Science is Khool — setup and update guide

This guide has five parts:

1. Preview the site on your computer
2. Put it online with GitHub Pages
3. Switch on "Submit to teacher"
4. Update or add content
5. Before you share it with students

---

## 1. Preview on your computer (2 minutes)

Unzip the folder and double-click `index.html`. The whole site runs in your browser. Videos and simulations need internet.

Note: when the site is opened from a file on your computer, YouTube won't play videos inside the page. That is the "Error 153" message. Clicking a video opens it on YouTube instead. Once the site is on GitHub Pages, videos play inside the page.

## 2. Put it online with GitHub Pages (about 15 minutes, one time only)

1. Create a free account at **github.com**. Use your teaching Google account's email if you like.
2. Click **+** (top right), then **New repository**.
   - Name: `scienceiskhool`. The site will be at `https://<your-username>.github.io/scienceiskhool/`.
   - Choose **Public** and click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
   - Drag in **everything inside** the unzipped folder: `index.html` and the `assets`, `data` and `apps-script` folders.
   - Click **Commit changes**.
4. Go to **Settings**, then **Pages**.
   - Under *Branch*, choose `main` and `/ (root)`, then click **Save**.
5. Wait 1–2 minutes and refresh. GitHub shows your site's link. Share that link with students, or put it on SLS or your Google Site.

Tip: if you prefer to keep your current address, add a button on your Google Site that links to the new site.

## 3. Switch on "Submit to teacher" (about 10 minutes, optional)

1. Create a new Google Sheet in your teaching account, e.g. "Quiz scores".
2. In the Sheet, go to **Extensions**, then **Apps Script**. Delete what's there and paste in everything from `apps-script/Code.gs`. Click **Save**.
3. Click **Deploy**, then **New deployment**. Click the gear icon and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, then authorise. If you see "Google hasn't verified this app", click **Advanced**, then **Go to …**.
4. Copy the **Web app URL**. It ends in `/exec`.
5. On GitHub, open `data/site.js` and click the pencil icon. Paste the URL between the quotes in `submitUrl: ""`, then **Commit changes**.
6. You can edit the class list in `classes: [...]` in the same file.

Scores arrive in the Sheet with one tab per course. Each row records the class, register no., name, chapter, score, percentage and the questions the student got wrong. That last column is useful for planning remediation.

Note: students can type any name, and nothing checks who they are. Treat the scores as formative data, not graded assessment.

## 4. Update content

All content lives in the `data/` folder, with one file per course. To edit one on GitHub, open the file, click the pencil icon, make your changes, then click **Commit changes**. The live site updates within about a minute.

| To change… | Edit |
|---|---|
| Site title, class list, submit link, which courses show as "Coming soon" | `data/site.js` |
| LSS G1 chapters | `data/g1-science.js` |
| LSS G2/G3 chapters | `data/g2g3-science.js` |
| Combined Science Chemistry chapters | `data/combined-chem.js` |
| Pure Chemistry chapters | `data/pure-chem.js` |

**Swap a video:** find `video: { id: "…"`. The id is the part after `watch?v=` in a YouTube link. For example, `https://www.youtube.com/watch?v=OTksau0_VoI` has the id `OTksau0_VoI`.

**Add a simulation:** copy an existing line inside `sims: [ … ]`:
```js
{ title: "Name", url: "https://…", embed: true, task: "What students should try" },
```
Set `embed: true` for PhET (it loads inside the page). Set `embed: false` for JavaLab and other sites (students get an "Open full screen" button).

**Edit a quiz question:**
```js
{ q: "Question?", options: ["Correct", "Wrong 1", "Wrong 2", "Wrong 3"], answer: 0, explain: "Why" },
```
`answer` counts from 0, so 0 means the first option. Students see the options and questions shuffled every attempt, so it's fine to always put the correct one first.

**Summary sheet images:** these are stored in `assets/summaries/<course>/`. Each chapter lists its sheets in `images: [ … ]`. To replace a sheet, upload a new image with the **same file name** into that folder. To add a sheet to a chapter, upload the image and add an entry:
```js
images: [{ src: "assets/summaries/pure-chem/05-bonding-1.jpg", title: "Bonding & Structure 1" }],
```
Students can tap a sheet to zoom (pinch or scroll), drag to move around, and download it.

**Change a course's sticker colour:** near the top of each course file, set `color:` to `teal`, `orange`, `yellow` or `pink`.

**Replace your drawing:** save a new PNG with a transparent background as `assets/img/mascot.png`. Keep the same file name. The small round logo is `assets/img/head.png`.

**Formatting inside text:** `**bold**`, `H~2~O` for subscript, `Cu^2+^` for superscript, `->` for an arrow.

**Add a new course** (e.g. Biology):

1. Copy an existing course file and rename it, e.g. `biology.js`.
2. Change the course `id` inside it to `"biology"`, and give each chapter a new unique `id`.
3. Add `<script src="data/biology.js"></script>` in `index.html` next to the other data files.
4. In `site.js`, add `{ id: "biology", ready: true }` under the right level.

If something breaks after an edit, a comma or quote is usually missing. GitHub keeps every version, so you can always roll back under **History**.

## 5. Before sharing with students

- **Watch each video once on the live site.** If one says "Video unavailable" or "Playback on other websites has been disabled", its owner has blocked embedding. Swap it for another video.
- **Video choices:** I picked well-known channels (Cognito, FuseSchool, Amoeba Sisters, PUB) but couldn't play them myself. Replace any you don't like, or any that school devices block.
- **G1 Ch 2–5 (Forces, Energy, Electricity, Heat):** your Drive had no summary sheets for these, so they have text summaries only, written from the MOE G1 syllabus. Please check them against how you teach. You can add sheets later (see Part 4).
