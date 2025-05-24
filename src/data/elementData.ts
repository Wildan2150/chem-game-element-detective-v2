import { Element } from '../types';

// Data for the first 20 elements of the periodic table
export const elements: Element[] = [
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
    group: 1,
    period: 1,
    state: "gas",
    electronConfiguration: "1s¹",
    atomicMass: 1.008,
    realWorldApplication: "Used in fuel cells and as rocket fuel"
  },
  {
    name: "Helium",
    symbol: "He",
    atomicNumber: 2,
    group: 18,
    period: 1,
    state: "gas",
    electronConfiguration: "1s²",
    atomicMass: 4.0026,
    realWorldApplication: "Used in balloons and as a cooling agent for superconducting magnets"
  },
  {
    name: "Lithium",
    symbol: "Li",
    atomicNumber: 3,
    group: 1,
    period: 2,
    state: "solid",
    electronConfiguration: "1s² 2s¹",
    atomicMass: 6.94,
    realWorldApplication: "Used in rechargeable batteries and mood-stabilizing medications"
  },
  {
    name: "Beryllium",
    symbol: "Be",
    atomicNumber: 4,
    group: 2,
    period: 2,
    state: "solid",
    electronConfiguration: "1s² 2s²",
    atomicMass: 9.0122,
    realWorldApplication: "Used in aerospace components and X-ray equipment"
  },
  {
    name: "Boron",
    symbol: "B",
    atomicNumber: 5,
    group: 13,
    period: 2,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p¹",
    atomicMass: 10.81,
    realWorldApplication: "Used in detergents and in neutron-absorbing materials in nuclear plants"
  },
  {
    name: "Carbon",
    symbol: "C",
    atomicNumber: 6,
    group: 14,
    period: 2,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p²",
    atomicMass: 12.011,
    realWorldApplication: "Found in all living organisms and used in countless materials from diamonds to graphite"
  },
  {
    name: "Nitrogen",
    symbol: "N",
    atomicNumber: 7,
    group: 15,
    period: 2,
    state: "gas",
    electronConfiguration: "1s² 2s² 2p³",
    atomicMass: 14.007,
    realWorldApplication: "Used in fertilizers and as a preservative for packaged foods"
  },
  {
    name: "Oxygen",
    symbol: "O",
    atomicNumber: 8,
    group: 16,
    period: 2,
    state: "gas",
    electronConfiguration: "1s² 2s² 2p⁴",
    atomicMass: 15.999,
    realWorldApplication: "Essential for respiration and combustion processes"
  },
  {
    name: "Fluorine",
    symbol: "F",
    atomicNumber: 9,
    group: 17,
    period: 2,
    state: "gas",
    electronConfiguration: "1s² 2s² 2p⁵",
    atomicMass: 18.998,
    realWorldApplication: "Used in toothpaste and non-stick cookware coatings"
  },
  {
    name: "Neon",
    symbol: "Ne",
    atomicNumber: 10,
    group: 18,
    period: 2,
    state: "gas",
    electronConfiguration: "1s² 2s² 2p⁶",
    atomicMass: 20.180,
    realWorldApplication: "Used in neon signs and cryogenic refrigeration"
  },
  {
    name: "Sodium",
    symbol: "Na",
    atomicNumber: 11,
    group: 1,
    period: 3,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s¹",
    atomicMass: 22.990,
    realWorldApplication: "Used in table salt and street lights"
  },
  {
    name: "Magnesium",
    symbol: "Mg",
    atomicNumber: 12,
    group: 2,
    period: 3,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s²",
    atomicMass: 24.305,
    realWorldApplication: "Used in lightweight alloys and fireworks"
  },
  {
    name: "Aluminum",
    symbol: "Al",
    atomicNumber: 13,
    group: 13,
    period: 3,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p¹",
    atomicMass: 26.982,
    realWorldApplication: "Used in cans, foil, and aircraft construction"
  },
  {
    name: "Silicon",
    symbol: "Si",
    atomicNumber: 14,
    group: 14,
    period: 3,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p²",
    atomicMass: 28.085,
    realWorldApplication: "Used in computer chips and solar cells"
  },
  {
    name: "Phosphorus",
    symbol: "P",
    atomicNumber: 15,
    group: 15,
    period: 3,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p³",
    atomicMass: 30.974,
    realWorldApplication: "Used in matches and fertilizers"
  },
  {
    name: "Sulfur",
    symbol: "S",
    atomicNumber: 16,
    group: 16,
    period: 3,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁴",
    atomicMass: 32.06,
    realWorldApplication: "Used in gunpowder and vulcanizing rubber"
  },
  {
    name: "Chlorine",
    symbol: "Cl",
    atomicNumber: 17,
    group: 17,
    period: 3,
    state: "gas",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁵",
    atomicMass: 35.45,
    realWorldApplication: "Used in water purification and bleach"
  },
  {
    name: "Argon",
    symbol: "Ar",
    atomicNumber: 18,
    group: 18,
    period: 3,
    state: "gas",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶",
    atomicMass: 39.948,
    realWorldApplication: "Used in light bulbs and as an inert atmosphere for welding"
  },
  {
    name: "Potassium",
    symbol: "K",
    atomicNumber: 19,
    group: 1,
    period: 4,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    atomicMass: 39.098,
    realWorldApplication: "Essential nutrient for plant growth and nerve function"
  },
  {
    name: "Calcium",
    symbol: "Ca",
    atomicNumber: 20,
    group: 2,
    period: 4,
    state: "solid",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    atomicMass: 40.078,
    realWorldApplication: "Essential for bone structure and used in cement"
  }
];

