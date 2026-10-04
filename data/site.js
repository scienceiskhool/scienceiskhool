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
  submitUrl: "https://script.google.com/macros/s/AKfycbxCTjRCQzLlWXmmY-5R0p75WCmeFLzC9ZM3gNbGRXpcc_d9qHMXdyCn12B4dHpnrBWe/exec",

  /* Class options students pick from when submitting a quiz. */
  classes: [
    "S1 Charity", "S1 Courage", "S1 Faith", "S1 Hope", "S1 Humility", "S1 Integrity", "S1 Love", "S1 Respect", "S1 Joy",
    "S2 Charity", "S2 Courage", "S2 Faith", "S2 Hope", "S2 Humility", "S2 Integrity", "S2 Love", "S2 Respect", "S2 Joy",
    "S3 Charity", "S3 Courage", "S3 Faith", "S3 Hope", "S3 Humility", "S3 Integrity", "S3 Love", "S3 Respect", "S3 Joy",
    "S4 Charity", "S4 Courage", "S4 Faith", "S4 Hope", "S4 Humility", "S4 Integrity", "S4 Love", "S4 Respect", "S4 Joy",
    "S5 Faith", "Other"
  ],

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
