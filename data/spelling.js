/* =====================================================================
   SPELLING — key-term spelling for the LSS G1 end-of-chapter test
   (5 MCQs + 5 spelling = score out of 10, sent to the Google Sheet).

   Format:  S("term", "clue students read")
            S("term", "clue", ["other accepted spelling", …])   <- optional
   Checking ignores capital letters and extra spaces, and treats "-" as a space.
   If a chapter has more than 5 terms, 5 are picked at random each attempt.
   ===================================================================== */
(function () {
  function S(term, clue, alt) { return { term: term, clue: clue, alt: alt || [] }; }
  window.SPELLING = {
    "g1-01": [
      S("meniscus", "The curved surface of a liquid in a narrow tube, e.g. in a measuring cylinder."),
      S("corrosive", "Hazard: a substance that can burn and destroy skin and other materials on contact."),
      S("flammable", "Hazard: a substance that catches fire easily."),
      S("luminous", "The yellow, cooler, sooty Bunsen flame formed when the air hole is closed is a ______ flame."),
      S("thermometer", "An instrument used to measure temperature.")
    ],
    "g1-02": [
      S("friction", "A force that opposes motion between two surfaces in contact."),
      S("newton", "The SI unit of force (symbol N).", ["newtons"]),
      S("lubricant", "A substance such as oil that reduces friction."),
      S("pivot", "The fixed point that a lever turns about.", ["fulcrum"]),
      S("gravitational", "Weight is the ______ force acting on an object.")
    ],
    "g1-03": [
      S("kinetic", "The energy of a moving object is called ______ energy."),
      S("potential", "Stored energy, e.g. in a stretched rubber band or in food, is called ______ energy."),
      S("renewable", "Energy sources that are replaced naturally, e.g. solar and wind, are ______."),
      S("fossil fuels", "Coal, crude oil and natural gas — non-renewable energy sources.", ["fossil fuel"]),
      S("greenhouse", "Carbon dioxide is a ______ gas — it traps heat in the atmosphere.")
    ],
    "g1-04": [
      S("ampere", "The unit of electric current (symbol A).", ["amperes", "amp", "amps"]),
      S("ammeter", "The meter connected in series to measure current."),
      S("voltmeter", "The meter connected in parallel to measure voltage."),
      S("resistance", "Opposition to the flow of current, measured in ohms."),
      S("parallel", "A circuit where components are connected in separate branches is a ______ circuit.")
    ],
    "g1-05": [
      S("temperature", "How hot or cold an object is, measured in °C."),
      S("expansion", "The increase in size of a substance when it is heated."),
      S("contraction", "The decrease in size of a substance when it is cooled."),
      S("thermostat", "A device that keeps temperature steady by switching a heater on and off."),
      S("bimetallic", "Two different metals joined together that bend when heated form a ______ strip.")
    ],
    "g1-06": [
      S("density", "Mass per unit volume, measured in g/cm^3^."),
      S("solvent", "The liquid that dissolves a solute, e.g. water in salt solution."),
      S("suspension", "A cloudy mixture of insoluble solid particles in a liquid, e.g. muddy water."),
      S("evaporation", "Heating a salt solution until only the salt is left is called ______ to dryness."),
      S("filtrate", "The liquid that passes through the filter paper during filtration.")
    ],
    "g1-07": [
      S("sewage", "Waste water from homes and toilets."),
      S("desalination", "Removing salt from seawater to make it drinkable."),
      S("NEWater", "Used water that has been treated to become ultra-clean and safe to drink."),
      S("reservoir", "A large lake used to collect and store rainwater for our water supply."),
      S("algal", "Rapid growth of algae caused by fertilisers draining into water is called an ______ bloom.")
    ],
    "g1-08": [
      S("pollutant", "A harmful substance released into the air or water."),
      S("particulate", "Tiny solid particles in the air, the main pollutant in haze, are called ______ matter."),
      S("carbon monoxide", "A colourless, poisonous gas formed by the incomplete burning of fuels, e.g. in car exhaust."),
      S("sulfur dioxide", "A gas from burning fossil fuels that dissolves in rainwater to form acid rain.", ["sulphur dioxide"]),
      S("haze", "Smoky air caused mainly by forest fires in the region.")
    ],
    "g1-09": [
      S("nucleus", "The part of the cell that controls cell activities and contains genes."),
      S("cytoplasm", "Jelly-like substance where most cell activities take place."),
      S("membrane", "The part that controls what enters and leaves a cell is the cell ______."),
      S("tissue", "A group of similar cells performing the same function."),
      S("microscope", "An instrument used to see cells, which are too small to see with our eyes alone.")
    ],
    "g1-10": [
      S("nutrients", "Substances in food that the body needs to grow and to repair cells.", ["nutrient"]),
      S("digestion", "Breaking down food into small, simple substances that can be absorbed."),
      S("enzyme", "A substance that speeds up the chemical breakdown of food.", ["enzymes"]),
      S("absorption", "The movement of digested food into the blood, mainly in the small intestine."),
      S("respiration", "The release of energy in cells: digested food + oxygen -> carbon dioxide + water.")
    ]
  };
})();
