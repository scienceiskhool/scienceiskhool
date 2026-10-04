/* =====================================================================
   SITE SETTINGS — edit this file to change the overall site.
   ===================================================================== */
window.SITE = {
  title: "Science is Khool",
  tagline: "Summaries, videos, simulations and quick checks — chapter by chapter.",

  /* Your drawing, used on the home page and chapter pages. */
  mascot: "assets/img/mascot.png",

  /* Paste the Google Apps Script "Web app URL" here to switch on
     "Submit to teacher" for quizzes. Leave as "" to hide the button.
     See SETUP-GUIDE.md, Part 3. */
  submitUrl: "",

  /* Class options students pick from when submitting a quiz. */
  classes: ["1A", "1B", "1C", "1D", "1E", "2A", "2B", "2C", "2D", "2E", "3A", "3B", "3C", "3D", "3E", "4A", "4B", "4C", "4D", "4E", "Other"],

  /* Levels -> courses. A course with `ready: false` shows as "Coming soon".
     `oldLink` (optional) sends students to the old Google Site meanwhile. */
  levels: [
    {
      name: "Lower Secondary",
      courses: [
        { id: "g1-science", ready: true },
        { id: "g2g3-science", ready: true }
      ]
    },
    {
      name: "Upper Secondary",
      courses: [
        { id: "combined-chem", ready: true },
        { id: "pure-chem", ready: true }
      ]
    }
  ]
};

/* Course files (g1-science.js, combined-chem.js, …) add themselves here. */
window.COURSES = window.COURSES || {};
