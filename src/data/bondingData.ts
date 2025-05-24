import { Element, BondingPartner, BondingQuestion } from '../types';

// Function to determine a logical bonding partner for the mystery element
export const getBondingPartner = (mysteryElement: Element): BondingPartner => {
  // Logic to select an appropriate bonding partner based on the mystery element's properties
  let partner: Element;
  let bondType: 'ionic' | 'covalent' | 'metallic';
  let resultingCompound: string;
  let electronTransfer: string;
  let properties: string;
  
  // Determine bond type based on element groups
  // Groups 1, 2: metals, tend to form ionic bonds with non-metals
  // Groups 13-16: can form both ionic and covalent bonds
  // Groups 17, 18: non-metals, tend to form covalent bonds
  
  if (mysteryElement.group === 1 || mysteryElement.group === 2) {
    // Alkali or alkaline earth metals typically form ionic bonds with halogens
    partner = {
      name: "Chlorine",
      symbol: "Cl",
      atomicNumber: 17,
      group: 17,
      period: 3,
      state: "gas",
      electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁵",
      atomicMass: 35.45,
      realWorldApplication: "Used in water purification and bleach"
    };
    
    bondType = 'ionic';
    
    if (mysteryElement.group === 1) {
      resultingCompound = `${mysteryElement.symbol}Cl`;
      electronTransfer = `${mysteryElement.symbol} loses 1 electron, Cl gains 1 electron`;
      properties = "White crystalline solid, highly soluble in water, conducts electricity when dissolved";
    } else {
      resultingCompound = `${mysteryElement.symbol}Cl₂`;
      electronTransfer = `${mysteryElement.symbol} loses 2 electrons, two Cl atoms each gain 1 electron`;
      properties = "White crystalline solid, soluble in water, bitter taste";
    }
  } else if (mysteryElement.group >= 13 && mysteryElement.group <= 16) {
    // Groups 13-16 can form covalent bonds with other non-metals
    partner = {
      name: "Oxygen",
      symbol: "O",
      atomicNumber: 8,
      group: 16,
      period: 2,
      state: "gas",
      electronConfiguration: "1s² 2s² 2p⁴",
      atomicMass: 15.999,
      realWorldApplication: "Essential for respiration and combustion processes"
    };
    
    bondType = 'covalent';
    
    // Simplified compound formulas
    const compoundMap: {[key: string]: string} = {
      "B": "B₂O₃",
      "C": "CO₂",
      "N": "N₂O",
      "Al": "Al₂O₃",
      "Si": "SiO₂",
      "P": "P₄O₁₀",
      "S": "SO₂"
    };
    
    resultingCompound = compoundMap[mysteryElement.symbol] || `${mysteryElement.symbol}O`;
    electronTransfer = "Electrons are shared between atoms";
    properties = "May be gas, liquid, or solid at room temperature, typically does not conduct electricity";
  } else if (mysteryElement.group === 17) {
    // Halogens often form covalent bonds with other non-metals
    partner = {
      name: "Hydrogen",
      symbol: "H",
      atomicNumber: 1,
      group: 1,
      period: 1,
      state: "gas",
      electronConfiguration: "1s¹",
      atomicMass: 1.008,
      realWorldApplication: "Used in fuel cells and as rocket fuel"
    };
    
    bondType = 'covalent';
    resultingCompound = `H${mysteryElement.symbol}`;
    electronTransfer = "Electrons are shared between atoms";
    
    const propertiesMap: {[key: string]: string} = {
      "F": "Colorless gas, highly corrosive, strong odor",
      "Cl": "Yellowish-green gas, strong odor, toxic",
      "Br": "Reddish-brown liquid, strong odor, toxic",
      "I": "Violet solid, sublimes to purple vapor, antiseptic properties"
    };
    
    properties = propertiesMap[mysteryElement.symbol] || "Reacts vigorously with metals";
  } else if ([3, 4, 5, 6, 11, 12, 13, 19, 20].includes(mysteryElement.atomicNumber)) {
    // Metals that can form metallic bonds
    partner = {
      name: mysteryElement.name,
      symbol: mysteryElement.symbol,
      atomicNumber: mysteryElement.atomicNumber,
      group: mysteryElement.group,
      period: mysteryElement.period,
      state: mysteryElement.state,
      electronConfiguration: mysteryElement.electronConfiguration,
      atomicMass: mysteryElement.atomicMass,
      realWorldApplication: mysteryElement.realWorldApplication
    };
    
    bondType = 'metallic';
    resultingCompound = `${mysteryElement.symbol} (metal)`;
    electronTransfer = "Electrons are delocalized and shared among all atoms in the metal lattice";
    properties = "Shiny, malleable, ductile, good conductor of heat and electricity";
  } else {
    // Default case for noble gases or other elements
    partner = {
      name: "Fluorine",
      symbol: "F",
      atomicNumber: 9,
      group: 17,
      period: 2,
      state: "gas",
      electronConfiguration: "1s² 2s² 2p⁵",
      atomicMass: 18.998,
      realWorldApplication: "Used in toothpaste and non-stick cookware coatings"
    };
    
    bondType = 'covalent';
    resultingCompound = `${mysteryElement.symbol}F₂`;
    electronTransfer = "Electrons are shared between atoms";
    properties = "Typically a gas at room temperature, reactive";
  }
  
  return {
    element: partner,
    bondType,
    resultingCompound,
    electronTransfer,
    properties
  };
};

