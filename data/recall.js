/* =====================================================================
   RECALL — 3 warm-up questions shown at the START of each chapter.
   They activate what students already know (from primary school or
   earlier chapters). Not graded and not sent to the Google Sheet.

   Format:  R("Question", ["CORRECT answer", "wrong", "wrong", "wrong"], "Explanation")
   The correct answer is always written FIRST — the site shuffles the options.
   Text tricks: **bold**, H~2~O (subscript), Cu^2+^ (superscript), -> (arrow).
   ===================================================================== */
(function () {
  function R(q, options, explain) { return { q: q, options: options, answer: 0, explain: explain }; }
  var RECALL = {};

  /* ---------------- LSS G1 Science ---------------- */
  RECALL["g1-01"] = [
    R("Which instrument do we use to measure the temperature of water?",
      ["Thermometer", "Ruler", "Measuring cylinder", "Spring balance"],
      "A **thermometer** measures temperature in °C. A measuring cylinder measures volume; a spring balance measures force."),
    R("Which of these is a **safe** thing to do in the science laboratory?",
      ["Tie up long hair and wear goggles when heating", "Taste a chemical to find out what it is", "Run so you reach the sink quickly", "Point a test tube you are heating towards a friend"],
      "Tied-up hair and goggles protect you from flames and splashes. Never taste chemicals, run, or point a heated test tube at anyone."),
    R("The volume of a liquid is usually measured in…",
      ["millilitres (ml) or cm^3^", "kilograms (kg)", "centimetres (cm)", "degrees Celsius (°C)"],
      "Volume is measured in ml (1 ml = 1 cm^3^). kg is for mass, cm for length, °C for temperature.")
  ];
  RECALL["g1-02"] = [
    R("A force is…",
      ["a push or a pull", "a type of energy", "a kind of matter", "the speed of an object"],
      "A **force** is a push or a pull. We can't see forces, but we can see their effects."),
    R("Which force makes a ball fall back to the ground?",
      ["Gravitational force", "Frictional force", "Elastic spring force", "Magnetic force"],
      "The Earth pulls everything towards its centre — this is **gravitational force** (gravity)."),
    R("Why is it harder to push a box across a carpet than across a smooth floor?",
      ["There is more friction between the box and the rough carpet", "Gravity is weaker on a smooth floor", "The carpet exerts a magnetic force", "The box becomes heavier on the carpet"],
      "Rougher surfaces produce more **friction**, which opposes motion.")
  ];
  RECALL["g1-03"] = [
    R("Where do green plants get the energy they need to make food?",
      ["Light from the Sun", "The soil", "Water", "Carbon dioxide in the air"],
      "Plants trap **light energy** from the Sun to make food (photosynthesis). Water and carbon dioxide are raw materials, not energy sources."),
    R("A battery-powered torch is switched on. Which energy conversion takes place?",
      ["Chemical potential -> electrical -> light (and heat)", "Light -> chemical potential", "Heat -> electrical -> sound", "Sound -> light"],
      "The battery stores **chemical potential energy**, which becomes electrical energy, then light energy (plus some heat) in the bulb."),
    R("A ball is held still, high above the ground. What type of energy does it have because of its position?",
      ["Gravitational potential energy", "Kinetic energy", "Sound energy", "Light energy"],
      "Objects raised above the ground store **gravitational potential energy**. It is not moving, so it has no kinetic energy.")
  ];
  RECALL["g1-04"] = [
    R("For a bulb in a circuit to light up, the circuit must be…",
      ["closed (complete, with no gaps)", "open", "made with plastic wires", "without a battery"],
      "Electricity can only flow through a **closed circuit** — a complete path with no gaps."),
    R("Which material is a good conductor of electricity?",
      ["Copper", "Plastic", "Wood", "Rubber"],
      "Metals such as **copper** conduct electricity. Plastic, wood and rubber are electrical insulators."),
    R("More batteries are added one after another to a circuit with one bulb. What happens to the bulb?",
      ["It becomes brighter", "It becomes dimmer", "It goes off", "There is no change"],
      "More batteries give a bigger push, so more current flows and the bulb is **brighter**.")
  ];
  RECALL["g1-05"] = [
    R("Heat always flows…",
      ["from a hotter place to a colder place", "from a colder place to a hotter place", "only through metals", "only through liquids"],
      "Heat flows from **hotter to colder** until both are at the same temperature."),
    R("A metal spoon left in hot soup quickly feels hot. Why?",
      ["Metal is a good conductor of heat", "Metal is a poor conductor of heat", "The spoon produces its own heat", "The soup gains heat from the spoon"],
      "Metals are **good conductors of heat**, so heat travels quickly from the soup to your hand."),
    R("What happens to most substances when they are heated?",
      ["They expand", "They contract", "Their mass increases", "They disappear"],
      "Most substances **expand** when heated and contract when cooled. Their mass stays the same.")
  ];
  RECALL["g1-06"] = [
    R("Which of these is **not** matter?",
      ["Light", "Air", "Water", "Sand"],
      "Matter has mass and takes up space. **Light** is a form of energy — it has no mass."),
    R("Water droplets form on the outside of a glass of ice water. This change is called…",
      ["condensation", "evaporation", "melting", "boiling"],
      "Water vapour in the air touches the cold glass, loses heat and **condenses** into liquid water."),
    R("Which statement is true of **all** liquids?",
      ["They have a definite volume but no definite shape", "They have a definite shape", "They have no definite volume", "They can be compressed easily"],
      "A liquid keeps its volume but takes the shape of its container. Only gases can be compressed easily.")
  ];
  RECALL["g1-07"] = [
    R("Why do living things need water?",
      ["Water is needed for life processes, e.g. to transport substances in the body", "Water gives us energy, just like food", "Only plants need water", "Water is the source of the oxygen we breathe"],
      "Water is needed for **life processes** such as transporting food and wastes, and for plants to make food. It does not provide energy."),
    R("Most of the water on Earth is…",
      ["salt water in the seas and oceans", "fresh water in rivers and lakes", "water vapour in the air", "water in reservoirs"],
      "About 97% of Earth's water is **salty**. Very little is fresh water we can use directly."),
    R("In Singapore, where is rainwater collected and stored?",
      ["In reservoirs", "In landfills", "In power stations", "In factories"],
      "Rainwater from catchment areas flows into **reservoirs** such as MacRitchie and Marina Reservoir.")
  ];
  RECALL["g1-08"] = [
    R("Which gas in the air do we need for respiration?",
      ["Oxygen", "Carbon dioxide", "Nitrogen", "Water vapour"],
      "Our cells use **oxygen** to release energy from food. Carbon dioxide is given out."),
    R("Which gas makes up most of the air?",
      ["Nitrogen", "Oxygen", "Carbon dioxide", "Water vapour"],
      "Air is about 78% **nitrogen** and 21% oxygen."),
    R("Which activity releases smoke and harmful gases into the air?",
      ["Burning fuels in vehicles and factories", "Planting trees", "Using solar panels", "Cycling to school"],
      "**Burning fuels** releases gases such as carbon monoxide and sulfur dioxide, and tiny particles.")
  ];
  RECALL["g1-09"] = [
    R("Which part is found in a plant cell but **not** in an animal cell?",
      ["Cell wall", "Nucleus", "Cytoplasm", "Cell membrane"],
      "Only plant cells have a **cell wall** (and chloroplasts). Both have a nucleus, cytoplasm and cell membrane."),
    R("Which part of a cell controls all its activities?",
      ["Nucleus", "Cytoplasm", "Cell membrane", "Cell wall"],
      "The **nucleus** is the control centre of the cell."),
    R("Why do we need a microscope to see most cells?",
      ["Most cells are too small to see with our eyes alone", "Cells only appear in the dark", "Cells only exist in water", "Cells move too quickly"],
      "Most cells are far **too small** to see with the naked eye, so we magnify them.")
  ];
  RECALL["g1-10"] = [
    R("Where does digestion begin?",
      ["Mouth", "Stomach", "Small intestine", "Large intestine"],
      "Digestion starts in the **mouth**: teeth break food up and saliva starts digesting starch."),
    R("Where is most digested food absorbed into the blood?",
      ["Small intestine", "Stomach", "Gullet", "Large intestine"],
      "Digested food is absorbed in the **small intestine**. The large intestine mainly absorbs water."),
    R("Rice, bread and noodles mainly provide the body with…",
      ["energy (they are rich in carbohydrates)", "vitamins only", "water", "fibre only"],
      "These foods are rich in **carbohydrates**, our main source of energy.")
  ];

  /* ---------------- LSS G2/G3 Science ---------------- */
  RECALL["lss-01"] = [
    R("In a fair test, how many variables should you change at a time?",
      ["One", "Two", "All of them", "None"],
      "Change only **one** variable and keep the rest constant, so you know what caused the result."),
    R("Why do scientists repeat an experiment?",
      ["To check that the results are reliable", "To make the experiment last longer", "To get a different answer", "To use more apparatus"],
      "Repeating lets you see if results are **consistent (reliable)** and spot mistakes."),
    R("Which of these is an **observation**, not an inference?",
      ["The solution turned blue.", "The gas must be oxygen.", "The plant died because it had no light.", "A reaction happened because heat was given out."],
      "An observation is what you **see, hear, smell or measure**. An inference is an explanation of the observation.")
  ];
  RECALL["lss-02"] = [
    R("Matter is anything that…",
      ["has mass and takes up space", "can be seen", "is a solid", "is living"],
      "**Matter** has mass and occupies space — air is matter even though we can't see it."),
    R("Which state of matter has a definite volume but no definite shape?",
      ["Liquid", "Solid", "Gas", "All three"],
      "A **liquid** keeps its volume but takes the shape of its container."),
    R("Which material is best for the handle of a cooking pot?",
      ["Plastic", "Copper", "Iron", "Aluminium"],
      "**Plastic** is a poor conductor of heat, so the handle stays cool enough to hold.")
  ];
  RECALL["lss-03"] = [
    R("Air is made of nitrogen, oxygen, carbon dioxide and other gases mixed together. Air is a…",
      ["mixture", "single pure substance", "metal", "liquid"],
      "Air contains several substances that are **not chemically joined** — it is a mixture."),
    R("Which gas is needed for things to burn?",
      ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      "Burning needs **oxygen**. This is why a fire blanket puts out fire — it cuts off the oxygen."),
    R("Salt is stirred into water until it can't be seen. What has happened?",
      ["It has dissolved, and can be recovered by evaporating the water", "It has disappeared forever", "It has turned into water", "It has reacted to form a gas"],
      "The salt has **dissolved**. It is still there — evaporate the water and the salt is left behind.")
  ];
  RECALL["lss-04"] = [
    R("Which method separates sand from water?",
      ["Filtration", "Evaporation", "Using a magnet", "Melting"],
      "Sand is insoluble, so it is trapped by filter paper — **filtration**."),
    R("Iron filings are mixed with sand. The easiest way to separate them is to use…",
      ["a magnet", "filter paper", "heat", "water"],
      "Iron is **magnetic**; sand is not."),
    R("Salt solution is heated until all the water is gone. Salt is left behind because…",
      ["the water evaporates but the salt does not", "the salt boils away", "the salt turns into water", "the salt melts"],
      "Water evaporates at a much lower temperature than salt, so the **salt is left behind**.")
  ];
  RECALL["lss-05"] = [
    R("Shadows form because light…",
      ["travels in straight lines and is blocked by opaque objects", "bends around objects", "is absorbed by the air", "travels in curves"],
      "Light travels in **straight lines**. An opaque object blocks it, leaving a dark area — a shadow."),
    R("We can see a book in a lit room because…",
      ["light reflected from the book enters our eyes", "our eyes give out light", "the book gives out its own light", "the book absorbs all the light"],
      "The book is not a light source. It **reflects** light into our eyes."),
    R("Which material lets almost all light pass through it?",
      ["Clear glass", "Frosted glass", "Wood", "Tracing paper"],
      "Clear glass is **transparent**. Frosted glass and tracing paper are translucent; wood is opaque.")
  ];
  RECALL["lss-06"] = [
    R("Which part of a cell controls its activities?",
      ["Nucleus", "Cytoplasm", "Cell membrane", "Cell wall"],
      "The **nucleus** controls cell activities and contains genetic material."),
    R("Which part is found in plant cells but **not** in animal cells?",
      ["Chloroplast", "Nucleus", "Cytoplasm", "Cell membrane"],
      "**Chloroplasts** (and the cell wall) are found only in plant cells. They trap light for photosynthesis."),
    R("Organs such as the stomach and intestines work together. This group of organs is called…",
      ["an organ system", "a tissue", "a cell", "a nucleus"],
      "Cells -> tissues -> organs -> **organ systems** -> organism.")
  ];
  RECALL["lss-07"] = [
    R("Which state of matter can be compressed easily?",
      ["Gas", "Solid", "Liquid", "None of them"],
      "A **gas** has lots of space between its particles, so it can be squashed."),
    R("When ice melts into water, the mass…",
      ["stays the same", "increases", "decreases", "becomes zero"],
      "Changing state doesn't add or remove matter, so the **mass stays the same**."),
    R("A gas spreads out to fill the whole room because…",
      ["a gas has no definite shape or volume", "a gas is heavier than air", "a gas sinks to the floor", "a gas has a definite volume"],
      "A gas **fills any container** it is in — it has no fixed shape or volume.")
  ];
  RECALL["lss-08"] = [
    R("An element is a substance that…",
      ["cannot be broken down into simpler substances by chemical methods", "is a mixture of two substances", "is made of two or more different elements joined together", "is always a gas"],
      "An **element** is the simplest kind of pure substance. Compounds contain two or more elements chemically combined."),
    R("Water (H~2~O) is made of which elements?",
      ["Hydrogen and oxygen", "Hydrogen and carbon", "Carbon and oxygen", "Nitrogen and oxygen"],
      "H stands for **hydrogen** and O for **oxygen**."),
    R("Matter is made of tiny particles. Which statement is true?",
      ["The particles are always moving — in solids they vibrate", "Particles in a solid do not move at all", "Particles get bigger when heated", "Particles can be seen with a hand lens"],
      "Particles are **always moving**. Heating makes them move faster, not bigger.")
  ];
  RECALL["lss-09"] = [
    R("What is the SI unit of force?",
      ["Newton (N)", "Joule (J)", "Kilogram (kg)", "Metre (m)"],
      "Force is measured in **newtons (N)**. The joule is the unit of energy."),
    R("A moving car has which type of energy because it is moving?",
      ["Kinetic energy", "Elastic potential energy", "Sound energy", "Chemical potential energy"],
      "Anything that is moving has **kinetic energy**."),
    R("Which of these can a force do?",
      ["Change the speed, direction or shape of an object", "Create new energy", "Change the mass of an object", "Change the colour of an object"],
      "Forces can **start, stop, speed up, slow down, turn** or **change the shape** of objects.")
  ];
  RECALL["lss-10"] = [
    R("Heat flows…",
      ["from a hotter region to a colder region", "from a colder region to a hotter region", "only upwards", "only through solids"],
      "Heat flows from **hotter to colder** until both reach the same temperature."),
    R("Which material is a good conductor of heat?",
      ["Copper", "Wood", "Plastic", "Air"],
      "Metals such as **copper** are good conductors. Wood, plastic and air are poor conductors (insulators)."),
    R("When a substance is heated, its particles…",
      ["gain energy and move faster", "become bigger", "lose mass", "stop moving"],
      "Heating gives particles **more kinetic energy**, so they move faster.")
  ];
  RECALL["lss-11"] = [
    R("Which of these is a **chemical** change?",
      ["Burning paper", "Melting ice", "Dissolving sugar in water", "Cutting paper"],
      "Burning forms **new substances** (ash, carbon dioxide, water). The others are physical changes."),
    R("Which observation suggests that a chemical reaction may have taken place?",
      ["Gas bubbles are given off and the colour changes", "The object changes shape", "The solid is separated by filtering", "Ice melts into water"],
      "Gas given off, a **colour change**, heat/light given out or a new solid forming are signs of a chemical change."),
    R("For iron to rust, it needs…",
      ["both water and oxygen", "water only", "sunlight only", "nitrogen"],
      "Rusting needs **water and oxygen** (air). Remove either and rusting stops.")
  ];
  RECALL["lss-12"] = [
    R("In a food chain such as grass -> grasshopper -> bird, the arrows show…",
      ["the flow of energy, from the organism eaten to the eater", "which organism is bigger", "where each organism lives", "which organism is faster"],
      "Arrows point **from the food to the eater**, showing the direction energy flows."),
    R("Green plants are called producers because they…",
      ["make their own food using light energy", "eat other organisms", "break down dead organisms", "produce water"],
      "Plants **make their own food** by photosynthesis — every food chain starts with a producer."),
    R("Decomposers such as fungi and bacteria…",
      ["break down dead plants and animals, returning nutrients to the soil", "make food from sunlight", "are always harmful", "only feed on living animals"],
      "**Decomposers** recycle nutrients so producers can use them again.")
  ];
  RECALL["lss-13"] = [
    R("For current to flow, a circuit must be…",
      ["closed (complete, with no gaps)", "open", "made of plastic wires", "without a battery"],
      "Current only flows in a **closed circuit**."),
    R("Which material is an electrical insulator?",
      ["Rubber", "Copper", "Iron", "Aluminium"],
      "**Rubber** does not allow current to flow — it covers wires to keep us safe."),
    R("Two bulbs are connected one after another in a single loop. One bulb is removed. What happens to the other?",
      ["It goes off", "It becomes brighter", "It is not affected", "It flickers but stays on"],
      "There is only one path, so removing a bulb **breaks the circuit** and the other bulb goes off.")
  ];
  RECALL["lss-14"] = [
    R("Where does digestion begin?",
      ["Mouth", "Stomach", "Small intestine", "Gullet"],
      "Teeth chew food and saliva starts digesting starch in the **mouth**."),
    R("Where is most digested food absorbed into the blood?",
      ["Small intestine", "Stomach", "Large intestine", "Gullet"],
      "The **small intestine** is where digested food passes into the blood."),
    R("Why must food be digested?",
      ["To break it into small, simple substances that can be absorbed", "To make it taste better", "To add more energy to it", "To remove all the water from it"],
      "Large food molecules can't pass into the blood, so they must be **broken down into small, simple substances**.")
  ];
  RECALL["lss-15"] = [
    R("Which organ pumps blood around the body?",
      ["Heart", "Lungs", "Stomach", "Kidney"],
      "The **heart** is a muscular pump."),
    R("What does the blood transport around the body?",
      ["Digested food, oxygen and carbon dioxide", "Only water", "Only air", "Undigested food"],
      "Blood carries **digested food and oxygen** to cells, and carries **carbon dioxide** away."),
    R("In a plant, water is transported from the roots to the leaves by…",
      ["water-carrying tubes", "food-carrying tubes", "the flowers", "the cell walls only"],
      "**Water-carrying tubes** (xylem) take water up; food-carrying tubes (phloem) carry food from the leaves.")
  ];
  RECALL["lss-16"] = [
    R("In humans, fertilisation is the fusion of…",
      ["a sperm and an egg", "two eggs", "two sperms", "an egg and an ovary"],
      "**Fertilisation**: the nucleus of a sperm fuses with the nucleus of an egg."),
    R("Where are eggs produced in a female?",
      ["Ovary", "Uterus", "Testis", "Vagina"],
      "Eggs are produced in the **ovaries**. Sperms are produced in the testes."),
    R("Where does the baby develop?",
      ["Uterus (womb)", "Ovary", "Stomach", "Oviduct"],
      "The fertilised egg implants in the **uterus**, where the baby develops.")
  ];

  /* ---------- Chemistry (shared by Combined Chem cc-xx and Pure Chem pc-xx) ---------- */
  var CHEM = {};
  CHEM["01"] = [
    R("Which apparatus measures the volume of a liquid more accurately than a beaker?",
      ["Measuring cylinder", "Conical flask", "Test tube", "Evaporating dish"],
      "A **measuring cylinder** has finer graduations. Beaker markings are only rough."),
    R("Which method separates an insoluble solid from a liquid?",
      ["Filtration", "Evaporation", "Chromatography", "Using a magnet"],
      "The insoluble solid stays on the filter paper as the **residue**; the liquid passes through as the filtrate."),
    R("A pure substance…",
      ["has a fixed melting point and boiling point", "melts over a range of temperatures", "is always colourless", "contains two or more substances"],
      "Pure substances melt and boil at **fixed temperatures**. Impurities make them melt over a range.")
  ];
  CHEM["02"] = [
    R("Particles in a solid are…",
      ["closely packed and vibrate about fixed positions", "far apart and moving randomly at high speed", "far apart and not moving", "free to slide past each other"],
      "Solid particles are **closely packed in an orderly way** and only vibrate."),
    R("Steam turns into water on a cold mirror. This change of state is…",
      ["condensation", "evaporation", "sublimation", "melting"],
      "Gas -> liquid is **condensation**. Heat is given out to the cold mirror."),
    R("Why can you smell perfume from across a room?",
      ["Its particles move randomly and spread out (diffuse)", "The air pushes it in one direction", "Perfume particles are heavier than air", "Perfume particles expand to fill the room"],
      "Gas particles move **randomly** and spread from high to low concentration — **diffusion**.")
  ];
  CHEM["03"] = [
    R("Which particle in an atom is negatively charged?",
      ["Electron", "Proton", "Neutron", "Nucleus"],
      "**Electrons** are negative, protons positive and neutrons neutral."),
    R("Metals are good conductors of electricity. Most non-metals are…",
      ["poor conductors (graphite is an exception)", "good conductors", "magnetic", "shiny"],
      "Most **non-metals do not conduct** electricity. Graphite is the well-known exception."),
    R("A water molecule, H~2~O, contains…",
      ["2 hydrogen atoms and 1 oxygen atom chemically joined", "a mixture of hydrogen gas and oxygen gas", "1 hydrogen atom and 2 oxygen atoms", "3 different elements"],
      "The subscript 2 belongs to H: **2 H atoms and 1 O atom**, chemically combined.")
  ];
  CHEM["04"] = [
    R("How many atoms are there in one molecule of CO~2~?",
      ["3", "2", "1", "4"],
      "One C atom + **two** O atoms = 3 atoms."),
    R("In a chemical reaction in a closed container, the total mass of the products is…",
      ["equal to the total mass of the reactants", "greater than the mass of the reactants", "less than the mass of the reactants", "zero"],
      "Atoms are rearranged, not created or destroyed, so **mass is conserved**."),
    R("The mass number of an atom is the number of…",
      ["protons + neutrons", "protons only", "protons + electrons", "neutrons only"],
      "**Mass number = protons + neutrons** (the particles in the nucleus).")
  ];
  CHEM["05"] = [
    R("Universal Indicator turns which colour in a strongly acidic solution?",
      ["Red", "Purple", "Green", "Blue"],
      "Strong acid = **red** (pH 0–2). Green is neutral (pH 7); purple is strongly alkaline."),
    R("A solution with a pH of 7 is…",
      ["neutral", "acidic", "alkaline", "corrosive"],
      "pH below 7 is acidic, **7 is neutral**, above 7 is alkaline."),
    R("Blue litmus paper turns red in…",
      ["an acid", "an alkali", "pure water", "salt solution"],
      "**Acids** turn blue litmus red. Alkalis turn red litmus blue.")
  ];
  CHEM["06"] = [
    R("Which gas relights a glowing splint?",
      ["Oxygen", "Hydrogen", "Carbon dioxide", "Chlorine"],
      "**Oxygen** supports burning, so the glowing splint bursts into flame."),
    R("Which gas burns with a 'pop' when a lighted splint is placed at the mouth of the test tube?",
      ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"],
      "**Hydrogen** gives the 'pop' sound."),
    R("Which gas turns limewater milky (forms a white precipitate)?",
      ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
      "**Carbon dioxide** reacts with limewater to form insoluble calcium carbonate.")
  ];
  CHEM["07"] = [
    R("For iron to rust, it needs…",
      ["both water and oxygen", "water only", "oxygen only", "carbon dioxide"],
      "Rusting needs **water and oxygen**. Remove either one and rusting stops."),
    R("When magnesium burns in air, it combines with…",
      ["oxygen, forming magnesium oxide", "nitrogen only, forming magnesium nitrate", "water, forming hydrogen", "carbon dioxide, forming carbon"],
      "Magnesium **gains oxygen** — this is oxidation."),
    R("An ion such as Cu^2+^ has a 2+ charge because the atom has…",
      ["lost two electrons", "gained two electrons", "gained two protons", "lost two protons"],
      "Positive ions form when atoms **lose electrons**. The number of protons never changes.")
  ];
  CHEM["08"] = [
    R("Elements in the same group of the Periodic Table have the same number of…",
      ["valence (outer-shell) electrons", "neutrons", "electron shells", "protons"],
      "Same group = same number of **valence electrons**, so similar chemical properties."),
    R("Where are the metals found in the Periodic Table?",
      ["On the left and in the centre", "On the far right", "Only in the top row", "Only in the bottom row"],
      "**Metals** are on the left and centre; non-metals are on the right."),
    R("Noble gases are unreactive because…",
      ["their atoms have full outer electron shells", "they are gases", "they have no electrons", "they have very large atoms"],
      "A **full valence shell** is stable, so noble gas atoms do not need to gain, lose or share electrons.")
  ];
  CHEM["09"] = [
    R("When a fuel burns, energy is given out mainly as…",
      ["heat and light", "sound only", "electrical energy", "kinetic energy only"],
      "Burning (combustion) gives out **heat and light** to the surroundings."),
    R("Which change **takes in** heat from the surroundings?",
      ["Ice melting", "Wood burning", "Steam condensing", "Water freezing"],
      "Melting needs **heat to be absorbed** to overcome the forces between particles."),
    R("Breaking chemical bonds…",
      ["takes in (absorbs) energy", "gives out energy", "involves no energy change", "creates new energy"],
      "Energy is **needed to break bonds**. Energy is released when new bonds form.")
  ];
  CHEM["10"] = [
    R("Sugar dissolves faster in hot water than in cold water because…",
      ["the particles have more energy and move faster", "hot water has more water particles", "sugar particles get bigger", "hot water is thicker"],
      "Higher temperature = particles **move faster** and mix sooner."),
    R("Which dissolves faster in the same volume of water?",
      ["5 g of granulated sugar", "5 g sugar cube", "Both take exactly the same time", "Neither dissolves"],
      "Small grains have a **larger surface area** exposed to the water."),
    R("For a reaction to happen, the reactant particles must…",
      ["collide with enough energy", "stay still", "be the same element", "be far apart"],
      "Particles must **collide**, and with enough energy, to react.")
  ];
  CHEM["11"] = [
    R("Fossil fuels such as crude oil were formed from…",
      ["remains of living things buried over millions of years", "volcanic rocks", "sea salt", "metal ores"],
      "Crude oil and natural gas formed from the **remains of ancient sea organisms** under heat and pressure."),
    R("When a fuel containing carbon and hydrogen burns completely, it produces…",
      ["carbon dioxide and water", "carbon monoxide only", "hydrogen and oxygen", "nitrogen and water"],
      "**Complete combustion**: C -> CO~2~ and H -> H~2~O."),
    R("A carbon atom has 4 valence electrons, so it usually forms how many covalent bonds?",
      ["4", "2", "1", "6"],
      "Carbon shares **4 electrons** to complete its outer shell, forming 4 bonds.")
  ];
  CHEM["12"] = [
    R("Which gas makes up most of clean, dry air?",
      ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
      "Air is about **78% nitrogen**, 21% oxygen and 1% other gases."),
    R("Why is carbon monoxide dangerous?",
      ["It reduces the amount of oxygen the blood can carry", "It causes acid rain", "It has a strong choking smell", "It makes the air hazy"],
      "CO binds to **haemoglobin** in red blood cells, so less oxygen is carried. It has no smell."),
    R("Acid rain is mainly caused by…",
      ["sulfur dioxide and oxides of nitrogen", "carbon monoxide", "oxygen", "methane"],
      "**SO~2~ and NO~x~** dissolve in rainwater to form acids.")
  ];
  Object.keys(CHEM).forEach(function (n) {
    RECALL["cc-" + n] = CHEM[n];
    RECALL["pc-" + n] = CHEM[n];
  });

  window.RECALL = RECALL;
})();
