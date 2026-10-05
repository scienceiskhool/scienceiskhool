/* =====================================================================
   SEC 1 G1 SCIENCE — chapter content
   How to edit: see SETUP-GUIDE.md, Part 4. Formatting inside text:
     **bold**   H~2~O (subscript)   Cu^2+^ (superscript)   -> (arrow)
   Quiz: `answer` is the position of the correct option, counting from 0
   (0 = first option). Options are reshuffled for students automatically.
   ===================================================================== */
window.COURSES = window.COURSES || {};
window.COURSES["g1-science"] = {
  id: "g1-science",
  name: "Science (G1)",
  short: "LSS G1",
  color: "teal",   /* sticker colour: teal, orange, yellow or pink */
  blurb: "Lower Secondary Science (G1): lab skills, Machines Around Us, Our Environment, and Our Body and Health.",
  syllabus: { label: "MOE Lower Secondary Science syllabus (G1)", url: "https://www.moe.gov.sg/-/media/files/secondary/syllabuses-nt/science/2021-science-syllabus-lower-secondary-nt.pdf" },
  chapters: [

  /* ------------------------------------------------------------------ */
  {
    id: "g1-01", num: 1, group: "Introduction",
    title: "Laboratory Measurements & Procedures",
    question: "Why is it important to observe laboratory safety rules? Why is measurement important?",
    mascot: "assets/img/mascots/boom.png",
    images: [{ src: "assets/summaries/g1-science/01-lab-measurements.jpg", title: "Laboratory Measurements & Procedures" }],
    objectives: [
      "Follow lab safety rules and explain why each one matters",
      "Recognise hazard symbols: corrosive, flammable, harmful/irritant, toxic",
      "Light and use a Bunsen burner safely",
      "Choose the right instrument to measure length, mass, time, temperature and volume, and record the unit"
    ],
    summary: [
      { heading: "Lab safety rules",
        points: [
          "No food or drinks in the lab. Do not taste any chemicals unless your teacher says so.",
          "Tie up long hair; no loose clothing (e.g. ties).",
          "Wear **safety goggles** when heating or using chemicals.",
          "Never stand in front of a test tube that is being heated, and never point it at anyone.",
          "Tell the teacher **immediately** if there is an accident. Know where the first-aid kit and safety equipment are.",
          "Do not play in the lab. Wash your hands before leaving."
        ] },
      { heading: "Common hazard symbols",
        table: [
          ["Symbol", "Meaning", "Examples", "Precautions"],
          ["Corrosive", "Can cause severe damage on contact with skin or eyes", "Acids, alkalis", "Wear gloves; wash with lots of water on contact"],
          ["Flammable", "Catches fire easily", "Alcohol, petrol", "Keep away from flames and heat; store in a cool place"],
          ["Harmful / Irritant", "Irritates skin, eyes and nose", "Sulfur dioxide, nitrogen oxides", "Avoid breathing in; wash with water on contact"],
          ["Toxic", "Poisonous; can cause serious harm or death", "Carbon monoxide, bleach", "Avoid contact; use in a well-ventilated area or fume cupboard"],
          ["Toxic to the environment", "Harms plants, animals and water bodies", "Pesticides, some heavy-metal salts", "Dispose of properly — never down the sink"]
        ] },
      { heading: "Using a Bunsen burner",
        text: "Parts: barrel, collar, air hole, jet, gas inlet, base.",
        steps: [
          "**Close** the air hole (prevents strike-back).",
          "Turn on the gas tap and light the gas with a lighter at the top of the barrel.",
          "Turn the collar to **open** the air hole to get a hot, non-luminous (blue) flame."
        ],
        table: [
          ["Air hole", "Oxygen", "Flame"],
          ["Open", "More oxygen", "Non-luminous (blue), hotter, steady — used for heating"],
          ["Closed", "Less oxygen", "Luminous (yellow), cooler, easy to see — the 'safety flame'"]
        ] },
      { heading: "Measuring physical quantities",
        table: [
          ["Quantity", "Instrument", "Unit"],
          ["Length (straight)", "Ruler", "cm, mm, m"],
          ["Length (curved)", "Measuring tape", "cm, m"],
          ["Mass", "Electronic balance", "g, kg"],
          ["Time", "Stopwatch", "s"],
          ["Temperature", "Thermometer", "°C"],
          ["Volume of liquid", "Measuring cylinder", "cm^3^ (= ml)"]
        ],
        tip: "Read a measuring cylinder at **eye level**, at the **bottom of the meniscus**. Always write the unit with your reading." }
    ],
    keyTerms: [
      ["Hazard symbol", "A picture warning about the danger of a substance."],
      ["Luminous flame", "Yellow, cooler flame formed when the air hole is closed."],
      ["Non-luminous flame", "Blue, hotter flame formed when the air hole is open."],
      ["Strike-back", "When the flame burns down inside the barrel — prevented by closing the air hole before lighting."],
      ["Meniscus", "The curved surface of a liquid in a narrow tube."],
      ["Physical quantity", "Something that can be measured, e.g. mass, length, time."]
    ],
    video: { id: "_41a0EXzVWs", title: "Bunsen burner safety essentials",
      think: "Why must the air hole be closed before lighting the burner?" },
    sims: [],
    quiz: [
      { q: "Which flame should you use when heating a liquid in a test tube?",
        options: ["Non-luminous (blue) flame", "Luminous (yellow) flame", "Any flame, as long as it is big", "A flame with the gas tap half on and the air hole closed"],
        answer: 0, explain: "The non-luminous flame (air hole open) is hotter and steady, and it does not leave soot on apparatus." },
      { q: "Before lighting a Bunsen burner, the air hole should be…",
        options: ["closed", "fully open", "half open", "removed"],
        answer: 0, explain: "Closing the air hole prevents strike-back and gives a visible luminous flame when you first light it." },
      { q: "Ethanol has a **flammable** label. Which precaution is most important?",
        options: ["Keep it away from flames", "Wear gloves because it burns skin", "Never mix it with water", "Store it in the fridge with food"],
        answer: 0, explain: "Flammable substances catch fire easily, so keep them away from flames and heat." },
      { q: "Which instrument should you use to measure the volume of 40 cm^3^ of water?",
        options: ["Measuring cylinder", "Electronic balance", "Ruler", "Beaker with no markings"],
        answer: 0, explain: "A measuring cylinder measures volume of liquids in cm^3^." },
      { q: "A student reads a measuring cylinder from above the liquid level. What is the problem?",
        options: ["The reading will be inaccurate because it was not taken at eye level", "There is no problem", "The liquid will spill", "The unit will change"],
        answer: 0, explain: "Readings must be taken at eye level, at the bottom of the meniscus, to avoid parallax error." },
      { q: "Concentrated acid splashes onto your hand. What should you do first?",
        options: ["Wash it with plenty of running water and tell the teacher", "Wipe it on your clothes", "Ignore it if it does not hurt", "Add alkali to neutralise it"],
        answer: 0, explain: "Acids are corrosive. Wash with lots of water straight away and alert the teacher." },
      { q: "Which pair of quantity and unit is correct?",
        options: ["Mass — gram (g)", "Time — metre (m)", "Temperature — cm^3^", "Length — second (s)"],
        answer: 0, explain: "Mass is measured in g or kg; time in s; temperature in °C; length in m or cm." },
      { q: "Why should you never point a test tube that is being heated at anyone?",
        options: ["The hot liquid may spit out suddenly and burn them", "The flame will go out", "The test tube will become luminous", "It makes the reading inaccurate"],
        answer: 0, explain: "Heated liquids can boil suddenly and shoot out of the tube." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-02", num: 2, group: "Machines Around Us",
    title: "Forces",
    question: "How do we use forces to make our lives better?",
    objectives: [
      "Describe a force as a push or a pull, e.g. lifting, pressing, stretching, twisting",
      "Name types of forces: gravitational, frictional, elastic, magnetic",
      "State that weight is the gravitational force on an object, measured in newtons (N) with a spring balance",
      "Describe the effects of forces: change shape, start/stop/speed up/slow down an object, change direction",
      "Explain how friction depends on the surfaces and how hard they are pressed together",
      "Explain how simple machines (lever, pulley, inclined plane) make work easier"
    ],
    summary: [
      { heading: "What is a force?",
        text: "A force is a **push or a pull**. Forces are measured in **newtons (N)** using a **spring balance** (force meter).",
        points: ["Actions that use forces: lifting, pressing, stretching, twisting, pushing, pulling."] },
      { heading: "Types of forces",
        table: [
          ["Force", "What it does", "Example"],
          ["Gravitational force", "Pulls objects towards the Earth. The gravitational force on an object is its **weight**.", "An apple falling from a tree"],
          ["Frictional force", "Opposes motion between two surfaces in contact", "Brakes slowing down a bicycle"],
          ["Elastic force", "Acts when a stretched or squashed object tries to return to its shape", "A stretched rubber band, a spring"],
          ["Magnetic force", "Attracts magnetic materials (iron, steel, nickel, cobalt) or repels like poles", "A fridge magnet"]
        ] },
      { heading: "Effects of forces",
        points: [
          "Change the **shape** of an object (squash, stretch, twist).",
          "Make a stationary object **move**, or a moving object **stop**.",
          "Make a moving object **speed up**, **slow down** or **change direction**."
        ] },
      { heading: "Friction",
        points: [
          "Friction is **greater** when surfaces are **rougher** and when they are **pressed together harder**.",
          "Useful friction: lets us walk without slipping, lets brakes stop vehicles, lets us grip objects.",
          "Unwanted friction: wears out shoes and tyres, produces heat in machines, wastes energy.",
          "Reduce friction with lubricants (oil, grease), ball bearings, smooth surfaces, rollers/wheels."
        ] },
      { heading: "Simple machines",
        text: "Simple machines let us use a **smaller effort** to move a load.",
        table: [
          ["Machine", "How it helps", "Example"],
          ["Lever", "A long arm turns about a pivot; pushing further from the pivot needs less effort", "See-saw, scissors, bottle opener"],
          ["Pulley", "A rope over a wheel changes the direction of the force; more pulleys = less effort", "Flagpole, crane"],
          ["Inclined plane", "A slope lets you raise a load with less effort over a longer distance", "Ramp for wheelchairs"]
        ] }
    ],
    keyTerms: [
      ["Force", "A push or a pull, measured in newtons (N)."],
      ["Weight", "The gravitational force acting on an object, in newtons."],
      ["Friction", "A force that opposes motion between two surfaces in contact."],
      ["Spring balance", "An instrument used to measure force."],
      ["Lever", "A simple machine that turns about a pivot."],
      ["Pivot", "The point a lever turns about (also called the fulcrum)."],
      ["Lubricant", "A substance such as oil that reduces friction."]
    ],
    video: { id: "8-yT0UUMyUM", title: "KS3 Science: Forces",
      think: "List two examples where friction is useful and one where it is a nuisance." },
    sims: [
      { title: "Forces and Motion: Basics", url: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html", embed: true,
        task: "Open the **Friction** screen. Push the crate with the same force on different friction settings. What happens to its speed? Then switch friction to 'none' — what happens after you stop pushing?" }
    ],
    quiz: [
      { q: "What is the unit of force?",
        options: ["Newton (N)", "Kilogram (kg)", "Joule (J)", "Metre (m)"],
        answer: 0, explain: "Force is measured in newtons (N). Kilogram is the unit of mass." },
      { q: "The weight of an object is…",
        options: ["the gravitational force acting on it", "the amount of matter in it", "the space it takes up", "the friction acting on it"],
        answer: 0, explain: "Weight is a force — the pull of gravity on the object. Mass is the amount of matter." },
      { q: "Which surface would give the **most** friction for a box being pushed across it?",
        options: ["Rough carpet", "Polished floor", "Ice", "Oiled metal sheet"],
        answer: 0, explain: "Rougher surfaces produce more friction." },
      { q: "Which of these is an example of **useful** friction?",
        options: ["Shoe soles gripping the floor", "Tyres wearing out", "Machine parts heating up", "A door hinge squeaking"],
        answer: 0, explain: "Grip between soles and floor stops us from slipping. The others are unwanted effects." },
      { q: "A stretched rubber band pulls back when released. Which force is this?",
        options: ["Elastic force", "Magnetic force", "Gravitational force", "Frictional force"],
        answer: 0, explain: "Elastic force acts when a stretched or squashed object tries to return to its shape." },
      { q: "Which is NOT an effect of a force?",
        options: ["Changing the colour of an object", "Changing the shape of an object", "Changing the direction of a moving object", "Making a moving object stop"],
        answer: 0, explain: "Forces can change shape, speed and direction — but not colour." },
      { q: "Why is a ramp used to load a heavy trolley onto a truck?",
        options: ["Less effort is needed, although the load moves a longer distance", "The trolley becomes lighter on a ramp", "It removes friction completely", "It increases the weight of the trolley"],
        answer: 0, explain: "An inclined plane lets you use a smaller effort over a longer distance." },
      { q: "To open a heavy door with the least effort, where should you push?",
        options: ["At the edge furthest from the hinges", "Right next to the hinges", "In the middle of the door", "It makes no difference"],
        answer: 0, explain: "The hinge is the pivot. Pushing far from the pivot needs the least effort." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-03", num: 3, group: "Machines Around Us",
    title: "Energy",
    question: "How do we use energy conversions to make our lives better? Why is it important to reduce energy wastage?",
    objectives: [
      "Name forms of energy: kinetic, potential, light, sound, heat, electrical",
      "State that energy cannot be created or destroyed, only converted from one form to another",
      "Describe energy conversions in everyday devices",
      "Compare renewable and non-renewable energy sources",
      "Explain how burning fossil fuels contributes to global warming, and suggest ways to reduce energy wastage"
    ],
    summary: [
      { heading: "Forms of energy",
        table: [
          ["Form", "Description", "Example"],
          ["Kinetic", "Energy of a moving object", "A rolling ball"],
          ["Potential", "Stored energy — due to height (gravitational), stretching (elastic) or in chemicals (chemical)", "Water behind a dam, a stretched spring, food, batteries"],
          ["Light", "Energy given out by luminous objects", "The Sun, a lamp"],
          ["Sound", "Energy carried by vibrations", "A ringing bell"],
          ["Heat", "Energy that flows from a hotter to a colder object", "A cup of hot tea cooling"],
          ["Electrical", "Energy carried by an electric current", "A charging phone"]
        ] },
      { heading: "Conservation of energy",
        text: "Energy **cannot be created or destroyed**. It can only be **converted** from one form to another. The total amount stays the same.",
        points: [
          "Torch: chemical potential (battery) -> electrical -> light + heat",
          "Hairdryer: electrical -> heat + kinetic + sound",
          "Ball falling: gravitational potential -> kinetic",
          "Solar panel: light -> electrical"
        ],
        tip: "Most devices also convert some energy into **heat** or **sound** that we do not want. This is 'wasted' energy — it is not destroyed, just not useful." },
      { heading: "Energy sources",
        table: [
          ["", "Non-renewable", "Renewable"],
          ["Examples", "Fossil fuels: coal, crude oil, natural gas", "Sun (solar), wind, hydropower (moving water), biomass"],
          ["Can it run out?", "Yes — takes millions of years to form", "No — replaced naturally"],
          ["Advantages", "Reliable; large amounts of energy; power stations already built", "Does not run out; little or no carbon dioxide or pollution"],
          ["Disadvantages", "Produces carbon dioxide (greenhouse gas) and air pollutants; will run out", "Depends on weather/location; may be costly to set up; needs a lot of space"]
        ] },
      { heading: "Global warming and saving energy",
        points: [
          "Burning fossil fuels releases **carbon dioxide**, a **greenhouse gas** that traps heat and contributes to global warming.",
          "Save energy: switch off lights and appliances when not in use, set the air-conditioner to 25°C, use energy-efficient appliances (look for more ticks on the energy label), take public transport."
        ] }
    ],
    keyTerms: [
      ["Kinetic energy", "Energy of a moving object."],
      ["Potential energy", "Stored energy, e.g. gravitational, elastic or chemical."],
      ["Conservation of energy", "Energy cannot be created or destroyed, only converted from one form to another."],
      ["Fossil fuels", "Coal, crude oil and natural gas — non-renewable energy sources."],
      ["Renewable energy", "Energy from sources that are replaced naturally, e.g. sun, wind."],
      ["Greenhouse gas", "A gas such as carbon dioxide that traps heat in the atmosphere."]
    ],
    video: { id: "Jv9bl4M1dzA", title: "KS3 Physics: Energy resources",
      think: "Which renewable energy source suits Singapore best, and why?" },
    sims: [
      { title: "Energy Forms and Changes", url: "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_en.html", embed: true,
        task: "On the **Systems** screen, connect the sun -> solar panel -> light bulb. Then try the cyclist -> generator -> water heater. Write each energy conversion as A -> B -> C." },
      { title: "Mechanical Energy Conversion", url: "https://javalab.org/en/mechanical_energy_conversion_en/", embed: false,
        task: "Watch how potential and kinetic energy change as the object moves. Where is kinetic energy greatest?" }
    ],
    quiz: [
      { q: "A battery-powered torch is switched on. Which energy conversion takes place?",
        options: ["Chemical potential -> electrical -> light and heat", "Light -> electrical -> chemical potential", "Kinetic -> sound -> light", "Heat -> chemical potential -> light"],
        answer: 0, explain: "The battery stores chemical potential energy, which becomes electrical energy, then light (useful) and heat (wasted)." },
      { q: "Which statement about energy is correct?",
        options: ["Energy can be converted from one form to another, but not created or destroyed", "Energy is used up and destroyed by machines", "Energy can be created by power stations", "Heat is not a form of energy"],
        answer: 0, explain: "This is the principle of conservation of energy." },
      { q: "Which is a renewable energy source?",
        options: ["Wind", "Coal", "Natural gas", "Crude oil"],
        answer: 0, explain: "Wind is replaced naturally. Coal, natural gas and crude oil are fossil fuels." },
      { q: "A ball is held still at the top of a slope. What energy does it mainly have?",
        options: ["Gravitational potential energy", "Kinetic energy", "Sound energy", "Light energy"],
        answer: 0, explain: "It is not moving (no kinetic energy) but is high up, so it stores gravitational potential energy." },
      { q: "Why does burning fossil fuels contribute to global warming?",
        options: ["It releases carbon dioxide, which traps heat in the atmosphere", "It uses up oxygen", "It produces light", "It cools the Earth's surface"],
        answer: 0, explain: "Carbon dioxide is a greenhouse gas that traps heat." },
      { q: "A fan converts electrical energy into kinetic energy. Where does the 'wasted' energy go?",
        options: ["Into heat and sound", "It disappears", "Back into the battery", "Into chemical potential energy"],
        answer: 0, explain: "Wasted energy is not destroyed — it is converted into less useful forms like heat and sound." },
      { q: "Which is a disadvantage of solar energy?",
        options: ["It depends on the weather and time of day", "It will run out soon", "It produces a lot of carbon dioxide", "It cannot produce electricity"],
        answer: 0, explain: "Solar panels produce less electricity on cloudy days and none at night." },
      { q: "Which action helps to reduce energy wastage at home?",
        options: ["Switching off appliances at the wall socket when not in use", "Setting the air-conditioner to 18°C", "Leaving the fridge door open", "Keeping lights on in empty rooms"],
        answer: 0, explain: "Appliances on standby still use electricity. Switching off saves energy." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-04", num: 4, group: "Machines Around Us",
    title: "Electricity",
    question: "How does electricity work and how can we use it safely?",
    objectives: [
      "Describe electric current as a flow of charge in a closed circuit",
      "State the units: current (A), voltage (V), resistance (Ω)",
      "Draw circuit diagrams and build series and parallel circuits",
      "Use an ammeter (in series) and a voltmeter (in parallel)",
      "State that Singapore's mains voltage is 230 V",
      "Identify electrical hazards and explain how fuses, circuit breakers and earth wires keep us safe"
    ],
    summary: [
      { heading: "Current, voltage and resistance",
        table: [
          ["Quantity", "Meaning", "Unit", "Measured with"],
          ["Current", "Rate of flow of electric charge", "ampere (A)", "Ammeter — connected in **series**"],
          ["Voltage", "The 'push' that drives current around a circuit", "volt (V)", "Voltmeter — connected in **parallel** across a component"],
          ["Resistance", "Opposition to the flow of current", "ohm (Ω)", "—"]
        ],
        tip: "Current only flows in a **closed** circuit — there must be a complete path with no gaps." },
      { heading: "Series vs parallel circuits",
        table: [
          ["", "Series", "Parallel"],
          ["Path", "One path only", "Two or more branches"],
          ["Add more lamps", "Lamps get dimmer (more resistance, less current)", "Each lamp stays bright"],
          ["One lamp blows", "All lamps go out", "Other lamps stay on"],
          ["Used in", "Decorative lights, switches", "Home wiring"]
        ],
        points: ["Adding more cells in series increases the voltage, so the current increases and lamps become brighter."] },
      { heading: "Generating and using electricity",
        points: [
          "Power stations burn fuel (mostly natural gas in Singapore) to boil water. Steam turns a turbine, which turns a generator: chemical -> heat -> kinetic -> electrical.",
          "Electricity is sent through transmission cables to homes. Singapore's mains voltage is **230 V**."
        ] },
      { heading: "Electrical safety",
        table: [
          ["Hazard", "Why it is dangerous"],
          ["Damaged insulation", "Exposed live wire can give an electric shock or cause a short circuit"],
          ["Damp conditions / wet hands", "Water conducts electricity — risk of electric shock"],
          ["Overloading a socket", "Too much current -> wires overheat -> fire"],
          ["Wrong voltage rating", "Appliance may overheat or be damaged"]
        ] },
      { heading: "Safety features",
        points: [
          "**Fuse**: a thin wire that melts when the current is too large, breaking the circuit.",
          "**Circuit breaker**: a switch that trips (opens) automatically when the current is too large; it can be reset.",
          "**Earth wire**: connects the metal casing to the ground so current flows safely away if the live wire touches the casing.",
          "Three-pin plug: **live** (brown), **neutral** (blue), **earth** (green/yellow). The fuse is connected to the live wire."
        ] }
    ],
    keyTerms: [
      ["Electric current", "Flow of electric charge, measured in amperes (A)."],
      ["Voltage", "The push that drives current, measured in volts (V)."],
      ["Resistance", "Opposition to current, measured in ohms (Ω)."],
      ["Series circuit", "Components connected one after another in a single path."],
      ["Parallel circuit", "Components connected in separate branches."],
      ["Fuse", "A thin wire that melts to cut off the circuit when current is too large."],
      ["Earth wire", "Carries current safely to the ground if a fault occurs."]
    ],
    video: { id: "J-PtFOnkuDY", title: "KS3 Physics: Series and parallel circuits",
      think: "Why are the lights in your home connected in parallel, not in series?" },
    sims: [
      { title: "Circuit Construction Kit: DC", url: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html", embed: true,
        task: "Build one lamp + one cell. Add a second lamp **in series** — what happens to the brightness? Rebuild with the two lamps **in parallel**. Then remove one lamp in each circuit. Record what you observe." },
      { title: "Home Wiring (indoor wiring)", url: "https://javalab.org/en/indoor_wiring_en/", embed: false,
        task: "Explore how appliances at home are connected. Are they in series or parallel?" }
    ],
    quiz: [
      { q: "How should an ammeter be connected to measure the current through a lamp?",
        options: ["In series with the lamp", "In parallel across the lamp", "Anywhere outside the circuit", "Across the cell only"],
        answer: 0, explain: "Ammeters are connected in series so the same current flows through them." },
      { q: "What is the unit of resistance?",
        options: ["Ohm (Ω)", "Ampere (A)", "Volt (V)", "Newton (N)"],
        answer: 0, explain: "Current: A; voltage: V; resistance: Ω." },
      { q: "Three lamps are connected in **series**. One lamp blows. What happens?",
        options: ["All the lamps go out", "The other two lamps get brighter", "Only the blown lamp goes out", "The cell explodes"],
        answer: 0, explain: "In a series circuit there is only one path, so a break anywhere stops the current everywhere." },
      { q: "Why are household appliances connected in parallel?",
        options: ["Each appliance can be switched on and off independently", "It uses less wire", "It makes the current smaller everywhere", "Appliances only work in parallel"],
        answer: 0, explain: "In parallel each appliance has its own branch, so one can be switched off without affecting the others." },
      { q: "What is the mains voltage in Singapore?",
        options: ["230 V", "12 V", "110 V", "1.5 V"],
        answer: 0, explain: "Singapore's mains supply is 230 V." },
      { q: "What does a fuse do?",
        options: ["Melts and breaks the circuit when the current is too large", "Increases the current to an appliance", "Stores electricity for later", "Changes 230 V to 12 V"],
        answer: 0, explain: "A fuse protects the appliance and wiring from too much current, preventing fires." },
      { q: "Which is an electrical hazard?",
        options: ["Using a hairdryer with wet hands", "Using a three-pin plug with an earth wire", "Switching off appliances after use", "Using a circuit breaker"],
        answer: 0, explain: "Water conducts electricity, so wet hands increase the risk of an electric shock." },
      { q: "A second cell is added in series to a circuit with one lamp. What happens to the lamp?",
        options: ["It becomes brighter", "It becomes dimmer", "It goes out", "No change"],
        answer: 0, explain: "More cells in series give a bigger voltage, which drives a larger current." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-05", num: 5, group: "Machines Around Us",
    title: "Heat",
    question: "How do the effects of heat affect our lives?",
    objectives: [
      "State that temperature measures how hot an object is, in °C, using a thermometer or data logger",
      "Describe heat as flowing from a hotter region to a colder region until both reach the same temperature",
      "Relate a rise or fall in temperature to an object gaining or losing heat",
      "Describe everyday effects of expansion and contraction, and how a bimetallic strip / thermostat works"
    ],
    summary: [
      { heading: "Heat vs temperature",
        points: [
          "**Temperature** tells us how hot or cold something is. Measured in **°C** using a thermometer or temperature sensor (data logger).",
          "**Heat** is a form of energy. It always flows from a **hotter** object to a **colder** object.",
          "Heat flows until both objects reach the **same temperature** (thermal equilibrium).",
          "An object that **gains** heat rises in temperature; an object that **loses** heat falls in temperature."
        ],
        tip: "A cold drink in a warm room warms up — heat flows **into** it from the surroundings. 'Coldness' does not flow!" },
      { heading: "Expansion and contraction",
        points: [
          "Most substances **expand** (get bigger) when heated and **contract** (get smaller) when cooled.",
          "The particles do not get bigger — they move more vigorously and spread **further apart**."
        ],
        table: [
          ["Everyday example", "What happens / what we do"],
          ["Railway tracks", "Gaps are left between rails so they can expand on hot days without buckling"],
          ["Bridges", "Expansion joints allow the bridge to expand and contract"],
          ["Overhead cables", "Hung loosely so they do not snap when they contract in cold weather"],
          ["Tight metal jar lid", "Run under hot water — the lid expands more than the glass and loosens"]
        ] },
      { heading: "Bimetallic strip and thermostats",
        points: [
          "A **bimetallic strip** is two different metals joined together. When heated, one metal expands more than the other, so the strip **bends**.",
          "A **thermostat** uses a bimetallic strip to switch a heater off when it is too hot and on again when it cools — keeping the temperature steady (e.g. iron, rice cooker, fire alarm)."
        ] }
    ],
    keyTerms: [
      ["Temperature", "How hot or cold an object is, measured in °C."],
      ["Heat", "Energy that flows from a hotter region to a colder region."],
      ["Thermal equilibrium", "When two objects reach the same temperature and heat stops flowing between them."],
      ["Expansion", "Increase in size when a substance is heated."],
      ["Contraction", "Decrease in size when a substance is cooled."],
      ["Bimetallic strip", "Two metals joined together that bend when heated because they expand by different amounts."],
      ["Thermostat", "A device that keeps temperature steady by switching a heater on and off."]
    ],
    video: { id: "hFdGanuQM4M", title: "Real-world examples of thermal expansion and contraction",
      think: "Why are gaps left between sections of railway track?" },
    sims: [
      { title: "Bimetal", url: "https://javalab.org/en/bimetal_en/", embed: false,
        task: "Heat the bimetallic strip. Which way does it bend — towards the metal that expands more or less? Then cool it down." },
      { title: "Particle model of thermal conduction", url: "https://javalab.org/en/conduction_2_en/", embed: false,
        task: "Observe the particles at the hot end. How does the energy pass along to the cold end?" }
    ],
    quiz: [
      { q: "A hot cup of tea is left on the table. What happens?",
        options: ["Heat flows from the tea to the surroundings until they reach the same temperature", "Cold flows from the surroundings into the tea", "The tea keeps the same temperature", "Heat flows from the surroundings into the tea"],
        answer: 0, explain: "Heat flows from hotter to colder until thermal equilibrium is reached." },
      { q: "Why are small gaps left between sections of railway track?",
        options: ["To allow the rails to expand on hot days", "To let rainwater drain away", "To make the train go faster", "To save metal"],
        answer: 0, explain: "Without gaps, the expanding rails would push against each other and buckle." },
      { q: "When a metal rod is heated, its particles…",
        options: ["move more vigorously and spread further apart", "become bigger", "increase in number", "stop moving"],
        answer: 0, explain: "Expansion happens because particles move further apart — they don't change size or number." },
      { q: "A bimetallic strip is made of brass and iron. Brass expands more than iron. When heated, the strip bends…",
        options: ["with the brass on the outside of the curve", "with the brass on the inside of the curve", "straight upwards without curving", "it does not bend"],
        answer: 0, explain: "The longer (more expanded) brass ends up on the outside of the curve." },
      { q: "What is the job of a thermostat in an electric iron?",
        options: ["To keep the iron at a steady temperature", "To make the iron heavier", "To measure the voltage", "To cool the clothes"],
        answer: 0, explain: "It switches the heater off when hot and on again when it cools." },
      { q: "A tight metal lid on a glass jar can be loosened by…",
        options: ["running the lid under hot water", "putting the jar in the freezer", "shaking the jar", "painting the lid"],
        answer: 0, explain: "The metal lid expands more than the glass, so it loosens." },
      { q: "Which instrument measures temperature?",
        options: ["Thermometer", "Spring balance", "Ammeter", "Measuring cylinder"],
        answer: 0, explain: "A thermometer (or temperature sensor) measures temperature in °C." },
      { q: "Overhead electrical cables are hung loosely between poles because…",
        options: ["they contract in cold weather and could snap if tight", "they expand in cold weather", "loose cables carry more current", "it is cheaper"],
        answer: 0, explain: "Cables contract when cooled; leaving slack prevents them from snapping." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-06", num: 6, group: "Our Environment",
    title: "Matter",
    question: "How can matter be classified?",
    mascot: "assets/img/mascots/basic.png",
    images: [{ src: "assets/summaries/g1-science/02-matter.jpg", title: "Matter" }],
    objectives: [
      "Describe changes of state: melting, boiling/evaporation, condensation, freezing",
      "Use density to predict whether an object floats or sinks",
      "Use the pH scale and indicators (litmus, Universal Indicator) to classify acids and alkalis",
      "Explain solute, solvent, solution and suspension",
      "Describe factors affecting solubility and the rate of dissolving",
      "Separate mixtures by evaporation (heating to dryness), filtration and magnetic separation"
    ],
    summary: [
      { heading: "States of matter",
        table: [
          ["", "Solid", "Liquid", "Gas"],
          ["Shape", "Fixed", "Takes the shape of its container", "Takes the shape of its container"],
          ["Volume", "Fixed", "Fixed", "No fixed volume (fills container)"]
        ],
        points: [
          "Gains energy: solid -> liquid (**melting**), liquid -> gas (**boiling / evaporation**).",
          "Loses energy: gas -> liquid (**condensation**), liquid -> solid (**freezing**)."
        ] },
      { heading: "Density",
        text: "**Density** = mass ÷ volume. Unit: **g/cm^3^**. It tells us how much matter is packed into a unit volume.",
        points: [
          "An object **floats** if it is **less dense** than the liquid; it **sinks** if it is **denser**.",
          "Liquids that don't mix form layers — the least dense on top, the densest at the bottom."
        ] },
      { heading: "Acids and alkalis",
        table: [
          ["", "Acid", "Neutral", "Alkali"],
          ["pH", "less than 7", "7", "more than 7"],
          ["Litmus", "Blue litmus -> red", "No change", "Red litmus -> blue"],
          ["Universal Indicator", "Red / orange / yellow", "Green", "Blue / purple"],
          ["Other properties", "Tastes sour", "—", "Tastes bitter, feels soapy"],
          ["Examples", "Hydrochloric, nitric, sulfuric acid; ethanoic acid (vinegar)", "Pure water", "Sodium hydroxide, aqueous ammonia, baking soda"]
        ],
        tip: "Lower pH = more acidic. Higher pH = more alkaline. Never taste chemicals in the lab!" },
      { heading: "Solutions and suspensions",
        points: [
          "A **solution** forms when a **solute** dissolves in a **solvent**. Example: salt (solute) + water (solvent) -> salt solution. Water is the most common solvent; others include alcohol and turpentine.",
          "**Solution**: light passes through; no residue left on filter paper; nothing settles on standing.",
          "**Suspension**: insoluble solid particles in a liquid; cloudy (light cannot pass fully); leaves a residue on filtering; solid settles on standing.",
          "**Solubility** depends on the type of solute, the type of solvent and the temperature.",
          "**Rate of dissolving** is faster with smaller solute particles (more surface area), higher temperature and more stirring."
        ] },
      { heading: "Separation techniques",
        table: [
          ["Technique", "Used to obtain", "Example"],
          ["Heating to dryness (evaporation)", "A dissolved solid from a solution", "Salt from salt water"],
          ["Filtration", "An insoluble solid from a liquid (solid = residue, liquid = filtrate)", "Sand from sandy water"],
          ["Magnetic separation", "A magnetic solid from a mixture of solids", "Iron filings from sulfur powder"]
        ] }
    ],
    keyTerms: [
      ["Density", "Mass per unit volume, in g/cm^3^."],
      ["Solute", "The substance that dissolves."],
      ["Solvent", "The liquid that dissolves the solute."],
      ["Solution", "A mixture formed when a solute dissolves in a solvent."],
      ["Suspension", "A mixture of insoluble solid particles in a liquid."],
      ["Indicator", "A substance that changes colour in acids and alkalis."],
      ["pH scale", "A scale from 0 to 14 showing how acidic or alkaline a solution is."],
      ["Residue / filtrate", "The solid left on filter paper / the liquid that passes through."]
    ],
    videos: [
      { label: "Density", id: "JWIhtSWhUrY", title: "What is Density? | Mass, Volume & Density (MAD GARDEN Science)",
        think: "A block has mass 30 g and volume 20 cm^3^. Will it float in water (density 1 g/cm^3^)?" },
      { label: "Solutions and suspensions", id: "Ye1Ux_8dm1A", title: "Lighthouse Lab – Solutions and Suspensions (Next Generation Science)",
        think: "Name two ways to tell a solution from a suspension." },
      { label: "Filtration and evaporation", id: "29Rd-Lly-fw", title: "Separation Techniques – Filtration, Evaporation, Crystallisation (Cognito)",
        think: "Which part of a mixture is collected as the residue, and which as the filtrate?" }
    ],
    sims: [
      { title: "Density", url: "https://phet.colorado.edu/sims/html/density/latest/density_en.html", embed: true,
        task: "Find the mass and volume of each block. Calculate its density. Predict whether it floats in water, then test it." },
      { title: "pH Scale: Basics", url: "https://phet.colorado.edu/sims/html/ph-scale-basics/latest/ph-scale-basics_en.html", embed: true,
        task: "Test coffee, soap, vinegar and milk. Sort them into acids and alkalis. What happens to the pH when you add water to an acid?" },
      { title: "States of Matter: Basics", url: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html", embed: true,
        task: "Heat a solid until it melts, then boils. Describe how the particles move in each state." }
    ],
    extra: [{ label: "Quizlet: Elements, compounds, mixtures", url: "https://quizlet.com/560063279/elements-compounds-mixtures-flash-cards/" }],
    quiz: [
      { q: "Which change of state happens when water vapour touches a cold window?",
        options: ["Condensation", "Evaporation", "Melting", "Freezing"],
        answer: 0, explain: "Gas -> liquid is condensation. The vapour loses energy to the cold glass." },
      { q: "A block has a mass of 60 g and a volume of 40 cm^3^. What is its density?",
        options: ["1.5 g/cm^3^", "0.67 g/cm^3^", "100 g/cm^3^", "2400 g/cm^3^"],
        answer: 0, explain: "Density = mass ÷ volume = 60 ÷ 40 = 1.5 g/cm^3^." },
      { q: "Water has a density of 1.0 g/cm^3^. Which object will float in water?",
        options: ["Wood, density 0.6 g/cm^3^", "Iron, density 7.9 g/cm^3^", "Glass, density 2.5 g/cm^3^", "Rock, density 3.0 g/cm^3^"],
        answer: 0, explain: "Objects less dense than water float." },
      { q: "A solution turns Universal Indicator red. Its pH is most likely…",
        options: ["2", "7", "9", "13"],
        answer: 0, explain: "Red in Universal Indicator means a strong acid, low pH." },
      { q: "Which substance turns red litmus paper blue?",
        options: ["Sodium hydroxide solution", "Vinegar", "Hydrochloric acid", "Pure water"],
        answer: 0, explain: "Alkalis turn red litmus blue. Sodium hydroxide is an alkali." },
      { q: "Which of the following would make sugar dissolve **faster** in water?",
        options: ["Using hot water and stirring", "Using cold water", "Using sugar cubes instead of granules", "Leaving it without stirring"],
        answer: 0, explain: "Higher temperature and stirring increase the rate of dissolving." },
      { q: "Muddy water is poured through filter paper. The mud left on the paper is called the…",
        options: ["residue", "filtrate", "solvent", "solution"],
        answer: 0, explain: "The solid left behind is the residue; the liquid that passes through is the filtrate." },
      { q: "How would you separate iron filings from a mixture of iron filings and sand?",
        options: ["Use a magnet", "Filtration", "Heating to dryness", "Dissolving in water"],
        answer: 0, explain: "Iron is magnetic; sand is not." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-07", num: 7, group: "Our Environment",
    title: "Water",
    question: "What impact do our activities have on water quality?",
    images: [{ src: "assets/summaries/g1-science/03-water.jpg", title: "Water" }],
    objectives: [
      "Explain why clean water is important for living things and for Singapore",
      "Describe sources of water pollution and their effects on living things",
      "Suggest ways to reduce water pollution",
      "Describe Singapore's Four National Taps and how NEWater is made"
    ],
    summary: [
      { heading: "Why water matters",
        points: [
          "Water is needed for life processes, e.g. photosynthesis in plants, and blood transporting substances in our body.",
          "We need clean water for drinking, food and beverages, and medicine.",
          "Singapore is small with limited natural resources. We must keep our waterways clean — pollution can reduce our drinking-water supply or make it more expensive to produce."
        ] },
      { heading: "Sources and effects of water pollution",
        table: [
          ["Source", "Effect"],
          ["Untreated sewage and industrial waste", "Contaminates water with harmful bacteria and chemicals; people drinking it can fall sick"],
          ["Litter (plastic, metal, glass)", "Turtles and birds get trapped and die; animals that eat plastic may starve"],
          ["Oil spills (ship collisions, leaks from tankers)", "Coats seabirds' feathers so they cannot fly or keep warm; blocks sunlight and oxygen from entering water"],
          ["Fertilisers", "Washed by rain into rivers -> rapid growth of algae -> blocks sunlight, less photosynthesis -> lack of oxygen -> aquatic animals and plants die"],
          ["Pesticides", "Harmful or poisonous to aquatic animals and plants"]
        ],
        tip: "Most water pollution is caused by **human activities**." },
      { heading: "Reducing water pollution",
        points: [
          "Throw litter into rubbish bins, not into drains or waterways.",
          "Clean up polluted areas around water bodies.",
          "Educate the public on keeping water clean.",
          "Enforce laws to stop people and industries from polluting."
        ] },
      { heading: "Singapore's Four National Taps",
        table: [
          ["Tap", "What it is"],
          ["Local catchment", "Rainwater collected in reservoirs"],
          ["Imported water", "From Johor, Malaysia (the water agreement ends in 2061)"],
          ["NEWater", "High-grade reclaimed water from used water"],
          ["Desalinated water", "Seawater with the salt removed"]
        ],
        steps: [
          "**Microfiltration** — filters out solids, bacteria and some viruses.",
          "**Reverse osmosis** — water is pushed through a membrane that removes salts and harmful substances.",
          "**Ultraviolet (UV) light** — kills any remaining microorganisms.",
          "**pH balancing** — brings the water back to neutral."
        ] }
    ],
    keyTerms: [
      ["Water pollution", "When harmful substances contaminate water bodies."],
      ["Sewage", "Waste water from homes and toilets."],
      ["Algal bloom", "Rapid growth of algae caused by fertilisers in water."],
      ["Four National Taps", "Singapore's water sources: local catchment, imported water, NEWater, desalinated water."],
      ["NEWater", "Used water that has been treated to become ultra-clean and safe."],
      ["Desalination", "Removing salt from seawater."]
    ],
    video: { id: "5BGUT7BjPl0", title: "The Singapore Water Story (PUB)",
      think: "Why does Singapore need four different sources of water instead of just one?" },
    sims: [],
    extra: [{ label: "Flashcards: Chapter 7 Water (Google Sheet)", url: "https://docs.google.com/spreadsheets/d/11dzT9czVggXCbLKzcULmEsd_sbPZewEVeC8mUUnOric/edit" }],
    quiz: [
      { q: "Fertilisers washed into a pond can cause fish to die. Why?",
        options: ["Algae grow rapidly, block sunlight and oxygen levels in the water fall", "Fertilisers are sweet and fish eat too much", "Fertilisers make the water too cold", "Fertilisers turn the water into oil"],
        answer: 0, explain: "Algal bloom blocks sunlight, plants underneath die and decompose, and oxygen runs out." },
      { q: "Which is NOT one of Singapore's Four National Taps?",
        options: ["Underground volcanic springs", "NEWater", "Desalinated water", "Imported water"],
        answer: 0, explain: "The four taps are local catchment, imported water, NEWater and desalinated water." },
      { q: "How do oil spills harm seabirds?",
        options: ["Oil coats their feathers so they cannot fly or keep warm", "Oil gives them more food", "Oil makes the sea warmer for them", "Oil removes salt from the sea"],
        answer: 0, explain: "Oil-coated feathers lose their waterproofing and insulation." },
      { q: "In making NEWater, which step kills remaining microorganisms?",
        options: ["Ultraviolet (UV) light treatment", "Microfiltration", "pH balancing", "Adding fertiliser"],
        answer: 0, explain: "UV light destroys bacteria and viruses that remain after filtration and reverse osmosis." },
      { q: "Desalination means…",
        options: ["removing salt from seawater", "adding salt to water", "collecting rainwater", "importing water from another country"],
        answer: 0, explain: "De-salination = removing salt." },
      { q: "Why is untreated sewage in rivers dangerous to people?",
        options: ["It contains harmful bacteria that cause disease", "It makes the river flow faster", "It adds oxygen to the water", "It is too salty"],
        answer: 0, explain: "Drinking water contaminated by sewage can make people very sick." },
      { q: "Which action helps reduce water pollution?",
        options: ["Throwing litter into bins instead of drains", "Washing paint brushes in the drain", "Using more pesticide than needed", "Pouring cooking oil down the sink"],
        answer: 0, explain: "Drains in Singapore lead to rivers and reservoirs, so litter there pollutes our water." },
      { q: "Why is it especially important for Singapore to keep its waterways clean?",
        options: ["Singapore has limited natural water resources and collects rainwater in reservoirs", "Singapore has no rain", "Singapore does not drink tap water", "Clean water is only needed for swimming"],
        answer: 0, explain: "Our waterways feed our reservoirs — pollution reduces our supply or makes treatment more costly." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-08", num: 8, group: "Our Environment",
    title: "Air",
    question: "What impact do our activities have on air quality?",
    images: [{ src: "assets/summaries/g1-science/04-air.jpg", title: "Air" }],
    objectives: [
      "Explain why clean air is important",
      "Name air pollutants — carbon monoxide, oxides of nitrogen, particulate matter, sulfur dioxide — and their sources",
      "Describe the effects of air pollutants, including acid rain and haze",
      "Suggest ways to reduce air pollution"
    ],
    summary: [
      { heading: "Why clean air matters",
        points: [
          "Air is a **mixture** of gases, such as nitrogen, oxygen and carbon dioxide.",
          "During **respiration**, digested food reacts with oxygen to release energy in our cells. Energy lets us move, work and grow.",
          "Air is **polluted** when it contains harmful substances (pollutants). Our need for energy is mainly met by **burning fossil fuels**, which pollutes the air."
        ] },
      { heading: "Air pollutants",
        table: [
          ["Pollutant", "Source", "Effect"],
          ["Particulate matter", "Forest fires, burning of fossil fuels", "Main pollutant in **haze**; respiratory problems; reduced visibility; irritates eyes, nose and throat"],
          ["Carbon monoxide", "**Incomplete** burning of fossil fuels (e.g. car engines)", "Poisonous — reduces the blood's ability to carry oxygen"],
          ["Oxides of nitrogen", "Lightning; hot car engines", "Respiratory problems; dissolve in rain to form **acid rain**"],
          ["Sulfur dioxide", "Volcanoes; burning of fossil fuels", "Respiratory problems; dissolves in rain to form **acid rain**"]
        ],
        tip: "**Acid rain** corrodes buildings and statues, and kills plants and fish. People most at risk from air pollution: the elderly, young children and people with asthma." },
      { heading: "Haze and the PSI",
        points: [
          "The **Pollutant Standards Index (PSI)** tells us how polluted the air is. The higher the PSI, the more unhealthy the air.",
          "During haze: stay indoors, reduce outdoor activities, wear an N95 mask if you must go out."
        ] },
      { heading: "Reducing air pollution",
        table: [
          ["Source", "What can be done"],
          ["Motor vehicles", "Walk or cycle; carpool or take public transport; use hybrid/electric cars; turn off idling engines"],
          ["Industries", "Use less electricity; fit factories with exhaust filters; government checks to limit emissions"],
          ["Waste incineration", "Reduce, reuse, recycle; use less packaging or biodegradable packaging"]
        ] }
    ],
    keyTerms: [
      ["Air pollutant", "A harmful substance in the air."],
      ["Particulate matter", "Tiny solid particles in the air — the main pollutant in haze."],
      ["Carbon monoxide", "A poisonous gas from incomplete burning of fuels."],
      ["Acid rain", "Rain made acidic by dissolved sulfur dioxide and oxides of nitrogen."],
      ["PSI", "Pollutant Standards Index — a measure of air quality."],
      ["Haze", "Smoky air caused mainly by forest fires, with high particulate matter."]
    ],
    video: { id: "TEGj-l3uiSE", title: "What are the causes (and effects) of air pollution?",
      think: "Name one pollutant from cars and describe how it harms us." },
    sims: [
      { title: "The Greenhouse Effect", url: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_en.html", embed: true,
        task: "Increase the amount of greenhouse gases. What happens to the temperature? Link this to burning fossil fuels." }
    ],
    quiz: [
      { q: "Which pollutant is mainly responsible for haze?",
        options: ["Particulate matter", "Carbon monoxide", "Oxygen", "Nitrogen"],
        answer: 0, explain: "Haze from forest fires is mostly tiny particles (particulate matter)." },
      { q: "Carbon monoxide is dangerous because it…",
        options: ["reduces the blood's ability to carry oxygen", "causes acid rain", "is the main gas in haze", "makes plants grow faster"],
        answer: 0, explain: "Carbon monoxide poisoning stops red blood cells from carrying enough oxygen." },
      { q: "Carbon monoxide is produced by…",
        options: ["incomplete burning of fossil fuels", "photosynthesis", "lightning only", "evaporation of seawater"],
        answer: 0, explain: "When fuels burn with too little oxygen, carbon monoxide forms." },
      { q: "Which two gases cause acid rain?",
        options: ["Sulfur dioxide and oxides of nitrogen", "Oxygen and nitrogen", "Carbon monoxide and oxygen", "Water vapour and helium"],
        answer: 0, explain: "These gases dissolve in rainwater to form acids." },
      { q: "What is a natural source of sulfur dioxide?",
        options: ["Volcanoes", "Car engines", "Factories", "Power stations"],
        answer: 0, explain: "Volcanoes release sulfur dioxide naturally. The other options are human activities." },
      { q: "Which group of people is most at risk when the PSI is high?",
        options: ["The elderly, young children and people with asthma", "Healthy teenagers only", "People who live near the sea", "Nobody is affected"],
        answer: 0, explain: "Their lungs are more sensitive to pollutants." },
      { q: "Which action reduces air pollution from vehicles?",
        options: ["Taking public transport", "Leaving the engine running while parked", "Driving alone everywhere", "Burning rubbish in the open"],
        answer: 0, explain: "Fewer cars on the road means fewer exhaust gases." },
      { q: "Acid rain can damage…",
        options: ["buildings, plants and fish", "only the clouds", "nothing at all", "only plastic bottles"],
        answer: 0, explain: "Acid rain corrodes buildings and statues and harms living things." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-09", num: 9, group: "Our Body and Health",
    title: "Cells",
    question: "What are the basic building blocks of living things?",
    mascot: "assets/img/mascots/cells.png",
    images: [{ src: "assets/summaries/g1-science/05-cells.jpg", title: "Cells" }],
    objectives: [
      "State that all living things are made of cells — the basic unit of life",
      "Use a light microscope safely and correctly",
      "Draw and label an animal cell (cell membrane, cytoplasm, nucleus) and state the functions of each part",
      "State that genes are inherited from parents and determine traits",
      "Describe how specialised cells (red blood cell, muscle cell, bone cell) suit their functions",
      "Describe how cells are organised into tissues, organs and systems"
    ],
    summary: [
      { heading: "Cells are the basic unit of life",
        text: "All living organisms are made up of cells. Cells are very tiny — we need a **microscope**, which uses lenses to make objects look bigger." },
      { heading: "Parts of an animal cell",
        table: [
          ["Part", "Function"],
          ["Cell membrane", "Controls what enters and leaves the cell; flexible, so the cell can change shape"],
          ["Cytoplasm", "Where most cell activities take place; contains water, digested food and other cell parts"],
          ["Nucleus", "Controls all activities of the cell; contains **genes**"]
        ] },
      { heading: "Using a light microscope",
        steps: [
          "Carry the microscope with one hand on the **arm** and one under the **base**.",
          "Plug in and switch on the light source.",
          "Start with the **lowest** magnification lens and the stage at its lowest position. Place the slide on the stage.",
          "Adjust the light (diaphragm) as needed.",
          "Turn the **coarse** adjustment knob until you see something, then focus with the **fine** adjustment knob.",
          "Switch to a higher magnification lens and refocus using the **fine** adjustment knob only."
        ],
        tip: "Drawing a cell: use a sharp pencil, draw large (about ¾ of the space), smooth continuous lines, no shading, label lines drawn with a ruler." },
      { heading: "Genes and traits",
        text: "Genes are found in the nucleus and are **inherited** from parents. They carry information that determines **traits**, e.g. eye colour, dimples, hitchhiker's thumb." },
      { heading: "Specialised cells",
        table: [
          ["Cell", "Function"],
          ["Red blood cell", "Transports oxygen to body cells"],
          ["Muscle cell", "Uses oxygen to release energy so we can move"],
          ["Bone cell", "Makes up bones that support the body"]
        ],
        points: ["Different cell types divide up the body's work. All cells must work together for the body to function efficiently."] },
      { heading: "Levels of organisation",
        steps: [
          "**Cell** — basic unit of life",
          "**Tissue** — a group of similar cells with the same function",
          "**Organ** — different tissues working together for a specific function (e.g. heart, stomach)",
          "**System** — a group of organs working together (e.g. digestive system)",
          "**Organism** — the whole living thing"
        ] }
    ],
    keyTerms: [
      ["Cell", "The basic unit of life."],
      ["Nucleus", "Controls cell activities and contains genes."],
      ["Cell membrane", "Controls what enters and leaves the cell."],
      ["Cytoplasm", "Jelly-like substance where most cell activities happen."],
      ["Gene", "Information passed from parents to children that determines traits."],
      ["Tissue", "A group of similar cells performing the same function."],
      ["Organ", "Different tissues working together for a specific function."],
      ["System", "A group of organs working together."]
    ],
    video: { id: "wNe6RuK0FfA", title: "Specialized cells: significance and examples (Amoeba Sisters)",
      think: "Why does the body need different types of cells instead of one kind?" },
    sims: [
      { title: "Cell size and scale", url: "https://learn.genetics.utah.edu/content/cells/scale/", embed: false, source: "Learn.Genetics",
        task: "Use the slider to zoom from a coffee bean down to a red blood cell. Roughly how many red blood cells would fit across a grain of salt?" }
    ],
    quiz: [
      { q: "Which part of the cell controls all its activities?",
        options: ["Nucleus", "Cell membrane", "Cytoplasm", "Cell wall"],
        answer: 0, explain: "The nucleus controls cell activities and contains genes." },
      { q: "Which part of the cell controls what enters and leaves it?",
        options: ["Cell membrane", "Nucleus", "Cytoplasm", "Genes"],
        answer: 0, explain: "The cell membrane controls the movement of substances in and out." },
      { q: "When using a microscope, which lens should you start with?",
        options: ["The lowest magnification lens", "The highest magnification lens", "Any lens", "No lens"],
        answer: 0, explain: "Start on low power to find the specimen easily, then increase magnification." },
      { q: "After switching to high power, you should focus using…",
        options: ["the fine adjustment knob only", "the coarse adjustment knob", "the light switch", "the stage clips"],
        answer: 0, explain: "The coarse knob may crash the lens into the slide at high power." },
      { q: "What is the function of red blood cells?",
        options: ["Transport oxygen around the body", "Support the body", "Help us move by contracting", "Control the cell"],
        answer: 0, explain: "Red blood cells carry oxygen to body cells." },
      { q: "Arrange from simplest to most complex.",
        options: ["Cell -> tissue -> organ -> system", "Organ -> cell -> tissue -> system", "Tissue -> cell -> system -> organ", "System -> organ -> tissue -> cell"],
        answer: 0, explain: "Cells form tissues, tissues form organs, organs form systems." },
      { q: "Genes are found in the…",
        options: ["nucleus", "cell membrane", "cytoplasm only", "blood plasma"],
        answer: 0, explain: "Genes are in the nucleus and are passed from parents to children." },
      { q: "Which is a correct rule for drawing a cell diagram?",
        options: ["Use a pencil and draw smooth, continuous lines with no shading", "Use a pen and shade in the nucleus", "Draw it as small as possible", "Draw label lines freehand with arrows"],
        answer: 0, explain: "Biological drawings are large, in pencil, with clean lines, no shading, and ruled label lines." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g1-10", num: 10, group: "Our Body and Health",
    title: "Getting Energy and Nutrients from Food",
    question: "How do we get energy from food to live, work and play?",
    images: [{ src: "assets/summaries/g1-science/06-energy-nutrients-food.jpg", title: "Energy and Nutrients from Food" }],
    objectives: [
      "State why we need food: for energy and for nutrients to build and repair cells",
      "Describe the risks of undereating and overeating",
      "Explain how food is broken down by physical and chemical digestion",
      "Describe the roles of the mouth, stomach and small intestine in digesting carbohydrates, proteins and fats",
      "State that digested food is carried by the blood to all parts of the body",
      "Describe how the digestive, respiratory and circulatory systems work together so we can get energy through respiration"
    ],
    summary: [
      { heading: "Why do we need food?",
        points: [
          "To get **energy** to do work, move and grow.",
          "To get **nutrients** to build new cells and repair damaged or worn-out cells.",
          "**Wasting food = wasting energy!** Energy was used to grow, transport and cook it."
        ] },
      { heading: "Health risks",
        table: [
          ["Undereating", "Overeating"],
          ["Lack of nutrients; poor growth", "Obesity; higher risk of diabetes and heart diseases"]
        ] },
      { heading: "Types of digestion",
        table: [
          ["Type", "What happens", "Example"],
          ["Physical", "Food is broken into smaller pieces (no new substances formed)", "Teeth cut food; the stomach mashes food into a liquid mixture"],
          ["Chemical", "**Enzymes** speed up the breakdown of food into simpler, smaller substances", "Saliva digests carbohydrates; gastric juice digests proteins; intestinal juice digests carbohydrates, proteins and fats"]
        ] },
      { heading: "Parts of the digestive system",
        table: [
          ["Part", "Physical digestion", "Chemical digestion / other job"],
          ["1. Mouth", "Chewing cuts food into smaller pieces", "Saliva contains enzymes that digest **carbohydrates**"],
          ["2. Gullet", "None", "None — moves food to the stomach"],
          ["3. Stomach", "Mashes food into a liquid mixture", "Gastric juice contains enzymes that digest **proteins**. Hydrochloric acid kills bacteria and gives a low pH for the enzymes to work"],
          ["4. Small intestine", "None", "Intestinal juice contains enzymes that digest **carbohydrates, proteins and fats**. **Absorbs** digested food, water and mineral salts into the blood"],
          ["5. Large intestine", "None", "None — continues to absorb some **water and mineral salts**"],
          ["6. Anus", "—", "Undigested food is released as faeces"]
        ] },
      { heading: "How we get energy",
        steps: [
          "The **digestive system** breaks food down into small, simple substances.",
          "The **respiratory system** takes in oxygen when we breathe in.",
          "The **circulatory system** (heart and blood) carries digested food and oxygen to all parts of the body.",
          "In every cell, **respiration** releases energy: digested food + oxygen -> carbon dioxide + water (+ energy)."
        ] }
    ],
    keyTerms: [
      ["Nutrients", "Substances in food that the body needs to grow and repair cells."],
      ["Digestion", "Breaking down food into small, simple substances that can be absorbed."],
      ["Physical digestion", "Breaking food into smaller pieces, e.g. chewing."],
      ["Chemical digestion", "Breaking food down using enzymes."],
      ["Enzyme", "A substance that speeds up the chemical breakdown of food."],
      ["Absorption", "Movement of digested food into the blood, mainly in the small intestine."],
      ["Respiration", "Release of energy in cells: digested food + oxygen -> carbon dioxide + water."]
    ],
    video: { id: "OKcIuxXXPrs", title: "Getting Energy and Nutrients from Food (Science is Khool)",
      think: "Where does most chemical digestion and absorption happen?" },
    sims: [
      { title: "Digestive System Gizmo", url: "https://gizmos.explorelearning.com/find-gizmos/launch-gizmo?resourceId=1050", embed: false, source: "ExploreLearning Gizmos",
        task: "Feed the virtual digestive system different meals. Track where carbohydrates, proteins and fats are broken down, and where nutrients are absorbed. (Log in with your Gizmos account; without one you get 5 minutes a day.)" },
      { title: "The digestive system viewed from topology", url: "https://javalab.org/en/digestive_tract_en/", embed: false,
        task: "Follow a piece of food from the mouth to the anus. At which parts does chemical digestion happen?" }
    ],
    quiz: [
      { q: "Which part of the digestive system absorbs most of the digested food into the blood?",
        options: ["Small intestine", "Stomach", "Gullet", "Large intestine"],
        answer: 0, explain: "The small intestine absorbs digested food, water and mineral salts into the blood." },
      { q: "Chewing food in the mouth is an example of…",
        options: ["physical digestion", "chemical digestion", "absorption", "respiration"],
        answer: 0, explain: "Teeth break food into smaller pieces without forming new substances." },
      { q: "Saliva contains enzymes that digest…",
        options: ["carbohydrates", "proteins", "fats", "water"],
        answer: 0, explain: "Saliva begins the digestion of carbohydrates (starch)." },
      { q: "Which food group is digested in the stomach?",
        options: ["Proteins", "Carbohydrates only", "Fats only", "Vitamins"],
        answer: 0, explain: "Gastric juice in the stomach contains enzymes that digest proteins." },
      { q: "Why does the stomach contain hydrochloric acid?",
        options: ["To kill bacteria and provide a low pH for its enzymes", "To digest fats", "To absorb water", "To cut food into pieces"],
        answer: 0, explain: "The acid kills harmful bacteria and gives the acidic conditions the stomach's enzymes need." },
      { q: "What is the main job of the large intestine?",
        options: ["Absorb some water and mineral salts", "Digest proteins", "Produce saliva", "Chew food"],
        answer: 0, explain: "The large intestine has no digestion; it continues absorbing water and mineral salts." },
      { q: "Which word equation shows respiration?",
        options: ["digested food + oxygen -> carbon dioxide + water", "carbon dioxide + water -> food + oxygen", "food + water -> oxygen", "oxygen + water -> carbon dioxide"],
        answer: 0, explain: "Cells respire to release energy from digested food using oxygen." },
      { q: "Which system carries digested food and oxygen to all parts of the body?",
        options: ["Circulatory system", "Digestive system", "Respiratory system", "Skeletal system"],
        answer: 0, explain: "The heart pumps blood that carries digested food and oxygen to cells." },
      { q: "A health risk of overeating is…",
        options: ["obesity and a higher risk of diabetes", "poor growth", "lack of nutrients", "weaker teeth only"],
        answer: 0, explain: "Too much food over time leads to obesity and raises the risk of diabetes and heart disease." }
    ]
  }
  ]
};
