/* =====================================================================
   LOWER SECONDARY SCIENCE G2/G3 — chapter content
   Formatting: **bold**  H~2~O (subscript)  Cu^2+^ (superscript)  -> (arrow)
   Items marked (G3) are "optional for G2" in the MOE syllabus.
   Quiz `answer` = position of the correct option counting from 0.
   ===================================================================== */
window.COURSES = window.COURSES || {};
(function () {
  var IMG = "assets/summaries/g2g3-science/";
  var phet = function (n) { return "https://phet.colorado.edu/sims/html/" + n + "/latest/" + n + "_en.html"; };

window.COURSES["g2g3-science"] = {
  id: "g2g3-science",
  name: "Science (G2/G3)",
  short: "LSS G2/G3",
  color: "pink",   /* sticker colour: teal, orange, yellow or pink */
  blurb: "Lower Secondary Science (G2/G3): Scientific Endeavour, Diversity, Models, Interactions and Systems.",
  chapters: [

  /* ------------------------------------------------------------------ */
  {
    id: "lss-01", num: 1, group: "The Scientific Endeavour",
    title: "The Scientific Endeavour",
    question: "How do we practise Science, and how do we stay safe doing it?",
    mascot: "assets/img/mascots/boom.png",
    images: [{ src: IMG + "s1-01-scientific-method.jpg", title: "The Scientific Method" }, { src: IMG + "s1-02-lab-safety.jpg", title: "Lab Safety, Hazards & Instruments" }],
    objectives: [
      "Describe the steps of the scientific method",
      "Identify independent, dependent and controlled variables for a fair test",
      "Distinguish qualitative and quantitative data",
      "Explain accuracy and precision, and how to reduce zero error, parallax error and human reaction time error",
      "Follow lab safety rules and recognise hazard symbols",
      "Choose suitable instruments to measure volume, mass, time and temperature"
    ],
    summary: [
      { heading: "The scientific method",
        steps: [
          "**Observe** — using your senses or instruments.",
          "**Question** — based on the observation.",
          "**Hypothesis** — e.g. if x increases, y will increase / decrease / not change.",
          "**Experiment** — plan the independent variable, dependent variable, variables to keep constant, and the instruments needed.",
          "**Analysis** — look for patterns or trends in the data.",
          "**Conclusion** — is the hypothesis supported? e.g. when x increases, y…"
        ],
        tip: "Technological advancement (new instruments) lets us make new observations, so the cycle starts again." },
      { heading: "Variables",
        table: [
          ["Variable", "Meaning"],
          ["Independent (x)", "The variable you **change**"],
          ["Dependent (y)", "The variable you **measure** to see the effect of the change"],
          ["Controlled", "All other variables that could affect y — **kept constant** for a **fair** test"]
        ],
        points: ["Tables: independent variable in the first column, with units in the heading, e.g. Time / s.", "Graphs: independent variable on the x-axis, dependent variable on the y-axis."] },
      { heading: "Qualitative vs quantitative data",
        table: [
          ["Qualitative", "Quantitative"],
          ["Uses your senses; usually **descriptive**, e.g. the solution turned from colourless to blue", "Uses instruments; usually **numerical**, e.g. the sample weighs 10.3 g. Must use correct SI units"]
        ] },
      { heading: "Accuracy and precision",
        points: [
          "**Accuracy**: how close a measured value is to the **true value**.",
          "**Zero error**: a **consistent** error when an instrument shows a non-zero reading at zero. Fix: press 'tare', or subtract the zero reading.",
          "**Parallax error**: reading a scale at the wrong angle. Fix: read at **eye level**.",
          "**Human reaction time error** (G3): an **unpredictable** error, e.g. stopping a stopwatch late. Fix: repeat and average.",
          "**Precision**: how close **repeated** measurements are to **each other**. Also depends on the instrument, e.g. a measuring cylinder reads to 0.5 cm^3^ but a burette reads to 0.05 cm^3^."
        ] },
      { heading: "Lab safety rules",
        points: [
          "No food or drinks; do not taste chemicals unless told to.",
          "Tie up long hair; no loose clothing; wear safety goggles when heating or using chemicals.",
          "Do not play in the lab; wash hands before leaving.",
          "Alert the teacher immediately if there is an accident; know where the first aid and safety equipment are.",
          "Never stand in front of a test tube being heated."
        ] },
      { heading: "Hazard symbols",
        table: [
          ["Symbol", "Meaning"],
          ["Corrosive", "May cause severe damage on contact"],
          ["Oxidising", "Can make fires more intense / explosive"],
          ["Flammable", "May catch fire"],
          ["Acute toxicity", "Toxic if swallowed, breathed in or touched"],
          ["Harmful / irritant", "Irritates skin, eyes or breathing"],
          ["Carcinogenic / aspiration hazard", "Can cause cancer or breathing difficulties"],
          ["Explosive", "May explode on contact with heat"],
          ["Gases under pressure", "May explode when heated"],
          ["Environmental toxicity", "Harmful to the environment"]
        ] },
      { heading: "Instruments",
        table: [
          ["To…", "Use"],
          ["Measure volume", "Measuring cylinder; pipette (fixed volume, e.g. 25.0 cm^3^); burette (to 0.05 cm^3^)"],
          ["Hold liquids / solids", "Beaker, round-bottom flask, conical flask, test tube / boiling tube"],
          ["Add small amounts of liquid", "Dropper"],
          ["Heat", "Bunsen burner — open air hole gives a hotter, non-luminous flame"],
          ["Measure temperature / time / mass", "Thermometer (0.5 °C) / stopwatch (1 s or 0.1 s) / electronic balance (0.01 g)"]
        ] }
    ],
    keyTerms: [
      ["Hypothesis", "A testable prediction, e.g. if x increases, y will increase."],
      ["Independent variable", "The variable that is changed."],
      ["Dependent variable", "The variable that is measured."],
      ["Controlled variable", "A variable kept constant for a fair test."],
      ["Accuracy", "How close a measurement is to the true value."],
      ["Precision", "How close repeated measurements are to each other."],
      ["Zero error", "A consistent error when an instrument does not read zero at zero."],
      ["Parallax error", "Error from reading a scale at the wrong angle."]
    ],
    video: { id: "3nAETHZTObk", title: "Nature of Science (Amoeba Sisters)",
      think: "Why do scientists repeat experiments?" },
    sims: [],
    quiz: [
      { q: "A student investigates how the temperature of water affects how fast sugar dissolves. What is the independent variable?",
        options: ["Temperature of water", "Time taken to dissolve", "Mass of sugar", "Volume of water"],
        answer: 0, explain: "The independent variable is the one deliberately changed — the temperature." },
      { q: "In the same experiment, which is a controlled variable?",
        options: ["Mass of sugar used", "Temperature of water", "Time taken to dissolve", "The result"],
        answer: 0, explain: "The mass of sugar must be kept constant for a fair test." },
      { q: "Which is an example of qualitative data?",
        options: ["The solution turned blue", "The mass is 10.3 g", "The time taken was 25 s", "The volume is 50 cm^3^"],
        answer: 0, explain: "Qualitative data is descriptive; the others are numerical (quantitative)." },
      { q: "An electronic balance shows 0.02 g with nothing on it. What is this called?",
        options: ["Zero error", "Parallax error", "Human reaction time error", "Precision"],
        answer: 0, explain: "A non-zero reading at zero is a zero error — press 'tare' to fix it." },
      { q: "How can parallax error be avoided?",
        options: ["Read the scale at eye level", "Repeat the experiment", "Use a bigger container", "Press the tare button"],
        answer: 0, explain: "Parallax error comes from reading at an angle." },
      { q: "Four students measure the same length: 5.2, 5.2, 5.3, 5.2 cm. The true length is 6.0 cm. The readings are…",
        options: ["precise but not accurate", "accurate but not precise", "both accurate and precise", "neither accurate nor precise"],
        answer: 0, explain: "The readings are close to each other (precise) but far from the true value (not accurate)." },
      { q: "Which hazard symbol warns that a substance may damage skin on contact?",
        options: ["Corrosive", "Flammable", "Explosive", "Gases under pressure"],
        answer: 0, explain: "Corrosive substances, such as concentrated acids, can cause severe damage on contact." },
      { q: "Which instrument measures the volume of a liquid most precisely?",
        options: ["Burette", "Beaker", "Measuring cylinder", "Conical flask"],
        answer: 0, explain: "A burette reads to 0.05 cm^3^." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-02", num: 2, group: "Diversity",
    title: "Physical Properties of Matter",
    question: "How do physical properties help us choose the right material?",
    images: [{ src: IMG + "s1-03-physical-properties.jpg", title: "Diversity — Physical Properties" }],
    objectives: [
      "Describe physical properties: electrical and thermal conductivity, melting and boiling point, density, and (G3) strength, hardness and flexibility",
      "Measure mass and volume, and calculate density = mass ÷ volume",
      "Find the volume of an irregular object by displacement of water (G3)",
      "Predict whether an object floats or sinks by comparing densities",
      "Explain how to use materials sustainably (reduce, reuse, recycle)"
    ],
    summary: [
      { heading: "Physical properties",
        text: "Physical properties are qualities that can be observed or measured **without changing what the material is made of**.",
        table: [
          ["Property", "Meaning", "Example"],
          ["Electrical conductivity", "How easily electric current flows through", "Metals high; rubber low"],
          ["Thermal conductivity", "How easily heat flows through", "Metals high; plastics low"],
          ["Melting point", "Temperature at which a solid becomes a liquid", "Ice melts at 0 °C"],
          ["Boiling point", "Temperature at which a liquid becomes a gas", "Water boils at 100 °C"],
          ["Strength (G3)", "Ability to support a heavy load without changing shape permanently", "Steel beams"],
          ["Hardness (G3)", "Resistance to wear, tear and scratches", "Diamond"],
          ["Flexibility (G3)", "Ability to bend without breaking and return to shape", "Rubber"]
        ] },
      { heading: "Density",
        text: "**Density = mass ÷ volume**. SI unit kg/m^3^; commonly g/cm^3^.",
        points: [
          "**Mass** = amount of matter. Measure with an electronic balance (to 0.01 g). SI unit kg.",
          "**Volume** = amount of space occupied. SI unit m^3^. Regular shapes: measure and use a formula — cuboid l × b × h; cylinder πr^2^h; sphere ⁴⁄₃πr^3^.",
          "Irregular shapes (G3): **displacement of water** — volume of object = rise in water level. The object must be fully submerged (use a sinker if it floats).",
          "Density of water = **1.00 g/cm^3^**. Less than 1 g/cm^3^ -> **floats**; more than 1 g/cm^3^ -> **sinks**."
        ] },
      { heading: "Environmental sustainability",
        points: ["**Reduce** consumption where possible.", "**Reuse** items instead of using single-use items.", "**Recycle** glass, paper, plastic and metal."] }
    ],
    keyTerms: [
      ["Physical property", "A property that can be observed or measured without changing the material's composition."],
      ["Density", "Mass per unit volume."],
      ["Mass", "The amount of matter in an object (kg)."],
      ["Volume", "The amount of space an object occupies (m^3^)."],
      ["Displacement method", "Finding volume from the rise in water level when an object is submerged."],
      ["Thermal conductivity", "How easily heat flows through a material."]
    ],
    video: { id: "A49VdFLNVNU", title: "Why do things float or sink? What is density?",
      think: "A 50 g object has a volume of 40 cm^3^. Will it float in water?" },
    sims: [
      { title: "Density", url: phet("density"), embed: true,
        task: "Use the Mystery screen. Measure the mass and volume of each block, calculate density, and identify the material." },
      { title: "Density Tower", url: "https://javalab.org/en/density_tower_en/", embed: false,
        task: "Predict where each object will settle in the tower, then check." }
    ],
    quiz: [
      { q: "A stone has mass 120 g and volume 40 cm^3^. What is its density?",
        options: ["3.0 g/cm^3^", "0.33 g/cm^3^", "160 g/cm^3^", "4800 g/cm^3^"],
        answer: 0, explain: "Density = 120 ÷ 40 = 3.0 g/cm^3^." },
      { q: "Which object will float on water (density 1.00 g/cm^3^)?",
        options: ["Cork, 0.24 g/cm^3^", "Aluminium, 2.7 g/cm^3^", "Glass, 2.5 g/cm^3^", "Iron, 7.9 g/cm^3^"],
        answer: 0, explain: "Only objects less dense than water float." },
      { q: "Why are cooking pots usually made of metal with plastic handles?",
        options: ["Metal has high thermal conductivity; plastic has low thermal conductivity", "Metal is flexible; plastic is hard", "Metal has low density; plastic has high density", "Metal is an electrical insulator"],
        answer: 0, explain: "Heat passes quickly through the metal pot but slowly through the plastic handle." },
      { q: "Water level in a measuring cylinder rises from 30 cm^3^ to 45 cm^3^ when a key is added. The volume of the key is…",
        options: ["15 cm^3^", "45 cm^3^", "75 cm^3^", "30 cm^3^"],
        answer: 0, explain: "Volume of object = rise in water level = 45 − 30 = 15 cm^3^." },
      { q: "Which property describes how easily electric current flows through a material?",
        options: ["Electrical conductivity", "Thermal conductivity", "Density", "Hardness"],
        answer: 0, explain: "Metals have high electrical conductivity; rubber has low." },
      { q: "What is the SI unit of density?",
        options: ["kg/m^3^", "g", "m^3^", "N"],
        answer: 0, explain: "SI units: mass in kg, volume in m^3^, so density in kg/m^3^." },
      { q: "A material that can bend without breaking and return to its shape is…",
        options: ["flexible", "hard", "dense", "brittle"],
        answer: 0, explain: "That is flexibility." },
      { q: "Which is the best example of 'reuse'?",
        options: ["Using a refillable water bottle", "Putting glass into a recycling bin", "Buying fewer clothes", "Burning rubbish"],
        answer: 0, explain: "Reusing means using an item again instead of a single-use item." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-03", num: 3, group: "Diversity",
    title: "Chemical Composition of Matter",
    question: "How can we classify matter by what it is made of?",
    images: [{ src: IMG + "s1-04-chemical-composition.jpg", title: "Diversity — Chemical Composition" }],
    objectives: [
      "State that elements are the basic building blocks of matter; recognise metals and non-metals in the Periodic Table",
      "Distinguish elements, compounds and mixtures",
      "Distinguish solute, solvent and solution; compare solutions and suspensions",
      "Describe factors affecting the rate of dissolving and (G3) solubility"
    ],
    summary: [
      { heading: "Elements",
        points: [
          "The basic building blocks of living and non-living matter.",
          "**Cannot be broken down** into simpler substances.",
          "Shown in the **Periodic Table** — metals on the left, non-metals on the right of the staircase line."
        ] },
      { heading: "Compounds vs mixtures",
        table: [
          ["", "Compound", "Mixture"],
          ["Made of", "Two or more elements **chemically combined**", "Two or more elements and/or compounds **not** chemically combined"],
          ["Ratio", "Fixed ratio", "No fixed ratio"],
          ["Properties", "**Different** from its elements", "**Same** as its constituents"],
          ["Separation", "Difficult — needs lots of energy, e.g. electricity", "Easy — by separation techniques"]
        ] },
      { heading: "Solutions and suspensions",
        table: [
          ["", "Solution", "Suspension"],
          ["What", "A solute dissolves completely in a solvent", "Insoluble substances in a solvent"],
          ["Can you see particles?", "No", "Yes"],
          ["Settles on standing?", "No", "Yes — forms solid deposits"],
          ["Light", "Passes through fully (transparent)", "Cannot pass through fully (opaque / translucent)"]
        ],
        points: [
          "**Rate of dissolving** increases with smaller solute particles, higher solvent temperature and stirring.",
          "**Solubility** (G3): how much solute dissolves in a fixed volume of solvent at a given temperature."
        ] }
    ],
    keyTerms: [
      ["Element", "A substance that cannot be broken down into simpler substances."],
      ["Compound", "Two or more elements chemically combined in a fixed ratio."],
      ["Mixture", "Two or more substances not chemically combined."],
      ["Solute", "The substance that dissolves."],
      ["Solvent", "The substance that does the dissolving."],
      ["Suspension", "A mixture with insoluble particles that settle on standing."],
      ["Solubility", "How much solute dissolves in a fixed amount of solvent at a given temperature."]
    ],
    video: { id: "DZ6Ap8Zyb9w", title: "What is an element, mixture and compound? (FuseSchool)",
      think: "Is air an element, a compound or a mixture? Explain." },
    sims: [
      { title: "Dissolution Process", url: "https://javalab.org/en/dissolution_process_en/", embed: false,
        task: "Watch the solute particles. What happens to them when the solid dissolves?" },
      { title: "Build a Molecule", url: phet("build-a-molecule"), embed: true,
        task: "Make one example of an element made of molecules (e.g. O~2~) and one compound (e.g. H~2~O). How are they different?" }
    ],
    quiz: [
      { q: "Which statement about a compound is correct?",
        options: ["Its elements are chemically combined in a fixed ratio", "It can be separated easily by filtration", "It has the same properties as its elements", "It has no fixed ratio"],
        answer: 0, explain: "Compounds have a fixed ratio and different properties from their elements." },
      { q: "Which is a mixture?",
        options: ["Air", "Water", "Carbon dioxide", "Oxygen"],
        answer: 0, explain: "Air contains nitrogen, oxygen and other gases not chemically combined." },
      { q: "In salt water, the salt is the…",
        options: ["solute", "solvent", "suspension", "filtrate"],
        answer: 0, explain: "The salt dissolves (solute) in water (solvent)." },
      { q: "Which observation shows a mixture is a suspension?",
        options: ["Solid particles settle to the bottom on standing", "Light passes through fully", "It is transparent", "No particles can be seen"],
        answer: 0, explain: "In a suspension, insoluble particles are visible and settle." },
      { q: "Which change will make sugar dissolve faster?",
        options: ["Stirring the mixture", "Using bigger sugar cubes", "Cooling the water", "Leaving it still"],
        answer: 0, explain: "Stirring, smaller particles and hotter solvent all increase the rate of dissolving." },
      { q: "Iron and sulfur powder are mixed. Which is TRUE?",
        options: ["The iron can still be removed with a magnet", "A new compound has formed", "The mixture has a fixed ratio", "The iron is no longer magnetic"],
        answer: 0, explain: "In a mixture, iron keeps its properties, including being magnetic." },
      { q: "Where are the metals found in the Periodic Table?",
        options: ["On the left of the staircase line", "On the right of the staircase line", "Only in the top row", "Only in Group 18"],
        answer: 0, explain: "Most elements are metals, found to the left; non-metals are on the right." },
      { q: "Water is made of hydrogen and oxygen. Why is water a compound?",
        options: ["Hydrogen and oxygen are chemically combined in a fixed ratio", "It is a liquid", "It can be filtered", "It dissolves many substances"],
        answer: 0, explain: "Water always has 2 H atoms to 1 O atom, chemically combined." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-04", num: 4, group: "Diversity",
    title: "Separation Techniques",
    question: "How can we separate a mixture into its constituents?",
    mascot: "assets/img/mascots/test-tube.png",
    images: [{ src: IMG + "s1-05-separation-techniques.jpg", title: "Diversity — Separation Techniques" }],
    objectives: [
      "Explain how mixtures are separated using differences in physical properties",
      "Describe magnetic separation, filtration, evaporation, distillation and paper chromatography",
      "Choose a suitable method for solid–solid, solid–liquid and liquid–liquid mixtures",
      "Give everyday uses, e.g. water treatment and NEWater"
    ],
    summary: [
      { heading: "Choosing a method",
        table: [
          ["Mixture", "Difference used", "Method"],
          ["Solid–solid", "Magnetism", "Use a **magnet**"],
          ["Solid–solid", "Solubility", "Add solvent to dissolve one solid, **filter**, then evaporate the filtrate"],
          ["Solid–liquid (insoluble)", "Particle size", "**Filtration** — solid is the residue, liquid is the filtrate"],
          ["Solid–liquid (soluble)", "Boiling point", "**Evaporation** to get the solid, or **distillation** to get the liquid"],
          ["Liquid–liquid", "Boiling point", "**Distillation** — the lower boiling point liquid distils first"],
          ["Dissolved coloured substances", "Solubility", "**Paper chromatography**"]
        ] },
      { heading: "Filtration",
        points: ["Line a filter funnel with filter paper over a conical flask.", "The solid particles are too large to pass through the pores of the filter paper.", "Residue = solid left on the paper; filtrate = liquid that passes through."] },
      { heading: "Evaporation",
        points: ["Heat the solution in an evaporating dish over a Bunsen burner.", "Once all the solvent has evaporated, the solute remains as a solid residue."] },
      { heading: "Distillation",
        points: [
          "Heat the mixture in a flask with **boiling chips** (for smooth boiling).",
          "Cold water enters the condenser at the **bottom** so it fills completely.",
          "The thermometer is at the side arm to check the distillate is pure (e.g. water: constant 100 °C).",
          "When the temperature starts to rise again, change the collecting flask."
        ] },
      { heading: "Paper chromatography",
        points: [
          "Draw the start line in **pencil** — ink would dissolve and separate too.",
          "Keep the start line **above** the solvent level, so the spots don't dissolve straight into the solvent.",
          "The solvent travels up and carries the components; the **more soluble** a component, the **further** it travels.",
          "Stop near the top and mark the solvent front."
        ] }
    ],
    keyTerms: [
      ["Residue", "Solid left on the filter paper."],
      ["Filtrate", "Liquid that passes through the filter paper."],
      ["Distillate", "Pure liquid collected after distillation."],
      ["Chromatogram", "The paper showing the separated components."],
      ["Solvent front", "The furthest point the solvent reaches on the chromatogram."]
    ],
    video: { id: "NTEGJj3yXNE", title: "Separating mixtures",
      think: "How would you get pure water from seawater?" },
    sims: [
      { title: "Distillation", url: "https://javalab.org/en/distillation_en/", embed: false,
        task: "Watch the thermometer. Why does it stay at the same temperature while the first liquid is collected?" }
    ],
    quiz: [
      { q: "Which method separates sand from water?",
        options: ["Filtration", "Distillation", "Chromatography", "Magnetic separation"],
        answer: 0, explain: "Sand is insoluble; its particles are too big to pass through filter paper." },
      { q: "Which method obtains pure water from salt water?",
        options: ["Distillation", "Filtration", "Evaporation", "Magnetic separation"],
        answer: 0, explain: "Water boils off, is condensed and collected; salt stays behind." },
      { q: "Why is the start line in chromatography drawn in pencil?",
        options: ["Pencil graphite does not dissolve in the solvent", "Pencil is easier to see", "Ink is too dark", "Pencil makes the solvent move faster"],
        answer: 0, explain: "Ink would dissolve and separate, spoiling the results." },
      { q: "In chromatography, which component travels furthest?",
        options: ["The most soluble one", "The least soluble one", "The heaviest one", "The darkest one"],
        answer: 0, explain: "More soluble components are carried further by the solvent." },
      { q: "Why are boiling chips added in distillation?",
        options: ["To ensure smooth boiling", "To cool the vapour", "To filter the mixture", "To change the boiling point"],
        answer: 0, explain: "Boiling chips stop sudden, violent boiling." },
      { q: "A mixture contains iron filings and sand. The best way to separate them is…",
        options: ["using a magnet", "filtration", "evaporation", "distillation"],
        answer: 0, explain: "Iron is magnetic; sand is not." },
      { q: "Salt and sand are mixed. Which order of steps obtains dry salt?",
        options: ["Add water, filter, evaporate the filtrate", "Filter, add water, evaporate the residue", "Evaporate, filter, add water", "Use a magnet, then filter"],
        answer: 0, explain: "Salt dissolves; sand is filtered out; evaporating the filtrate leaves salt." },
      { q: "Why must the start line be above the solvent level?",
        options: ["So the spots do not dissolve directly into the solvent", "So the paper doesn't tear", "So the solvent moves faster", "So the spots stay dry forever"],
        answer: 0, explain: "If submerged, the samples would wash into the solvent instead of travelling up the paper." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-05", num: 5, group: "Models",
    title: "Ray Model of Light",
    question: "How does the ray model help us explain what we see?",
    images: [{ src: IMG + "s1-06-light.jpg", title: "Models — Light" }],
    objectives: [
      "Use rays to represent the path and direction of light",
      "Explain regular and diffuse reflection; state the properties of an image in a plane mirror",
      "Draw ray diagrams for reflection in a plane mirror; (G3) state that angle of incidence = angle of reflection",
      "Describe the uses of convex and concave mirrors",
      "(G3) Explain refraction in terms of the change in speed of light and describe its effects (e.g. apparent depth)"
    ],
    summary: [
      { heading: "Light basics",
        points: [
          "Light travels in **straight lines**. We see an object when light travels **from** the object **into** our eyes.",
          "Rays are drawn as straight lines with **arrows** to show direction.",
          "**Luminous** objects give off light (e.g. the Sun, a lamp). **Non-luminous** objects reflect light."
        ] },
      { heading: "Reflection",
        points: [
          "The **normal** is a line perpendicular to the surface at the point of incidence.",
          "**Angle of incidence (i)** is between the incident ray and the normal; **angle of reflection (r)** is between the reflected ray and the normal. **i = r** (G3).",
          "**Regular** reflection: smooth surfaces reflect rays uniformly and form a clear image.",
          "**Diffuse** reflection: rough surfaces scatter rays; no clear image."
        ] },
      { heading: "Image in a plane mirror",
        steps: ["Upright", "Virtual (cannot be put on a screen)", "Laterally inverted", "Same size as the object", "Same distance behind the mirror as the object is in front"] },
      { heading: "Drawing a ray diagram for reflection",
        steps: [
          "Measure the perpendicular distance from the object to the mirror.",
          "Mark the image the same distance behind the mirror (dotted lines).",
          "Draw straight lines from the image to the eye; the part behind the mirror is dotted.",
          "Join the object to where those lines meet the mirror, with arrows pointing from object to eye."
        ] },
      { heading: "Curved mirrors",
        table: [["Mirror", "Image", "Use"], ["Convex", "Diminished; wider field of view", "Blind-corner mirrors"], ["Concave", "Magnified", "Dentist's mirror"]] },
      { heading: "Refraction (G3)",
        points: [
          "Refraction is the **bending** of light at the boundary of two media with different **optical densities**.",
          "Into an optically **denser** medium (air -> glass): light **slows down** and bends **towards** the normal.",
          "Into a **less dense** medium (glass -> air): light **speeds up** and bends **away** from the normal.",
          "A ray hitting the boundary at 90° (along the normal) does not bend.",
          "Optical density: vacuum < air < water < glass.",
          "**Apparent depth**: objects under water appear **closer** to the surface than they really are."
        ],
        tip: "Answering technique: (1) state the relative optical densities, (2) state how the speed of light changes, (3) state whether light bends towards or away from the normal." }
    ],
    keyTerms: [
      ["Luminous", "Gives off its own light."],
      ["Normal", "A line at 90° to a surface at the point where a ray hits it."],
      ["Angle of incidence", "Angle between the incident ray and the normal."],
      ["Laterally inverted", "Left and right are swapped."],
      ["Virtual image", "An image that cannot be formed on a screen."],
      ["Refraction", "Bending of light as it passes between media of different optical densities."]
    ],
    video: { id: "ajtPPf5xGwM", title: "Reflection, absorption, refraction — how light interacts with materials",
      think: "Why does a straw look bent in a glass of water?" },
    sims: [
      { title: "Bending Light", url: phet("bending-light"), embed: true,
        task: "On the Intro screen, shine the laser from air into water, then into glass. Does the ray bend towards or away from the normal? Which bends more?" }
    ],
    quiz: [
      { q: "We can see a non-luminous object because…",
        options: ["light reflected from it enters our eyes", "light leaves our eyes and hits it", "it gives off its own light", "it absorbs all light"],
        answer: 0, explain: "Non-luminous objects reflect light into our eyes." },
      { q: "The angle of incidence is 35°. What is the angle of reflection?",
        options: ["35°", "55°", "70°", "145°"],
        answer: 0, explain: "The angle of reflection equals the angle of incidence." },
      { q: "Which is NOT a property of the image in a plane mirror?",
        options: ["Real and can be put on a screen", "Upright", "Laterally inverted", "Same size as the object"],
        answer: 0, explain: "A plane mirror image is virtual — it cannot be formed on a screen." },
      { q: "A rough wall reflects light but shows no image. This is…",
        options: ["diffuse reflection", "regular reflection", "refraction", "absorption"],
        answer: 0, explain: "Rough surfaces scatter light in many directions." },
      { q: "Which mirror is used at blind corners to give a wide field of view?",
        options: ["Convex mirror", "Concave mirror", "Plane mirror", "No mirror"],
        answer: 0, explain: "Convex mirrors give a diminished image but a wider view." },
      { q: "When light passes from air into glass, it…",
        options: ["slows down and bends towards the normal", "speeds up and bends away from the normal", "speeds up and bends towards the normal", "does not change speed"],
        answer: 0, explain: "Glass is optically denser, so light slows down and bends towards the normal." },
      { q: "A fish in a pond appears closer to the surface than it really is because…",
        options: ["light bends away from the normal as it leaves water", "light travels in curves", "water reflects all light", "the fish is luminous"],
        answer: 0, explain: "Light speeds up leaving water and bends; our brain traces it back in a straight line." },
      { q: "A person stands 2 m in front of a plane mirror. How far is the image from the person?",
        options: ["4 m", "2 m", "1 m", "0 m"],
        answer: 0, explain: "The image is 2 m behind the mirror, so 2 + 2 = 4 m from the person." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-06", num: 6, group: "Models",
    title: "Model of Cells",
    question: "What are the basic units of life, and how are they organised?",
    mascot: "assets/img/mascots/cells.png",
    images: [{ src: IMG + "s1-07-cells.jpg", title: "Models — Cells" }],
    objectives: [
      "Identify the parts of typical plant and animal cells and state their functions",
      "Compare plant and animal cells",
      "Describe how cells are organised into tissues, organs and systems; (G3) explain division of labour",
      "Describe specialised cells: red blood cell, nerve cell, root hair cell",
      "Draw cell diagrams correctly"
    ],
    summary: [
      { heading: "Unicellular vs multicellular",
        points: ["**Unicellular**: made of one cell, e.g. yeast, bacteria.", "**Multicellular**: made of many cells, e.g. humans, cats.", "**Division of labour** (G3): different parts carry out different functions in a coordinated way, so complex processes happen efficiently."] },
      { heading: "Cell parts",
        table: [
          ["Part", "Function"],
          ["Cell membrane", "Partially permeable; controls movement of substances in and out"],
          ["Cytoplasm", "Site of chemical reactions"],
          ["Nucleus", "Controls all cell activities; contains chromosomes"],
          ["Chromosome", "Contains genetic information (DNA)"],
          ["Vacuole", "Stores food, water and waste"],
          ["Cell wall (plant)", "Fully permeable; protects and keeps the cell's shape; made of cellulose"],
          ["Chloroplast (plant)", "Contains chlorophyll to make food by photosynthesis"]
        ] },
      { heading: "Animal vs plant cells",
        table: [
          ["", "Animal cell", "Plant cell"],
          ["Cell wall", "Absent", "Present"],
          ["Chloroplast", "Absent", "Present"],
          ["Vacuole", "Small, numerous", "Single large central vacuole with cell sap"],
          ["Cytoplasm", "Fills most of the cell", "Thin lining within the cell"]
        ] },
      { heading: "Organisation",
        steps: ["**Cell** — specialised for its function", "**Tissue** — group of the same type of cells", "**Organ** — group of different tissues", "**System** — group of different organs"] },
      { heading: "Specialised cells",
        table: [
          ["Cell", "Adaptation"],
          ["Red blood cell", "No nucleus, so it packs more haemoglobin to carry oxygen; biconcave shape increases surface area for faster diffusion of oxygen"],
          ["Nerve cell", "Long nerve fibres insulated by a myelin sheath; transmits electrical impulses to and from the brain and spinal cord"],
          ["Root hair cell", "Long root hair increases surface area for faster absorption of water and mineral salts"]
        ],
        tip: "Drawing a cell: large (¾ of the space), in pencil, smooth continuous lines, label lines drawn with a ruler, no shading." }
    ],
    keyTerms: [
      ["Cell", "The basic unit of life."],
      ["Cell membrane", "Partially permeable layer that controls what enters and leaves the cell."],
      ["Cell wall", "Rigid, fully permeable cellulose layer in plant cells."],
      ["Chloroplast", "Contains chlorophyll for photosynthesis."],
      ["Tissue", "A group of the same type of cells."],
      ["Organ", "A group of different tissues working together."],
      ["Division of labour", "Different parts carry out different functions in a coordinated way."]
    ],
    video: { id: "FZtMCxFJYbw", title: "Plant and animal cells (KS3 Science)",
      think: "Name two structures found only in plant cells and state their functions." },
    sims: [
      { title: "Cell size and scale", url: "https://learn.genetics.utah.edu/content/cells/scale/", embed: false, source: "Learn.Genetics",
        task: "Zoom from a coffee bean to a skin cell. How many times smaller is a red blood cell than a grain of salt?" }
    ],
    quiz: [
      { q: "Which structure is found in plant cells but NOT in animal cells?",
        options: ["Cell wall", "Nucleus", "Cell membrane", "Cytoplasm"],
        answer: 0, explain: "Cell walls (and chloroplasts) are only found in plant cells." },
      { q: "Which part controls the movement of substances into and out of a cell?",
        options: ["Cell membrane", "Cell wall", "Vacuole", "Chloroplast"],
        answer: 0, explain: "The partially permeable cell membrane controls movement in and out." },
      { q: "What is the function of chloroplasts?",
        options: ["Make food by photosynthesis", "Control cell activities", "Store waste", "Give the cell its shape"],
        answer: 0, explain: "Chloroplasts contain chlorophyll which absorbs light for photosynthesis." },
      { q: "Why does a red blood cell have no nucleus?",
        options: ["To pack in more haemoglobin to carry more oxygen", "To move faster", "To make food", "To store water"],
        answer: 0, explain: "The extra space holds more haemoglobin." },
      { q: "A root hair cell has a long extension because it…",
        options: ["increases surface area for faster absorption of water and mineral salts", "makes food", "protects the root", "stores starch"],
        answer: 0, explain: "A larger surface area increases the rate of absorption." },
      { q: "Which is the correct order of organisation?",
        options: ["Cell -> tissue -> organ -> system", "Tissue -> cell -> system -> organ", "Organ -> tissue -> cell -> system", "Cell -> organ -> tissue -> system"],
        answer: 0, explain: "Cells form tissues, tissues form organs, organs form systems." },
      { q: "A cell has a cell wall, chloroplasts and a large central vacuole. It is most likely from…",
        options: ["a leaf", "human skin", "a red blood cell", "a nerve"],
        answer: 0, explain: "These are features of plant cells, especially leaf cells." },
      { q: "Where is genetic information (DNA) found?",
        options: ["In the chromosomes in the nucleus", "In the cell wall", "In the vacuole", "In the cell membrane"],
        answer: 0, explain: "Chromosomes in the nucleus carry DNA." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-07", num: 7, group: "Models",
    title: "Particulate Nature of Matter",
    question: "How does the particle model explain the states of matter?",
    images: [{ src: IMG + "s1-08-particulate-nature.jpg", title: "Models — Particulate Nature of Matter" }],
    objectives: [
      "State that matter is made of tiny particles in constant random motion",
      "Describe the arrangement, movement and energy of particles in solids, liquids and gases",
      "Explain expansion and contraction, and why mass is conserved",
      "Describe diffusion as net movement from higher to lower concentration",
      "(G3) Explain melting and boiling using the particle model"
    ],
    summary: [
      { heading: "States of matter",
        table: [
          ["", "Solid", "Liquid", "Gas"],
          ["Shape / volume", "Fixed shape, fixed volume", "Takes shape of container, fixed volume", "Takes shape of container, no fixed volume"],
          ["Arrangement", "Very closely packed, orderly", "Closely packed, disorderly", "Far apart, disorderly"],
          ["Movement", "Vibrate about fixed positions", "Slide past neighbouring particles", "Move rapidly in all directions"],
          ["Energy", "Low", "Higher", "High — enough to overcome attractive forces"]
        ],
        points: ["Gaining energy: melting (solid -> liquid), boiling / evaporation (liquid -> gas).", "Losing energy: condensation (gas -> liquid), freezing (liquid -> solid)."] },
      { heading: "Thermal expansion",
        points: [
          "**Expansion**: particles gain energy, move more vigorously and spread further apart.",
          "**Contraction**: particles lose energy, move less vigorously and come closer together.",
          "The **number and size** of particles do not change, so **mass stays the same**. Volume changes, so **density** changes."
        ] },
      { heading: "Diffusion",
        text: "**Diffusion** is the net movement of particles from a region of **higher concentration** to a region of **lower concentration**, e.g. perfume spreading through a room." }
    ],
    keyTerms: [
      ["Particulate nature of matter", "Matter is made of tiny particles in constant random motion."],
      ["Expansion", "Increase in volume when particles gain energy and move further apart."],
      ["Contraction", "Decrease in volume when particles lose energy and move closer."],
      ["Diffusion", "Net movement of particles from higher to lower concentration."],
      ["Concentration", "Number of particles per unit volume."]
    ],
    video: { id: "OTksau0_VoI", title: "Particle theory and states of matter",
      think: "Why can a gas be compressed but a solid cannot?" },
    sims: [
      { title: "States of Matter: Basics", url: phet("states-of-matter-basics"), embed: true,
        task: "Heat a solid and describe how the particles' movement changes as it melts and then boils." },
      { title: "Diffusion", url: phet("diffusion"), embed: true,
        task: "Start with particles on one side only. Remove the divider and watch. Which way is the net movement?" }
    ],
    quiz: [
      { q: "In which state are particles far apart and moving rapidly in all directions?",
        options: ["Gas", "Liquid", "Solid", "All states"],
        answer: 0, explain: "Gas particles have high energy and move freely and rapidly." },
      { q: "When a metal rod is heated and expands, what happens to its mass?",
        options: ["It stays the same", "It increases", "It decreases", "It becomes zero"],
        answer: 0, explain: "The number of particles does not change, so mass is conserved." },
      { q: "When a metal rod expands, what happens to its density?",
        options: ["It decreases", "It increases", "It stays the same", "It doubles"],
        answer: 0, explain: "Same mass, larger volume -> lower density." },
      { q: "Which is an example of diffusion?",
        options: ["The smell of curry spreading through a house", "Water freezing in a freezer", "A ball rolling down a slope", "Ice melting in the sun"],
        answer: 0, explain: "Smell particles move from higher to lower concentration." },
      { q: "In a solid, particles…",
        options: ["vibrate about fixed positions", "slide past each other", "move rapidly in all directions", "do not move at all"],
        answer: 0, explain: "Solid particles are held in fixed positions but still vibrate." },
      { q: "During condensation, particles…",
        options: ["lose energy and come closer together", "gain energy and spread out", "increase in size", "stop moving"],
        answer: 0, explain: "Gas -> liquid: particles lose energy and attractive forces pull them closer." },
      { q: "Why does a liquid take the shape of its container but keep a fixed volume?",
        options: ["Particles slide past each other but stay close together", "Particles are far apart", "Particles are in fixed positions", "Particles have no energy"],
        answer: 0, explain: "Close particles give fixed volume; sliding lets the liquid flow." },
      { q: "During expansion, the particles themselves…",
        options: ["stay the same size but move further apart", "get bigger", "increase in number", "melt"],
        answer: 0, explain: "Particles don't change size; the spaces between them increase." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-08", num: 8, group: "Models",
    title: "Atoms and Molecules",
    question: "What are atoms, and how do they make up molecules?",
    images: [{ src: IMG + "s1-09-atomic-structure.jpg", title: "Models — Atomic Structure" }],
    objectives: [
      "Describe an atom as a neutral particle with a nucleus (protons and neutrons) and electrons in shells",
      "State the relative masses and charges of protons, neutrons and electrons",
      "State that each element has a unique number of protons",
      "Describe molecules as atoms chemically combined; compare atoms and molecules",
      "State the numbers and types of atoms from a chemical formula, e.g. CO~2~"
    ],
    summary: [
      { heading: "Structure of an atom",
        points: [
          "An **atom** is the simplest unit of an element. Atoms are **electrically neutral**.",
          "The **nucleus** contains **protons (p)** and **neutrons (n)**. **Electrons (e)** are arranged in **shells** around the nucleus.",
          "**Proton number** identifies the element, e.g. Li has 3 protons.",
          "**Mass number** = protons + neutrons, e.g. Li-7 has 3 protons and 4 neutrons."
        ],
        table: [
          ["Particle", "Relative mass", "Relative charge"],
          ["Proton", "1", "+1"],
          ["Neutron", "1", "0"],
          ["Electron", "1/1840", "−1"]
        ],
        tip: "Only protons and neutrons contribute to the mass of an atom. A neutral atom has the same number of protons and electrons." },
      { heading: "Molecules",
        points: [
          "A **molecule** forms when atoms are **chemically combined**.",
          "Molecules can be an **element** (one type of atom, e.g. O~2~) or a **compound** (two or more elements, e.g. CO~2~ has 1 C and 2 O atoms)."
        ] },
      { heading: "From atom to ion (G3, beyond S1)",
        text: "If an atom gains or loses electrons, the charges no longer balance and it becomes an **ion**. Li^+^ has 3 p, 4 n, 2 e." }
    ],
    keyTerms: [
      ["Atom", "The simplest unit of an element; electrically neutral."],
      ["Nucleus", "The centre of an atom, containing protons and neutrons."],
      ["Proton number", "Number of protons; identifies the element."],
      ["Mass number", "Number of protons + neutrons."],
      ["Molecule", "Two or more atoms chemically combined."],
      ["Ion", "A charged particle formed when an atom gains or loses electrons."]
    ],
    video: { id: "WohAAJlm9fw", title: "KS3 Chemistry: Atoms, elements and compounds",
      think: "How is an oxygen atom different from an oxygen molecule?" },
    sims: [
      { title: "Build an Atom", url: phet("build-an-atom"), embed: true,
        task: "Build a lithium atom (3 p, 4 n, 3 e). What happens to the charge if you remove one electron?" }
    ],
    quiz: [
      { q: "Which particle has a negative charge?",
        options: ["Electron", "Proton", "Neutron", "Nucleus"],
        answer: 0, explain: "Electrons have a relative charge of −1." },
      { q: "An atom of sodium has 11 protons and 12 neutrons. What is its mass number?",
        options: ["23", "11", "12", "1"],
        answer: 0, explain: "Mass number = protons + neutrons = 11 + 12 = 23." },
      { q: "Why is an atom electrically neutral?",
        options: ["It has equal numbers of protons and electrons", "It has no electrons", "Neutrons cancel all charges", "It has more neutrons than protons"],
        answer: 0, explain: "+ and − charges balance." },
      { q: "What identifies which element an atom belongs to?",
        options: ["Number of protons", "Number of neutrons", "Number of shells", "Its size"],
        answer: 0, explain: "Each element has a unique proton number." },
      { q: "How many atoms are in one molecule of CO~2~?",
        options: ["3", "2", "1", "4"],
        answer: 0, explain: "1 carbon atom + 2 oxygen atoms = 3 atoms." },
      { q: "Which is a molecule of an element?",
        options: ["O~2~", "CO~2~", "H~2~O", "NaCl"],
        answer: 0, explain: "O~2~ contains only one type of atom." },
      { q: "Where is almost all the mass of an atom?",
        options: ["In the nucleus", "In the electron shells", "Equally spread", "Outside the atom"],
        answer: 0, explain: "Protons and neutrons (in the nucleus) have mass 1; electrons are very light." },
      { q: "A Li^+^ ion has…",
        options: ["3 protons and 2 electrons", "3 protons and 3 electrons", "2 protons and 3 electrons", "4 protons and 3 electrons"],
        answer: 0, explain: "Losing one electron leaves 2 electrons; protons stay at 3." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-09", num: 9, group: "Interactions",
    title: "Forces and Energy",
    question: "How do forces act on objects, and how is energy transferred?",
    images: [{ src: IMG + "s2-01-forces.jpg", title: "Interactions — Forces" }, { src: IMG + "s2-02-energy.jpg", title: "Interactions — Energy" }],
    objectives: [
      "Describe contact and non-contact forces",
      "Describe the effects of forces and relate them to energy transfer",
      "Compare mass and weight; use weight = mass × g (g = 10 N/kg)",
      "(G3) Use pressure = force ÷ area and work done = force × distance",
      "Name forms of energy and describe the conservation of energy",
      "Compare energy sources used to generate electricity"
    ],
    summary: [
      { heading: "Forces",
        text: "A force is a **push or a pull**, always acted on one object by another. Measured in **newtons (N)**.",
        table: [
          ["Contact forces", "Non-contact forces"],
          ["**Friction** — opposes motion; depends on roughness and contact area. Can be useful (rock climbing) or not (ice skating)", "**Magnetic** — attracts magnetic materials (cobalt, nickel, iron, steel); stronger near the poles"],
          ["**Elastic** — a stretched or compressed object returns to its original shape", "**Gravitational (weight)** — attraction between masses; depends on gravitational field strength and mass"]
        ],
        points: ["Forces can: move a stationary object, change its speed, stop a moving object, or change its direction."] },
      { heading: "Mass vs weight",
        table: [
          ["", "Mass", "Weight"],
          ["Meaning", "Amount of matter", "Gravitational force on an object"],
          ["Changes with location?", "No — stays constant", "Yes — depends on gravitational field strength"],
          ["SI unit", "kilogram (kg)", "newton (N)"],
          ["Measured with", "Electronic / beam balance", "Spring balance"]
        ],
        tip: "**Weight = mass × gravitational field strength** (g = 10 N/kg on Earth)." },
      { heading: "Pressure (G3 calculations)",
        points: [
          "**Pressure = force ÷ area** (Pa or N/m^2^). Same force on a smaller area -> higher pressure.",
          "Deeper water -> greater water pressure (submarines have depth limits).",
          "Higher altitude -> lower atmospheric pressure. Drinking from a straw: you lower the air pressure in the straw and atmospheric pressure pushes the drink up."
        ] },
      { heading: "Work done (G3)",
        text: "Work is done when a force moves an object **in the direction of the force**. **Work done = force × distance** (J). Carrying a box horizontally does no work against gravity." },
      { heading: "Energy",
        points: [
          "Energy is the ability to **do work**. SI unit: **joule (J)**.",
          "**Potential** (stored) energy: gravitational, chemical, elastic, nuclear. **Other forms**: kinetic, light, sound, thermal, electrical.",
          "**Conservation of energy**: energy cannot be created or destroyed, only **transferred or converted**. In a swinging pendulum, gravitational potential energy converts to kinetic energy and back."
        ] },
      { heading: "Energy sources for electricity",
        table: [
          ["Source", "Renewable?", "Clean?", "Notes"],
          ["Fossil fuels", "No", "No", "Release CO~2~ -> global warming"],
          ["Solar", "Yes", "Yes", "Depends on weather"],
          ["Hydroelectric", "Yes", "Yes", "Floods land, disrupts ecosystems"],
          ["Wind", "Yes", "Yes", "Depends on weather; needs land"],
          ["Geothermal", "Yes", "Mostly", "Needs land; drilling may release toxic elements"],
          ["Biofuels", "Yes", "No", "Release CO~2~ but offset by photosynthesis as crops grow"],
          ["Nuclear", "No", "Yes", "Lots of energy per land area; risk of disasters"]
        ] }
    ],
    keyTerms: [
      ["Force", "A push or pull, measured in newtons (N)."],
      ["Friction", "A contact force that opposes motion."],
      ["Weight", "The gravitational force on an object (N)."],
      ["Mass", "The amount of matter in an object (kg)."],
      ["Pressure", "Force per unit area (Pa)."],
      ["Work done", "Force × distance moved in the direction of the force (J)."],
      ["Conservation of energy", "Energy cannot be created or destroyed, only converted or transferred."],
      ["Renewable", "An energy source that is not used up, e.g. solar."]
    ],
    video: { id: "8-yT0UUMyUM", title: "KS3 Science: Forces",
      think: "Your mass is 50 kg. What is your weight on Earth?" },
    sims: [
      { title: "Forces and Motion: Basics", url: phet("forces-and-motion-basics"), embed: true,
        task: "On the Friction screen, push a box on surfaces with more and less friction. How does friction affect its motion?" },
      { title: "Energy Skate Park: Basics", url: phet("energy-skate-park-basics"), embed: true,
        task: "Turn on the energy bar chart. Where is kinetic energy greatest? Where is potential energy greatest? Does the total change?" },
      { title: "Pressure and pressing area", url: "https://javalab.org/en/pressure_en/", embed: false,
        task: "Keep the force the same and change the area. What happens to the pressure?" }
    ],
    quiz: [
      { q: "Which is a non-contact force?",
        options: ["Gravitational force", "Friction", "Elastic force", "Air resistance"],
        answer: 0, explain: "Gravity acts without the objects touching." },
      { q: "A 60 kg astronaut goes to the Moon. Which is TRUE?",
        options: ["Her mass stays 60 kg but her weight decreases", "Her mass and weight both decrease", "Her mass decreases but her weight stays the same", "Neither changes"],
        answer: 0, explain: "Mass is constant; weight depends on gravitational field strength, which is lower on the Moon." },
      { q: "What is the weight of a 5 kg bag on Earth? (g = 10 N/kg)",
        options: ["50 N", "5 N", "0.5 N", "15 N"],
        answer: 0, explain: "Weight = 5 × 10 = 50 N." },
      { q: "A force of 200 N acts on an area of 0.5 m^2^. What is the pressure?",
        options: ["400 Pa", "100 Pa", "200 Pa", "0.0025 Pa"],
        answer: 0, explain: "Pressure = force ÷ area = 200 ÷ 0.5 = 400 Pa." },
      { q: "Why does a sharp knife cut better than a blunt one?",
        options: ["Smaller area gives higher pressure", "Larger area gives higher pressure", "It has more mass", "It has less friction"],
        answer: 0, explain: "The same force on a smaller area produces greater pressure." },
      { q: "A man lifts a 100 N box up by 2 m. How much work is done?",
        options: ["200 J", "50 J", "102 J", "0 J"],
        answer: 0, explain: "Work = force × distance = 100 × 2 = 200 J." },
      { q: "A ball falls from a height. Which energy conversion happens?",
        options: ["Gravitational potential -> kinetic", "Kinetic -> chemical", "Light -> sound", "Nuclear -> elastic"],
        answer: 0, explain: "As height decreases, GPE converts to kinetic energy." },
      { q: "Which energy source is renewable but depends on the weather?",
        options: ["Wind", "Coal", "Nuclear", "Natural gas"],
        answer: 0, explain: "Wind turbines only work when it is windy." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-10", num: 10, group: "Interactions",
    title: "Transfer of Heat Energy",
    question: "How is heat transferred, and how does it affect matter?",
    images: [{ src: IMG + "s2-03-transfer-of-heat.jpg", title: "Interactions — Transfer of Heat" }],
    objectives: [
      "State that temperature is measured in kelvin (K); heat flows from hotter to colder objects",
      "Explain expansion and contraction and their applications",
      "Explain conduction, convection and radiation",
      "Describe how colour and texture affect the absorption and emission of radiation"
    ],
    summary: [
      { heading: "Temperature and heat",
        points: ["**Temperature** is a measure of how hot an object is. SI unit: **kelvin (K)**.", "Heat energy is always transferred from a **hotter** object to a **colder** object."] },
      { heading: "Effects of heat",
        points: [
          "**Expansion**: particles gain energy, move more vigorously and spread further apart. **Contraction**: the reverse.",
          "Mass stays the same but volume changes, so **density changes**.",
          "Applications: gaps in railway tracks for expansion on hot days; slack in power lines for contraction in cool weather.",
          "**Bimetallic strip**: two metals that expand by different amounts, so it bends when heated. Used in electric irons and fire alarms to make or break a circuit."
        ] },
      { heading: "Three ways heat is transferred",
        table: [
          ["", "Conduction", "Convection", "Radiation"],
          ["How", "Energy passed by collisions of particles; no movement of the medium", "Movement of the fluid itself; hotter, less dense fluid rises; colder, denser fluid sinks -> convection current", "Transfer from hotter to colder body without needing a medium"],
          ["Best in", "Solids (particles closely packed)", "Liquids and gases only", "Works through a vacuum"],
          ["Example", "A metal spoon getting hot in soup", "Air conditioner placed high; heater placed low", "Heat from the Sun"]
        ] },
      { heading: "Radiation and surfaces",
        table: [["Surface", "Absorbing", "Emitting"], ["Dull, black", "Good absorber", "Good emitter"], ["Shiny, white", "Poor absorber", "Poor emitter"]],
        points: ["In hot places, wear shiny white to stay cool. Use dull black to warm up faster.", "Rate of radiation also depends on surface area and temperature difference."] }
    ],
    keyTerms: [
      ["Temperature", "A measure of how hot an object is (K)."],
      ["Conduction", "Heat transfer through collisions of particles, without movement of the medium."],
      ["Convection", "Heat transfer by the movement of a fluid."],
      ["Convection current", "Circulation of a fluid as hot fluid rises and cold fluid sinks."],
      ["Radiation", "Heat transfer without a medium."],
      ["Bimetallic strip", "Two metals joined together that bend when heated."]
    ],
    video: { id: "BVqWR1lPxek", title: "Radiation, conduction & convection (BBC Bitesize KS3 Physics)",
      think: "Why are air conditioners usually installed near the ceiling?" },
    sims: [
      { title: "Convection in the room", url: "https://javalab.org/en/room_convection_en/", embed: false,
        task: "Compare placing the air conditioner high and low. Which cools the room better? Why?" },
      { title: "Particle model of conduction", url: "https://javalab.org/en/conduction_2_en/", embed: false,
        task: "How does energy pass from the hot end to the cold end?" },
      { title: "Bimetal", url: "https://javalab.org/en/bimetal_en/", embed: false,
        task: "Heat the strip. Which metal ends up on the outside of the curve?" }
    ],
    quiz: [
      { q: "What is the SI unit of temperature?",
        options: ["Kelvin (K)", "Degree Celsius (°C)", "Joule (J)", "Watt (W)"],
        answer: 0, explain: "The SI unit is the kelvin, although °C is commonly used." },
      { q: "In which state of matter is conduction most effective?",
        options: ["Solid", "Liquid", "Gas", "Vacuum"],
        answer: 0, explain: "Particles in solids are closely packed, so energy passes quickly through collisions." },
      { q: "Convection can only take place in…",
        options: ["liquids and gases", "solids only", "a vacuum", "metals"],
        answer: 0, explain: "Convection needs the medium itself to move." },
      { q: "How does heat from the Sun reach the Earth?",
        options: ["Radiation", "Conduction", "Convection", "Evaporation"],
        answer: 0, explain: "Space is a vacuum; only radiation needs no medium." },
      { q: "Which T-shirt keeps you coolest under the hot sun?",
        options: ["Shiny white", "Dull black", "Dark blue", "Dull brown"],
        answer: 0, explain: "Shiny white surfaces are poor absorbers of radiation." },
      { q: "Why are gaps left between railway tracks?",
        options: ["To allow for expansion on hot days", "To let water drain", "To reduce friction", "To save metal"],
        answer: 0, explain: "Without gaps, the rails would buckle when they expand." },
      { q: "In convection, hot water rises because it…",
        options: ["expands and becomes less dense", "becomes heavier", "contracts", "loses energy"],
        answer: 0, explain: "Hotter fluid expands, becomes less dense and rises." },
      { q: "A bimetallic strip bends when heated because…",
        options: ["the two metals expand by different amounts", "both metals contract", "the metals melt", "the strip loses mass"],
        answer: 0, explain: "The metal that expands more ends up on the outside of the curve." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-11", num: 11, group: "Interactions",
    title: "Chemical Changes",
    question: "How can we tell when a new substance is formed?",
    mascot: "assets/img/mascots/colour-change.png",
    images: [{ src: IMG + "s2-04-chemical-changes.jpg", title: "Interactions — Chemical Changes" }],
    objectives: [
      "Distinguish physical and chemical changes",
      "Use word equations; recognise that atoms are rearranged and mass is conserved",
      "Name types of chemical change: combustion, thermal decomposition, oxidation, neutralisation",
      "Describe properties of acids and alkalis and their effect on indicators",
      "Describe reactions of acids with alkalis, and (G3) with metals and carbonates"
    ],
    summary: [
      { heading: "Physical vs chemical change",
        table: [
          ["Physical change", "Chemical change"],
          ["No new substances formed", "One or more new substances (products) formed"],
          ["Usually reversible, e.g. melting and freezing", "Usually not easily reversed"],
          ["e.g. ice -> water", "e.g. 2H~2~ + O~2~ -> 2H~2~O"]
        ],
        points: ["Atoms are rearranged, not created or destroyed: number of each type of atom is the same on both sides -> **conservation of mass**.", "Examples: **combustion**, **thermal decomposition**, **oxidation** (rusting, respiration)."] },
      { heading: "Acids and alkalis",
        table: [
          ["", "Acid", "Alkali"],
          ["Definition", "Dissolves in water to produce **H^+^ ions**", "Reacts with acids to give salt and water"],
          ["pH", "< 7", "> 7"],
          ["Litmus", "Blue -> red", "Red -> blue"],
          ["Universal Indicator", "Red / orange / yellow", "Purple / blue"],
          ["Other", "Tastes sour", "Tastes bitter, feels soapy"],
          ["Examples", "Hydrochloric, nitric, sulfuric, ethanoic acid (vinegar)", "Sodium hydroxide (soap), aqueous ammonia, baking soda"]
        ] },
      { heading: "Reactions of acids",
        table: [
          ["Reaction", "Products", "Test for gas"],
          ["acid + alkali", "salt + water (neutralisation)", "—"],
          ["acid + metal (G3)", "salt + **hydrogen**", "Lighted splint goes out with a 'pop'"],
          ["acid + carbonate (G3)", "salt + water + **carbon dioxide**", "White precipitate in limewater"]
        ],
        tip: "Naming the salt: hydrochloric acid -> chloride; nitric acid -> nitrate; sulfuric acid -> sulfate. E.g. hydrochloric acid + sodium hydroxide -> sodium chloride + water." }
    ],
    keyTerms: [
      ["Physical change", "A change where no new substance is formed."],
      ["Chemical change", "A change where new substances are formed."],
      ["Reactants / products", "Substances that react / substances formed."],
      ["Conservation of mass", "Total mass stays the same in a reaction because atoms are only rearranged."],
      ["Neutralisation", "Acid + alkali -> salt + water."],
      ["Indicator", "A substance that changes colour in acids and alkalis."]
    ],
    video: { id: "vF_LIrbAAuo", title: "KS3 Science: Chemical changes and physical changes",
      think: "Is cooking an egg a physical or chemical change? How do you know?" },
    sims: [
      { title: "pH Scale: Basics", url: phet("ph-scale-basics"), embed: true,
        task: "Test five household liquids. Classify each as acidic, neutral or alkaline." },
      { title: "Neutralization Reaction Model", url: "https://javalab.org/en/neutralization_reaction_en/", embed: false,
        task: "Add acid to alkali slowly. What forms when H^+^ meets OH^−^?" }
    ],
    quiz: [
      { q: "Which is a chemical change?",
        options: ["Burning paper", "Melting ice", "Dissolving sugar", "Boiling water"],
        answer: 0, explain: "Burning forms new substances (carbon dioxide, water, ash)." },
      { q: "In a chemical reaction, the total mass…",
        options: ["stays the same", "always increases", "always decreases", "becomes zero"],
        answer: 0, explain: "Atoms are rearranged, not created or destroyed." },
      { q: "A solution turns Universal Indicator purple. It is…",
        options: ["a strong alkali", "a strong acid", "neutral", "a weak acid"],
        answer: 0, explain: "Purple means high pH (strongly alkaline)." },
      { q: "Hydrochloric acid + sodium hydroxide -> ?",
        options: ["sodium chloride + water", "sodium sulfate + water", "sodium chloride + hydrogen", "sodium nitrate + carbon dioxide"],
        answer: 0, explain: "Acid + alkali -> salt + water. Hydrochloric acid forms chloride salts." },
      { q: "Magnesium reacts with nitric acid. Which gas is produced?",
        options: ["Hydrogen", "Carbon dioxide", "Oxygen", "Chlorine"],
        answer: 0, explain: "acid + metal -> salt + hydrogen." },
      { q: "Which test confirms carbon dioxide?",
        options: ["It forms a white precipitate in limewater", "It relights a glowing splint", "It gives a 'pop' with a lighted splint", "It turns red litmus blue"],
        answer: 0, explain: "CO~2~ turns limewater milky." },
      { q: "Rusting of iron is an example of…",
        options: ["oxidation", "thermal decomposition", "neutralisation", "a physical change"],
        answer: 0, explain: "Iron reacts with oxygen (and water) to form rust." },
      { q: "Which salt forms when sulfuric acid reacts with zinc carbonate?",
        options: ["Zinc sulfate", "Zinc chloride", "Zinc nitrate", "Zinc carbonate"],
        answer: 0, explain: "Sulfuric acid forms sulfate salts." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-12", num: 12, group: "Interactions",
    title: "Interactions within Ecosystems",
    question: "How do living things interact with each other and their environment?",
    images: [{ src: IMG + "s2-05-ecosystems.jpg", title: "Interactions — Ecosystems" }],
    objectives: [
      "Describe habitats and how physical factors affect survival",
      "Explain how structural and behavioural adaptations help organisms survive",
      "Describe an ecosystem: organism, population, community and physical environment",
      "Describe predator–prey, mutualism and parasitism",
      "Explain energy flow through food chains and webs; (G3) describe the role of decomposers in recycling nutrients"
    ],
    summary: [
      { heading: "Habitats and adaptations",
        points: [
          "A **habitat** is where organisms live, each with a certain environment. Rainforest: warm, humid, high rainfall. Mangrove swamp: lots of sunlight, seawater at high tide, dry at low tide.",
          "**Adaptations** help an organism survive long enough to reproduce.",
          "**Physical (structural)**: banded leaf monkey's long, strong arms to swing between trees; kacang putih moth's brown colour matches tree bark.",
          "**Behavioural**: monkeys stay in groups for protection; moth larvae roll up leaf edges to hide."
        ] },
      { heading: "Ecosystem",
        steps: ["**Organism** — a single living thing", "**Population** — a group of the same organisms", "**Community** — different populations living together", "**Ecosystem** — a community interacting with its **physical environment**"] },
      { heading: "Interrelationships",
        table: [
          ["Relationship", "Who benefits?", "Example"],
          ["Predator–prey", "Predator benefits; prey is harmed", "Eagle and mouse"],
          ["Mutualism", "Both benefit", "Clownfish and sea anemone"],
          ["Parasitism", "Parasite benefits; host is harmed", "Tapeworm in a human"]
        ],
        tip: "When describing a relationship, state **clearly** how each organism is affected — positively or negatively." },
      { heading: "Food chains and food webs",
        points: [
          "A **food chain** shows feeding relationships. A **food web** shows how food chains are interconnected.",
          "**Producers** photosynthesise, capturing light energy as chemical potential energy in food.",
          "**Consumers** obtain energy by feeding on other organisms (primary, secondary…).",
          "**Decomposers** feed on dead organisms and faeces, returning nutrients to the soil.",
          "About **90% of energy is lost** at each level as heat (respiration), in faeces and in uneaten parts, so food chains are short.",
          "**Energy flows** through the chain (one way); **nutrients are recycled**."
        ] }
    ],
    keyTerms: [
      ["Habitat", "The place where an organism lives."],
      ["Adaptation", "A feature or behaviour that helps an organism survive in its habitat."],
      ["Population", "A group of organisms of the same kind in a habitat."],
      ["Community", "All the populations living in a habitat."],
      ["Ecosystem", "A community interacting with its physical environment."],
      ["Producer", "An organism that makes food by photosynthesis."],
      ["Decomposer", "An organism that feeds on dead matter and recycles nutrients."],
      ["Mutualism", "A relationship in which both organisms benefit."]
    ],
    video: { id: "pfLHMmsftG4", title: "Food chains (BBC Bitesize KS3 Biology)",
      think: "Why do food chains rarely have more than four or five levels?" },
    sims: [
      { title: "Ecosystem Simulation", url: "https://javalab.org/en/ecosystem_v2_en/", embed: false,
        task: "Increase the number of predators. What happens to the prey population, and then to the predators?" }
    ],
    quiz: [
      { q: "Which organisms are producers?",
        options: ["Green plants", "Lions", "Mushrooms", "Caterpillars"],
        answer: 0, explain: "Producers make their own food by photosynthesis." },
      { q: "A group of the same species living in the same place is a…",
        options: ["population", "community", "ecosystem", "habitat"],
        answer: 0, explain: "Different populations together form a community." },
      { q: "Clownfish live among sea anemones; both benefit. This is…",
        options: ["mutualism", "parasitism", "predator–prey", "competition"],
        answer: 0, explain: "Both organisms benefit in mutualism." },
      { q: "A tick feeds on a dog's blood. This relationship is…",
        options: ["parasitism", "mutualism", "predator–prey", "decomposition"],
        answer: 0, explain: "The tick (parasite) benefits; the dog (host) is harmed." },
      { q: "What is the main role of decomposers?",
        options: ["Break down dead matter and recycle nutrients", "Make food by photosynthesis", "Hunt prey", "Pollinate flowers"],
        answer: 0, explain: "Decomposers return nutrients to the environment." },
      { q: "Why is energy lost at each level of a food chain?",
        options: ["It is used for respiration and lost as heat, and in faeces", "Energy is destroyed", "Plants absorb it back", "It turns into nutrients"],
        answer: 0, explain: "About 90% is lost as heat, waste and uneaten parts." },
      { q: "A moth's brown colour matching tree bark is a…",
        options: ["physical (structural) adaptation", "behavioural adaptation", "food chain", "parasitic relationship"],
        answer: 0, explain: "It is a body feature that helps it avoid predators." },
      { q: "In the food chain grass -> grasshopper -> frog -> snake, the frog is a…",
        options: ["secondary consumer", "producer", "primary consumer", "decomposer"],
        answer: 0, explain: "It eats the primary consumer (grasshopper)." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-13", num: 13, group: "Systems",
    title: "Electrical Systems",
    question: "How do the parts of an electrical system work together safely?",
    images: [{ src: IMG + "s2-06-electrical-system.jpg", title: "Systems — Electrical System" }],
    objectives: [
      "Describe current (A), potential difference (V) and resistance (Ω)",
      "Draw and set up circuits with cells, switches, lamps, resistors, ammeters and voltmeters",
      "(G3) Investigate how resistors in series and parallel and a variable resistor affect current",
      "Describe the chemical, heating and magnetic effects of electric current",
      "Describe electrical hazards and safety devices",
      "(G3) Calculate the cost of electricity using kWh"
    ],
    summary: [
      { heading: "Circuit components",
        table: [
          ["Component", "Job"],
          ["Battery (more than one cell)", "Energy source to drive current"],
          ["Switch", "Opens / closes the circuit"],
          ["Bulb", "Converts electrical energy to light; has some resistance"],
          ["Ammeter", "Measures **current** in amperes (A); connected in **series**"],
          ["Voltmeter", "Measures **potential difference** in volts (V); connected in **parallel**"],
          ["Fixed resistor", "Increases resistance (Ω) to limit current"],
          ["Variable resistor (rheostat)", "Varies resistance; longer coil = more resistance = less current"]
        ],
        tip: "Conventional current flows from + to −; electrons flow from − to +." },
      { heading: "How arrangement affects output (G3)",
        points: [
          "**V = I × R**: when resistance increases, current decreases and the bulb is dimmer.",
          "Resistors in **series**: effective resistance **increases**, total current decreases, bulb **less bright**.",
          "Resistors in **parallel**: effective resistance **decreases**, total current increases, bulb **brighter**."
        ] },
      { heading: "Effects of electric current",
        table: [
          ["Useful effect", "Example"],
          ["Chemical", "Electroplating a surgical instrument with an inert metal"],
          ["Thermal (heating)", "Nichrome wire in an iron converts electrical to heat energy"],
          ["Magnetic", "An electromagnet: current through a coil around an iron core"]
        ] },
      { heading: "Harmful effects and safety",
        points: [
          "**Electric fire**: overloading sockets with many plugs draws large currents.",
          "**Electric shock**: touching exposed wires or poking objects into sockets, especially with wet hands.",
          "**Fuse**: melts when current exceeds its rating, breaking the circuit.",
          "**Circuit breaker**: trips when current becomes too large, e.g. from a faulty appliance.",
          "Replace damaged insulation; never touch switches with wet hands."
        ] },
      { heading: "Cost of electricity (G3)",
        text: "**E = P × t**. In joules: P in W, t in s. For cost: P in **kW**, t in **hours** -> E in **kWh**.",
        steps: ["Add up the total power of all appliances in kW.", "Convert the time to hours.", "Multiply P × t to get E in kWh.", "Multiply E by the cost per kWh."] }
    ],
    keyTerms: [
      ["Current", "Rate of flow of charge, in amperes (A)."],
      ["Potential difference", "The 'push' that drives current, in volts (V)."],
      ["Resistance", "Opposition to current, in ohms (Ω)."],
      ["Rheostat", "A variable resistor used to change the current."],
      ["Fuse", "A thin wire that melts if the current is too large."],
      ["Circuit breaker", "A switch that trips automatically when current is too large."],
      ["Kilowatt-hour (kWh)", "Energy used by a 1 kW appliance in 1 hour."]
    ],
    video: { id: "J-PtFOnkuDY", title: "KS3 Physics: Series and parallel circuits",
      think: "Two identical lamps are connected in parallel. If one breaks, what happens to the other?" },
    sims: [
      { title: "Circuit Construction Kit: DC", url: phet("circuit-construction-kit-dc"), embed: true,
        task: "Build a circuit with a battery, a bulb and an ammeter. Add a second resistor in series, then in parallel. Record the current each time." },
      { title: "Home Wiring", url: "https://javalab.org/en/indoor_wiring_en/", embed: false,
        task: "How are appliances at home connected? What happens when too many are switched on?" }
    ],
    quiz: [
      { q: "How is a voltmeter connected to measure the potential difference across a bulb?",
        options: ["In parallel with the bulb", "In series with the bulb", "Anywhere in the circuit", "Across the switch only"],
        answer: 0, explain: "Voltmeters are connected in parallel across the component." },
      { q: "What is the unit of resistance?",
        options: ["Ohm (Ω)", "Ampere (A)", "Volt (V)", "Watt (W)"],
        answer: 0, explain: "Resistance is measured in ohms." },
      { q: "Moving a rheostat's slider so current passes through more coils will…",
        options: ["increase resistance and decrease current", "decrease resistance and increase current", "have no effect", "increase both resistance and current"],
        answer: 0, explain: "A longer wire has more resistance, so less current flows." },
      { q: "Adding a second resistor in series makes the bulb…",
        options: ["dimmer", "brighter", "go out immediately", "unchanged"],
        answer: 0, explain: "Total resistance increases, so current decreases." },
      { q: "Which device melts to break the circuit when current is too large?",
        options: ["Fuse", "Switch", "Ammeter", "Rheostat"],
        answer: 0, explain: "A fuse wire melts when current exceeds its rating." },
      { q: "An electric iron uses which effect of current?",
        options: ["Heating", "Magnetic", "Chemical", "Light"],
        answer: 0, explain: "High-resistance nichrome converts electrical energy to heat." },
      { q: "A 2 kW heater is used for 3 hours. Electricity costs $0.30 per kWh. What is the cost?",
        options: ["$1.80", "$0.60", "$6.00", "$0.90"],
        answer: 0, explain: "E = 2 × 3 = 6 kWh; cost = 6 × 0.30 = $1.80." },
      { q: "Why is it dangerous to plug many appliances into one socket?",
        options: ["The large current can overheat the wires and cause a fire", "It lowers the voltage to zero", "It makes appliances work faster", "It makes the fuse stronger"],
        answer: 0, explain: "Overloading draws a large current, which heats the wires." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-14", num: 14, group: "Systems",
    title: "Human Digestive System",
    question: "How do the parts of the digestive system work together?",
    images: [{ src: IMG + "s2-07-digestive-system.jpg", title: "Systems — Digestive System" }],
    objectives: [
      "Explain the importance of the digestive system",
      "Describe how the mouth, oesophagus, stomach, small intestine, large intestine, rectum and anus work together",
      "(G3) Describe the action of carbohydrases, proteases and lipases and how the products of digestion are used",
      "Describe diabetes and how lifestyle choices help prevent it",
      "Describe the beneficial and harmful effects of bacteria"
    ],
    summary: [
      { heading: "Parts of the digestive system",
        table: [
          ["Part", "What happens"],
          ["1. Mouth", "Physical: chewing. Chemical: saliva contains **carbohydrases** that digest starch into simpler sugars"],
          ["2. Oesophagus", "Moves food to the stomach by **peristalsis**"],
          ["3. Stomach", "Physical: churns food. Chemical: gastric juice contains **proteases**. Hydrochloric acid kills microorganisms and gives a low pH for proteases"],
          ["Gall bladder", "Stores bile, which **emulsifies** fats"],
          ["Pancreas", "Releases pancreatic juice containing enzymes into the small intestine"],
          ["4. Small intestine", "Intestinal juice contains carbohydrases, proteases and lipases to **complete digestion**. Villi increase surface area for **absorption** of digested food into the blood"],
          ["5. Large intestine", "Absorbs some water and mineral salts"],
          ["6. Rectum / 7. Anus", "Stores faeces / releases faeces"]
        ] },
      { heading: "Chemical digestion (G3: uses)",
        table: [
          ["Food", "Enzyme", "Product", "Used for"],
          ["Carbohydrates (starch)", "Carbohydrases (saliva, intestinal juice)", "Simple sugars, e.g. glucose", "Respiration to release energy"],
          ["Proteins", "Proteases (gastric, intestinal juice)", "Amino acids", "Tissue repair and cell growth"],
          ["Fats (lipids)", "Lipases (intestinal juice)", "Glycerol and fatty acids", "Making fats in the body"]
        ] },
      { heading: "Diabetes",
        points: [
          "Blood sugar level is **too high** because the pancreas makes too little **insulin**, or the body does not respond to insulin.",
          "Signs: slow-healing wounds, constant hunger, frequent urination, tingling in hands and feet, unexplained weight loss, blurred vision.",
          "Reduce risk: eat a balanced diet with less sugar, exercise regularly."
        ] },
      { heading: "Bacteria",
        table: [["Beneficial", "Harmful"], ["Help fight some diseases; help absorb nutrients; digest some food; used to make cheese, yoghurt, bread", "Contaminated food can cause diarrhoea or vomiting. Prevent by handling and choosing food carefully"]] }
    ],
    keyTerms: [
      ["Digestion", "Breaking down large food molecules into small, soluble ones."],
      ["Peristalsis", "Wave-like muscle contractions that push food along the gut."],
      ["Enzyme", "A biological catalyst that speeds up the breakdown of food."],
      ["Absorption", "Movement of digested food into the bloodstream."],
      ["Villi", "Finger-like projections in the small intestine that increase surface area."],
      ["Bile", "Liquid that emulsifies fats into small droplets."],
      ["Diabetes", "A disease where the blood sugar level is too high."]
    ],
    video: { id: "SnH8yrRPhHk", title: "Key Stage 3 Science (Biology): Digestion",
      think: "Why is the small intestine so long and folded?" },
    sims: [
      { title: "The digestive system viewed from topology", url: "https://javalab.org/en/digestive_tract_en/", embed: false,
        task: "Trace food from mouth to anus. Where are carbohydrates, proteins and fats digested?" }
    ],
    quiz: [
      { q: "Where does protein digestion begin?",
        options: ["Stomach", "Mouth", "Large intestine", "Oesophagus"],
        answer: 0, explain: "Gastric juice in the stomach contains proteases." },
      { q: "How is food moved down the oesophagus?",
        options: ["Peristalsis", "Gravity only", "Diffusion", "Chewing"],
        answer: 0, explain: "Wave-like muscle contractions push food along." },
      { q: "Which enzymes digest fats?",
        options: ["Lipases", "Proteases", "Carbohydrases", "Amylases only"],
        answer: 0, explain: "Lipases break fats into glycerol and fatty acids." },
      { q: "Where is most digested food absorbed into the blood?",
        options: ["Small intestine", "Stomach", "Large intestine", "Rectum"],
        answer: 0, explain: "Villi in the small intestine give a large surface area for absorption." },
      { q: "Proteins are digested into…",
        options: ["amino acids", "glucose", "glycerol", "fatty acids"],
        answer: 0, explain: "Amino acids are used for growth and repair." },
      { q: "What does bile do?",
        options: ["Emulsifies fats", "Digests proteins", "Kills all bacteria", "Absorbs water"],
        answer: 0, explain: "Bile breaks fats into small droplets for lipases to work on." },
      { q: "Diabetes is a condition where…",
        options: ["blood sugar level is too high", "blood pressure is too low", "the stomach makes no acid", "bones become weak"],
        answer: 0, explain: "It is caused by too little insulin or the body not responding to it." },
      { q: "What is the main job of the large intestine?",
        options: ["Absorb water and mineral salts", "Digest starch", "Produce bile", "Store food for weeks"],
        answer: 0, explain: "It absorbs remaining water and minerals before faeces form." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-15", num: 15, group: "Systems",
    title: "Transport Systems",
    question: "How are substances transported in humans and plants?",
    images: [{ src: IMG + "s2-08-transport-system.jpg", title: "Systems — Transport System" }],
    objectives: [
      "Describe the functions of arteries, veins and capillaries, the heart and the parts of blood",
      "Explain how diffusion helps transport substances in humans and plants",
      "(G3) Describe how xylem and phloem transport substances in plants",
      "(G3) State that osmosis helps roots absorb water"
    ],
    summary: [
      { heading: "Circulatory system (humans)",
        table: [
          ["Part", "Function / feature"],
          ["Artery", "Carries blood **away** from the heart; mainly oxygenated; thick walls withstand high pressure"],
          ["Vein", "Carries blood **towards** the heart; mainly deoxygenated; has **valves** to prevent backflow"],
          ["Capillary", "Site of **exchange** of substances; walls one cell thick for fast diffusion"],
          ["Heart", "Muscular pump that circulates blood throughout the body"]
        ] },
      { heading: "Blood",
        table: [
          ["Component", "Function"],
          ["Red blood cell", "Transports oxygen; no nucleus (more haemoglobin); biconcave shape increases surface area for faster diffusion"],
          ["White blood cell", "Fights infections; part of the immune system"],
          ["Platelet", "Helps blood clot to protect wounds from infection"],
          ["Plasma", "Transports water, digested food, mineral salts and waste products"]
        ] },
      { heading: "Diffusion and osmosis",
        points: [
          "**Diffusion**: net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient.",
          "**Osmosis** (G3): net movement of **water molecules** from a region of higher water potential to lower water potential through a **partially permeable membrane**.",
          "Visking tubing experiment: iodine molecules are small enough to diffuse in; starch molecules are too large to diffuse out. Only the solution inside turns blue-black."
        ] },
      { heading: "Transport in plants",
        points: [
          "**Photosynthesis**: carbon dioxide + water -> glucose + oxygen (in light).",
          "Carbon dioxide diffuses in, and oxygen and water vapour diffuse out, through **stomata**, controlled by **guard cells**.",
          "**Root hair cells**: long extension increases surface area for faster diffusion of mineral salts and (G3) osmosis of water.",
          "**Xylem** (G3) carries water and mineral salts **up** from the roots. **Phloem** (G3) carries sugar from the leaves to all parts of the plant."
        ] }
    ],
    keyTerms: [
      ["Artery", "Blood vessel that carries blood away from the heart."],
      ["Vein", "Blood vessel that carries blood to the heart; has valves."],
      ["Capillary", "Tiny vessel where substances are exchanged."],
      ["Diffusion", "Net movement of particles from higher to lower concentration."],
      ["Osmosis", "Net movement of water through a partially permeable membrane from higher to lower water potential."],
      ["Xylem", "Tubes carrying water and mineral salts from roots to leaves."],
      ["Phloem", "Tubes carrying sugars from the leaves to the rest of the plant."],
      ["Stomata", "Pores on leaves for gas exchange."]
    ],
    video: { id: "iIL94TmYG6g", title: "Blood vessels: arteries, veins & capillaries",
      think: "Why do veins need valves but arteries do not?" },
    sims: [
      { title: "Diffusion", url: phet("diffusion"), embed: true,
        task: "Set up a high concentration on one side. Predict the direction of net movement, then test." }
    ],
    quiz: [
      { q: "Which blood vessel carries blood away from the heart?",
        options: ["Artery", "Vein", "Capillary", "Valve"],
        answer: 0, explain: "Arteries carry blood away from the heart at high pressure." },
      { q: "Why are capillary walls only one cell thick?",
        options: ["For faster diffusion of substances", "To withstand high pressure", "To prevent backflow", "To store blood"],
        answer: 0, explain: "A short diffusion distance speeds up exchange." },
      { q: "What is the function of valves in veins?",
        options: ["Prevent backflow of blood", "Pump blood", "Carry oxygen", "Clot blood"],
        answer: 0, explain: "Blood in veins is at low pressure; valves stop it flowing backwards." },
      { q: "Which part of blood helps it to clot?",
        options: ["Platelets", "Red blood cells", "Plasma", "White blood cells"],
        answer: 0, explain: "Platelets help form clots at wounds." },
      { q: "Which part of blood carries digested food?",
        options: ["Plasma", "Red blood cells", "Platelets", "White blood cells"],
        answer: 0, explain: "Plasma carries dissolved food, mineral salts and waste." },
      { q: "Which tissue carries water from the roots to the leaves?",
        options: ["Xylem", "Phloem", "Stomata", "Guard cells"],
        answer: 0, explain: "Xylem transports water and mineral salts upwards." },
      { q: "Starch solution in Visking tubing is placed in iodine solution. What is observed?",
        options: ["Only the solution inside the tubing turns blue-black", "Only the outside turns blue-black", "Both turn blue-black", "Nothing changes"],
        answer: 0, explain: "Iodine diffuses in; starch molecules are too large to diffuse out." },
      { q: "Through which structures does carbon dioxide enter a leaf?",
        options: ["Stomata", "Xylem", "Root hairs", "Phloem"],
        answer: 0, explain: "Gases diffuse in and out through stomata." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lss-16", num: 16, group: "Systems",
    title: "Human Sexual Reproductive System",
    question: "How does the human reproductive system work, and how do we make responsible choices?",
    images: [{ src: IMG + "s2-09-reproductive-system-1.jpg", title: "Reproductive System — Organs, Fertilisation, Menstrual Cycle" }, { src: IMG + "s2-10-reproductive-system-2.jpg", title: "Reproductive System — Birth Control, STIs, Puberty" }],
    objectives: [
      "Describe the parts of the male and female reproductive systems and their functions",
      "Describe fertilisation and recognise that reproduction passes on genetic information (heredity)",
      "Describe the menstrual cycle",
      "Describe the physical changes during puberty",
      "Outline how temporary and permanent birth control methods work",
      "State the harmful consequences of STIs, and that bacterial STIs can be treated with antibiotics but viral STIs cannot"
    ],
    summary: [
      { heading: "Male reproductive system",
        table: [
          ["Part", "Function"],
          ["Testis", "Produces sperm and male sex hormones"],
          ["Sperm duct", "Carries sperm from the testes to the urethra"],
          ["Sex glands", "Produce fluid that nourishes sperm (semen)"],
          ["Urethra", "Carries urine, and sperm and semen during ejaculation"],
          ["Penis", "Deposits semen into the vagina"]
        ] },
      { heading: "Female reproductive system",
        table: [
          ["Part", "Function"],
          ["Ovary", "Produces eggs and female sex hormones"],
          ["Oviduct", "Tube where the egg is released; site of fertilisation"],
          ["Uterus", "Where a fertilised egg develops into a foetus"],
          ["Cervix", "Muscular ring at the opening of the uterus"],
          ["Vagina", "Where sperm are deposited"]
        ] },
      { heading: "Fertilisation and heredity",
        points: [
          "**Heredity** is the passing of genetic information from one generation to the next.",
          "Sperm swim through the cervix and uterus into the oviduct. **Fertilisation** is the fusion of the nucleus of a sperm with the nucleus of an egg."
        ] },
      { heading: "Menstrual cycle (about 28 days)",
        table: [
          ["Days", "What happens"],
          ["1–5", "**Menstruation**: uterine lining breaks down and is discharged through the vagina"],
          ["6–9", "Uterine lining is repaired"],
          ["10–15", "**Fertile period**; **ovulation** (an egg is released) around day 14"],
          ["16–28", "Uterine lining continues to thicken"]
        ],
        tip: "An egg survives about 1 day; sperm can survive about 3–5 days." },
      { heading: "Puberty",
        table: [
          ["Male only", "Both", "Female only"],
          ["Voice deepens, facial hair, muscle strength increases", "Height and weight increase, armpit and pubic hair grow, sperm produced / eggs mature", "Hips widen, breasts develop"]
        ] },
      { heading: "Birth control methods",
        table: [
          ["Method", "How it works", "Type"],
          ["Abstinence", "No sexual intercourse — no pregnancy and no STI transmission", "—"],
          ["Condom / diaphragm", "Physical barrier stops sperm reaching the egg", "Temporary"],
          ["Spermicide", "Chemicals kill / disable sperm", "Temporary"],
          ["Birth control pills", "Hormones prevent ovulation", "Temporary"],
          ["Intra-uterine device", "Prevents fertilisation and implantation", "Temporary"],
          ["Rhythm method", "Avoid intercourse in the fertile period — unreliable", "Temporary"],
          ["Vasectomy / tubal ligation", "Cut and tie the sperm ducts / oviducts", "Permanent"]
        ] },
      { heading: "Sexually transmitted infections (STIs)",
        points: [
          "Spread mainly through sexual intercourse (exchange of bodily fluids); also blood transfusion, sharing needles, and from mother to child.",
          "**Syphilis** and **gonorrhoea**: bacterial, **treatable with antibiotics**; long-term effects include infertility.",
          "**HIV**: viral, **incurable**; develops into AIDS and can lead to death."
        ] }
    ],
    keyTerms: [
      ["Fertilisation", "Fusion of the nucleus of a sperm with the nucleus of an egg."],
      ["Ovulation", "Release of an egg from the ovary."],
      ["Menstruation", "Breakdown and discharge of the uterine lining."],
      ["Puberty", "Physical changes to mature sexually, triggered by sex hormones."],
      ["Heredity", "Passing down of genetic information from parents to offspring."],
      ["STI", "Sexually transmitted infection."]
    ],
    video: { id: "N2G1XWVs69g", title: "KS3 Reproduction (BBC Bitesize Biology)",
      think: "Where in the female reproductive system does fertilisation take place?" },
    sims: [],
    quiz: [
      { q: "Where are sperm produced?",
        options: ["Testes", "Sperm duct", "Urethra", "Sex glands"],
        answer: 0, explain: "The testes produce sperm and male sex hormones." },
      { q: "Where does fertilisation usually take place?",
        options: ["Oviduct", "Uterus", "Vagina", "Ovary"],
        answer: 0, explain: "The sperm meets the egg in the oviduct." },
      { q: "What is fertilisation?",
        options: ["Fusion of the nuclei of a sperm and an egg", "Release of an egg", "Breakdown of the uterine lining", "Production of sperm"],
        answer: 0, explain: "Fertilisation is the fusion of the male and female nuclei." },
      { q: "In a 28-day cycle, ovulation usually occurs around…",
        options: ["day 14", "day 1", "day 5", "day 28"],
        answer: 0, explain: "An egg is released around the middle of the cycle." },
      { q: "During days 1–5 of the menstrual cycle…",
        options: ["the uterine lining breaks down and is discharged", "an egg is released", "the lining is thickest", "fertilisation happens"],
        answer: 0, explain: "This is menstruation." },
      { q: "Which is a permanent birth control method?",
        options: ["Vasectomy", "Condom", "Birth control pills", "Spermicide"],
        answer: 0, explain: "Cutting and tying the sperm ducts is permanent." },
      { q: "Which STI is caused by a virus and is currently incurable?",
        options: ["HIV", "Syphilis", "Gonorrhoea", "None of these"],
        answer: 0, explain: "HIV is viral; syphilis and gonorrhoea are bacterial and treatable with antibiotics." },
      { q: "Which is a change during puberty in both males and females?",
        options: ["Growth of armpit and pubic hair", "Voice deepens", "Hips widen", "Facial hair grows"],
        answer: 0, explain: "Armpit and pubic hair growth happens in both." }
    ]
  }
  ]
};
})();
