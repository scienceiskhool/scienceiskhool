/* =====================================================================
   BRIDGING: S1 G1 SCIENCE -> S2 G2 SCIENCE
   For students who studied G1 Ch 1, 6, 7, 8, 9, 10 in S1 and are moving
   to G2 in S2 (which builds on G2 Ch 1–10).
   Each unit links to existing chapters (links: [{ chapter: "<chapter id>" }]).
   Diagnostic quiz: each question's `topic` is the id of the unit it checks.
   Formatting: **bold**  H~2~O (subscript)  Cu^2+^ (superscript)  -> (arrow)
   ===================================================================== */
window.COURSES = window.COURSES || {};
(function () {
  var IMG = "assets/summaries/g2g3-science/";
  var P1 = "Priority 1 — before S2 topics", P2 = "Priority 2 — complete the G2 foundation";

window.COURSES["bridge-g1g2"] = {
  id: "bridge-g1g2",
  name: "Bridging: S1 G1 → S2 G2 Science",
  short: "G1 → G2 Bridge",
  unitLabel: "Unit",
  color: "orange",   /* sticker colour: teal, orange, yellow or pink */
  blurb: "Moving from G1 to G2? Start with the diagnostic quiz to see what to catch up on, then work through your bridging units.",
  chapters: [

  /* ------------------------------------------------------------------ */
  {
    id: "br-00", num: "★", group: "Start here",
    title: "Diagnostic Quiz",
    question: "What do you already know, and what do you need to catch up on before S2 G2 Science?",
    diagnostic: true,
    eyebrow: "G1 → G2 Bridge · Start here",
    objectives: [
      "Find out which bridging units you need to study",
      "Get a personal bridging plan at the end of the quiz"
    ],
    summary: [
      { heading: "How this works",
        steps: [
          "Answer all 16 questions honestly — don't guess wildly; it's fine to get some wrong!",
          "At the end you'll see your **bridging plan**: each unit is marked ✓ Secure or ! Study this.",
          "Work through the units marked **!**, in order. Each one links to the chapters you need on this site.",
          "Retake this quiz when you're done to check you're ready."
        ],
        tip: "Submit your result to your teacher so they know which units you need help with." },
      { heading: "Why bridge?",
        text: "S1 G2 students studied 10 chapters. In G1 you studied some of the same ideas, but S2 G2 topics (Chemical Changes, Ecosystems, Electrical Systems, Digestive and Transport Systems, Reproduction) build on a few ideas you haven't met yet. The bridging units fill those gaps." }
    ],
    quiz: [
      { topic: "br-01", q: "A student investigates how the mass of sugar affects the time taken for it to dissolve. What is the **dependent** variable?",
        options: ["Time taken to dissolve", "Mass of sugar", "Volume of water", "Temperature of water"],
        answer: 0, explain: "The dependent variable is the one you measure. The mass of sugar is the one you change (independent)." },
      { topic: "br-01", q: "Repeated readings of a length are 5.2 cm, 5.2 cm and 5.3 cm. The true length is 6.0 cm. The readings are…",
        options: ["precise but not accurate", "accurate but not precise", "accurate and precise", "neither accurate nor precise"],
        answer: 0, explain: "The readings are close to each other (precise) but far from the true value (not accurate)." },
      { topic: "br-02", q: "Which of these is a **compound**?",
        options: ["Water", "Air", "Oxygen", "Salt water"],
        answer: 0, explain: "Water is hydrogen and oxygen chemically combined. Air and salt water are mixtures; oxygen is an element." },
      { topic: "br-02", q: "Which statement describes a **mixture**?",
        options: ["Its constituents keep their own properties", "Its elements are chemically combined", "It always has a fixed ratio", "It can only be separated using electricity"],
        answer: 0, explain: "In a mixture, substances are not chemically combined, so each keeps its own properties and can be separated physically." },
      { topic: "br-03", q: "How many atoms are there in one molecule of carbon dioxide, CO~2~?",
        options: ["3", "2", "1", "4"],
        answer: 0, explain: "1 carbon atom + 2 oxygen atoms = 3 atoms." },
      { topic: "br-03", q: "An atom is electrically neutral because it has…",
        options: ["equal numbers of protons and electrons", "no electrons", "more neutrons than protons", "no protons"],
        answer: 0, explain: "Protons (+) and electrons (−) are equal in number, so the charges cancel." },
      { topic: "br-04", q: "Which describes the particles in a **gas**?",
        options: ["Far apart, moving rapidly in all directions", "Closely packed, vibrating in fixed positions", "Closely packed, sliding past each other", "Not moving at all"],
        answer: 0, explain: "Gas particles have high energy, are far apart and move randomly at high speed." },
      { topic: "br-04", q: "The smell of perfume spreads across a room. This is because of…",
        options: ["diffusion — net movement of particles from higher to lower concentration", "condensation of perfume particles", "particles getting bigger", "evaporation of the air"],
        answer: 0, explain: "Perfume particles diffuse from where they are concentrated to where they are not." },
      { topic: "br-05", q: "Which structure is found in a **plant** cell but NOT in an animal cell?",
        options: ["Chloroplast", "Nucleus", "Cell membrane", "Cytoplasm"],
        answer: 0, explain: "Chloroplasts (and the cell wall) are only in plant cells. They contain chlorophyll for photosynthesis." },
      { topic: "br-05", q: "Why does a root hair cell have a long extension?",
        options: ["To increase surface area for absorbing water and mineral salts", "To make food by photosynthesis", "To protect the root", "To store starch"],
        answer: 0, explain: "A larger surface area speeds up the uptake of water and mineral salts." },
      { topic: "br-06", q: "A ball falls from a shelf to the floor. Which energy conversion takes place?",
        options: ["Gravitational potential energy -> kinetic energy", "Kinetic energy -> chemical potential energy", "Light energy -> sound energy", "Elastic potential energy -> light energy"],
        answer: 0, explain: "As the ball loses height it loses GPE and gains kinetic energy." },
      { topic: "br-06", q: "Which statement about energy is correct?",
        options: ["Energy cannot be created or destroyed, only converted", "Energy is used up when a machine works", "Energy can be created in a power station", "Heat is not a form of energy"],
        answer: 0, explain: "This is the law of conservation of energy." },
      { topic: "br-07", q: "Which method obtains **pure water** from salt water?",
        options: ["Distillation", "Evaporation to dryness", "Filtration", "Magnetic separation"],
        answer: 0, explain: "Distillation boils off the water and condenses it. Evaporation would only leave the salt behind." },
      { topic: "br-08", q: "Why are cooking pots made of metal but their handles made of plastic?",
        options: ["Metal has high thermal conductivity; plastic has low thermal conductivity", "Metal is flexible; plastic is hard", "Metal is less dense than plastic", "Plastic conducts electricity"],
        answer: 0, explain: "Heat passes easily through metal to cook food, but slowly through the plastic handle." },
      { topic: "br-09", q: "How does heat from the Sun reach the Earth?",
        options: ["Radiation", "Conduction", "Convection", "Evaporation"],
        answer: 0, explain: "Space is a vacuum, so heat can only travel by radiation, which needs no medium." },
      { topic: "br-10", q: "Which is a property of the image formed in a plane mirror?",
        options: ["Laterally inverted (left and right swapped)", "Upside down", "Smaller than the object", "Can be projected onto a screen"],
        answer: 0, explain: "A plane mirror image is upright, virtual, laterally inverted and the same size as the object." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-01", num: 1, group: P1, priority: "Priority 1",
    title: "Thinking Like a Scientist",
    question: "Needed for: every S2 practical and investigation question.",
    links: [{ chapter: "lss-01", note: "Read the **scientific method** and **accuracy & precision** sections, then do the quiz." }],
    objectives: [
      "Name the independent, dependent and controlled variables in an experiment",
      "Tell qualitative data from quantitative data",
      "Explain accuracy vs precision, and how to avoid zero error and parallax error"
    ],
    summary: [
      { heading: "From G1, you already know…", points: ["Lab safety rules, hazard symbols and using a Bunsen burner.", "Which instrument measures which quantity, and to read at eye level."] },
      { heading: "What's new in G2",
        table: [
          ["Idea", "In one line"],
          ["Independent variable", "What you **change**"],
          ["Dependent variable", "What you **measure**"],
          ["Controlled variables", "What you **keep the same** for a fair test"],
          ["Accuracy", "How close a reading is to the **true value**"],
          ["Precision", "How close **repeated** readings are to **each other**"],
          ["Zero error", "Instrument doesn't read zero at the start — press tare / subtract it"]
        ],
        tip: "Exam habit: in a table, put the independent variable in the first column, with units in the heading, e.g. Time / s." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-02", num: 2, group: P1, priority: "Priority 1",
    title: "Elements, Compounds & Mixtures",
    question: "Needed for: S2 Ch 11 Chemical Changes.",
    links: [{ chapter: "lss-03", note: "Focus on **elements, compounds and mixtures** and the Periodic Table. You've already done solutions and suspensions in G1." }],
    objectives: [
      "Define element, compound and mixture",
      "Compare compounds and mixtures (ratio, properties, separation)",
      "Recognise metals and non-metals in the Periodic Table"
    ],
    summary: [
      { heading: "From G1, you already know…", points: ["Solute, solvent, solution and suspension.", "Factors affecting how fast something dissolves.", "That mixtures can be separated by filtration, evaporation and magnets."] },
      { heading: "What's new in G2",
        table: [
          ["", "Compound", "Mixture"],
          ["Made of", "Elements **chemically combined**", "Substances **not** chemically combined"],
          ["Ratio", "Fixed", "Not fixed"],
          ["Properties", "Different from its elements", "Same as its constituents"],
          ["Separation", "Hard — needs chemical methods", "Easy — physical methods"]
        ],
        tip: "Why this matters in S2: a **chemical change** makes a new substance (a new compound). You need this idea to tell physical from chemical changes." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-03", num: 3, group: P1, priority: "Priority 1",
    title: "Atoms & Molecules",
    question: "Needed for: S2 Ch 11 Chemical Changes (atoms are rearranged, mass is conserved).",
    links: [{ chapter: "lss-08", note: "This whole chapter is new to you. Watch the video and try the Build an Atom simulation." }],
    objectives: [
      "Describe an atom: nucleus (protons + neutrons) with electrons around it",
      "State why atoms are electrically neutral",
      "Count the number and type of atoms in a chemical formula, e.g. CO~2~"
    ],
    summary: [
      { heading: "What's new in G2 (all of it!)",
        table: [["Particle", "Charge", "Where"], ["Proton", "+1", "Nucleus"], ["Neutron", "0", "Nucleus"], ["Electron", "−1", "Around the nucleus"]],
        points: ["A **molecule** is two or more atoms chemically combined, e.g. O~2~ (element) or H~2~O (compound).", "H~2~O has 2 hydrogen atoms and 1 oxygen atom."],
        tip: "Why this matters in S2: in a chemical reaction, atoms are **rearranged**, not created or destroyed — so the total mass stays the same." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-04", num: 4, group: P1, priority: "Priority 1",
    title: "Particle Model & Diffusion",
    question: "Needed for: S2 Ch 14 Digestive System and Ch 15 Transport Systems.",
    links: [{ chapter: "lss-07", note: "Learn how particles are arranged and move in solids, liquids and gases, and what **diffusion** is." }],
    objectives: [
      "Describe the arrangement and movement of particles in solids, liquids and gases",
      "Explain expansion and contraction using particles",
      "Define diffusion as net movement from higher to lower concentration"
    ],
    summary: [
      { heading: "From G1, you already know…", points: ["The three states of matter and their shape/volume.", "The names of changes of state: melting, boiling, condensation, freezing."] },
      { heading: "What's new in G2",
        table: [
          ["", "Solid", "Liquid", "Gas"],
          ["Arrangement", "Very closely packed, orderly", "Closely packed, disorderly", "Far apart, disorderly"],
          ["Movement", "Vibrate in fixed positions", "Slide past each other", "Move rapidly in all directions"]
        ],
        points: ["**Diffusion**: net movement of particles from a region of **higher** concentration to **lower** concentration."],
        tip: "Why this matters in S2: digested food passes into the blood, and oxygen passes into cells, by diffusion." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-05", num: 5, group: P1, priority: "Priority 1",
    title: "Plant Cells & Specialised Cells",
    question: "Needed for: S2 Ch 12 Ecosystems (photosynthesis) and Ch 15 Transport Systems.",
    links: [
      { chapter: "lss-06", note: "Focus on the **plant cell**, the plant vs animal table, and the **root hair cell**." },
      { chapter: "g1-09", note: "Quick recap of the animal cell and microscope from S1." }
    ],
    objectives: [
      "Label a plant cell: cell wall, chloroplast, large vacuole",
      "Compare plant and animal cells",
      "Explain how red blood cells and root hair cells are adapted"
    ],
    summary: [
      { heading: "From G1, you already know…", points: ["The animal cell: cell membrane, cytoplasm, nucleus.", "Using a microscope and drawing cells.", "Cells -> tissues -> organs -> systems; red blood, muscle and bone cells."] },
      { heading: "What's new in G2",
        table: [
          ["Part", "Animal cell", "Plant cell"],
          ["Cell wall", "Absent", "Present — protects and keeps shape"],
          ["Chloroplast", "Absent", "Present — photosynthesis"],
          ["Vacuole", "Small, many", "One large central vacuole"]
        ],
        points: ["**Root hair cell**: long extension increases surface area to absorb water and mineral salts."],
        tip: "Why this matters in S2: plants make food in chloroplasts (Ecosystems), and absorb water through root hair cells (Transport)." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-06", num: 6, group: P1, priority: "Priority 1",
    title: "Forces & Energy",
    question: "Needed for: S2 Ch 12 Ecosystems (energy flow) and Ch 13 Electrical Systems.",
    links: [{ chapter: "lss-09", note: "Focus on **forms of energy**, **conservation of energy** and **energy sources**. Then read mass vs weight. Pressure and work done are optional for G2." }],
    objectives: [
      "Name forms of energy and describe energy conversions",
      "State the law of conservation of energy",
      "Compare renewable and non-renewable energy sources",
      "Distinguish mass and weight; name contact and non-contact forces"
    ],
    summary: [
      { heading: "What's new in G2",
        points: [
          "Energy is measured in **joules (J)**. Forms: kinetic, gravitational/chemical/elastic potential, light, sound, thermal, electrical.",
          "**Conservation of energy**: energy cannot be created or destroyed, only converted or transferred.",
          "**Mass** (kg) is the amount of matter; **weight** (N) is the pull of gravity. Weight = mass × 10 N/kg on Earth."
        ],
        tip: "Why this matters in S2: in food chains, plants convert **light** energy into **chemical potential** energy, and energy is lost as heat at each level." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-07", num: 7, group: P2, priority: "Priority 2",
    title: "Distillation & Chromatography",
    question: "Completes G2 Separation Techniques.",
    links: [{ chapter: "lss-04", note: "You know filtration, evaporation and magnets already. Learn **distillation** and **paper chromatography**." }],
    objectives: ["Describe simple distillation and explain why boiling chips and a condenser are used", "Describe paper chromatography and interpret a chromatogram"],
    summary: [{ heading: "What's new in G2", points: ["**Distillation** gets the pure liquid from a solution (e.g. pure water from seawater).", "**Chromatography** separates dissolved coloured substances; the more soluble, the further it travels. Draw the start line in pencil, above the solvent."] }]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-08", num: 8, group: P2, priority: "Priority 2",
    title: "Physical Properties & Density",
    question: "Completes G2 Physical Properties of Matter.",
    links: [{ chapter: "lss-02", note: "You've done density and floating/sinking in G1. Learn the other **physical properties** and practise **density calculations with units**." }],
    objectives: ["Describe electrical and thermal conductivity, melting and boiling point", "Calculate density = mass ÷ volume with correct units (g/cm^3^ or kg/m^3^)", "Find the volume of regular objects"],
    summary: [{ heading: "What's new in G2", points: ["Physical properties: electrical conductivity, thermal conductivity, melting/boiling point, density.", "Volume of a cuboid = length × breadth × height. Density = mass ÷ volume."] }]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-09", num: 9, group: P2, priority: "Priority 2",
    title: "Transfer of Heat",
    question: "Completes G2 Heat — and prepares you for upper-sec Physics.",
    links: [{ chapter: "lss-10", note: "This chapter is new to you. Learn **conduction, convection and radiation**." }],
    objectives: ["Explain conduction, convection and radiation", "Describe effects of expansion and contraction", "Explain how surface colour affects radiation"],
    summary: [{ heading: "What's new in G2", table: [["Conduction", "Convection", "Radiation"], ["Through collisions of particles; best in solids", "Fluid moves: hot rises, cold sinks", "No medium needed, e.g. heat from the Sun"]] }]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "br-10", num: 10, group: P2, priority: "Priority 2",
    title: "Ray Model of Light",
    question: "Completes G2 Light — and prepares you for upper-sec Physics.",
    links: [{ chapter: "lss-05", note: "This chapter is new to you. Focus on **reflection** and the **plane mirror image**. Refraction is optional for G2." }],
    objectives: ["Draw rays with arrows to show the path of light", "State that angle of incidence = angle of reflection", "List the properties of a plane mirror image"],
    summary: [{ heading: "What's new in G2", points: ["We see objects when light from them enters our eyes.", "Plane mirror image: upright, virtual, laterally inverted, same size, same distance behind the mirror."] }]
  }
  ]
};
})();