// Function to generate bonding questions based on the mystery element and bonding partner
export const generateBondingQuestions = (
  mysteryElement: Element, 
  bondingPartner: BondingPartner
): BondingQuestion[] => {
  const questions: BondingQuestion[] = [
    {
      question: `What type of bond would form between ${mysteryElement.name} (${mysteryElement.symbol}) and ${bondingPartner.element.name} (${bondingPartner.element.symbol})?`,
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "No bond would form"],
      correctAnswer: bondingPartner.bondType === 'ionic' ? 0 : 
                    bondingPartner.bondType === 'covalent' ? 1 : 
                    bondingPartner.bondType === 'metallic' ? 2 : 3,
      explanation: getBondTypeExplanation(mysteryElement, bondingPartner)
    },
    {
      question: `How do electrons behave in the bond between ${mysteryElement.name} and ${bondingPartner.element.name}?`,
      options: [
        "Electrons are transferred from one atom to another",
        "Electrons are shared between atoms",
        "Electrons form a delocalized 'sea' around positively charged ions",
        "Electrons remain firmly attached to their original atoms"
      ],
      correctAnswer: bondingPartner.bondType === 'ionic' ? 0 : 
                    bondingPartner.bondType === 'covalent' ? 1 : 
                    bondingPartner.bondType === 'metallic' ? 2 : 3,
      explanation: getElectronBehaviorExplanation(mysteryElement, bondingPartner)
    },
    {
      question: `What would be a property of the compound ${bondingPartner.resultingCompound}?`,
      options: [
        "High melting point, conducts electricity when dissolved in water",
        "Variable melting point, does not conduct electricity",
        "Malleable, good conductor of heat and electricity",
        "Gaseous at room temperature, non-reactive"
      ],
      correctAnswer: bondingPartner.bondType === 'ionic' ? 0 : 
                    bondingPartner.bondType === 'covalent' ? 1 : 
                    bondingPartner.bondType === 'metallic' ? 2 : 3,
      explanation: getPropertyExplanation(mysteryElement, bondingPartner)
    }
  ];
  
  return questions;
};

// Helper function for bond type explanation
const getBondTypeExplanation = (mysteryElement: Element, bondingPartner: BondingPartner): string => {
  if (bondingPartner.bondType === 'ionic') {
    return `An ionic bond forms when a metal (${mysteryElement.name}) transfers electrons to a non-metal (${bondingPartner.element.name}). The metal becomes a positively charged ion, and the non-metal becomes a negatively charged ion. These oppositely charged ions attract each other, forming an ionic bond.`;
  } else if (bondingPartner.bondType === 'covalent') {
    return `A covalent bond forms when two non-metal atoms share electrons. In this case, ${mysteryElement.name} and ${bondingPartner.element.name} share electron pairs to achieve stable electron configurations. This sharing of electrons creates a strong bond between the atoms.`;
  } else {
    return `A metallic bond forms in pure metals or metal alloys. In ${mysteryElement.name}, the metal atoms release their valence electrons, creating a "sea" of delocalized electrons that move freely throughout the metal lattice. The positive metal ions are held together by their attraction to this negative electron cloud.`;
  }
};

// Helper function for electron behavior explanation
const getElectronBehaviorExplanation = (mysteryElement: Element, bondingPartner: BondingPartner): string => {
  if (bondingPartner.bondType === 'ionic') {
    return `In an ionic bond, ${mysteryElement.name} (electronegativity ${getElectronegativity(mysteryElement)}) loses ${getValenceElectrons(mysteryElement)} electron(s) to ${bondingPartner.element.name} (electronegativity ${getElectronegativity(bondingPartner.element)}). This complete transfer of electrons creates oppositely charged ions that attract each other.`;
  } else if (bondingPartner.bondType === 'covalent') {
    return `In a covalent bond, ${mysteryElement.name} and ${bondingPartner.element.name} share electron pairs between them. This sharing allows both atoms to achieve a stable electron configuration (often resembling that of a noble gas).`;
  } else {
    return `In a metallic bond, the valence electrons of ${mysteryElement.name} become delocalized, forming an electron "sea" that can move freely throughout the metal. The metal atoms become positive ions embedded in this negative electron cloud.`;
  }
};

// Helper function for property explanation
const getPropertyExplanation = (mysteryElement: Element, bondingPartner: BondingPartner): string => {
  if (bondingPartner.bondType === 'ionic') {
    return `Ionic compounds like ${bondingPartner.resultingCompound} typically have high melting and boiling points due to the strong electrostatic forces between ions. They are usually solid at room temperature, brittle, and conduct electricity when dissolved in water or melted (as the ions become mobile).`;
  } else if (bondingPartner.bondType === 'covalent') {
    return `Covalent compounds like ${bondingPartner.resultingCompound} have varying physical properties. Simple molecular compounds often have low melting and boiling points, while network covalent structures (like diamond or quartz) can have very high melting points. Most do not conduct electricity because they lack mobile charged particles.`;
  } else {
    return `Metals like ${mysteryElement.name} are characterized by their luster, malleability (ability to be hammered into sheets), ductility (ability to be drawn into wires), and good conductivity of heat and electricity. These properties arise from the metallic bonding structure with its mobile "sea" of electrons.`;
  }
};

// Helper function to estimate valence electrons (simplified)
const getValenceElectrons = (element: Element): number => {
  if (element.group <= 2) {
    return element.group;
  } else if (element.group >= 13) {
    return element.group - 10;
  } else {
    return 4; // Simplified approximation
  }
};

// Helper function for approximate electronegativity values (simplified)
const getElectronegativity = (element: Element): number => {
  // Very simplified approximation
  if (element.group === 1) return 0.9;
  if (element.group === 2) return 1.2;
  if (element.group >= 13 && element.group <= 15) return 1.8;
  if (element.group === 16) return 2.5;
  if (element.group === 17) return 3.0;
  if (element.group === 18) return 0;
  return 2.0; // Default
};