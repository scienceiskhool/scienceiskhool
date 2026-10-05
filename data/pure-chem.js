/* =====================================================================
   UPPER SEC PURE CHEMISTRY (6092) — chapter content
   Formatting: **bold**  H~2~O (subscript)  Cu^2+^ (superscript)  -> (arrow)
   Quiz `answer` = position of the correct option counting from 0.
   ===================================================================== */
window.COURSES = window.COURSES || {};
(function () {
  var IMG = "assets/summaries/pure-chem/";
  var phet = function (n) { return "https://phet.colorado.edu/sims/html/" + n + "/latest/" + n + "_en.html"; };
  var img = function (f, t) { return { src: IMG + f, title: t }; };

window.COURSES["pure-chem"] = {
  id: "pure-chem",
  name: "Pure Chemistry (6092)",
  short: "Pure Chem",
  color: "yellow",   /* sticker colour: teal, orange, yellow or pink */
  blurb: "O-Level Chemistry 6092 — all 12 topics, including electrochemistry, salts and polymers.",
  syllabus: { label: "SEAB O-Level Chemistry 6092 syllabus", url: "https://www.seab.gov.sg/" },
  chapters: [

  /* ------------------------------------------------------------------ */
  {
    id: "pc-01", num: 1, group: "I. Matter — Structures and Properties",
    title: "Experimental Chemistry",
    question: "How do chemists measure, collect, dry, separate and purify substances?",
    mascot: "assets/img/mascots/test-tube.png",
    images: [img("01-experimental-techniques.jpg", "Experimental Techniques"), img("07-separation-techniques.jpg", "Separation Techniques"), img("25-practical.jpg", "Practical Skills")],
    objectives: [
      "Name apparatus for measuring time, temperature, mass and volume",
      "Suggest apparatus to collect and dry gases (CaO, conc. H~2~SO~4~, fused CaCl~2~)",
      "Describe filtration, crystallisation, evaporation, sublimation, distillation, fractional distillation, separating funnel and paper chromatography",
      "Interpret chromatograms, use R~f~ values and explain locating agents",
      "Use melting and boiling points to judge purity, and explain why purity matters"
    ],
    summary: [
      { heading: "Measuring",
        table: [
          ["Quantity", "Apparatus", "Precision"],
          ["Volume", "Measuring cylinder", "0.5 or 1 cm^3^"],
          ["Fixed volume", "Pipette", "e.g. 25.0 cm^3^"],
          ["Titration volume", "Burette", "0.05 cm^3^"],
          ["Gas volume", "Gas syringe", "1 cm^3^"],
          ["Mass / temperature / time", "Electronic balance / thermometer / stopwatch", "0.01 g / 0.5 °C / 0.1 s"]
        ] },
      { heading: "Collecting gases",
        table: [
          ["Method", "Use for", "Examples"],
          ["Downward delivery", "Gases denser than air", "CO~2~, Cl~2~, SO~2~, HCl"],
          ["Upward delivery", "Gases less dense than air", "NH~3~, H~2~"],
          ["Displacement of water", "Gases insoluble / slightly soluble in water", "H~2~, O~2~, CO~2~"],
          ["Gas syringe", "Measuring volume", "Any gas"]
        ] },
      { heading: "Drying gases",
        table: [
          ["Drying agent", "Suitable for", "NOT for"],
          ["Concentrated sulfuric acid", "Acidic / neutral gases, e.g. CO~2~, HCl, Cl~2~", "Basic gases, e.g. NH~3~"],
          ["Calcium oxide (quicklime)", "Basic / neutral gases — the only one for **NH~3~**", "Acidic gases, e.g. CO~2~"],
          ["Fused calcium chloride", "Most gases", "NH~3~ (reacts with it)"]
        ] },
      { heading: "Separation and purification",
        table: [
          ["Mixture", "Method"],
          ["Insoluble solid + liquid", "Filtration"],
          ["Soluble solid from solution", "Evaporation to dryness, or **crystallisation** (heat to saturation, cool, filter, wash with cold distilled water, dry)"],
          ["Solid that sublimes (e.g. iodine, NH~4~Cl) + other solid", "**Sublimation**"],
          ["Liquid from solution", "Simple distillation"],
          ["Miscible liquids", "Fractional distillation"],
          ["Immiscible liquids (e.g. oil and water)", "**Separating funnel**"],
          ["Dissolved coloured substances", "Paper chromatography"]
        ] },
      { heading: "Chromatography",
        points: [
          "Pencil start line, above the solvent level. Compare spots with known samples.",
          "**R~f~ = distance moved by spot ÷ distance moved by solvent front**. R~f~ is always less than 1 and is constant for a substance in a given solvent.",
          "**Locating agents** are sprayed to make spots of colourless substances visible.",
          "A pure substance gives **one** spot."
        ] },
      { heading: "Purity",
        points: [
          "Pure substances have a **fixed** melting / boiling point.",
          "Impurities **lower and broaden** the melting point, and **raise** the boiling point.",
          "Purity matters in **food and drugs** — impurities may be harmful."
        ] }
    ],
    keyTerms: [
      ["R~f~ value", "Distance travelled by a spot ÷ distance travelled by the solvent front."],
      ["Locating agent", "Chemical sprayed to make colourless spots visible."],
      ["Sublimation", "Change directly from solid to gas on heating."],
      ["Immiscible", "Liquids that do not mix and form layers."],
      ["Drying agent", "A substance that removes water vapour from a gas."],
      ["Saturated solution", "Contains the maximum solute at that temperature."]
    ],
    video: { id: "NTEGJj3yXNE", title: "GCSE Chemistry: Separating mixtures",
      think: "Which method separates oil from water? Which separates ethanol from water?" },
    sims: [
      { title: "Distillation", url: "https://javalab.org/en/distillation_en/", embed: false,
        task: "Watch the thermometer reading. Explain why it stays constant while the first distillate is collected." }
    ],
    quiz: [
      { q: "Which drying agent should be used for ammonia?",
        options: ["Calcium oxide", "Concentrated sulfuric acid", "Fused calcium chloride", "Silica gel soaked in acid"],
        answer: 0, explain: "NH~3~ is basic; it reacts with H~2~SO~4~ and CaCl~2~. CaO is basic, so it doesn't react." },
      { q: "Which method separates a mixture of oil and water?",
        options: ["Separating funnel", "Filtration", "Fractional distillation", "Chromatography"],
        answer: 0, explain: "Oil and water are immiscible and form two layers." },
      { q: "A spot travels 3.0 cm and the solvent front travels 7.5 cm. What is the R~f~ value?",
        options: ["0.40", "2.5", "4.5", "10.5"],
        answer: 0, explain: "R~f~ = 3.0 ÷ 7.5 = 0.40." },
      { q: "Why is a locating agent used in chromatography?",
        options: ["To make colourless spots visible", "To make the solvent move faster", "To dissolve the sample", "To mark the start line"],
        answer: 0, explain: "Colourless components cannot be seen without a locating agent." },
      { q: "How can iodine be separated from sand?",
        options: ["Sublimation", "Filtration", "Distillation", "Separating funnel"],
        answer: 0, explain: "Iodine sublimes when heated and can be collected on a cold surface." },
      { q: "A sample of aspirin melts between 128 °C and 133 °C. Pure aspirin melts at 136 °C. This shows the sample is…",
        options: ["impure", "pure", "a gas at room temperature", "a different substance entirely"],
        answer: 0, explain: "Impurities lower the melting point and make it melt over a range." },
      { q: "Which gas is best collected by downward delivery?",
        options: ["Chlorine", "Hydrogen", "Ammonia", "Helium"],
        answer: 0, explain: "Chlorine is denser than air." },
      { q: "Why is purity especially important in medicines?",
        options: ["Impurities may be harmful to the patient", "Pure drugs taste better", "Impure drugs are cheaper to make", "Purity changes the colour"],
        answer: 0, explain: "Even small amounts of impurities in drugs can cause harm." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-02", num: 2, group: "I. Matter — Structures and Properties",
    title: "The Particulate Nature of Matter",
    question: "How does the particle model explain matter, diffusion and atomic structure?",
    images: [img("02-particulate-nature.jpg", "Particulate Nature of Matter"), img("04-atomic-structure.jpg", "Atomic Structure")],
    objectives: [
      "Describe and explain changes of state using the kinetic particle theory, including heating and cooling curves",
      "Describe evidence for particle movement and explain diffusion",
      "State how molecular mass and temperature affect the rate of diffusion",
      "Describe atomic structure; use nuclide notation; define isotopes",
      "Deduce numbers of protons, neutrons and electrons in atoms and ions"
    ],
    summary: [
      { heading: "Kinetic particle theory",
        table: [
          ["", "Solid", "Liquid", "Gas"],
          ["Arrangement", "Very closely packed, orderly", "Closely packed, disorderly", "Far apart, disorderly"],
          ["Movement", "Vibrate about fixed positions", "Slide past one another", "Move rapidly, randomly"],
          ["Energy / forces", "Low energy; strong attraction holds particles in place", "More energy; some attractions overcome", "High energy; attractions overcome"]
        ] },
      { heading: "Heating / cooling curves",
        points: [
          "Sloping parts: temperature changes as particles gain/lose kinetic energy.",
          "**Flat parts** (melting / boiling): temperature stays **constant** — energy is used to overcome forces of attraction between particles.",
          "Identify the state: below m.p. solid; between m.p. and b.p. liquid; above b.p. gas."
        ] },
      { heading: "Diffusion",
        points: [
          "Net movement of particles from a region of **higher** to **lower** concentration, e.g. perfume, cooking smells, tea spreading in water.",
          "**Lower molecular mass** -> faster diffusion. **Higher temperature** -> faster diffusion (particles have more kinetic energy).",
          "Classic experiment: NH~3~ and HCl in a tube form a white ring of NH~4~Cl **closer to the HCl end**, because NH~3~ (M~r~ 17) diffuses faster than HCl (M~r~ 36.5)."
        ] },
      { heading: "Atomic structure",
        table: [
          ["Particle", "Relative mass", "Relative charge", "Location"],
          ["Proton", "1", "+1", "Nucleus"],
          ["Neutron", "1", "0", "Nucleus"],
          ["Electron", "1/1840", "−1", "Shells (2, 8, 8…)"]
        ],
        points: [
          "Nuclide notation ^A^~Z~X: A = nucleon number (p + n), Z = proton number.",
          "**Isotopes**: same number of protons, different number of neutrons. Same chemical properties (same electron arrangement) but different physical properties (e.g. density).",
          "Ions: Mg^2+^ has 12 p and 10 e; Cl^−^ has 17 p and 18 e."
        ] }
    ],
    keyTerms: [
      ["Diffusion", "Net movement of particles from higher to lower concentration."],
      ["Nucleon number", "Total protons + neutrons."],
      ["Proton number", "Number of protons; identifies the element."],
      ["Isotopes", "Atoms of the same element with different numbers of neutrons."],
      ["Ion", "A charged particle formed when an atom gains or loses electrons."]
    ],
    videos: [
      { label: "Particle theory", id: "OTksau0_VoI", title: "Particle theory and states of matter",
        think: "Why does the temperature stay constant while ice is melting?" },
      { label: "Atomic structure", id: "1xicKBfY4yM", title: "Atomic Structure (Science is Khool)",
        think: "How many protons, neutrons and electrons are in a Mg^2+^ ion (proton number 12, nucleon number 24)?" }
    ],
    sims: [
      { title: "States of Matter: Basics", url: phet("states-of-matter-basics"), embed: true,
        task: "Heat and cool the substance. Link what the particles do to the flat parts of a heating curve." },
      { title: "Diffusion", url: phet("diffusion"), embed: true,
        task: "Compare the rate of diffusion for light and heavy particles, and at high and low temperature." },
      { title: "Isotopes and Atomic Mass", url: phet("isotopes-and-atomic-mass"), embed: true,
        task: "Build ^12^C and ^13^C. What changes? What stays the same?" }
    ],
    quiz: [
      { q: "Why is the temperature constant while a substance is boiling?",
        options: ["Energy is used to overcome forces of attraction between particles", "No heat is being supplied", "Particles stop moving", "The substance is impure"],
        answer: 0, explain: "The energy goes into breaking attractions, not raising kinetic energy." },
      { q: "NH~3~ and HCl are released at opposite ends of a tube. Where does the white ring form?",
        options: ["Closer to the HCl end", "Closer to the NH~3~ end", "Exactly in the middle", "No ring forms"],
        answer: 0, explain: "NH~3~ has a lower M~r~ and diffuses faster, so it travels further." },
      { q: "Which change increases the rate of diffusion of a gas?",
        options: ["Increasing temperature", "Using a gas with higher M~r~", "Cooling the gas", "Making the container larger"],
        answer: 0, explain: "Particles move faster at higher temperature." },
      { q: "An atom of ^27^~13~Al has how many neutrons?",
        options: ["14", "13", "27", "40"],
        answer: 0, explain: "27 − 13 = 14." },
      { q: "How many electrons are in an Al^3+^ ion?",
        options: ["10", "13", "16", "3"],
        answer: 0, explain: "13 − 3 = 10." },
      { q: "Why do isotopes of chlorine have the same chemical properties?",
        options: ["They have the same number of electrons", "They have the same number of neutrons", "They have the same mass", "They have the same density"],
        answer: 0, explain: "Chemical reactions involve electrons, which are the same." },
      { q: "A substance has m.p. −7 °C and b.p. 59 °C. What is its state at 25 °C?",
        options: ["Liquid", "Solid", "Gas", "Plasma"],
        answer: 0, explain: "25 °C lies between the melting and boiling points." },
      { q: "Which particle has negligible mass?",
        options: ["Electron", "Proton", "Neutron", "Nucleus"],
        answer: 0, explain: "An electron has a relative mass of only 1/1840." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-03", num: 3, group: "I. Matter — Structures and Properties",
    title: "Chemical Bonding and Structure",
    question: "How does bonding decide the properties of a substance?",
    images: [img("03-elements-compounds-mixtures.jpg", "Elements, Compounds, Mixtures"), img("05-bonding-1.jpg", "Bonding & Structure 1"), img("06-bonding-2.jpg", "Bonding & Structure 2")],
    objectives: [
      "Describe ionic, covalent and metallic bonding with dot-and-cross diagrams",
      "Relate properties to structure: giant ionic, simple molecular, giant covalent, giant metallic, macromolecules",
      "Compare diamond and graphite",
      "Describe alloys and explain why they are stronger",
      "Distinguish elements, compounds and mixtures"
    ],
    summary: [
      { heading: "Types of bonding",
        table: [
          ["", "Ionic", "Covalent", "Metallic"],
          ["Between", "Metal + non-metal", "Non-metals", "Metal atoms"],
          ["How", "Electrons **transferred**; oppositely charged ions attract", "Electrons **shared** in pairs", "Lattice of positive ions in a **sea of delocalised electrons**"]
        ] },
      { heading: "Structures and properties",
        table: [
          ["Structure", "Example", "M.p./b.p.", "Conductivity"],
          ["Giant ionic lattice", "NaCl, MgO", "High — strong electrostatic forces between ions", "Only when **molten or aqueous** (mobile ions)"],
          ["Simple molecular", "CH~4~, I~2~, CO~2~", "Low — only weak intermolecular forces to overcome", "None — no mobile charged particles"],
          ["Giant covalent", "Diamond, graphite, SiO~2~ (sand)", "Very high — many strong covalent bonds to break", "None, except graphite"],
          ["Giant metallic", "Cu, Fe", "High — strong attraction between ions and delocalised electrons", "Yes — delocalised electrons move"],
          ["Macromolecule", "Poly(ethene)", "Between simple molecular and giant covalent", "None"]
        ],
        tip: "Comparison answers: always state the **type of bonding and structure**, then the **particles and forces** that must be overcome, then the **amount of energy** needed." },
      { heading: "Diamond vs graphite",
        table: [
          ["", "Diamond", "Graphite"],
          ["Structure", "Each C bonded to **4** other C atoms in a giant tetrahedral network", "Each C bonded to **3** others in **layers**, with weak forces between layers"],
          ["Hardness", "Very hard — used for **cutting** tools", "Soft and slippery — layers slide; used as a **lubricant** and in pencils"],
          ["Conductivity", "Does not conduct — no mobile electrons", "**Conducts** — one delocalised electron per C atom; used for electrodes"]
        ] },
      { heading: "Metals and alloys",
        points: [
          "Metals are **malleable and ductile**: layers of ions can slide over each other without breaking the metallic bond.",
          "An **alloy** is a mixture of a metal with another element, e.g. brass (Cu + Zn), stainless steel (Fe + Cr + Ni + C).",
          "Alloys are **harder and stronger**: differently sized atoms disrupt the regular layers, so they cannot slide easily."
        ] },
      { heading: "Elements, compounds, mixtures",
        points: ["Element: cannot be broken down chemically.", "Compound: elements chemically combined in a **fixed ratio**; properties differ from its elements.", "Mixture: substances **not** chemically combined; keeps their properties; separated by physical methods."] }
    ],
    keyTerms: [
      ["Ionic bond", "Electrostatic attraction between oppositely charged ions."],
      ["Covalent bond", "A shared pair of electrons."],
      ["Metallic bond", "Attraction between positive ions and a sea of delocalised electrons."],
      ["Intermolecular forces", "Weak forces between molecules."],
      ["Giant covalent structure", "A huge network of atoms joined by covalent bonds, e.g. diamond."],
      ["Delocalised electrons", "Electrons free to move throughout a structure."],
      ["Alloy", "A mixture of a metal with another element."]
    ],
    video: { id: "cFS8cb7g8N0", title: "Chemical Bonding (Science is Khool)",
      think: "Draw the dot-and-cross diagram for magnesium chloride after watching." },
    sims: [
      { title: "Ionic Bond — NaCl", url: "https://javalab.org/en/nacl_ionic_bond_en/", embed: false,
        task: "Describe the electron transfer and the charges of the ions formed." },
      { title: "Covalent Bond", url: "https://javalab.org/en/covalent_bond_en/", embed: false,
        task: "How many shared pairs are there in O~2~? In N~2~?" },
      { title: "Build a Molecule", url: phet("build-a-molecule"), embed: true,
        task: "Build CO~2~ and CH~4~ and count the shared pairs in each." }
    ],
    quiz: [
      { q: "Why does graphite conduct electricity?",
        options: ["Each carbon atom has one delocalised electron that can move", "It contains mobile ions", "It is a metal", "Its layers slide over each other"],
        answer: 0, explain: "Each C forms only 3 bonds, leaving one electron delocalised." },
      { q: "Why is diamond used in cutting tools?",
        options: ["Each C atom is strongly bonded to four others in a giant structure", "It conducts electricity", "It has layers that slide", "It has weak intermolecular forces"],
        answer: 0, explain: "Many strong covalent bonds make diamond extremely hard." },
      { q: "Silicon dioxide has a very high melting point because…",
        options: ["many strong covalent bonds must be broken", "it has weak intermolecular forces", "it is ionic", "it has delocalised electrons"],
        answer: 0, explain: "SiO~2~ is a giant covalent structure." },
      { q: "Why are metals malleable?",
        options: ["Layers of ions can slide over each other while metallic bonding remains", "They have weak bonds", "They contain mobile ions", "They are made of molecules"],
        answer: 0, explain: "The sea of electrons holds the ions together even as layers move." },
      { q: "Iodine has a low melting point because…",
        options: ["only weak intermolecular forces are overcome", "covalent bonds break easily", "it is ionic", "it is a giant structure"],
        answer: 0, explain: "Melting I~2~ separates molecules; it does not break the I–I bonds." },
      { q: "Which substance conducts electricity when molten but NOT when solid?",
        options: ["Sodium chloride", "Copper", "Graphite", "Sulfur"],
        answer: 0, explain: "Ionic compounds conduct only when their ions are free to move." },
      { q: "Why is brass harder than pure copper?",
        options: ["Different-sized zinc atoms disrupt the layers so they cannot slide easily", "Brass has ionic bonds", "Brass has no delocalised electrons", "Zinc is harder than copper"],
        answer: 0, explain: "The irregular arrangement prevents layers from sliding." },
      { q: "How many electrons are shared in a nitrogen molecule, N~2~?",
        options: ["6", "2", "3", "4"],
        answer: 0, explain: "N≡N is a triple bond: 3 shared pairs = 6 electrons." },
      { q: "Which structure describes poly(ethene)?",
        options: ["Macromolecule", "Giant ionic", "Giant metallic", "Simple molecular with low M~r~"],
        answer: 0, explain: "Polymers are very large molecules (macromolecules)." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-04", num: 4, group: "II. Chemical Reactions",
    title: "Chemical Calculations",
    question: "How do chemists use the mole to predict how much reacts and forms?",
    mascot: "assets/img/mascots/titration.png",
    images: [img("11-formulas-equations.jpg", "Formulas and Equations"), img("12-mole-calculations.jpg", "Mole Calculations")],
    objectives: [
      "Write formulae and balanced equations, including ionic equations, with state symbols",
      "Define A~r~, M~r~ and the mole",
      "Calculate % mass of an element, empirical and molecular formulae",
      "Calculate reacting masses, gas volumes (24 dm^3^ at r.t.p.) and limiting reactants",
      "Use concentration in titration calculations; calculate % yield and % purity"
    ],
    summary: [
      { heading: "Formulae and equations",
        points: [
          "Ionic formulae: balance the charges, e.g. Al^3+^ and SO~4~^2−^ -> Al~2~(SO~4~)~3~.",
          "Balance equations with coefficients only; add state symbols (s), (l), (g), (aq).",
          "Ionic equations show only the reacting ions, e.g. Ag^+^(aq) + Cl^−^(aq) -> AgCl(s)."
        ] },
      { heading: "Mole formulae",
        table: [
          ["To find", "Use"],
          ["Moles from mass", "n = mass ÷ M~r~"],
          ["Moles of gas (r.t.p.)", "n = volume (dm^3^) ÷ 24"],
          ["Moles in solution", "n = concentration (mol/dm^3^) × volume (dm^3^)"],
          ["Number of particles", "n × 6.02 × 10^23^"],
          ["g/dm^3^", "mol/dm^3^ × M~r~"]
        ] },
      { heading: "More calculations",
        points: [
          "**% by mass** of element = (number of atoms × A~r~ ÷ M~r~) × 100%.",
          "**Empirical formula**: simplest whole-number ratio of atoms. Steps: mass (or %) -> ÷ A~r~ -> ÷ smallest -> whole numbers.",
          "**Molecular formula** = (empirical formula)~n~, where n = M~r~ ÷ empirical formula mass.",
          "**% yield** = actual yield ÷ theoretical yield × 100%.",
          "**% purity** = mass of pure substance ÷ mass of impure sample × 100%."
        ] },
      { heading: "Worked example",
        text: "7.2 dm^3^ O~2~ at r.t.p. reacts with iron: 4Fe + 3O~2~ -> 2Fe~2~O~3~.",
        steps: ["n(O~2~) = 7.2 ÷ 24 = 0.30 mol", "n(Fe~2~O~3~) = 0.30 × 2/3 = 0.20 mol", "mass = 0.20 × 160 = **32 g**"],
        tip: "Limiting reactant: compare the moles available with the mole ratio — the one that runs out first decides the amount of product." }
    ],
    keyTerms: [
      ["Mole", "6.02 × 10^23^ particles of a substance."],
      ["Empirical formula", "Simplest whole-number ratio of atoms in a compound."],
      ["Molecular formula", "Actual number of atoms of each element in a molecule."],
      ["Limiting reactant", "The reactant that is completely used up first."],
      ["% yield", "Actual yield ÷ theoretical yield × 100%."],
      ["Molar volume", "24 dm^3^ per mole of any gas at r.t.p."]
    ],
    videos: [
      { label: "Formulas and equations", id: "kdNVk2zNbJk", title: "Formulas and Equations (Science is Khool)",
        think: "Write the formula of aluminium sulfate, then balance: Al + O~2~ -> Al~2~O~3~." },
      { label: "Chemical calculations", id: "WeCr4Gy-jPc", title: "Chemical Calculations (Science is Khool)",
        think: "How many moles are in 11 g of CO~2~ (M~r~ = 44)?" }
    ],
    sims: [
      { title: "Balancing Chemical Equations", url: phet("balancing-chemical-equations"), embed: true, task: "Complete the game at level 3." },
      { title: "Reactants, Products and Leftovers", url: phet("reactants-products-and-leftovers"), embed: true, task: "Predict the limiting reactant and leftovers before checking." },
      { title: "Molarity", url: phet("molarity"), embed: true, task: "Find the volume needed to make a 0.50 mol/dm^3^ solution from a fixed number of moles." }
    ],
    quiz: [
      { q: "What is the percentage by mass of nitrogen in NH~4~NO~3~? (N = 14, H = 1, O = 16)",
        options: ["35%", "17.5%", "28%", "50%"],
        answer: 0, explain: "M~r~ = 80; N mass = 28; 28 ÷ 80 × 100 = 35%." },
      { q: "A compound contains 0.6 g C and 0.2 g H. What is its empirical formula? (C = 12, H = 1)",
        options: ["CH~4~", "CH~3~", "CH~2~", "C~2~H~6~"],
        answer: 0, explain: "C: 0.6 ÷ 12 = 0.05; H: 0.2 ÷ 1 = 0.2; ratio 1 : 4." },
      { q: "A compound has empirical formula CH~2~ and M~r~ = 56. What is its molecular formula?",
        options: ["C~4~H~8~", "C~2~H~4~", "C~3~H~6~", "C~5~H~10~"],
        answer: 0, explain: "CH~2~ = 14; 56 ÷ 14 = 4; C~4~H~8~." },
      { q: "25.0 cm^3^ of 0.10 mol/dm^3^ NaOH is neutralised by HCl. How many moles of HCl reacted?",
        options: ["0.0025 mol", "0.025 mol", "2.5 mol", "0.25 mol"],
        answer: 0, explain: "n(NaOH) = 0.10 × 0.025 = 0.0025 mol; ratio 1 : 1." },
      { q: "Theoretical yield is 20 g but only 15 g is obtained. What is the % yield?",
        options: ["75%", "133%", "25%", "15%"],
        answer: 0, explain: "15 ÷ 20 × 100 = 75%." },
      { q: "What volume does 0.15 mol of CO~2~ occupy at r.t.p.?",
        options: ["3.6 dm^3^", "0.15 dm^3^", "160 dm^3^", "36 dm^3^"],
        answer: 0, explain: "0.15 × 24 = 3.6 dm^3^." },
      { q: "5.0 g of impure CaCO~3~ contains 4.0 g of pure CaCO~3~. What is the % purity?",
        options: ["80%", "125%", "20%", "40%"],
        answer: 0, explain: "4.0 ÷ 5.0 × 100 = 80%." },
      { q: "N~2~ + 3H~2~ -> 2NH~3~. 2 mol N~2~ react with 3 mol H~2~. How many moles of NH~3~ form?",
        options: ["2 mol", "4 mol", "3 mol", "6 mol"],
        answer: 0, explain: "H~2~ is limiting: 3 mol H~2~ makes 2 mol NH~3~." },
      { q: "Which is the ionic equation for the precipitation of barium sulfate?",
        options: ["Ba^2+^(aq) + SO~4~^2−^(aq) -> BaSO~4~(s)", "Ba(s) + SO~4~(aq) -> BaSO~4~(aq)", "BaCl~2~ + Na~2~SO~4~ -> BaSO~4~ + 2NaCl", "Ba^+^ + SO~4~^−^ -> BaSO~4~"],
        answer: 0, explain: "Only the ions that form the precipitate are shown, with state symbols." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-05", num: 5, group: "II. Chemical Reactions",
    title: "Acid–Base Chemistry",
    question: "How do acids and bases behave, and how do we make salts?",
    mascot: "assets/img/mascots/basic.png",
    images: [img("08-acids-bases-1.jpg", "Acids & Bases 1"), img("09-acids-bases-2.jpg", "Acids & Bases 2 — pH"), img("10-salt-preparation.jpg", "Salt Preparation")],
    objectives: [
      "Describe acids and alkalis in terms of H^+^ and OH^−^ ions and the pH scale",
      "Distinguish strong and weak acids by the extent of ionisation",
      "Describe reactions of acids and bases; classify oxides",
      "Use solubility rules to choose a method of salt preparation",
      "Describe the Haber process and reversible reactions"
    ],
    summary: [
      { heading: "Acids and alkalis",
        points: [
          "**Acid**: produces **H^+^** ions in water. **Alkali**: soluble base that produces **OH^−^** ions in water.",
          "pH < 7 acidic, 7 neutral, > 7 alkaline. Lower pH = higher concentration of H^+^.",
          "Acids only behave as acids in water — without water there are no mobile H^+^ ions."
        ] },
      { heading: "Factors affecting pH",
        table: [
          ["Factor", "Meaning", "Effect"],
          ["Concentration", "Moles of acid per dm^3^", "More concentrated -> higher [H^+^] -> lower pH"],
          ["Strength", "Extent of **ionisation** in water", "**Strong** acids (HCl, HNO~3~, H~2~SO~4~) fully ionise; **weak** acids (CH~3~COOH) partially ionise -> higher pH at same concentration"],
          ["Basicity", "Max. H^+^ ions per molecule", "Monobasic (HCl) gives 1 H^+^; dibasic (H~2~SO~4~) gives 2 H^+^"]
        ] },
      { heading: "Reactions",
        points: [
          "acid + metal -> salt + hydrogen",
          "acid + carbonate -> salt + water + carbon dioxide",
          "acid + base -> salt + water (neutralisation: H^+^ + OH^−^ -> H~2~O)",
          "alkali + ammonium salt -> salt + water + ammonia (on warming)",
          "Calcium hydroxide neutralises acidic soil."
        ] },
      { heading: "Oxides",
        table: [["Type", "Examples"], ["Acidic", "CO~2~, SO~2~, NO~2~"], ["Basic", "MgO, CaO, CuO"], ["Amphoteric", "Al~2~O~3~, ZnO, PbO"], ["Neutral", "CO, NO, H~2~O"]] },
      { heading: "Solubility rules",
        table: [
          ["Salt", "Solubility"],
          ["Group 1, NH~4~^+^ salts, nitrates", "All soluble"],
          ["Chlorides", "Soluble except AgCl, PbCl~2~"],
          ["Sulfates", "Soluble except BaSO~4~, PbSO~4~, CaSO~4~"],
          ["Carbonates", "Insoluble except Group 1 and NH~4~^+^"],
          ["Hydroxides / oxides", "Insoluble except Group 1 (and Ca(OH)~2~, Ba(OH)~2~ slightly)"]
        ] },
      { heading: "Choosing a method to prepare a salt",
        table: [
          ["Salt", "Method", "Steps"],
          ["Insoluble", "**Precipitation**", "Mix solutions containing the cation and anion; filter; wash the residue with distilled water; dry between filter papers"],
          ["Soluble Group 1 / NH~4~^+^ salt", "**Titration**", "Titrate acid with alkali using an indicator; repeat without indicator; heat to saturation; cool to crystallise; filter, wash, dry"],
          ["Other soluble salts", "**Excess insoluble solid + acid**", "Add metal / base / carbonate in excess; filter off excess solid; heat filtrate to saturation; cool; filter, wash with cold water, dry"]
        ],
        tip: "Why not add excess solid to make an insoluble salt? An insoluble layer of salt forms around the solid and stops the reaction." },
      { heading: "Ammonia — the Haber process",
        points: [
          "N~2~(g) + 3H~2~(g) ⇌ 2NH~3~(g) — a **reversible** reaction.",
          "N~2~ from air; H~2~ from cracking hydrocarbons. Iron catalyst, about 450 °C and 200 atm.",
          "Interpret data: e.g. higher pressure gives a higher yield; the temperature chosen is a compromise between yield and rate."
        ] }
    ],
    keyTerms: [
      ["Strong acid", "An acid that fully ionises in water."],
      ["Weak acid", "An acid that only partially ionises in water."],
      ["Basicity", "Maximum number of H^+^ ions one acid molecule can produce."],
      ["Salt", "Compound formed when the H^+^ of an acid is replaced by a metal or ammonium ion."],
      ["Precipitation", "Forming an insoluble solid by mixing two solutions."],
      ["Reversible reaction", "A reaction that can go both forwards and backwards."]
    ],
    video: { id: "PbOxh1gHxy4", title: "Acids and Bases (Science is Khool)",
      think: "Which ion is present in a higher concentration in a solution of pH 2 than in pH 6?" },
    sims: [
      { title: "pH Scale", url: phet("ph-scale"), embed: true, task: "Dilute an acid ten times. How does the pH change?" },
      { title: "Acid–Base Solutions", url: phet("acid-base-solutions"), embed: true, task: "Compare a strong and a weak acid at the same concentration. Which has more ions? Which has the lower pH?" },
      { title: "Precipitation Reaction", url: "https://javalab.org/en/precipitation_reaction_en/", embed: false, task: "Which ions form the precipitate? Which are spectator ions?" }
    ],
    quiz: [
      { q: "0.1 mol/dm^3^ HCl has a lower pH than 0.1 mol/dm^3^ ethanoic acid because HCl…",
        options: ["fully ionises in water", "is more concentrated", "is dibasic", "is an alkali"],
        answer: 0, explain: "Same concentration, but HCl is strong (fully ionised), giving more H^+^." },
      { q: "Which method should be used to prepare barium sulfate?",
        options: ["Precipitation", "Titration", "Excess solid + acid", "Crystallisation from seawater"],
        answer: 0, explain: "BaSO~4~ is insoluble." },
      { q: "Which method should be used to prepare potassium nitrate?",
        options: ["Titration", "Precipitation", "Excess metal + acid", "Electrolysis"],
        answer: 0, explain: "It is a soluble Group 1 salt; all potassium compounds are soluble so excess-solid methods don't work." },
      { q: "Copper(II) sulfate is prepared from copper(II) oxide and sulfuric acid. Why is the oxide added in excess?",
        options: ["To make sure all the acid is used up", "To speed up evaporation", "To form a precipitate", "To make the solution acidic"],
        answer: 0, explain: "Excess solid ensures no acid remains; the excess is filtered off." },
      { q: "Which is a dibasic acid?",
        options: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Ethanoic acid"],
        answer: 0, explain: "H~2~SO~4~ can release 2 H^+^ per molecule." },
      { q: "Which oxide reacts with both hydrochloric acid and sodium hydroxide?",
        options: ["Aluminium oxide", "Magnesium oxide", "Carbon dioxide", "Calcium oxide"],
        answer: 0, explain: "Al~2~O~3~ is amphoteric." },
      { q: "Which salt is insoluble in water?",
        options: ["Lead(II) chloride", "Sodium chloride", "Copper(II) nitrate", "Ammonium sulfate"],
        answer: 0, explain: "Chlorides are soluble except AgCl and PbCl~2~." },
      { q: "In the Haber process, the hydrogen comes from…",
        options: ["cracking of hydrocarbons", "the air", "electrolysis of brine only", "limestone"],
        answer: 0, explain: "N~2~ comes from air; H~2~ from cracking crude oil fractions." },
      { q: "Why is excess zinc carbonate NOT suitable to prepare zinc sulfate if the salt were insoluble?",
        options: ["An insoluble layer would coat the solid and stop the reaction", "Zinc carbonate is soluble", "No gas is produced", "Sulfuric acid is a weak acid"],
        answer: 0, explain: "This is why insoluble salts are made by precipitation instead." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-06", num: 6, group: "II. Chemical Reactions",
    title: "Qualitative Analysis",
    question: "How can we identify unknown ions and gases?",
    mascot: "assets/img/mascots/colour-change.png",
    images: [img("15-qualitative-analysis.jpg", "Qualitative Analysis")],
    objectives: [
      "Identify cations Al^3+^, NH~4~^+^, Ca^2+^, Cu^2+^, Fe^2+^, Fe^3+^, Zn^2+^ using NaOH(aq) and NH~3~(aq)",
      "Identify anions CO~3~^2−^, Cl^−^, I^−^, NO~3~^−^, SO~4~^2−^",
      "Identify gases NH~3~, CO~2~, Cl~2~, H~2~, O~2~, SO~2~"
    ],
    summary: [
      { heading: "Cations",
        table: [
          ["Cation", "NaOH(aq), then excess", "NH~3~(aq), then excess"],
          ["Al^3+^", "White ppt, **soluble** in excess", "White ppt, insoluble in excess"],
          ["Zn^2+^", "White ppt, **soluble** in excess", "White ppt, **soluble** in excess"],
          ["Ca^2+^", "White ppt, insoluble in excess", "No ppt"],
          ["Cu^2+^", "Light blue ppt, insoluble", "Light blue ppt, soluble in excess -> **dark blue** solution"],
          ["Fe^2+^", "Green ppt, insoluble", "Green ppt, insoluble"],
          ["Fe^3+^", "Reddish-brown ppt, insoluble", "Reddish-brown ppt, insoluble"],
          ["NH~4~^+^", "No ppt; ammonia given off on warming", "—"]
        ] },
      { heading: "Anions",
        table: [
          ["Anion", "Test", "Result"],
          ["CO~3~^2−^", "Add dilute acid", "Effervescence; CO~2~ gives white ppt with limewater"],
          ["Cl^−^", "Add dilute HNO~3~, then AgNO~3~(aq)", "**White** ppt (AgCl)"],
          ["I^−^", "Add dilute HNO~3~, then AgNO~3~(aq)", "**Yellow** ppt (AgI)"],
          ["SO~4~^2−^", "Add dilute HNO~3~, then Ba(NO~3~)~2~(aq)", "White ppt (BaSO~4~)"],
          ["NO~3~^−^", "Add NaOH(aq) and aluminium foil, warm", "NH~3~ given off — moist red litmus turns blue"]
        ] },
      { heading: "Gases",
        table: [
          ["Gas", "Test", "Result"],
          ["H~2~", "Lighted splint", "Extinguished with a 'pop'"],
          ["O~2~", "Glowing splint", "Relights"],
          ["CO~2~", "Limewater", "White ppt"],
          ["NH~3~", "Moist red litmus", "Turns blue"],
          ["Cl~2~", "Moist blue litmus", "Turns red, then bleached"],
          ["SO~2~", "Acidified KMnO~4~(aq)", "Purple -> colourless"]
        ] }
    ],
    keyTerms: [["Precipitate", "Insoluble solid formed in a solution."], ["Effervescence", "Bubbling due to gas being given off."], ["Qualitative analysis", "Identifying substances by observable tests."]],
    video: { id: "2GaCalUoJZ4", title: "Identify cations using aqueous sodium hydroxide",
      think: "How would you distinguish Zn^2+^ from Al^3+^?" },
    sims: [{ title: "Precipitation Reaction", url: "https://javalab.org/en/precipitation_reaction_en/", embed: false, task: "Write the ionic equation for the precipitate formed." }],
    quiz: [
      { q: "Acidified silver nitrate is added to a solution and a yellow precipitate forms. The anion is…",
        options: ["iodide", "chloride", "sulfate", "carbonate"],
        answer: 0, explain: "AgI is yellow; AgCl is white." },
      { q: "A white ppt forms with NaOH(aq), soluble in excess. With NH~3~(aq), a white ppt forms that is insoluble in excess. The cation is…",
        options: ["Al^3+^", "Zn^2+^", "Ca^2+^", "Pb^2+^"],
        answer: 0, explain: "Al(OH)~3~ dissolves in excess NaOH but not in excess NH~3~." },
      { q: "Which cation gives a reddish-brown precipitate with NaOH(aq)?",
        options: ["Fe^3+^", "Fe^2+^", "Cu^2+^", "Zn^2+^"],
        answer: 0, explain: "Fe(OH)~3~ is reddish-brown." },
      { q: "Adding excess NH~3~(aq) to Cu^2+^(aq) gives…",
        options: ["a dark blue solution", "a green precipitate", "a white precipitate", "no change"],
        answer: 0, explain: "The light blue ppt dissolves in excess ammonia, forming a dark blue solution." },
      { q: "What is the test for nitrate ions?",
        options: ["Warm with NaOH(aq) and Al foil; gas turns moist red litmus blue", "Add AgNO~3~; white ppt", "Add Ba(NO~3~)~2~; white ppt", "Add acid; effervescence"],
        answer: 0, explain: "Nitrate is reduced to ammonia." },
      { q: "Which gas relights a glowing splint?",
        options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Ammonia"],
        answer: 0, explain: "Oxygen supports combustion." },
      { q: "A solution gives no precipitate with NaOH(aq) but gives off a pungent gas on warming. The cation is…",
        options: ["NH~4~^+^", "Ca^2+^", "Zn^2+^", "Na^+^"],
        answer: 0, explain: "Ammonium ions react with alkali to release ammonia." },
      { q: "Why is nitric acid, not hydrochloric acid, added before silver nitrate in the chloride test?",
        options: ["HCl would add chloride ions and give a false positive", "Nitric acid is cheaper", "HCl reacts with silver to give a gas", "Nitric acid is a weak acid"],
        answer: 0, explain: "Adding HCl would introduce Cl^−^ ions itself." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-07", num: 7, group: "II. Chemical Reactions",
    title: "Redox Chemistry & Electrochemistry",
    question: "How are electrons transferred in redox reactions, electrolysis and cells?",
    mascot: "assets/img/mascots/colour-change.png",
    images: [img("13-redox.jpg", "Redox"), img("14-electrochemistry.jpg", "Electrochemistry")],
    objectives: [
      "Define and identify oxidation and reduction (oxygen, hydrogen, electrons, oxidation state)",
      "Use KI and acidified KMnO~4~ to test for oxidising and reducing agents",
      "Describe electrolysis of molten and aqueous electrolytes with inert electrodes; predict products using selective discharge",
      "Describe copper purification and electroplating",
      "Describe simple cells and the hydrogen fuel cell"
    ],
    summary: [
      { heading: "Redox",
        table: [
          ["", "Oxidation", "Reduction"],
          ["Oxygen", "Gain", "Loss"],
          ["Hydrogen", "Loss", "Gain"],
          ["Electrons", "Loss", "Gain"],
          ["Oxidation state", "Increase", "Decrease"]
        ],
        points: [
          "Oxidising agent: oxidises others, is itself reduced. Test: **KI(aq)** turns from colourless to **brown** (I^−^ -> I~2~).",
          "Reducing agent: reduces others, is itself oxidised. Test: **acidified KMnO~4~** turns from **purple to colourless** (Mn +7 -> +2)."
        ] },
      { heading: "Electrolysis (electrolytic cell)",
        text: "Electrical energy drives a **non-spontaneous** reaction. The electrolyte must be molten or aqueous so ions can move.",
        steps: [
          "Electrons leave the battery's negative terminal and flow to the **cathode (−)**.",
          "**Cations** move to the cathode; **anions** move to the anode.",
          "At the **cathode**: the ion **lower** in the electrochemical series gains electrons (is **reduced**), e.g. Cu^2+^ before H^+^; H^+^ before Na^+^.",
          "At the **anode**: if the anode is a reactive metal (not C / Pt), the **metal** is oxidised. Otherwise the anion lower in the series is oxidised — usually **OH^−^** -> O~2~, unless Cl^−^, Br^−^ or I^−^ are **concentrated**."
        ],
        table: [
          ["Electrolyte (inert electrodes)", "Cathode", "Anode"],
          ["Molten NaCl", "Na", "Cl~2~"],
          ["Dilute NaCl(aq)", "H~2~", "O~2~ (essentially electrolysis of water)"],
          ["Concentrated NaCl(aq)", "H~2~", "Cl~2~"],
          ["CuSO~4~(aq)", "Cu", "O~2~"]
        ] },
      { heading: "Uses of electrolysis",
        points: [
          "**Purifying copper**: impure copper as **anode**, pure copper as **cathode**, CuSO~4~(aq) electrolyte. Cu dissolves from the anode and is deposited on the cathode.",
          "**Electroplating**: the object to be plated is the **cathode (−)**; the plating metal is the **anode (+)**; the electrolyte contains ions of the plating metal. Used for appearance and to prevent corrosion.",
          "**Extracting reactive metals** (above carbon) from their molten ores — the metal is produced at the **cathode**."
        ] },
      { heading: "Simple cells and fuel cells",
        points: [
          "A **simple cell** uses a spontaneous redox reaction to produce electricity: two different metals in an electrolyte.",
          "The **more reactive** metal loses electrons (is oxidised) and is the **negative** terminal (anode). Electrons flow through the wire to the less reactive metal.",
          "The greater the **difference in reactivity**, the greater the **voltage**.",
          "**Hydrogen fuel cell**: hydrogen reacts with oxygen to produce electricity directly; the only product is water. 2H~2~ + O~2~ -> 2H~2~O."
        ] }
    ],
    keyTerms: [
      ["Oxidation", "Loss of electrons / increase in oxidation state."],
      ["Reduction", "Gain of electrons / decrease in oxidation state."],
      ["Electrolysis", "Decomposition of an electrolyte by electricity."],
      ["Cathode", "Negative electrode in electrolysis; reduction occurs here."],
      ["Anode", "Positive electrode in electrolysis; oxidation occurs here."],
      ["Selective discharge", "Preferential discharge of one ion over another at an electrode."],
      ["Electroplating", "Coating an object with a thin layer of metal by electrolysis."]
    ],
    video: { id: "me19WmGg8Dw", title: "Electrolysis of aqueous solutions",
      think: "Why is hydrogen, not sodium, produced at the cathode in NaCl(aq)?" },
    sims: [
      { title: "Electric Plating", url: "https://javalab.org/en/electric_plating_en/", embed: false, task: "Which electrode is the object being plated? What happens to the mass of each electrode?" },
      { title: "Chemical Cell", url: "https://javalab.org/en/chemical_cell_en/", embed: false, task: "Change the metals. Which pair gives the largest voltage? Relate this to the reactivity series." },
      { title: "Electrolysis of Water", url: "https://javalab.org/en/electrolysis_of_water_en/", embed: false, task: "Compare the volumes of gas at each electrode. Explain the 2 : 1 ratio." }
    ],
    quiz: [
      { q: "In the electrolysis of molten lead(II) bromide, what forms at the cathode?",
        options: ["Lead", "Bromine", "Hydrogen", "Oxygen"],
        answer: 0, explain: "Pb^2+^ ions gain electrons at the cathode." },
      { q: "Concentrated NaCl(aq) is electrolysed with inert electrodes. What forms at the anode?",
        options: ["Chlorine", "Oxygen", "Sodium", "Hydrogen"],
        answer: 0, explain: "High concentration of Cl^−^ means it is discharged in preference to OH^−^." },
      { q: "Dilute NaCl(aq) is electrolysed. The products at cathode and anode are…",
        options: ["hydrogen and oxygen", "sodium and chlorine", "hydrogen and chlorine", "sodium and oxygen"],
        answer: 0, explain: "In dilute solution, H^+^ and OH^−^ are discharged — essentially electrolysis of water." },
      { q: "To electroplate a spoon with silver, the spoon should be the…",
        options: ["cathode", "anode", "electrolyte", "salt bridge"],
        answer: 0, explain: "Ag^+^ ions are reduced and deposited on the cathode." },
      { q: "In a simple cell made of zinc and copper, which is the negative terminal?",
        options: ["Zinc", "Copper", "Both", "Neither"],
        answer: 0, explain: "Zinc is more reactive, loses electrons and is the negative terminal." },
      { q: "Which pair of metals in a simple cell gives the greatest voltage?",
        options: ["Magnesium and copper", "Zinc and iron", "Iron and lead", "Copper and silver"],
        answer: 0, explain: "The greatest difference in reactivity gives the greatest voltage." },
      { q: "During purification of copper, what happens at the impure copper anode?",
        options: ["Copper atoms lose electrons and dissolve", "Copper ions gain electrons", "Oxygen is produced", "Hydrogen is produced"],
        answer: 0, explain: "Cu -> Cu^2+^ + 2e^−^ at the anode, so the anode gets smaller." },
      { q: "A solution turns acidified KMnO~4~ from purple to colourless. The solution contains…",
        options: ["a reducing agent", "an oxidising agent", "an alkali", "a catalyst"],
        answer: 0, explain: "MnO~4~^−^ has been reduced, so the substance is a reducing agent." },
      { q: "What is the only product of a hydrogen fuel cell?",
        options: ["Water", "Carbon dioxide", "Hydrogen peroxide", "Methane"],
        answer: 0, explain: "2H~2~ + O~2~ -> 2H~2~O." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-08", num: 8, group: "II. Chemical Reactions",
    title: "Patterns in the Periodic Table",
    question: "How does position in the Periodic Table predict properties?",
    images: [img("18-periodic-table.jpg", "Periodic Table"), img("19-reactivity-series.jpg", "Metals Reactivity Series")],
    objectives: [
      "Relate group and period to electronic configuration; predict ionic charges",
      "Describe trends in Groups 1, 17 and 18 and the uses of noble gases",
      "Describe properties of transition elements",
      "Place metals in the reactivity series using reactions with water, steam, acid, oxides and ions",
      "Relate thermal stability of carbonates and extraction of metals to the reactivity series",
      "Describe rusting and its prevention, including galvanising and sacrificial protection"
    ],
    summary: [
      { heading: "Periodic trends",
        points: [
          "Elements are arranged by increasing **proton number**. Group number = valence electrons; period number = shells.",
          "Across a period: metallic character decreases; oxides change from basic -> amphoteric -> acidic.",
          "Groups 1, 2, 13 form 1+, 2+, 3+ ions; Groups 15, 16, 17 form 3−, 2−, 1− ions."
        ] },
      { heading: "Group properties",
        table: [
          ["Group 1 (alkali metals)", "Group 17 (halogens)", "Group 18 (noble gases)"],
          ["Soft, low density; m.p. **decreases** down the group", "Diatomic; m.p./b.p. **increase** down the group; colour darkens", "Monatomic, unreactive (full valence shell)"],
          ["Reactivity **increases** down the group", "Reactivity **decreases** down the group", "Uses: argon in light bulbs and steel making; neon in lights; helium in balloons"],
          ["metal + water -> hydroxide + hydrogen", "More reactive halogen **displaces** a less reactive one from its halide", "—"]
        ] },
      { heading: "Transition elements",
        points: ["High melting point and density.", "**Variable oxidation states**, e.g. Fe^2+^ and Fe^3+^.", "Form **coloured compounds**, e.g. Cu^2+^ blue, Fe^2+^ green.", "Act as **catalysts**, e.g. Fe in the Haber process, Ni in hydrogenation, Pt in catalytic converters."] },
      { heading: "Reactivity series",
        text: "K > Na > Ca > Mg > (Al) > [C] > Zn > Fe > Pb > [H] > Cu > Ag > Au",
        table: [
          ["Test", "Pattern"],
          ["Water / steam / acid", "K, Na, Ca react with cold water; Mg reacts with steam; Zn, Fe react with steam and acid; Pb reacts slowly with acid; Cu, Ag don't react"],
          ["Reducing oxides", "Carbon reduces oxides of metals **below** it (Zn onwards); H~2~ reduces oxides from Fe onwards; more reactive metals need **electrolysis**"],
          ["Displacement", "A more reactive metal displaces a less reactive metal from its salt solution, e.g. Mg + Cu^2+^ -> Mg^2+^ + Cu (blue -> colourless; reddish-brown solid)"],
          ["Heating carbonates", "Group 1 carbonates don't decompose; others give metal oxide + CO~2~. **The less reactive the metal, the more easily its carbonate decomposes**"]
        ],
        tip: "Aluminium is corrosion-resistant despite being reactive, because of a protective layer of aluminium oxide." },
      { heading: "Rusting",
        points: [
          "Needs **water and oxygen**; salt and acids speed it up. Rust (hydrated iron(III) oxide) is brittle and flaky.",
          "**Barrier methods**: paint, grease, plastic coating — fails once scratched.",
          "**Sacrificial protection**: a more reactive metal (Zn, Mg) corrodes instead of iron, e.g. Mg blocks on underwater pipes.",
          "**Galvanising**: coating iron with zinc — still protects even if scratched."
        ] }
    ],
    keyTerms: [
      ["Group", "A vertical column; same number of valence electrons."],
      ["Transition element", "A metal with variable oxidation states that forms coloured compounds."],
      ["Displacement reaction", "A more reactive element replaces a less reactive one from its compound."],
      ["Thermal decomposition", "Breaking down a compound by heating."],
      ["Sacrificial protection", "A more reactive metal corrodes in place of iron."],
      ["Galvanising", "Coating iron with a layer of zinc."]
    ],
    video: { id: "TGZs93DzMDY", title: "GCSE Chemistry: Group 1 — the alkali metals",
      think: "Predict how rubidium reacts with water compared with sodium." },
    sims: [
      { title: "Activity Series of Metals", url: "https://javalab.org/en/activity_series_of_metals_en/", embed: false, task: "Use displacement results to rank the metals." },
      { title: "Build an Atom", url: phet("build-an-atom"), embed: true, task: "Build Na and Cl atoms. Use their electron arrangements to explain their groups." }
    ],
    quiz: [
      { q: "Which carbonate decomposes most easily on heating?",
        options: ["Copper(II) carbonate", "Calcium carbonate", "Sodium carbonate", "Magnesium carbonate"],
        answer: 0, explain: "The less reactive the metal, the less thermally stable its carbonate." },
      { q: "Why is a block of magnesium attached to a steel ship's hull?",
        options: ["Mg is more reactive and corrodes in place of iron", "Mg forms an airtight coating", "Mg makes the steel stronger", "Mg prevents water from reaching the ship"],
        answer: 0, explain: "This is sacrificial protection." },
      { q: "Which is a typical property of transition elements?",
        options: ["They form coloured compounds", "They have low densities", "They have only one oxidation state", "They are soft and react violently with water"],
        answer: 0, explain: "Transition metals form coloured compounds and have variable oxidation states." },
      { q: "Which metal oxide can be reduced by carbon?",
        options: ["Zinc oxide", "Magnesium oxide", "Calcium oxide", "Aluminium oxide"],
        answer: 0, explain: "Carbon reduces oxides of metals below it in the series." },
      { q: "Bromine water is added to potassium iodide solution. What is observed?",
        options: ["Solution turns brown", "No change", "White precipitate", "Purple to colourless"],
        answer: 0, explain: "Br~2~ is more reactive than I~2~ and displaces it." },
      { q: "Why is argon used in light bulbs?",
        options: ["It is unreactive so the filament does not burn", "It conducts electricity", "It glows brightly", "It is cheap and dense"],
        answer: 0, explain: "Noble gases provide an inert environment." },
      { q: "Why does galvanised iron not rust even when scratched?",
        options: ["Zinc is more reactive and corrodes in preference to iron", "Zinc repairs the scratch", "Iron becomes unreactive", "Zinc is a barrier only"],
        answer: 0, explain: "Zinc still acts as a sacrificial metal." },
      { q: "Element X is in Group 2, Period 3. Its electronic configuration is…",
        options: ["2.8.2", "2.2", "2.8.3", "2.3"],
        answer: 0, explain: "3 shells (Period 3), 2 valence electrons (Group 2): magnesium." },
      { q: "Why is aluminium resistant to corrosion?",
        options: ["It is covered by a protective layer of aluminium oxide", "It is below hydrogen", "It does not react with oxygen", "It is a transition metal"],
        answer: 0, explain: "The thin, unreactive oxide layer protects the metal underneath." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-09", num: 9, group: "II. Chemical Reactions",
    title: "Chemical Energetics",
    question: "Where does the energy in reactions come from?",
    images: [img("17-energetics.jpg", "Chemical Energetics")],
    objectives: [
      "Describe enthalpy change: exothermic (ΔH negative) and endothermic (ΔH positive)",
      "Draw and interpret energy profile diagrams with ΔH and activation energy",
      "Describe bond breaking as endothermic and bond making as exothermic",
      "Explain overall ΔH using bond energies"
    ],
    summary: [
      { heading: "Exothermic vs endothermic",
        table: [
          ["", "Exothermic", "Endothermic"],
          ["Energy", "Given out to surroundings", "Taken in from surroundings"],
          ["Temperature of surroundings", "Increases", "Decreases"],
          ["ΔH", "**Negative**", "**Positive**"],
          ["Energy level diagram", "Products **lower** than reactants", "Products **higher** than reactants"],
          ["Examples", "Combustion, neutralisation, respiration, freezing, condensation", "Thermal decomposition, photosynthesis, dissolving NH~4~NO~3~, melting, boiling"]
        ] },
      { heading: "Energy profile diagrams",
        points: [
          "**Activation energy (E~a~)**: the minimum energy needed for a reaction to occur — drawn from reactants to the **top of the hump**.",
          "**ΔH**: drawn from reactants to products.",
          "A catalyst lowers E~a~ but does **not** change ΔH."
        ] },
      { heading: "Bond energies",
        points: [
          "**Breaking** bonds takes in energy (endothermic). **Making** bonds gives out energy (exothermic).",
          "**ΔH = energy to break bonds in reactants − energy released forming bonds in products.**",
          "If more energy is released making bonds than is taken in breaking them, the reaction is exothermic."
        ] }
    ],
    keyTerms: [
      ["Enthalpy change (ΔH)", "Heat energy change in a reaction."],
      ["Exothermic", "Gives out energy; ΔH negative."],
      ["Endothermic", "Takes in energy; ΔH positive."],
      ["Activation energy", "Minimum energy needed for colliding particles to react."],
      ["Bond energy", "Energy needed to break one mole of a particular bond."]
    ],
    video: { id: "hNNvIsQLSV8", title: "Exothermic & endothermic reactions — reaction profiles",
      think: "On an energy profile, where would you label the activation energy?" },
    sims: [],
    quiz: [
      { q: "A reaction has ΔH = −90 kJ/mol. It is…",
        options: ["exothermic", "endothermic", "neither", "impossible"],
        answer: 0, explain: "Negative ΔH means energy is given out." },
      { q: "Breaking chemical bonds is…",
        options: ["endothermic", "exothermic", "neither", "only exothermic in gases"],
        answer: 0, explain: "Energy must be taken in to break bonds." },
      { q: "On an energy profile, the activation energy is measured from…",
        options: ["reactants to the top of the hump", "products to the top of the hump", "reactants to products", "zero to products"],
        answer: 0, explain: "E~a~ is the energy barrier the reactants must overcome." },
      { q: "H–H = 436, Cl–Cl = 242, H–Cl = 431 kJ/mol. ΔH for H~2~ + Cl~2~ -> 2HCl is…",
        options: ["−184 kJ/mol", "+184 kJ/mol", "−247 kJ/mol", "+247 kJ/mol"],
        answer: 0, explain: "Break: 436 + 242 = 678. Make: 2 × 431 = 862. ΔH = 678 − 862 = −184 kJ/mol." },
      { q: "What effect does a catalyst have on ΔH?",
        options: ["No effect", "Makes it more negative", "Makes it positive", "Doubles it"],
        answer: 0, explain: "A catalyst only lowers the activation energy." },
      { q: "In an endothermic reaction, the products are…",
        options: ["at a higher energy level than the reactants", "at a lower energy level than the reactants", "at the same energy level", "always gases"],
        answer: 0, explain: "Energy has been taken in, so products have more energy." },
      { q: "Which process is endothermic?",
        options: ["Thermal decomposition of CaCO~3~", "Combustion of methane", "Neutralisation", "Condensation of steam"],
        answer: 0, explain: "Heat must be supplied continuously to decompose CaCO~3~." },
      { q: "A reaction is exothermic overall because…",
        options: ["more energy is released making bonds than is taken in breaking bonds", "no bonds are broken", "more energy is taken in than released", "it has no activation energy"],
        answer: 0, explain: "The net energy change is outwards." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-10", num: 10, group: "II. Chemical Reactions",
    title: "Rate of Reactions",
    question: "What controls how fast a reaction goes?",
    mascot: "assets/img/mascots/catalyst.png",
    images: [img("16-rate-of-reaction.jpg", "Rate of Reaction")],
    objectives: [
      "Explain the effects of concentration, pressure, particle size and temperature using collision theory",
      "Define catalyst; describe how catalysts and enzymes work, including activation energy",
      "Suggest methods to investigate rate; interpret graphs and data"
    ],
    summary: [
      { heading: "Collision theory",
        text: "Particles react only when they collide with energy **≥ activation energy** and in the correct orientation (**effective collisions**). Faster rate = more frequent effective collisions." },
      { heading: "Factors",
        table: [
          ["Factor", "Explanation"],
          ["Concentration ↑", "More particles per unit volume -> more frequent effective collisions"],
          ["Pressure ↑ (gases)", "More gas particles per unit volume -> more frequent effective collisions"],
          ["Particle size ↓", "Larger surface area exposed -> more frequent effective collisions"],
          ["Temperature ↑", "Particles have more kinetic energy -> collide more often **and** a larger proportion have energy ≥ E~a~"],
          ["Catalyst", "Provides an **alternative pathway with lower activation energy** -> more particles have enough energy; catalyst is chemically unchanged at the end"]
        ],
        points: ["**Enzymes** are biological catalysts (proteins). They work best at an optimum temperature and pH, and are denatured at high temperature.", "Industrial catalysts: Fe (Haber process), Ni (hydrogenation), Pt/Rh (catalytic converters)."] },
      { heading: "Measuring rate",
        points: [
          "Volume of gas over time (gas syringe), or loss in mass over time (gas escapes from flask on a balance).",
          "Graph is steepest at the start, gets gentler, then flattens when the limiting reactant is used up.",
          "Higher temperature / powder / catalyst: steeper curve, **same final amount**. More limiting reactant: steeper **and** higher final amount."
        ] }
    ],
    keyTerms: [
      ["Rate of reaction", "Change in amount of reactant or product per unit time."],
      ["Effective collision", "A collision with energy ≥ activation energy and correct orientation."],
      ["Catalyst", "A substance that speeds up a reaction by providing a lower activation energy pathway, and is unchanged at the end."],
      ["Enzyme", "A biological catalyst."],
      ["Activation energy", "The minimum energy colliding particles need to react."]
    ],
    video: { id: "hz_9521YMRc", title: "Catalysts and activation energy",
      think: "Why does a catalyst not increase the amount of product?" },
    sims: [
      { title: "Reaction Rate", url: "https://javalab.org/en/reaction_rate_of_solution_en/", embed: false, task: "Change one variable at a time and compare the rate." },
      { title: "Reactions & Rates (PhET)", url: "https://phet.colorado.edu/sims/cheerpj/reactions-and-rates/latest/reactions-and-rates.html?simulation=reactions-and-rates", embed: false, task: "Lower the activation energy using the energy diagram. What happens to the rate?" }
    ],
    quiz: [
      { q: "How does a catalyst increase the rate of reaction?",
        options: ["It provides an alternative pathway with lower activation energy", "It increases the temperature", "It increases the concentration", "It is used up in the reaction"],
        answer: 0, explain: "More particles have energy ≥ the lower E~a~." },
      { q: "Increasing temperature increases rate mainly because…",
        options: ["more particles have energy ≥ activation energy", "particles get bigger", "activation energy decreases", "the concentration increases"],
        answer: 0, explain: "Particles also collide more often, but the main effect is more successful collisions." },
      { q: "Why is a catalyst still present at the end of a reaction?",
        options: ["It is chemically unchanged", "It is regenerated by heating", "It is a product", "It never touches the reactants"],
        answer: 0, explain: "By definition, a catalyst is not used up." },
      { q: "Enzymes stop working at high temperatures because they are…",
        options: ["denatured", "dissolved", "oxidised", "neutralised"],
        answer: 0, explain: "High temperature changes the enzyme's shape permanently." },
      { q: "Which catalyst is used in the Haber process?",
        options: ["Iron", "Nickel", "Platinum", "Vanadium only"],
        answer: 0, explain: "Iron catalyses N~2~ + 3H~2~ ⇌ 2NH~3~." },
      { q: "Powdered marble reacts faster with acid than marble chips of equal mass because…",
        options: ["it has a larger surface area", "it is more concentrated", "it has lower activation energy", "it is a catalyst"],
        answer: 0, explain: "More surface exposed -> more frequent collisions." },
      { q: "The same reaction is repeated with a catalyst. Compared with the original graph of gas volume against time, the new graph…",
        options: ["is steeper but reaches the same final volume", "reaches a higher final volume", "is less steep", "starts at a higher volume"],
        answer: 0, explain: "The catalyst changes the rate, not the amount of product." },
      { q: "Which method suits measuring the rate of Mg + HCl?",
        options: ["Collect the hydrogen in a gas syringe and record volume over time", "Measure the colour change", "Weigh the acid before the reaction only", "Measure the pH once"],
        answer: 0, explain: "A gas is produced, so its volume can be measured over time." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-11", num: 11, group: "III. Chemistry in a Sustainable World",
    title: "Organic Chemistry",
    question: "How are fuels, alcohols, acids, esters and plastics related?",
    images: [img("20-fuels.jpg", "Fuels"), img("22-organic-1.jpg", "Organic Chemistry 1"), img("23-organic-2.jpg", "Organic Chemistry 2"), img("24-organic-3.jpg", "Organic Chemistry 3")],
    objectives: [
      "Describe crude oil, fractional distillation and biofuels",
      "Describe homologous series; draw and name alkanes, alkenes, alcohols and carboxylic acids (C1–C4), including branched isomers",
      "Describe reactions: combustion, substitution, addition (Br~2~, H~2~, steam), polymerisation, oxidation, fermentation, esterification",
      "Name and draw esters from alcohols and carboxylic acids",
      "Describe addition and condensation polymers, their uses, pollution, recycling and depolymerisation"
    ],
    summary: [
      { heading: "Fuels",
        points: [
          "Natural gas (mainly methane) and crude oil are **non-renewable**.",
          "**Fractional distillation** of crude oil: smaller molecules (lower b.p.) collect at the cool top; larger molecules at the hot bottom. Fractions: petroleum gas, petrol, naphtha, kerosene, diesel, lubricating oil, bitumen.",
          "**Bioethanol** from sugarcane is renewable; CO~2~ released is offset by CO~2~ absorbed during plant growth. Drawbacks: lower yield; land could be used for food crops."
        ] },
      { heading: "Homologous series",
        table: [
          ["Series", "General formula", "Functional group", "C1–C4 names"],
          ["Alkanes", "C~n~H~2n+2~", "C–C only (saturated)", "methane, ethane, propane, butane"],
          ["Alkenes", "C~n~H~2n~", "C=C", "ethene, propene, butene"],
          ["Alcohols", "C~n~H~2n+1~OH", "–OH", "methanol … butanol"],
          ["Carboxylic acids", "C~n~H~2n+1~COOH", "–COOH", "methanoic … butanoic acid"],
          ["Esters", "—", "–COO–", "e.g. methyl ethanoate, ethyl ethanoate"]
        ],
        points: ["**Isomers**: same molecular formula, different structural formula, e.g. butane and methylpropane (C~4~H~10~)."] },
      { heading: "Reactions",
        table: [
          ["Reactant", "Reaction", "Conditions / observation"],
          ["Alkane", "Combustion; **substitution** with Cl~2~", "UV light; forms chloroalkane + HCl"],
          ["Alkene", "Addition of **bromine**", "Room temp; reddish-brown -> colourless (**test for C=C**)"],
          ["Alkene", "Addition of **hydrogen**", "Ni catalyst, heat -> alkane (margarine from vegetable oils)"],
          ["Alkene", "Addition of **steam**", "H~3~PO~4~ catalyst, high temperature and pressure -> alcohol"],
          ["Alkene", "Addition polymerisation", "High temperature and pressure"],
          ["Long alkanes", "**Cracking**", "High temperature + catalyst -> shorter alkanes, alkenes, H~2~"],
          ["Glucose", "**Fermentation**", "Yeast, absence of oxygen, ~37 °C -> ethanol + CO~2~"],
          ["Alcohol", "Oxidation", "Acidified KMnO~4~, heat (purple -> colourless), or bacteria in air -> carboxylic acid"],
          ["Carboxylic acid", "Weak acid reactions", "With metals (H~2~), carbonates (CO~2~), bases"],
          ["Acid + alcohol", "**Esterification**", "Conc. H~2~SO~4~, heat under reflux -> ester + water"]
        ],
        tip: "Naming esters: alcohol part first (-yl), acid part second (-oate). Ethanoic acid + methanol -> **methyl ethanoate** + water." },
      { heading: "Polymers",
        points: [
          "**Addition polymers**: alkene monomers join; no other product. Ethene -> poly(ethene) (plastic bags, cling film).",
          "**Condensation polymers**: monomers join with the **loss of a small molecule** (water). **Polyester** (Terylene): diacid + diol (ester linkage). **Polyamide** (nylon): diacid + diamine (amide linkage).",
          "Uses of nylon and Terylene: clothing, curtains, tents, parachutes, fishing lines.",
          "Non-biodegradable plastics fill landfills and harm marine life.",
          "Recycling: **physical** (melt into pellets) or **chemical** (cracking into fuel; depolymerisation).",
          "**Depolymerisation** of polyesters: hydrolysis using acid and heat breaks them back into monomers."
        ] }
    ],
    keyTerms: [
      ["Homologous series", "Compounds with the same general formula and functional group, and similar chemical properties."],
      ["Isomers", "Compounds with the same molecular formula but different structural formulae."],
      ["Cracking", "Breaking long hydrocarbons into shorter, more useful ones."],
      ["Esterification", "Reaction of a carboxylic acid with an alcohol to form an ester and water."],
      ["Addition polymerisation", "Monomers with C=C join with no other product."],
      ["Condensation polymerisation", "Monomers join with the loss of a small molecule such as water."],
      ["Depolymerisation", "Breaking a polymer back into its monomers."]
    ],
    video: { id: "1ZUg6ZC3ltA", title: "GCSE Chemistry: Addition polymers & polymerisation",
      think: "Draw the repeating unit of the polymer made from propene." },
    sims: [
      { title: "Alkane Compound", url: "https://javalab.org/en/alkane_compound_en/", embed: false, task: "Build butane and one of its isomers." },
      { title: "Build a Molecule", url: phet("build-a-molecule"), embed: true, task: "Build ethanol and ethanoic acid. What is the difference in their functional groups?" }
    ],
    quiz: [
      { q: "Which pair are isomers?",
        options: ["Butane and methylpropane", "Ethane and ethene", "Methanol and ethanol", "Propane and propene"],
        answer: 0, explain: "Both are C~4~H~10~ but with different structures." },
      { q: "Name the ester formed from propanoic acid and ethanol.",
        options: ["Ethyl propanoate", "Propyl ethanoate", "Ethyl ethanoate", "Propyl propanoate"],
        answer: 0, explain: "Alcohol part (ethyl) first, acid part (propanoate) second." },
      { q: "Which conditions convert ethene into ethanol?",
        options: ["Steam, phosphoric acid catalyst, high temperature and pressure", "Yeast at 37 °C", "Bromine water at room temperature", "UV light and chlorine"],
        answer: 0, explain: "This is the catalysed addition of steam (hydration)." },
      { q: "What type of polymer is nylon?",
        options: ["Polyamide (condensation polymer)", "Polyester (addition polymer)", "Addition polymer", "Polyalkene"],
        answer: 0, explain: "Nylon forms from a diacid and a diamine with the loss of water." },
      { q: "What is lost when a condensation polymer forms?",
        options: ["A small molecule such as water", "Nothing", "Carbon dioxide only", "A C=C bond"],
        answer: 0, explain: "Each linkage forms with the loss of a small molecule." },
      { q: "Ethanol is warmed with acidified KMnO~4~. The organic product is…",
        options: ["ethanoic acid", "ethene", "ethane", "ethyl ethanoate"],
        answer: 0, explain: "Ethanol is oxidised to ethanoic acid." },
      { q: "Which test shows a hydrocarbon is unsaturated?",
        options: ["Aqueous bromine is decolourised", "Limewater turns milky", "Litmus turns red", "A glowing splint relights"],
        answer: 0, explain: "Bromine adds across the C=C bond." },
      { q: "Why is cracking needed in oil refineries?",
        options: ["Demand for smaller molecules is greater than the supply from crude oil", "It removes sulfur", "It makes bitumen", "It increases viscosity"],
        answer: 0, explain: "Cracking also produces alkenes for making plastics." },
      { q: "Which is the general formula of the alkenes?",
        options: ["C~n~H~2n~", "C~n~H~2n+2~", "C~n~H~2n+1~OH", "C~n~H~2n−2~"],
        answer: 0, explain: "Alkenes have one C=C and two fewer H than alkanes." },
      { q: "Depolymerisation of a polyester can be carried out by…",
        options: ["heating with acid (hydrolysis)", "adding bromine", "cooling under pressure", "adding yeast"],
        answer: 0, explain: "Acid hydrolysis breaks the ester linkages." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "pc-12", num: 12, group: "III. Chemistry in a Sustainable World",
    title: "Maintaining Air Quality",
    question: "How do pollutants form, and how does chemistry help remove them?",
    images: [img("21-air-quality.jpg", "Maintaining Air Quality")],
    objectives: [
      "State the composition of dry air",
      "Name pollutants, their sources and effects on health and the environment",
      "Describe catalytic converters and flue gas desulfurisation",
      "Explain the importance of the ozone layer and how CFCs deplete it",
      "Describe the carbon cycle and the effects of greenhouse gases"
    ],
    summary: [
      { heading: "Clean air",
        table: [["Gas", "%"], ["Nitrogen", "78"], ["Oxygen", "21"], ["Noble gases (mainly argon) and CO~2~", "≈1"]] },
      { heading: "Pollutants",
        table: [
          ["Pollutant", "Source", "Effect"],
          ["CO", "Incomplete combustion of carbon-containing fuels", "Toxic — binds haemoglobin, reducing oxygen transport"],
          ["NO, NO~2~", "Lightning; internal combustion engines", "NO~2~ forms acid rain; breathing difficulties"],
          ["SO~2~", "Volcanoes; burning fossil fuels", "Acid rain; breathing difficulties; corrodes buildings"],
          ["Unburnt hydrocarbons", "Car engines", "React with NO~x~ in sunlight to form ozone (smog)"],
          ["CH~4~", "Cattle, rice fields, landfill", "Greenhouse gas"]
        ] },
      { heading: "Solutions",
        points: [
          "**Catalytic converters** (Pt, Rh catalysts) carry out redox reactions: 2CO + 2NO -> 2CO~2~ + N~2~; unburnt hydrocarbons are oxidised to CO~2~ and H~2~O.",
          "**Flue gas desulfurisation**: power-station waste gases pass through calcium carbonate slurry. CaCO~3~ + SO~2~ -> CaSO~3~ + CO~2~, then 2CaSO~3~ + O~2~ -> 2CaSO~4~.",
          "**Calcium carbonate** (powdered limestone) can be added to lakes and soil to neutralise acid rain."
        ] },
      { heading: "Ozone layer",
        points: ["The ozone layer absorbs harmful **UV radiation**, which causes skin cancer and cataracts.", "**CFCs** (from old aerosols and refrigerants) release chlorine atoms that break down ozone.", "The Montreal Protocol (1987) banned CFCs; the ozone layer is slowly recovering."] },
      { heading: "Carbon cycle and climate change",
        points: [
          "CO~2~ is added by combustion and respiration, and removed by photosynthesis and dissolving in oceans.",
          "Industrialisation, deforestation and growing populations increase CO~2~ and CH~4~.",
          "Greenhouse gases trap heat -> **global warming** -> more extreme weather, melting polar ice, rising sea levels."
        ] }
    ],
    keyTerms: [
      ["Catalytic converter", "Device in car exhausts that converts CO, NO~x~ and hydrocarbons into less harmful gases."],
      ["Flue gas desulfurisation", "Removing SO~2~ from waste gases using calcium carbonate."],
      ["Acid rain", "Rain made acidic by dissolved SO~2~ and NO~2~."],
      ["Ozone layer", "Layer in the upper atmosphere that absorbs UV radiation."],
      ["CFCs", "Chlorofluorocarbons — compounds that deplete the ozone layer."],
      ["Greenhouse gas", "A gas that traps heat in the atmosphere, e.g. CO~2~, CH~4~."]
    ],
    video: { id: "0YUIwnt_RDE", title: "O-Level Chemistry: Environment, pollutants and catalytic converters",
      think: "Write the equation for removing CO and NO in a catalytic converter." },
    sims: [
      { title: "The Greenhouse Effect", url: phet("greenhouse-effect"), embed: true, task: "Increase greenhouse gas concentration and describe the effect on temperature." }
    ],
    quiz: [
      { q: "Which reaction occurs in a catalytic converter?",
        options: ["2CO + 2NO -> 2CO~2~ + N~2~", "CO~2~ + C -> 2CO", "N~2~ + O~2~ -> 2NO", "SO~2~ + H~2~O -> H~2~SO~3~"],
        answer: 0, explain: "CO is oxidised and NO is reduced to harmless gases." },
      { q: "Which compound is used in flue gas desulfurisation?",
        options: ["Calcium carbonate", "Sodium chloride", "Sulfuric acid", "Ammonia"],
        answer: 0, explain: "CaCO~3~ reacts with SO~2~ to form calcium sulfite, then calcium sulfate." },
      { q: "Why is the ozone layer important?",
        options: ["It absorbs harmful UV radiation", "It traps heat", "It produces oxygen", "It removes CO~2~"],
        answer: 0, explain: "UV radiation can cause skin cancer and cataracts." },
      { q: "Which compounds deplete the ozone layer?",
        options: ["CFCs", "Carbon dioxide", "Methane", "Nitrogen"],
        answer: 0, explain: "CFCs release chlorine atoms that break down ozone." },
      { q: "Nitrogen oxides are formed in car engines because…",
        options: ["nitrogen and oxygen from air react at high temperature", "petrol contains nitrogen", "of incomplete combustion", "catalytic converters produce them"],
        answer: 0, explain: "The high temperature allows N~2~ and O~2~ to react." },
      { q: "Which gas is a greenhouse gas produced by cattle and rice fields?",
        options: ["Methane", "Sulfur dioxide", "Carbon monoxide", "Nitrogen"],
        answer: 0, explain: "Methane is a potent greenhouse gas." },
      { q: "Which process removes CO~2~ from the atmosphere?",
        options: ["Photosynthesis", "Respiration", "Combustion", "Decay"],
        answer: 0, explain: "Plants absorb CO~2~ to make glucose." },
      { q: "Carbon monoxide is dangerous because it…",
        options: ["combines with haemoglobin, reducing oxygen transport", "causes acid rain", "depletes ozone", "is a greenhouse gas only"],
        answer: 0, explain: "It is colourless, odourless and toxic." }
    ]
  }
  ]
};
})();
