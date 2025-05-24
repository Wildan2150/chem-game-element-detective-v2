import React from 'react';
import { Element } from '../types';

interface ElementDotDiagramProps {
  element: Element;
  valenceElectrons: number;
}

const ElementDotDiagram: React.FC<ElementDotDiagramProps> = ({ element, valenceElectrons }) => {
  // Generate electron positions (simplified Lewis dot structure)
  const electronPositions = generateElectronPositions(valenceElectrons);
  
  return (
    <div className="relative w-28 h-28">
      {/* Element symbol box */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl border-2 border-blue-500/50 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-blue-100">{element.symbol}</div>
        <div className="text-xs text-blue-300">{element.name}</div>
      </div>
      
      {/* Electron dots */}
      {electronPositions.map((position, index) => (
        <div
          key={index}
          className="absolute w-3 h-3 bg-yellow-300 rounded-full pulse"
          style={{
            top: `${position.top}%`,
            left: `${position.left}%`,
          }}
        />
      ))}
    </div>
  );
};

// Function to generate positions for electron dots around the element symbol
const generateElectronPositions = (valenceElectrons: number) => {
  const positions = [];
  const maxElectrons = Math.min(valenceElectrons, 8); // Max 8 electrons displayed
  
  // Define positions around the box
  const positionTemplates = [
    { top: 10, left: 50 },  // Top
    { top: 30, left: 85 },  // Top right
    { top: 70, left: 85 },  // Bottom right
    { top: 90, left: 50 },  // Bottom
    { top: 70, left: 15 },  // Bottom left
    { top: 30, left: 15 },  // Top left
    { top: 20, left: 70 },  // Extra position 1
    { top: 80, left: 30 }   // Extra position 2
  ];
  
  // Add positions based on valence electrons
  for (let i = 0; i < maxElectrons; i++) {
    positions.push(positionTemplates[i]);
  }
  
  return positions;
};

export default ElementDotDiagram;