// Function to get random element from the list
export const getRandomElement = (): Element => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

// Function to validate element guess (accepts both name and symbol)
export const validateElementGuess = (guess: string, element: Element): boolean => {
  const normalizedGuess = guess.trim().toLowerCase();
  const normalizedName = element.name.toLowerCase();
  const normalizedSymbol = element.symbol.toLowerCase();
  
  return normalizedGuess === normalizedName || normalizedGuess === normalizedSymbol;
};

// Function to get feedback based on the guess
export const getGuessFeedback = (guess: string, mysteryElement: Element): string => {
  // Try to find the guessed element
  const guessedElement = elements.find(
    el => el.name.toLowerCase() === guess.toLowerCase() || 
          el.symbol.toLowerCase() === guess.toLowerCase()
  );
  
  if (!guessedElement) {
    return "Not a valid element name or symbol. Try again!";
  }
  
  if (guessedElement.atomicNumber === mysteryElement.atomicNumber) {
    return "Correct! You found the mystery element!";
  }
  
  let feedback = "";
  
  // Atomic number hint
  if (guessedElement.atomicNumber < mysteryElement.atomicNumber) {
    feedback += "The mystery element has a higher atomic number. ";
  } else {
    feedback += "The mystery element has a lower atomic number. ";
  }
  
  // Group/Period hint
  if (guessedElement.group === mysteryElement.group) {
    feedback += "You're in the correct group! ";
  } else if (Math.abs(guessedElement.group - mysteryElement.group) <= 2) {
    feedback += "You're close to the correct group. ";
  }
  
  if (guessedElement.period === mysteryElement.period) {
    feedback += "You're in the correct period! ";
  } else if (Math.abs(guessedElement.period - mysteryElement.period) === 1) {
    feedback += "You're only one period away. ";
  }
  
  // State hint
  if (guessedElement.state === mysteryElement.state) {
    feedback += `Both are in the ${mysteryElement.state} state at room temperature. `;
  }
  
  return feedback;
};

// Function to get a clue based on the index
export const getClue = (element: Element, clueIndex: number): string => {
  switch (clueIndex) {
    case 0:
      return `This element is a ${element.state} at room temperature.`;
    case 1:
      return `This element is located in group ${element.group} and period ${element.period} of the periodic table.`;
    case 2:
      return `A common application of this element: ${element.realWorldApplication}`;
    case 3:
      return `This element has an electron configuration of ${element.electronConfiguration} and an atomic mass of ${element.atomicMass} u.`;
    default:
      return "No more clues available.";
  }
};