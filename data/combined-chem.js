/* =====================================================================
   UPPER SEC COMBINED SCIENCE — CHEMISTRY (5086 / 5088) — chapter content
   Formatting: **bold**  H~2~O (subscript)  Cu^2+^ (superscript)  -> (arrow)
   Quiz `answer` = position of correct option counting from 0.
   ===================================================================== */
window.COURSES = window.COURSES || {};
window.COURSES["combined-chem"] = {
  id: "combined-chem",
  name: "Combined Science (Chemistry)",
  short: "Combined Chem",
  color: "orange",   /* sticker colour: teal, orange, yellow or pink */
  blurb: "O-Level Combined Science 5086 / 5088 — Chemistry section. All 12 topics.",
  syllabus: { label: "SEAB 5086/5087/5088 Science syllabus (2026)", url: "https://www.seab.gov.sg/" },
  chapters: [

  /* ------------------------------------------------------------------ */
  {
    id: "cc-01", num: 1, group: "I. Matter — Structures and Properties",
    title: "Experimental Chemistry",
    question: "How do chemists choose apparatus and separate mixtures?",
    mascot: "assets/img/mascots/test-tube.png",
    images: [{ src: "assets/summaries/combined-chem/01-experimental-techniques.jpg", title: "Experimental Techniques" }, { src: "assets/summaries/combined-chem/02-separation-techniques.jpg", title: "Separation Techniques" }],
    objectives: [
      "Name apparatus for measuring time, temperature, mass and volume (burette, pipette, measuring cylinder, gas syringe)",
      "Suggest suitable apparatus, including for collecting gases",
      "Describe filtration, crystallisation/evaporation, distillation, fractional distillation and paper chromatography",
      "Suggest separation methods for solid–solid, solid–liquid and liquid–liquid mixtures",
      "Interpret chromatograms and use melting/boiling points to judge purity"
    ],
    summary: [
      { heading: "Measuring apparatus",
        table: [
          ["Quantity", "Apparatus", "Precision"],
          ["Volume (approx.)", "Measuring cylinder", "to 0.5 cm^3^ or 1 cm^3^"],
          ["Fixed volume (e.g. 25.0 cm^3^)", "Pipette", "to 0.1 cm^3^"],
          ["Variable volume (titration)", "Burette", "to 0.05 cm^3^"],
          ["Volume of gas", "Gas syringe", "to 1 cm^3^"],
          ["Mass", "Electronic balance", "to 0.01 g"],
          ["Temperature", "Thermometer", "to 0.5 °C"],
          ["Time", "Stopwatch", "to 0.1 s / 1 s"]
        ],
        tip: "Avoid **parallax error**: read at eye level, at the bottom of the meniscus. Avoid **zero error**: press 'tare' on the balance." },
      { heading: "Collecting gases",
        table: [
          ["Method", "Suitable for", "Examples"],
          ["Downward delivery (upward displacement of air)", "Gases **denser** than air (M~r~ > 29)", "CO~2~, Cl~2~, SO~2~, HCl"],
          ["Upward delivery (downward displacement of air)", "Gases **less dense** than air", "NH~3~, H~2~"],
          ["Displacement of water", "Gases **insoluble** in water", "H~2~, O~2~, CO~2~ (slightly soluble)"],
          ["Gas syringe", "Measuring the **volume** of any gas", "—"]
        ] },
      { heading: "Separation techniques",
        table: [
          ["Mixture", "Difference used", "Method"],
          ["Insoluble solid + liquid", "Particle size", "**Filtration** (residue + filtrate)"],
          ["Soluble solid + liquid (want solid)", "Volatility", "**Evaporation** to dryness, or **crystallisation** for crystals of heat-sensitive salts"],
          ["Soluble solid + liquid (want liquid)", "Boiling point", "**Simple distillation**"],
          ["Two miscible liquids", "Boiling point", "**Fractional distillation**"],
          ["Two solids, one soluble", "Solubility", "Dissolve, filter, then evaporate/crystallise the filtrate"],
          ["Coloured dissolved substances", "Solubility in solvent", "**Paper chromatography**"]
        ] },
      { heading: "Key practical points",
        points: [
          "**Crystallisation**: heat until saturated (crystals form on a cooled glass rod), then cool so crystals form; filter, wash with a little cold distilled water and dry between filter papers.",
          "**Distillation**: thermometer bulb at the side arm; cold water enters the condenser at the **bottom**; boiling chips for smooth boiling.",
          "**Chromatography**: draw the start line in **pencil** (graphite is insoluble); keep the start line **above** the solvent level. The most soluble component travels furthest. Compare spots with known samples.",
          "**Purity**: a pure substance has a **fixed** melting/boiling point. Impurities **lower** the melting point and **raise** the boiling point, and make them occur over a **range**."
        ] }
    ],
    keyTerms: [
      ["Residue", "Solid left on the filter paper."],
      ["Filtrate", "Liquid that passes through the filter paper."],
      ["Saturated solution", "A solution that cannot dissolve any more solute at that temperature."],
      ["Distillate", "Liquid collected after condensing the vapour in distillation."],
      ["Chromatogram", "The paper showing separated spots after chromatography."],
      ["Miscible", "Liquids that mix completely."],
      ["Parallax error", "Error from reading a scale at an angle instead of at eye level."]
    ],
    video: { id: "NTEGJj3yXNE", title: "GCSE Chemistry: Separating mixtures",
      think: "How would you get pure water from seawater? Pure salt from seawater?" },
    sims: [
      { title: "Distillation", url: "https://javalab.org/en/distillation_en/", embed: false,
        task: "Watch the thermometer reading as the mixture is heated. When does the first liquid start to collect? Why does the temperature stay constant for a while?" }
    ],
    quiz: [
      { q: "Which apparatus measures exactly 25.0 cm^3^ of a solution for titration?",
        options: ["Pipette", "Beaker", "Measuring cylinder", "Conical flask"],
        answer: 0, explain: "A pipette delivers a fixed, accurate volume." },
      { q: "Ammonia is less dense than air and very soluble in water. How should it be collected?",
        options: ["Upward delivery", "Downward delivery", "Displacement of water", "In an open beaker"],
        answer: 0, explain: "Less dense than air -> collect by upward delivery. Soluble in water -> cannot use displacement of water." },
      { q: "Why is the start line on a chromatogram drawn in pencil?",
        options: ["Graphite does not dissolve in the solvent", "Pencil is easier to erase", "Ink is too expensive", "Pencil makes the spots move faster"],
        answer: 0, explain: "Ink would dissolve and separate, interfering with the results." },
      { q: "Which method best obtains pure ethanol from a mixture of ethanol and water?",
        options: ["Fractional distillation", "Filtration", "Crystallisation", "Chromatography"],
        answer: 0, explain: "Ethanol and water are miscible liquids with different boiling points." },
      { q: "A sample melts between 112 °C and 116 °C. Pure substance X melts at 118 °C. The sample is…",
        options: ["X with impurities", "pure X", "not X at all", "a gas"],
        answer: 0, explain: "Impurities lower the melting point and cause melting over a range." },
      { q: "In distillation, cold water enters the condenser at the bottom so that…",
        options: ["the condenser fills completely with water for efficient cooling", "the water boils", "the distillate flows upwards", "the thermometer reads correctly"],
        answer: 0, explain: "Entering at the bottom ensures the condenser jacket is completely filled." },
      { q: "How would you obtain salt from a mixture of salt and sand?",
        options: ["Add water, stir, filter, then evaporate the filtrate", "Use a magnet", "Filter the dry mixture", "Distil the mixture directly"],
        answer: 0, explain: "Salt dissolves but sand does not. Filter out the sand, then evaporate the water to get the salt." },
      { q: "Copper(II) sulfate crystals are obtained by crystallisation rather than heating to dryness because…",
        options: ["heating to dryness would remove water of crystallisation and decompose the crystals", "crystallisation is faster", "copper(II) sulfate does not dissolve", "evaporation produces a gas"],
        answer: 0, explain: "Some salts lose water of crystallisation or decompose when heated strongly." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-02", num: 2, group: "I. Matter — Structures and Properties",
    title: "The Particulate Nature of Matter",
    question: "What is matter made of, and how do particles explain its behaviour?",
    images: [{ src: "assets/summaries/combined-chem/03-particulate-nature.jpg", title: "Particulate Nature of Matter" }, { src: "assets/summaries/combined-chem/05-atomic-structure.jpg", title: "Atomic Structure" }],
    objectives: [
      "Describe solids, liquids and gases and explain changes of state using the kinetic particle theory",
      "State the relative charges and masses of protons, neutrons and electrons",
      "Describe atomic structure: nucleus (protons + neutrons) and electrons in shells",
      "Define proton number and nucleon number; use nuclide notation",
      "Define isotopes; deduce numbers of protons, neutrons and electrons in atoms and ions"
    ],
    summary: [
      { heading: "Kinetic particle theory",
        text: "Matter is made of tiny particles in **constant random motion**.",
        table: [
          ["", "Solid", "Liquid", "Gas"],
          ["Arrangement", "Very closely packed, orderly", "Closely packed, disorderly", "Far apart, disorderly"],
          ["Movement", "Vibrate about fixed positions", "Slide past one another", "Move rapidly in all directions"],
          ["Energy", "Low", "Higher", "High — enough to overcome attractive forces"]
        ] },
      { heading: "Changes of state",
        points: [
          "**Melting / boiling**: particles **gain** energy, vibrate/move faster, overcome attractive forces.",
          "**Freezing / condensation**: particles **lose** energy, slow down, attractive forces hold them closer.",
          "Temperature stays **constant** during melting and boiling — the energy is used to overcome forces of attraction.",
          "**Diffusion**: net movement of particles from a region of **higher** to **lower** concentration. Faster at higher temperature and for particles of lower mass."
        ] },
      { heading: "Sub-atomic particles",
        table: [
          ["Particle", "Relative mass", "Relative charge", "Location"],
          ["Proton", "1", "+1", "Nucleus"],
          ["Neutron", "1", "0", "Nucleus"],
          ["Electron", "1/1840", "−1", "Shells around the nucleus"]
        ],
        points: [
          "**Proton (atomic) number** = number of protons. It identifies the element.",
          "**Nucleon (mass) number** = protons + neutrons.",
          "In an atom, protons = electrons (atoms are neutral). Electrons fill shells 2, 8, 8…"
        ] },
      { heading: "Isotopes and ions",
        points: [
          "**Isotopes**: atoms of the same element with the same number of protons but **different numbers of neutrons**. E.g. ^35^Cl (17p, 18n) and ^37^Cl (17p, 20n).",
          "Isotopes have the **same chemical properties** (same electron arrangement) but slightly different physical properties (e.g. density).",
          "**Ions** form when atoms lose or gain electrons. Li^+^ has 3 protons, 4 neutrons and only **2** electrons."
        ] }
    ],
    keyTerms: [
      ["Kinetic particle theory", "Matter is made of particles in constant random motion."],
      ["Diffusion", "Net movement of particles from higher to lower concentration."],
      ["Proton number", "Number of protons in the nucleus of an atom."],
      ["Nucleon number", "Total number of protons and neutrons in an atom."],
      ["Isotopes", "Atoms of the same element with different numbers of neutrons."],
      ["Ion", "A charged particle formed when an atom loses or gains electrons."]
    ],
    videos: [
      { label: "Particle theory", id: "OTksau0_VoI", title: "Particle theory and states of matter",
        think: "Why does the temperature stay constant while ice is melting?" },
      { label: "Atomic structure", id: "1xicKBfY4yM", title: "Atomic Structure (Science is Khool)",
        think: "How many protons, neutrons and electrons are in a Mg^2+^ ion (proton number 12, nucleon number 24)?" }
    ],
    sims: [
      { title: "States of Matter: Basics", url: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html", embed: true,
        task: "Heat a solid until it melts and boils. Describe the particle arrangement and movement at each stage." },
      { title: "Build an Atom", url: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html", embed: true,
        task: "Build carbon-12, then carbon-13. What changed? Now build a Na^+^ ion. How many electrons does it have?" },
      { title: "Diffusion", url: "https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_en.html", embed: true,
        task: "Compare the rate of diffusion at low and high temperature, and for light and heavy particles." }
    ],
    quiz: [
      { q: "In which state do particles only vibrate about fixed positions?",
        options: ["Solid", "Liquid", "Gas", "All three"],
        answer: 0, explain: "In solids, particles are held in fixed positions by strong attractive forces." },
      { q: "Why does the temperature of water stay at 100 °C while it boils?",
        options: ["Energy absorbed is used to overcome the forces of attraction between particles", "The heat source is switched off", "The particles stop moving", "Water cannot absorb more heat"],
        answer: 0, explain: "The energy goes into breaking attractions, not increasing kinetic energy." },
      { q: "Which gas diffuses fastest at the same temperature?",
        options: ["Hydrogen, H~2~ (M~r~ = 2)", "Oxygen, O~2~ (M~r~ = 32)", "Carbon dioxide, CO~2~ (M~r~ = 44)", "Chlorine, Cl~2~ (M~r~ = 71)"],
        answer: 0, explain: "Lighter particles move faster, so they diffuse faster." },
      { q: "What is the relative charge of a neutron?",
        options: ["0", "+1", "−1", "1/1840"],
        answer: 0, explain: "Neutrons are neutral." },
      { q: "An atom of sodium has nucleon number 23 and proton number 11. How many neutrons does it have?",
        options: ["12", "11", "23", "34"],
        answer: 0, explain: "Neutrons = 23 − 11 = 12." },
      { q: "How many electrons are in an oxide ion, O^2−^ (proton number of O = 8)?",
        options: ["10", "8", "6", "16"],
        answer: 0, explain: "O gains 2 electrons: 8 + 2 = 10." },
      { q: "^35^Cl and ^37^Cl are isotopes. Which statement is correct?",
        options: ["They have the same chemical properties", "They have different numbers of protons", "They have different numbers of electrons", "They are different elements"],
        answer: 0, explain: "Same number of electrons -> same chemical properties. Only the neutron number differs." },
      { q: "Where is almost all the mass of an atom found?",
        options: ["In the nucleus", "In the electron shells", "Spread evenly through the atom", "In the empty space"],
        answer: 0, explain: "Protons and neutrons (each mass 1) are in the nucleus; electrons are very light." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-03", num: 3, group: "I. Matter — Structures and Properties",
    title: "Chemical Bonding and Structure",
    question: "Why do atoms bond, and how does bonding decide a substance's properties?",
    images: [{ src: "assets/summaries/combined-chem/04-elements-compounds-mixtures.jpg", title: "Elements, Compounds, Mixtures" }, { src: "assets/summaries/combined-chem/06-bonding.jpg", title: "Chemical Bonding and Structure" }],
    objectives: [
      "Describe ion formation by electron loss/gain to achieve a noble gas configuration",
      "Draw dot-and-cross diagrams for ionic compounds (e.g. NaCl, MgCl~2~) and covalent molecules (H~2~, O~2~, H~2~O, CH~4~, CO~2~)",
      "Relate the properties of ionic and simple molecular substances to their structure",
      "Distinguish elements, compounds and mixtures; describe metals and alloys"
    ],
    summary: [
      { heading: "Why atoms bond",
        text: "Noble gases are unreactive because they have a **full valence shell**. Other atoms lose, gain or share electrons to get this **stable noble gas configuration**." },
      { heading: "Ionic vs covalent bonding",
        table: [
          ["", "Ionic bonding", "Covalent bonding"],
          ["Between", "Metal + non-metal", "Non-metal + non-metal"],
          ["How", "Metal **loses** electrons -> cation; non-metal **gains** electrons -> anion", "Atoms **share** pairs of electrons"],
          ["Example", "Mg (2.8.2) loses 2e^−^ -> Mg^2+^; each Cl (2.8.7) gains 1e^−^ -> Cl^−^; MgCl~2~", "O=C=O: C shares 4 electrons, each O shares 2"],
          ["Structure", "**Giant ionic lattice** — strong electrostatic attraction between oppositely charged ions", "**Simple molecular** — strong covalent bonds within molecules, **weak intermolecular forces** between molecules"],
          ["Melting/boiling point", "High — lots of energy to overcome strong electrostatic forces", "Low — little energy to overcome weak intermolecular forces"],
          ["Electrical conductivity", "Conducts when **molten or aqueous** (mobile ions); not when solid (ions in fixed positions)", "Does not conduct — molecules are neutral, no mobile charged particles"]
        ],
        tip: "Dot-and-cross check: electrons lost = electrons gained; each ion/atom ends with a full outer shell; charges written correctly." },
      { heading: "Elements, compounds and mixtures",
        table: [
          ["", "Element", "Compound", "Mixture"],
          ["Definition", "Cannot be broken down into simpler substances", "Two or more elements **chemically combined** in a fixed ratio", "Two or more substances **not chemically combined**"],
          ["Properties", "—", "Different from its elements", "Same as its constituents"],
          ["Separation", "—", "Only by chemical means (e.g. electrolysis)", "Easily, by physical methods"]
        ] },
      { heading: "Metals and alloys",
        points: [
          "Metals: high melting and boiling points, malleable and ductile, good conductors of heat and electricity.",
          "An **alloy** is a mixture of a metal with another element, e.g. brass (Cu + Zn), steel (Fe + C).",
          "Alloys are **stronger**: different-sized atoms disrupt the regular arrangement, so layers cannot slide past each other easily."
        ] }
    ],
    keyTerms: [
      ["Ionic bond", "Electrostatic attraction between oppositely charged ions."],
      ["Covalent bond", "A shared pair of electrons between two non-metal atoms."],
      ["Giant ionic lattice", "A regular 3D arrangement of oppositely charged ions."],
      ["Intermolecular forces", "Weak forces of attraction between molecules."],
      ["Valence electrons", "Electrons in the outermost shell."],
      ["Alloy", "A mixture of a metal with one or more other elements."]
    ],
    video: { id: "cFS8cb7g8N0", title: "Chemical Bonding (Science is Khool)",
      think: "Draw the dot-and-cross diagram for magnesium chloride after watching." },
    sims: [
      { title: "Ionic Bond — NaCl", url: "https://javalab.org/en/nacl_ionic_bond_en/", embed: false,
        task: "Watch the electron transfer. Which atom becomes positive and which becomes negative? Why?" },
      { title: "Covalent Bond", url: "https://javalab.org/en/covalent_bond_en/", embed: false,
        task: "How many electrons does each atom share? Check that each atom ends with a full outer shell." },
      { title: "Build a Molecule", url: "https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_en.html", embed: true,
        task: "Build H~2~O, CO~2~ and CH~4~. Count the bonds each atom forms." }
    ],
    quiz: [
      { q: "What type of bonding is found in magnesium oxide?",
        options: ["Ionic", "Covalent", "Metallic only", "No bonding"],
        answer: 0, explain: "Metal + non-metal -> electrons transferred -> ionic bonding." },
      { q: "A magnesium atom (2.8.2) forms an ion by…",
        options: ["losing 2 electrons to form Mg^2+^", "gaining 6 electrons to form Mg^6−^", "sharing 2 electrons", "losing 2 protons"],
        answer: 0, explain: "Losing 2 electrons gives Mg^2+^ with the stable configuration 2.8." },
      { q: "Why does sodium chloride have a high melting point?",
        options: ["Lots of energy is needed to overcome strong electrostatic forces between oppositely charged ions", "Its molecules are very heavy", "It has weak intermolecular forces", "It contains covalent bonds"],
        answer: 0, explain: "Sodium chloride has a giant ionic lattice held together by strong electrostatic attraction." },
      { q: "Solid sodium chloride does NOT conduct electricity because…",
        options: ["its ions are held in fixed positions and cannot move", "it has no ions", "it has free electrons", "it is a covalent compound"],
        answer: 0, explain: "It conducts only when molten or dissolved, when the ions are free to move." },
      { q: "How many shared pairs of electrons are in a molecule of CO~2~?",
        options: ["4", "2", "1", "6"],
        answer: 0, explain: "Each C=O double bond is 2 shared pairs, and there are two double bonds: 4 pairs." },
      { q: "Methane has a low boiling point because…",
        options: ["only weak intermolecular forces need to be overcome", "its covalent bonds are weak", "it has a giant lattice", "it is ionic"],
        answer: 0, explain: "Boiling separates molecules — it does not break covalent bonds." },
      { q: "Which is a mixture?",
        options: ["Brass", "Water", "Sodium chloride", "Carbon dioxide"],
        answer: 0, explain: "Brass is an alloy of copper and zinc — a mixture." },
      { q: "Why are alloys generally stronger than pure metals?",
        options: ["Different-sized atoms disrupt the layers so they cannot slide easily", "Alloys contain ionic bonds", "Alloys have no free electrons", "Alloys are always heavier"],
        answer: 0, explain: "The irregular arrangement stops layers of atoms from sliding over each other." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-04", num: 4, group: "II. Chemical Reactions",
    title: "Chemical Calculations",
    question: "How do chemists count particles they cannot see?",
    mascot: "assets/img/mascots/titration.png",
    images: [{ src: "assets/summaries/combined-chem/09-formulas-equations.jpg", title: "Formulas and Equations" }, { src: "assets/summaries/combined-chem/11-mole-calculations.jpg", title: "Mole Calculations" }],
    objectives: [
      "Write formulae of ionic and covalent compounds",
      "Construct balanced equations with state symbols, including ionic equations",
      "Define A~r~, M~r~ and the mole (Avogadro constant)",
      "Calculate reacting masses and gas volumes (24 dm^3^ at r.t.p.), including limiting reactants",
      "Use concentration in mol/dm^3^ and g/dm^3^"
    ],
    summary: [
      { heading: "Writing formulae",
        points: [
          "**Ionic**: balance the charges. Cu^2+^ and Cl^−^ -> need 2 Cl^−^ -> **CuCl~2~**.",
          "**Covalent**: use prefixes — mono 1, di 2, tri 3, tetra 4, hexa 6. Sulfur hexafluoride = SF~6~.",
          "Diatomic elements: H~2~, N~2~, O~2~, F~2~, Cl~2~, Br~2~, I~2~."
        ],
        table: [
          ["Cations", "Anions"],
          ["NH~4~^+^ ammonium, Ag^+^ silver, Zn^2+^ zinc, Pb^2+^ lead(II), Fe^2+^ / Fe^3+^", "OH^−^ hydroxide, NO~3~^−^ nitrate, CO~3~^2−^ carbonate, SO~4~^2−^ sulfate, PO~4~^3−^ phosphate"]
        ] },
      { heading: "Balancing equations",
        steps: [
          "Write the correct formulae of all reactants and products (never change a formula to balance!).",
          "Count atoms of each element on both sides.",
          "Add coefficients in front so each element balances: 2H~2~ + O~2~ -> 2H~2~O.",
          "Add state symbols (s), (l), (g), (aq)."
        ],
        tip: "**Ionic equation**: show only the ions that react. Neutralisation: H^+^(aq) + OH^−^(aq) -> H~2~O(l)." },
      { heading: "The mole",
        points: [
          "1 mole = **6.02 × 10^23^** particles (Avogadro constant).",
          "**A~r~**: average mass of one atom compared with 1/12 the mass of a carbon-12 atom. **M~r~**: sum of A~r~ of all atoms in the formula.",
          "Moles = mass (g) ÷ M~r~",
          "Moles of gas = volume (dm^3^) ÷ 24 (at r.t.p.). Note: 1 dm^3^ = 1000 cm^3^.",
          "Concentration (mol/dm^3^) = moles ÷ volume (dm^3^). Concentration (g/dm^3^) = mol/dm^3^ × M~r~."
        ] },
      { heading: "Worked example",
        text: "7.2 dm^3^ of O~2~ at r.t.p. reacts with iron: 4Fe + 3O~2~ -> 2Fe~2~O~3~. Find the mass of Fe~2~O~3~.",
        steps: [
          "Moles of O~2~ = 7.2 ÷ 24 = **0.30 mol**",
          "Mole ratio O~2~ : Fe~2~O~3~ = 3 : 2 -> moles of Fe~2~O~3~ = 0.30 × 2/3 = **0.20 mol**",
          "M~r~ of Fe~2~O~3~ = 2(56) + 3(16) = 160 -> mass = 0.20 × 160 = **32 g**"
        ],
        tip: "**Limiting reactant**: the reactant that is used up first; it decides how much product forms. Compare moles available with the mole ratio." }
    ],
    keyTerms: [
      ["Mole", "Amount containing 6.02 × 10^23^ particles."],
      ["Relative atomic mass, A~r~", "Average mass of an atom relative to 1/12 of a carbon-12 atom."],
      ["Relative molecular mass, M~r~", "Sum of the A~r~ of all atoms in a molecule/formula."],
      ["Molar volume", "1 mole of any gas occupies 24 dm^3^ at r.t.p."],
      ["Concentration", "Amount of solute per unit volume of solution."],
      ["Limiting reactant", "The reactant completely used up, which limits the amount of product."]
    ],
    videos: [
      { label: "Formulas and equations", id: "kdNVk2zNbJk", title: "Formulas and Equations (Science is Khool)",
        think: "Write the formula of aluminium sulfate, then balance: Al + O~2~ -> Al~2~O~3~." },
      { label: "Chemical calculations", id: "WeCr4Gy-jPc", title: "Chemical Calculations (Science is Khool)",
        think: "How many moles are in 11 g of CO~2~ (M~r~ = 44)?" }
    ],
    sims: [
      { title: "Balancing Chemical Equations", url: "https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html", embed: true,
        task: "Complete the Game, level 1 and level 2. Can you get full stars without guessing?" },
      { title: "Reactants, Products and Leftovers", url: "https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_en.html", embed: true,
        task: "Use the sandwich and molecule screens to find the **limiting reactant**. Predict the leftovers before you check." },
      { title: "Molarity", url: "https://phet.colorado.edu/sims/html/molarity/latest/molarity_en.html", embed: true,
        task: "Keep the moles constant and change the volume. What happens to the concentration?" }
    ],
    quiz: [
      { q: "What is the formula of aluminium sulfate? (Al^3+^, SO~4~^2−^)",
        options: ["Al~2~(SO~4~)~3~", "AlSO~4~", "Al~3~(SO~4~)~2~", "Al(SO~4~)~3~"],
        answer: 0, explain: "2 × (+3) = +6 balances 3 × (−2) = −6." },
      { q: "What is the M~r~ of CaCO~3~? (Ca = 40, C = 12, O = 16)",
        options: ["100", "68", "84", "116"],
        answer: 0, explain: "40 + 12 + 3(16) = 100." },
      { q: "How many moles are there in 4.4 g of CO~2~? (M~r~ = 44)",
        options: ["0.10 mol", "10 mol", "0.44 mol", "193.6 mol"],
        answer: 0, explain: "Moles = 4.4 ÷ 44 = 0.10 mol." },
      { q: "What volume does 0.25 mol of any gas occupy at r.t.p.?",
        options: ["6.0 dm^3^", "24 dm^3^", "96 dm^3^", "0.010 dm^3^"],
        answer: 0, explain: "0.25 × 24 = 6.0 dm^3^." },
      { q: "Which equation is correctly balanced?",
        options: ["2Mg + O~2~ -> 2MgO", "Mg + O~2~ -> MgO", "Mg + O -> MgO~2~", "2Mg + 2O~2~ -> 2MgO"],
        answer: 0, explain: "Left: 2 Mg, 2 O. Right: 2 Mg, 2 O." },
      { q: "0.50 mol of NaOH is dissolved to make 250 cm^3^ of solution. What is the concentration?",
        options: ["2.0 mol/dm^3^", "0.125 mol/dm^3^", "0.50 mol/dm^3^", "125 mol/dm^3^"],
        answer: 0, explain: "250 cm^3^ = 0.250 dm^3^. 0.50 ÷ 0.250 = 2.0 mol/dm^3^." },
      { q: "2H~2~ + O~2~ -> 2H~2~O. 4 mol of H~2~ react with 1 mol of O~2~. Which is the limiting reactant?",
        options: ["O~2~", "H~2~", "H~2~O", "Neither — both are used up"],
        answer: 0, explain: "4 mol H~2~ needs 2 mol O~2~, but only 1 mol is available, so O~2~ runs out first." },
      { q: "Which is the ionic equation for neutralisation?",
        options: ["H^+^(aq) + OH^−^(aq) -> H~2~O(l)", "Na^+^(aq) + Cl^−^(aq) -> NaCl(s)", "HCl + NaOH -> NaCl + H~2~O", "2H^+^ + O^2−^ -> H~2~O~2~"],
        answer: 0, explain: "Only H^+^ and OH^−^ actually react; the other ions are spectators." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-05", num: 5, group: "II. Chemical Reactions",
    title: "Acid–Base Chemistry",
    question: "What makes a substance acidic or alkaline, and how do acids and bases react?",
    mascot: "assets/img/mascots/basic.png",
    images: [{ src: "assets/summaries/combined-chem/07-acids-bases.jpg", title: "Acids & Bases" }],
    objectives: [
      "Define acids and alkalis in terms of H^+^ and OH^−^ ions; use pH and Universal Indicator",
      "Describe reactions of acids with metals, bases and carbonates",
      "Describe neutralisation as H^+^ + OH^−^ -> H~2~O",
      "Explain controlling soil pH using calcium hydroxide",
      "Describe reactions of bases with acids and ammonium salts",
      "Classify oxides as acidic, basic, amphoteric or neutral"
    ],
    summary: [
      { heading: "Acids and alkalis",
        table: [
          ["", "Acid", "Alkali"],
          ["Definition", "Produces **H^+^** ions in water", "Soluble base that produces **OH^−^** ions in water"],
          ["pH", "< 7", "> 7"],
          ["Universal Indicator", "Red / orange / yellow", "Blue / purple"],
          ["Litmus", "Blue -> red", "Red -> blue"],
          ["Examples", "HCl, HNO~3~, H~2~SO~4~, CH~3~COOH", "NaOH, Ca(OH)~2~ (limewater), aqueous NH~3~"]
        ],
        tip: "Acids only show acidic properties when dissolved in water — dry HCl gas is just neutral molecules with no mobile ions." },
      { heading: "Reactions of acids",
        points: [
          "acid + metal -> salt + **hydrogen** (lighted splint extinguished with a 'pop')",
          "acid + carbonate -> salt + water + **carbon dioxide** (white precipitate with limewater)",
          "acid + base -> salt + water (**neutralisation**)"
        ] },
      { heading: "Reactions of bases",
        points: [
          "alkali + acid -> salt + water",
          "alkali + ammonium salt -> salt + water + **ammonia** (turns moist red litmus blue). Warm gently.",
          "Farmers add **calcium hydroxide** (slaked lime) to neutralise acidic soil, so crops can grow."
        ] },
      { heading: "Types of oxides",
        table: [
          ["Type", "Reacts with", "Examples"],
          ["Acidic (most non-metal oxides)", "Alkalis, not acids", "CO~2~, SO~2~, NO~2~"],
          ["Basic (most metal oxides)", "Acids, not alkalis", "MgO, CaO, Fe~2~O~3~"],
          ["Amphoteric", "Both acids and alkalis", "Al~2~O~3~, ZnO, PbO"],
          ["Neutral", "Neither", "CO, NO, H~2~O"]
        ] }
    ],
    keyTerms: [
      ["Acid", "A substance that produces H^+^ ions when dissolved in water."],
      ["Alkali", "A soluble base that produces OH^−^ ions in water."],
      ["Base", "A metal oxide or hydroxide that neutralises an acid."],
      ["Neutralisation", "H^+^ + OH^−^ -> H~2~O; acid + base -> salt + water."],
      ["Salt", "Compound formed when the H^+^ of an acid is replaced by a metal or ammonium ion."],
      ["Amphoteric oxide", "An oxide that reacts with both acids and alkalis."]
    ],
    video: { id: "PbOxh1gHxy4", title: "Acids and Bases (Science is Khool)",
      think: "Which ion is present in a higher concentration in a solution of pH 2 than in pH 6?" },
    sims: [
      { title: "Acid Factory (game by Ms Khoo)", source: "Game", url: "https://scienceiskhool.github.io/acidsbases/acidfactory", embed: true,
        task: "Play the game. Before each reaction, **predict** what will be made, then check if you were right." },
      { title: "pH Scale", url: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html", embed: true,
        task: "On the **Micro** screen, compare the H~3~O^+^ and OH^−^ ions in an acid, water and an alkali. What happens to pH when you dilute an acid?" },
      { title: "Neutralization Reaction Model", url: "https://javalab.org/en/neutralization_reaction_en/", embed: false,
        task: "Add acid to alkali step by step. Which ions disappear? Which ions stay as spectators?" }
    ],
    quiz: [
      { q: "An acid is a substance that…",
        options: ["produces H^+^ ions when dissolved in water", "produces OH^−^ ions in water", "always contains oxygen", "turns red litmus blue"],
        answer: 0, explain: "The H^+^ ions are responsible for acidic properties." },
      { q: "Zinc reacts with dilute hydrochloric acid. Which gas is produced?",
        options: ["Hydrogen", "Carbon dioxide", "Oxygen", "Chlorine"],
        answer: 0, explain: "acid + metal -> salt + hydrogen." },
      { q: "A gas from acid + calcium carbonate is bubbled into limewater. What is observed?",
        options: ["A white precipitate forms", "The limewater turns blue", "The gas burns with a 'pop'", "No change"],
        answer: 0, explain: "The gas is CO~2~, which forms insoluble CaCO~3~ with limewater." },
      { q: "Why do farmers add calcium hydroxide to soil?",
        options: ["To neutralise excess acidity", "To make the soil more acidic", "To add nitrogen", "To kill insects"],
        answer: 0, explain: "Calcium hydroxide is a base that neutralises acidic soil." },
      { q: "Ammonium chloride is warmed with sodium hydroxide. The gas produced…",
        options: ["turns moist red litmus paper blue", "turns limewater milky", "relights a glowing splint", "bleaches litmus paper"],
        answer: 0, explain: "The gas is ammonia, which is alkaline." },
      { q: "Which oxide is amphoteric?",
        options: ["Zinc oxide", "Sulfur dioxide", "Magnesium oxide", "Carbon monoxide"],
        answer: 0, explain: "ZnO reacts with both acids and alkalis." },
      { q: "Solution P has pH 3 and solution Q has pH 5. Which is correct?",
        options: ["P has a higher concentration of H^+^ ions than Q", "Q is more acidic than P", "Both are alkaline", "P has more OH^−^ ions than Q"],
        answer: 0, explain: "Lower pH = more acidic = higher H^+^ concentration." },
      { q: "Carbon dioxide is an acidic oxide. Which substance will it react with?",
        options: ["Sodium hydroxide", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
        answer: 0, explain: "Acidic oxides react with alkalis/bases." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-06", num: 6, group: "II. Chemical Reactions",
    title: "Qualitative Analysis",
    question: "How can we identify an unknown substance from what we observe?",
    mascot: "assets/img/mascots/colour-change.png",
    images: [{ src: "assets/summaries/combined-chem/08-qualitative-analysis.jpg", title: "Qualitative Analysis" }],
    objectives: [
      "Identify cations Al^3+^, NH~4~^+^, Ca^2+^, Cu^2+^, Fe^2+^, Fe^3+^, Zn^2+^ using NaOH(aq) and NH~3~(aq)",
      "Identify anions CO~3~^2−^, Cl^−^, NO~3~^−^, SO~4~^2−^",
      "Identify gases NH~3~, CO~2~, Cl~2~, H~2~, O~2~, SO~2~"
    ],
    summary: [
      { heading: "Solubility rules",
        table: [
          ["Salt", "Solubility"],
          ["Group 1 (Na^+^, K^+^) and NH~4~^+^ salts, all nitrates", "Always soluble"],
          ["Chlorides", "Soluble except AgCl, PbCl~2~"],
          ["Sulfates", "Soluble except BaSO~4~, PbSO~4~, CaSO~4~ (slightly)"],
          ["Carbonates", "Insoluble except Group 1 and NH~4~^+^"],
          ["Hydroxides / oxides", "Insoluble except Group 1 and some Group 2 (e.g. Ca(OH)~2~)"]
        ] },
      { heading: "Testing for cations",
        text: "Most metal hydroxides are insoluble, so adding OH^−^ (from NaOH or NH~3~) forms coloured precipitates.",
        table: [
          ["Cation", "Add NaOH(aq), then excess", "Add NH~3~(aq), then excess"],
          ["Al^3+^", "White ppt, **soluble** in excess -> colourless solution", "White ppt, **insoluble** in excess"],
          ["Zn^2+^", "White ppt, **soluble** in excess -> colourless solution", "White ppt, **soluble** in excess -> colourless solution"],
          ["Ca^2+^", "White ppt, insoluble in excess", "No ppt (or very slight)"],
          ["Cu^2+^", "Light blue ppt, insoluble in excess", "Light blue ppt, soluble in excess -> **dark blue** solution"],
          ["Fe^2+^", "Green ppt, insoluble in excess", "Green ppt, insoluble in excess"],
          ["Fe^3+^", "Reddish-brown ppt, insoluble in excess", "Reddish-brown ppt, insoluble in excess"],
          ["NH~4~^+^", "No ppt; on warming, ammonia gas given off (turns moist red litmus blue)", "—"]
        ],
        tip: "Tell Al^3+^ and Zn^2+^ apart with **aqueous ammonia**: Zn(OH)~2~ dissolves in excess, Al(OH)~3~ does not." },
      { heading: "Testing for anions",
        table: [
          ["Anion", "Test", "Positive result"],
          ["CO~3~^2−^", "Add dilute acid", "Effervescence; gas gives white ppt with limewater (CO~2~)"],
          ["Cl^−^", "Acidify with dilute HNO~3~, add AgNO~3~(aq)", "White ppt (AgCl)"],
          ["SO~4~^2−^", "Acidify with dilute HNO~3~, add Ba(NO~3~)~2~(aq)", "White ppt (BaSO~4~)"],
          ["NO~3~^−^", "Add NaOH(aq) and aluminium foil, warm", "Ammonia given off — turns moist red litmus blue"]
        ],
        tip: "Why add nitric acid first? To remove carbonate ions, which would also give a white precipitate." },
      { heading: "Testing for gases",
        table: [
          ["Gas", "Test", "Result"],
          ["H~2~", "Lighted splint", "Extinguished with a 'pop'"],
          ["O~2~", "Glowing splint", "Relights"],
          ["CO~2~", "Bubble into limewater", "White ppt"],
          ["NH~3~", "Moist red litmus paper", "Turns blue"],
          ["Cl~2~", "Moist blue litmus paper", "Turns red, then bleached (white)"],
          ["SO~2~", "Acidified KMnO~4~(aq)", "Purple -> colourless"]
        ] }
    ],
    keyTerms: [
      ["Precipitate (ppt)", "An insoluble solid formed when two solutions are mixed."],
      ["Effervescence", "Bubbling caused by a gas being given off."],
      ["Cation", "A positive ion."],
      ["Anion", "A negative ion."],
      ["In excess", "Adding more reagent than needed to react."],
      ["Qualitative analysis", "Identifying substances from observations."]
    ],
    video: { id: "2GaCalUoJZ4", title: "Identify cations using aqueous sodium hydroxide | Qualitative analysis",
      think: "Which two cations give a white precipitate that dissolves in excess NaOH?" },
    sims: [
      { title: "Precipitation Reaction", url: "https://javalab.org/en/precipitation_reaction_en/", embed: false,
        task: "Mix two solutions. Which ions combine to form the precipitate? Which ions stay in solution?" }
    ],
    quiz: [
      { q: "Aqueous sodium hydroxide is added to solution X. A green precipitate forms, insoluble in excess. X contains…",
        options: ["Fe^2+^", "Fe^3+^", "Cu^2+^", "Zn^2+^"],
        answer: 0, explain: "Fe(OH)~2~ is green. Fe(OH)~3~ is reddish-brown and Cu(OH)~2~ is light blue." },
      { q: "Which cation gives a white precipitate with NH~3~(aq) that is **insoluble** in excess, but a white precipitate with NaOH(aq) that **dissolves** in excess?",
        options: ["Al^3+^", "Zn^2+^", "Ca^2+^", "Cu^2+^"],
        answer: 0, explain: "Al(OH)~3~ dissolves in excess NaOH but not in excess NH~3~. Zn(OH)~2~ dissolves in both." },
      { q: "Copper(II) ions with excess aqueous ammonia give…",
        options: ["a dark blue solution", "a reddish-brown precipitate", "a green precipitate", "no change"],
        answer: 0, explain: "The light blue precipitate dissolves in excess NH~3~ to give a dark blue solution." },
      { q: "Which test confirms the presence of chloride ions?",
        options: ["Add dilute nitric acid, then aqueous silver nitrate — white precipitate", "Add dilute acid — effervescence", "Add barium nitrate — white precipitate", "Add NaOH and aluminium, warm — ammonia given off"],
        answer: 0, explain: "Chloride forms white silver chloride, which is insoluble in nitric acid." },
      { q: "A gas turns moist blue litmus red, then bleaches it. The gas is…",
        options: ["chlorine", "ammonia", "carbon dioxide", "hydrogen"],
        answer: 0, explain: "Chlorine is acidic and also a bleaching agent." },
      { q: "Which gas turns acidified potassium manganate(VII) from purple to colourless?",
        options: ["Sulfur dioxide", "Oxygen", "Carbon dioxide", "Hydrogen"],
        answer: 0, explain: "SO~2~ is a reducing agent and reduces the purple MnO~4~^−^ ions." },
      { q: "Which test identifies nitrate ions?",
        options: ["Warm with NaOH(aq) and aluminium; the gas turns moist red litmus blue", "Add AgNO~3~(aq); white precipitate", "Add dilute acid; effervescence", "Add limewater; white precipitate"],
        answer: 0, explain: "Nitrate is reduced to ammonia by aluminium in alkali." },
      { q: "Why is dilute nitric acid added before barium nitrate in the sulfate test?",
        options: ["To remove carbonate ions that would also form a white precipitate", "To make the solution blue", "To produce hydrogen gas", "To dissolve the barium sulfate"],
        answer: 0, explain: "Barium carbonate is also white; the acid destroys carbonate first so the result is reliable." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-07", num: 7, group: "II. Chemical Reactions",
    title: "Redox Chemistry",
    question: "What is happening when substances are oxidised and reduced?",
    mascot: "assets/img/mascots/colour-change.png",
    images: [{ src: "assets/summaries/combined-chem/10-redox.jpg", title: "Redox" }],
    objectives: [
      "Define oxidation and reduction in terms of oxygen and hydrogen gain/loss",
      "Define redox in terms of electron transfer and change in oxidation state",
      "Calculate oxidation states",
      "Use aqueous potassium iodide and acidified potassium manganate(VII) to test for oxidising and reducing agents"
    ],
    summary: [
      { heading: "Four ways to spot redox",
        table: [
          ["", "Oxidation", "Reduction"],
          ["Oxygen", "Gain of oxygen", "Loss of oxygen"],
          ["Hydrogen", "Loss of hydrogen", "Gain of hydrogen"],
          ["Electrons", "**Loss** of electrons", "**Gain** of electrons"],
          ["Oxidation state", "Increase", "Decrease"]
        ],
        tip: "Oxidation and reduction always happen **together**. Remember **OIL RIG**: Oxidation Is Loss, Reduction Is Gain (of electrons)." },
      { heading: "Examples",
        points: [
          "Fe~2~O~3~ + 3CO -> 2Fe + 3CO~2~: Fe~2~O~3~ is **reduced** (loses oxygen); CO is **oxidised** (gains oxygen).",
          "Cl~2~ + 2Br^−^ -> 2Cl^−^ + Br~2~: Cl~2~ gains electrons (reduced); Br^−^ loses electrons (oxidised).",
          "Mg + 2HCl -> MgCl~2~ + H~2~: oxidation state of Mg rises 0 -> +2 (oxidised); H falls +1 -> 0 (reduced)."
        ] },
      { heading: "Rules for oxidation states",
        steps: [
          "An element on its own = **0** (e.g. H~2~, Mg).",
          "A simple ion = its charge (e.g. Zn^2+^ = +2).",
          "In compounds: O is usually −2, H is usually +1, F is always −1.",
          "Sum of oxidation states in a neutral compound = **0**.",
          "Sum in a polyatomic ion = its **charge**. E.g. S in SO~4~^2−^: x + 4(−2) = −2 -> x = **+6**."
        ] },
      { heading: "Oxidising and reducing agents",
        points: [
          "An **oxidising agent** oxidises another substance and is itself **reduced**.",
          "A **reducing agent** reduces another substance and is itself **oxidised**."
        ],
        table: [
          ["Test for", "Add", "Positive result", "Why"],
          ["Oxidising agent", "Aqueous potassium iodide, KI", "Colourless -> **brown**", "I^−^ (−1) oxidised to I~2~ (0)"],
          ["Reducing agent", "Acidified potassium manganate(VII), KMnO~4~", "**Purple** -> colourless", "Mn reduced from +7 (MnO~4~^−^) to +2 (Mn^2+^)"]
        ] }
    ],
    keyTerms: [
      ["Oxidation", "Gain of oxygen, loss of hydrogen, loss of electrons, or increase in oxidation state."],
      ["Reduction", "Loss of oxygen, gain of hydrogen, gain of electrons, or decrease in oxidation state."],
      ["Redox", "A reaction in which oxidation and reduction occur together."],
      ["Oxidation state", "The 'charge' an atom would have if all bonds were ionic."],
      ["Oxidising agent", "Causes oxidation of another substance and is itself reduced."],
      ["Reducing agent", "Causes reduction of another substance and is itself oxidised."]
    ],
    video: { id: "jyvcVjrZnJA", title: "GCSE Chemistry: Oxidation and reduction (redox)",
      think: "In Mg + Cu^2+^ -> Mg^2+^ + Cu, which species loses electrons?" },
    sims: [
      { title: "Activity Series of Metals", url: "https://javalab.org/en/activity_series_of_metals_en/", embed: false,
        task: "Put magnesium into copper(II) sulfate solution. Write the ionic equation and label which species is oxidised and which is reduced." }
    ],
    extra: [{ label: "Quizlet: Oxidation states", url: "https://quizlet.com/sg/449893567/oxidation-states-flash-cards/" }],
    quiz: [
      { q: "In CuO + H~2~ -> Cu + H~2~O, which substance is reduced?",
        options: ["CuO", "H~2~", "Cu", "H~2~O"],
        answer: 0, explain: "CuO loses oxygen to become Cu." },
      { q: "Oxidation in terms of electrons is…",
        options: ["loss of electrons", "gain of electrons", "loss of protons", "gain of neutrons"],
        answer: 0, explain: "OIL RIG — Oxidation Is Loss." },
      { q: "What is the oxidation state of manganese in MnO~4~^−^?",
        options: ["+7", "+4", "−1", "+8"],
        answer: 0, explain: "x + 4(−2) = −1 -> x = +7." },
      { q: "What is the oxidation state of sulfur in SO~2~?",
        options: ["+4", "+2", "−2", "+6"],
        answer: 0, explain: "x + 2(−2) = 0 -> x = +4." },
      { q: "When a substance is added to aqueous potassium iodide, the solution turns brown. The substance is…",
        options: ["an oxidising agent", "a reducing agent", "an alkali", "a catalyst"],
        answer: 0, explain: "It oxidised I^−^ to brown I~2~, so it is an oxidising agent." },
      { q: "In Cl~2~ + 2KBr -> 2KCl + Br~2~, the oxidising agent is…",
        options: ["Cl~2~", "KBr", "KCl", "Br~2~"],
        answer: 0, explain: "Cl~2~ gains electrons (is reduced) and so oxidises Br^−^." },
      { q: "Which change is a reduction?",
        options: ["Fe^3+^ -> Fe^2+^", "Fe -> Fe^2+^", "Cl^−^ -> Cl~2~", "Zn -> Zn^2+^"],
        answer: 0, explain: "Fe^3+^ gains an electron; its oxidation state decreases from +3 to +2." },
      { q: "A reducing agent is added to acidified potassium manganate(VII). The colour changes from…",
        options: ["purple to colourless", "colourless to brown", "orange to green", "blue to colourless"],
        answer: 0, explain: "MnO~4~^−^ (purple) is reduced to Mn^2+^ (colourless)." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-08", num: 8, group: "II. Chemical Reactions",
    title: "Patterns in the Periodic Table",
    question: "How does an element's position in the Periodic Table predict its properties?",
    images: [{ src: "assets/summaries/combined-chem/13-periodic-table.jpg", title: "Periodic Table" }],
    objectives: [
      "Relate position in the Periodic Table to proton number and electronic configuration",
      "Describe the change from metallic to non-metallic character across a period",
      "Describe trends in Group 1, Group 17 and Group 18",
      "Place metals in a reactivity series and deduce order from experimental results",
      "Relate the extraction of metals to the reactivity series; describe conditions for rusting and its prevention"
    ],
    summary: [
      { heading: "Periodic trends",
        points: [
          "Elements are arranged in order of **increasing proton number**.",
          "**Group number** = number of valence electrons. **Period number** = number of electron shells.",
          "Elements in the same group have **similar chemical properties** because they have the same number of valence electrons.",
          "Across a period (left -> right): metallic character **decreases**, non-metallic character **increases**."
        ] },
      { heading: "Group properties",
        table: [
          ["Group 1 — alkali metals (Li, Na, K)", "Group 17 — halogens (Cl~2~, Br~2~, I~2~)", "Group 18 — noble gases"],
          ["Soft, low-density metals", "Diatomic, simple molecular", "Monatomic, unreactive (full valence shell)"],
          ["Melting point **decreases** down the group", "Melting/boiling point **increases** down the group; colour darkens (pale yellow-green Cl~2~ gas -> reddish-brown Br~2~ liquid -> black I~2~ solid)", "Low melting and boiling points"],
          ["Reactivity **increases** down the group (outer electron further from nucleus, lost more easily)", "Reactivity **decreases** down the group", "—"],
          ["metal + water -> metal hydroxide + hydrogen (alkaline solution)", "A more reactive halogen **displaces** a less reactive one: Cl~2~ + 2Br^−^ -> 2Cl^−^ + Br~2~", "—"]
        ] },
      { heading: "Reactivity series",
        text: "K > Na > Ca > Mg > (Al) > Zn > Fe > Pb > (H) > Cu > Ag  (most -> least reactive)",
        table: [
          ["Metals", "Water", "Steam", "Dilute HCl"],
          ["K, Na, Ca", "React (K, Na violently) -> hydroxide + H~2~", "—", "Violent (dangerous)"],
          ["Mg", "Very slowly", "Reacts -> oxide + H~2~", "Reacts quickly -> salt + H~2~"],
          ["Zn, Fe", "No reaction", "React -> oxide + H~2~", "React -> salt + H~2~"],
          ["Pb", "No reaction", "No reaction", "Very slowly"],
          ["Cu, Ag", "No reaction", "No reaction", "No reaction (below H)"]
        ],
        points: [
          "**Displacement**: a more reactive metal displaces a less reactive metal from its salt solution. Mg + Cu^2+^ -> Mg^2+^ + Cu (blue solution turns colourless; reddish-brown solid forms).",
          "Metals **above carbon** (K–Al) are extracted by **electrolysis**; metals **below carbon** (Zn, Fe, Pb…) by **reduction with carbon**. The more reactive the metal, the harder it is to extract."
        ] },
      { heading: "Rusting",
        points: [
          "Iron rusts when **both water and oxygen** are present. Salt and acids speed up rusting.",
          "Prevent rusting with a **barrier**: painting, greasing/oiling, plastic coating."
        ] }
    ],
    keyTerms: [
      ["Group", "A vertical column; elements have the same number of valence electrons."],
      ["Period", "A horizontal row; elements have the same number of electron shells."],
      ["Alkali metals", "Group 1 metals: soft, low density, react with water to form alkalis."],
      ["Halogens", "Group 17 non-metals that exist as diatomic molecules."],
      ["Displacement reaction", "A more reactive element replaces a less reactive one from its compound."],
      ["Rusting", "Corrosion of iron in the presence of water and oxygen."]
    ],
    video: { id: "TGZs93DzMDY", title: "GCSE Chemistry: Group 1 — the alkali metals",
      think: "Explain why potassium is more reactive than sodium, using electron shells." },
    sims: [
      { title: "Activity Series of Metals", url: "https://javalab.org/en/activity_series_of_metals_en/", embed: false,
        task: "Test each metal in each salt solution. Use the results to rank the metals from most to least reactive." },
      { title: "Build an Atom (periodic table view)", url: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html", embed: true,
        task: "Build atoms with proton numbers 3, 11 and 19. Where do they appear in the Periodic Table? What do their electron arrangements have in common?" }
    ],
    quiz: [
      { q: "An element has electronic configuration 2.8.7. In which group and period is it?",
        options: ["Group 17, Period 3", "Group 7, Period 2", "Group 3, Period 7", "Group 17, Period 2"],
        answer: 0, explain: "7 valence electrons -> Group 17; 3 shells -> Period 3. (It is chlorine.)" },
      { q: "Why do Li, Na and K have similar chemical properties?",
        options: ["They each have one valence electron", "They have the same number of shells", "They have the same mass", "They are all gases"],
        answer: 0, explain: "Same number of valence electrons -> similar reactions." },
      { q: "Going down Group 1, reactivity…",
        options: ["increases", "decreases", "stays the same", "first increases, then decreases"],
        answer: 0, explain: "The valence electron is further from the nucleus, so it is lost more easily." },
      { q: "Chlorine water is added to potassium iodide solution. What is observed?",
        options: ["The colourless solution turns brown", "No change", "A white precipitate forms", "Purple solution turns colourless"],
        answer: 0, explain: "Cl~2~ is more reactive and displaces I~2~ (brown in solution)." },
      { q: "Metal X reacts with steam but not with cold water. X does not displace zinc from zinc sulfate. X could be…",
        options: ["iron", "potassium", "copper", "magnesium"],
        answer: 0, explain: "Iron reacts with steam, not cold water, and is less reactive than zinc. (Magnesium would displace zinc.)" },
      { q: "Why is aluminium extracted by electrolysis rather than by heating with carbon?",
        options: ["Aluminium is above carbon in the reactivity series", "Aluminium is below carbon", "Carbon is too expensive", "Aluminium oxide is a gas"],
        answer: 0, explain: "Carbon can only reduce oxides of metals below it in the reactivity series." },
      { q: "Which conditions are needed for iron to rust?",
        options: ["Water and oxygen", "Oxygen only", "Water only", "Carbon dioxide and nitrogen"],
        answer: 0, explain: "Both must be present. Salt speeds up rusting." },
      { q: "Why are noble gases unreactive?",
        options: ["They have a full valence shell", "They are very heavy", "They are metals", "They have no electrons"],
        answer: 0, explain: "A full outer shell is stable, so there is no tendency to lose, gain or share electrons." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-09", num: 9, group: "II. Chemical Reactions",
    title: "Chemical Energetics",
    question: "Why do some reactions get hot and others get cold?",
    images: [{ src: "assets/summaries/combined-chem/12-rates-energetics.jpg", title: "Rate of Reaction & Energetics" }],
    objectives: [
      "Describe exothermic reactions as transferring energy to the surroundings (temperature rises)",
      "Describe endothermic reactions as taking in energy from the surroundings (temperature falls)",
      "Classify common processes as exothermic or endothermic"
    ],
    summary: [
      { heading: "Exothermic vs endothermic",
        table: [
          ["", "Exothermic", "Endothermic"],
          ["Energy", "**Gives out** energy to the surroundings", "**Takes in** energy from the surroundings"],
          ["Temperature of surroundings", "Rises", "Falls"],
          ["Example (syllabus)", "NaOH + HCl (neutralisation)", "Dissolving ammonium nitrate in water"]
        ],
        tip: "After the reaction ends, the temperature returns to room temperature." },
      { heading: "Classifying processes",
        table: [
          ["Exothermic", "Endothermic"],
          ["Combustion (burning fuels)", "Thermal decomposition, e.g. CaCO~3~ -> CaO + CO~2~"],
          ["Neutralisation", "Photosynthesis"],
          ["Respiration", "Dissolving some ionic compounds (e.g. NH~4~NO~3~)"],
          ["Dissolving acids/alkalis in water", "Melting, boiling (evaporation)"],
          ["Freezing, condensation", "—"]
        ] },
      { heading: "Using energy changes",
        points: [
          "Exothermic: self-heating cans, hand warmers, burning fuel for cooking.",
          "Endothermic: instant cold packs for sports injuries."
        ] }
    ],
    keyTerms: [
      ["Exothermic", "A process that transfers energy (usually heat) to the surroundings."],
      ["Endothermic", "A process that takes in energy from the surroundings."],
      ["Thermal decomposition", "Breaking down a compound using heat."],
      ["Surroundings", "Everything other than the reacting chemicals, e.g. the water, test tube, air."]
    ],
    video: { id: "dstRL5xB0Sk", title: "GCSE Chemistry: Exothermic and endothermic reactions",
      think: "Is melting ice exothermic or endothermic? Explain using energy." },
    sims: [],
    quiz: [
      { q: "During a reaction, the temperature of the solution rises from 28 °C to 35 °C. The reaction is…",
        options: ["exothermic", "endothermic", "neither", "a physical change only"],
        answer: 0, explain: "Energy is given out to the surroundings, so the temperature rises." },
      { q: "Ammonium nitrate is dissolved in water and the beaker feels cold. This is because…",
        options: ["energy is taken in from the surroundings", "energy is released to the surroundings", "the water evaporates", "ammonium nitrate is a gas"],
        answer: 0, explain: "Dissolving ammonium nitrate is endothermic." },
      { q: "Which process is endothermic?",
        options: ["Thermal decomposition of calcium carbonate", "Burning methane", "Neutralisation", "Respiration"],
        answer: 0, explain: "Heat must be continuously supplied to decompose CaCO~3~." },
      { q: "Which process is exothermic?",
        options: ["Condensation of steam", "Melting of ice", "Photosynthesis", "Boiling of water"],
        answer: 0, explain: "Gas -> liquid releases energy." },
      { q: "Why is a self-heating can of coffee able to warm the drink?",
        options: ["It uses an exothermic reaction", "It uses an endothermic reaction", "It traps sunlight", "It contains a battery"],
        answer: 0, explain: "The reaction releases heat into the drink." },
      { q: "An instant cold pack for sports injuries works because…",
        options: ["the reaction inside takes in heat from the injured area", "the reaction releases heat", "it contains ice", "it produces carbon dioxide"],
        answer: 0, explain: "An endothermic process absorbs heat, cooling the skin." },
      { q: "Which is TRUE about photosynthesis?",
        options: ["It is endothermic — energy from light is absorbed", "It is exothermic", "It releases heat at night", "It is the same as combustion"],
        answer: 0, explain: "Plants absorb light energy to make glucose." },
      { q: "After an exothermic reaction finishes, the temperature of the mixture will…",
        options: ["fall back to room temperature", "keep rising", "fall below room temperature", "stay at its maximum forever"],
        answer: 0, explain: "Heat is lost to the surroundings until room temperature is reached." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-10", num: 10, group: "II. Chemical Reactions",
    title: "Rate of Reactions",
    question: "What makes reactions go faster or slower?",
    images: [{ src: "assets/summaries/combined-chem/12-rates-energetics.jpg", title: "Rate of Reaction & Energetics" }],
    objectives: [
      "Explain the effects of concentration, pressure, particle size and temperature on rate using collision theory",
      "Interpret experimental data and graphs on rate of reaction"
    ],
    summary: [
      { heading: "Collision theory",
        text: "Particles react only when they collide **with sufficient energy** and **in the correct orientation** — an **effective collision**. Rate increases when the **frequency of effective collisions** increases." },
      { heading: "Factors affecting rate",
        table: [
          ["Factor", "Change", "Explanation"],
          ["Concentration", "Increase", "More reacting particles per unit volume -> more frequent effective collisions"],
          ["Pressure (gases)", "Increase", "More gas particles per unit volume -> more frequent effective collisions"],
          ["Particle size", "Smaller (powder)", "Larger surface area exposed -> more frequent effective collisions"],
          ["Temperature", "Increase", "Particles gain kinetic energy and move faster -> collide more often and more collisions have sufficient energy"]
        ] },
      { heading: "Measuring rate",
        points: [
          "If a gas is produced: measure the **volume of gas** over time (gas syringe), or the **loss in mass** of the flask over time.",
          "The graph is **steepest at the start** (highest concentration of reactants), then becomes gentler, and becomes **flat** when the limiting reactant is used up."
        ] },
      { heading: "Reading graphs",
        points: [
          "**Steeper initial gradient** = faster rate.",
          "**Final volume of gas** depends only on the **amount (moles) of limiting reactant**.",
          "Higher temperature or powder instead of lumps: steeper curve, **same** final volume.",
          "Doubling the amount of limiting reactant: steeper curve **and** double the final volume."
        ] }
    ],
    keyTerms: [
      ["Rate of reaction", "How fast reactants are used up or products are formed."],
      ["Effective collision", "A collision with enough energy and correct orientation to cause a reaction."],
      ["Collision theory", "Reactions happen when particles collide effectively."],
      ["Surface area", "The area of a solid exposed to the other reactant."],
      ["Limiting reactant", "The reactant used up first; it fixes the amount of product."]
    ],
    video: { id: "jd6U5nQcqKc", title: "Factors affecting rate of reaction + collision theory",
      think: "Why does powdered chalk react faster with acid than a lump of chalk of the same mass?" },
    sims: [
      { title: "Reaction Rate", url: "https://javalab.org/en/reaction_rate_of_solution_en/", embed: false,
        task: "Change the concentration and the temperature one at a time. Record what happens to the number of collisions and the rate." },
      { title: "Reactions & Rates (PhET)", url: "https://phet.colorado.edu/sims/cheerpj/reactions-and-rates/latest/reactions-and-rates.html?simulation=reactions-and-rates", embed: false,
        task: "On the **Many Collisions** tab, raise the temperature. How does the number of product molecules change over time?" }
    ],
    quiz: [
      { q: "Which change would NOT increase the rate of reaction between magnesium ribbon and hydrochloric acid?",
        options: ["Using a larger volume of the same acid", "Using more concentrated acid", "Heating the acid", "Using magnesium powder"],
        answer: 0, explain: "More volume at the same concentration does not increase particles per unit volume." },
      { q: "Increasing temperature increases rate because particles…",
        options: ["move faster and more collisions have sufficient energy", "become larger", "increase in number", "stop colliding"],
        answer: 0, explain: "Higher kinetic energy -> more frequent and more effective collisions." },
      { q: "Powdered calcium carbonate reacts faster with acid than lumps because…",
        options: ["it has a larger surface area for collisions", "it has more mass", "it is more concentrated", "it is a catalyst"],
        answer: 0, explain: "More exposed surface -> more frequent effective collisions." },
      { q: "On a graph of volume of gas against time, the gradient is steepest…",
        options: ["at the start of the reaction", "at the end of the reaction", "when the graph is flat", "halfway through"],
        answer: 0, explain: "Reactant concentration is highest at the start, so rate is fastest." },
      { q: "Why does the volume of gas stop increasing eventually?",
        options: ["The limiting reactant is used up", "The gas syringe is broken", "The temperature drops to zero", "The other reactant is a catalyst"],
        answer: 0, explain: "Once the limiting reactant runs out, no more product forms." },
      { q: "The same experiment is repeated at a higher temperature with the same amounts of reactants. Compared with the original, the new curve has…",
        options: ["a steeper initial gradient and the same final volume", "the same gradient and a larger final volume", "a gentler gradient and the same final volume", "a steeper gradient and double the final volume"],
        answer: 0, explain: "Temperature changes the rate, not the amount of limiting reactant." },
      { q: "Why does increasing the pressure of a gaseous reaction increase its rate?",
        options: ["There are more gas particles per unit volume", "The particles become heavier", "The activation energy increases", "Fewer collisions happen"],
        answer: 0, explain: "Particles are pushed closer together, so they collide more often." },
      { q: "In a reaction that gives off CO~2~, the flask is placed on a balance. How does the mass change?",
        options: ["It decreases as CO~2~ escapes", "It increases", "It stays the same", "It decreases, then increases"],
        answer: 0, explain: "The gas leaves the flask, so mass decreases until the reaction stops." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-11", num: 11, group: "III. Chemistry in a Sustainable World",
    title: "Organic Chemistry",
    question: "Where do fuels and plastics come from, and how do they behave?",
    images: [{ src: "assets/summaries/combined-chem/14-fuels-air-quality.jpg", title: "Fuels and Air Quality" }, { src: "assets/summaries/combined-chem/15-organic-1.jpg", title: "Organic Chemistry 1" }, { src: "assets/summaries/combined-chem/16-organic-2.jpg", title: "Organic Chemistry 2" }],
    objectives: [
      "Describe crude oil and natural gas as non-renewable fuels; describe fractional distillation of crude oil",
      "Describe bioethanol as a renewable, more sustainable biofuel",
      "Describe homologous series; draw and name alkanes (C1–C3), alkenes (C2–C3), alcohols (C1–C3)",
      "Describe reactions of alkanes, alkenes, alcohols and carboxylic acids",
      "Describe cracking, the bromine test, margarine manufacture and polymers"
    ],
    summary: [
      { heading: "Fuels",
        points: [
          "**Natural gas** (mainly methane) and **crude oil** are **non-renewable** energy sources.",
          "Crude oil is a mixture of hydrocarbons separated by **fractional distillation**. Small molecules (low boiling point) rise to the cool top; large molecules (high boiling point) condense at the hot bottom.",
          "Fractions, top -> bottom: petroleum gas, petrol, naphtha (chemical feedstock), kerosene (aircraft fuel), diesel, lubricating oil, bitumen (roads). Each fraction is still a mixture.",
          "**Bioethanol** from sugarcane: glucose is **fermented** by yeast (absent oxygen, ~37 °C), then fractionally distilled. More sustainable — the CO~2~ released on burning is offset by CO~2~ absorbed during plant growth."
        ] },
      { heading: "Homologous series",
        text: "A family of compounds with the **same general formula**, **same functional group**, **similar chemical properties**, and a **gradual change in physical properties** (melting/boiling point and viscosity increase as M~r~ increases).",
        table: [
          ["Series", "General formula", "Functional group", "C1 / C2 / C3"],
          ["Alkanes", "C~n~H~2n+2~", "— (saturated, C–C only)", "methane / ethane / propane"],
          ["Alkenes", "C~n~H~2n~", "C=C", "— / ethene / propene"],
          ["Alcohols", "C~n~H~2n+1~OH", "–OH (hydroxyl)", "methanol / ethanol / propanol"],
          ["Carboxylic acids", "C~n~H~2n+1~COOH", "–COOH (carboxyl)", "methanoic / ethanoic / propanoic acid"]
        ],
        tip: "Prefixes: meth = 1 C, eth = 2, prop = 3, but = 4. Every carbon atom forms **4 bonds**." },
      { heading: "Reactions",
        table: [
          ["Compound", "Reaction", "Details"],
          ["Alkanes", "Combustion", "Complete: CO~2~ + H~2~O. Incomplete (limited O~2~): CO forms"],
          ["Alkanes", "Substitution with chlorine", "In UV light: CH~4~ + Cl~2~ -> CH~3~Cl + HCl"],
          ["Alkenes", "Addition of bromine", "**Test for C=C**: reddish-brown bromine water **decolourises**"],
          ["Alkenes", "Addition of hydrogen", "Nickel catalyst, heat -> alkane. Used to make **margarine** from polyunsaturated vegetable oils (liquid -> solid)"],
          ["Alkenes", "Addition polymerisation", "High temperature and pressure: ethene -> poly(ethene)"],
          ["Alcohols", "Combustion; oxidation", "Oxidised to carboxylic acids by acidified KMnO~4~ (purple -> colourless) or by atmospheric oxygen (bacteria)"],
          ["Carboxylic acids", "Typical acid reactions", "With metals (H~2~), carbonates (CO~2~), bases (salt + water)"]
        ] },
      { heading: "Cracking",
        points: [
          "**Cracking** breaks long-chain alkanes into shorter alkanes, alkenes and hydrogen (high temperature + catalyst).",
          "Why? There is **more demand** for small molecules (e.g. petrol) than crude oil supplies, and alkenes are needed to make plastics."
        ] },
      { heading: "Polymers",
        points: [
          "Polymers are large molecules made from many small units (**monomers**). Ethene -> poly(ethene), used for plastic bags and cling film.",
          "Non-biodegradable plastics cause pollution: they fill landfills, harm marine life, and give toxic gases when burned.",
          "Recycling: physical (melt into pellets) or chemical (crack into fuels/monomers). There are social, economic and environmental trade-offs."
        ] }
    ],
    keyTerms: [
      ["Hydrocarbon", "A compound of carbon and hydrogen only."],
      ["Homologous series", "A family of compounds with the same general formula and functional group."],
      ["Saturated", "Contains only C–C single bonds."],
      ["Unsaturated", "Contains at least one C=C double bond."],
      ["Cracking", "Breaking large hydrocarbon molecules into smaller ones."],
      ["Fermentation", "Yeast converts glucose to ethanol and CO~2~ without oxygen."],
      ["Polymer", "A large molecule made of many repeating monomer units."]
    ],
    video: { id: "CjmriZq5xRo", title: "GCSE Chemistry: Crude oil and fractional distillation",
      think: "Why do the smallest molecules collect at the top of the fractionating column?" },
    sims: [
      { title: "Alkane Compound", url: "https://javalab.org/en/alkane_compound_en/", embed: false,
        task: "Build methane, ethane and propane. Check the general formula C~n~H~2n+2~ for each." },
      { title: "Covalent Bonds of Hydrocarbon", url: "https://javalab.org/en/hydrocarbon_en/", embed: false,
        task: "Compare ethane and ethene. Which one is unsaturated? How can you tell?" },
      { title: "Build a Molecule", url: "https://phet.colorado.edu/sims/html/build-a-molecule/latest/build-a-molecule_en.html", embed: true,
        task: "Build ethanol, C~2~H~5~OH. Can you also build a different molecule with the same atoms?" }
    ],
    quiz: [
      { q: "What is the formula of the alkane with 3 carbon atoms?",
        options: ["C~3~H~8~", "C~3~H~6~", "C~3~H~7~OH", "C~3~H~4~"],
        answer: 0, explain: "C~n~H~2n+2~ with n = 3 gives C~3~H~8~ (propane)." },
      { q: "Which test distinguishes ethene from ethane?",
        options: ["Add bromine water — ethene decolourises it", "Add limewater — ethene turns it milky", "Burn them — only ethene burns", "Add water — only ethane dissolves"],
        answer: 0, explain: "The C=C in ethene reacts with bromine in an addition reaction." },
      { q: "Why is cracking necessary?",
        options: ["Demand for smaller molecules is greater than the supply from crude oil", "It makes crude oil less flammable", "It turns alkenes into alkanes", "It removes sulfur"],
        answer: 0, explain: "Cracking converts less useful long chains into high-demand petrol and alkenes." },
      { q: "In the fractional distillation of crude oil, which fraction has the highest boiling point?",
        options: ["Bitumen", "Petrol", "Petroleum gas", "Kerosene"],
        answer: 0, explain: "Bitumen has the largest molecules and collects at the bottom." },
      { q: "Margarine is made from vegetable oils by…",
        options: ["adding hydrogen to C=C bonds", "adding bromine", "fermentation", "cracking"],
        answer: 0, explain: "Hydrogenation makes the oil more saturated, raising its melting point so it is solid." },
      { q: "Ethanol is warmed with acidified potassium manganate(VII). What forms and what is observed?",
        options: ["Ethanoic acid; purple solution turns colourless", "Ethene; brown solution decolourises", "Ethane; no change", "Carbon dioxide; white precipitate"],
        answer: 0, explain: "Ethanol is oxidised to ethanoic acid; MnO~4~^−^ is reduced." },
      { q: "Why is bioethanol considered more sustainable than petrol?",
        options: ["CO~2~ released when it burns is offset by CO~2~ absorbed as sugarcane grows", "It produces no CO~2~ when burned", "It is made from crude oil", "It does not burn"],
        answer: 0, explain: "The carbon is recycled through plants, so net CO~2~ increase is much smaller." },
      { q: "Members of a homologous series have…",
        options: ["the same general formula and similar chemical properties", "the same boiling point", "the same molecular formula", "identical physical properties"],
        answer: 0, explain: "Physical properties change gradually as the chain gets longer." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "cc-12", num: 12, group: "III. Chemistry in a Sustainable World",
    title: "Maintaining Air Quality",
    question: "How do human activities change the air, and what can we do about it?",
    images: [{ src: "assets/summaries/combined-chem/14-fuels-air-quality.jpg", title: "Fuels and Air Quality" }],
    objectives: [
      "State the composition of clean air",
      "Name the sources and effects of air pollutants: CO, oxides of nitrogen, SO~2~, unburnt hydrocarbons, ozone",
      "Describe the carbon cycle and how human activities increase CO~2~",
      "Explain how greenhouse gases cause global warming and climate change"
    ],
    summary: [
      { heading: "Composition of clean air",
        table: [["Gas", "Approx. %"], ["Nitrogen", "78"], ["Oxygen", "21"], ["Noble gases (mainly argon), carbon dioxide, water vapour", "about 1"]] },
      { heading: "Air pollutants",
        table: [
          ["Pollutant", "Source", "Effect"],
          ["Carbon monoxide", "Incomplete combustion of carbon-containing fuels", "Toxic — combines with haemoglobin, reducing oxygen transport; headaches, fatigue, death"],
          ["Oxides of nitrogen", "Lightning; high temperatures in car engines", "Acidic: breathing difficulties, eye irritation, **acid rain**"],
          ["Sulfur dioxide", "Volcanoes; burning fossil fuels containing sulfur", "Acidic: breathing difficulties, **acid rain**"],
          ["Unburnt hydrocarbons", "Car engines", "React with oxides of nitrogen in sunlight to form **ozone** (photochemical smog)"]
        ],
        tip: "**Acid rain** corrodes limestone buildings and metal structures, destroys vegetation and kills aquatic life." },
      { heading: "The carbon cycle",
        points: [
          "CO~2~ is **added** to the air by combustion and respiration, and **removed** by photosynthesis.",
          "Human activities upset the balance: **burning fossil fuels** (industrialisation) adds more CO~2~; **deforestation** means fewer trees to remove CO~2~."
        ] },
      { heading: "Global warming and climate change",
        points: [
          "**Greenhouse gases** (CO~2~, methane) trap heat in the atmosphere.",
          "Increasing amounts -> **global warming** -> climate change: melting ice caps, rising sea levels, more heat waves and extreme weather.",
          "Solutions: use renewable energy, biofuels, energy efficiency, public transport, reforestation."
        ] }
    ],
    keyTerms: [
      ["Air pollutant", "A substance in the air that harms living things or the environment."],
      ["Acid rain", "Rain with pH below 5.6 due to dissolved SO~2~ and NO~2~."],
      ["Incomplete combustion", "Burning with insufficient oxygen, producing CO or soot."],
      ["Greenhouse gas", "A gas that traps heat in the atmosphere, e.g. CO~2~, CH~4~."],
      ["Carbon cycle", "Processes that move carbon between the atmosphere, living things and fuels."],
      ["Global warming", "Increase in Earth's average temperature due to more greenhouse gases."]
    ],
    video: { id: "2ri95j0cShg", title: "GCSE Chemistry: Air pollution",
      think: "Pick one pollutant. State its source, its effect, and one way to reduce it." },
    sims: [
      { title: "The Greenhouse Effect", url: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_en.html", embed: true,
        task: "Compare the temperature with no greenhouse gases, today's level and a high level. Explain the pattern using photons of infrared radiation." }
    ],
    quiz: [
      { q: "What is the approximate percentage of oxygen in clean air?",
        options: ["21%", "78%", "1%", "50%"],
        answer: 0, explain: "Nitrogen 78%, oxygen 21%, others about 1%." },
      { q: "Carbon monoxide is formed when…",
        options: ["fuels burn in a limited supply of oxygen", "fuels burn in excess oxygen", "plants photosynthesise", "lightning strikes"],
        answer: 0, explain: "Incomplete combustion produces CO." },
      { q: "Why is carbon monoxide toxic?",
        options: ["It reduces the ability of blood to carry oxygen", "It causes acid rain", "It is a greenhouse gas only", "It bleaches the lungs"],
        answer: 0, explain: "CO binds to haemoglobin in red blood cells." },
      { q: "How are oxides of nitrogen formed in car engines?",
        options: ["Nitrogen and oxygen from the air react at high temperature", "Petrol contains nitrogen compounds", "Catalytic converters produce them", "From unburnt hydrocarbons"],
        answer: 0, explain: "The very high temperatures in engines allow N~2~ and O~2~ to react." },
      { q: "Which pair are both greenhouse gases?",
        options: ["Carbon dioxide and methane", "Nitrogen and oxygen", "Argon and neon", "Oxygen and hydrogen"],
        answer: 0, explain: "CO~2~ and CH~4~ trap heat in the atmosphere." },
      { q: "Which process removes carbon dioxide from the atmosphere?",
        options: ["Photosynthesis", "Respiration", "Combustion", "Decomposition of limestone"],
        answer: 0, explain: "Plants take in CO~2~ to make glucose." },
      { q: "How does deforestation increase atmospheric CO~2~?",
        options: ["Fewer trees remove CO~2~ by photosynthesis", "Trees produce CO~2~ by photosynthesis", "Deforestation produces oxygen", "Cutting trees releases nitrogen"],
        answer: 0, explain: "Fewer trees means less CO~2~ is absorbed (and burning the trees releases more)." },
      { q: "Ozone near the ground is formed from…",
        options: ["unburnt hydrocarbons and oxides of nitrogen in sunlight", "carbon dioxide and water", "sulfur dioxide and rain", "methane and oxygen in the dark"],
        answer: 0, explain: "These pollutants react in sunlight to form ozone (photochemical smog)." }
    ]
  }
  ]
};
