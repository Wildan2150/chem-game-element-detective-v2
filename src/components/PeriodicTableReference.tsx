import React, { useState } from 'react';
import { elements } from '../data/elementData';

const PeriodicTableReference: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  
  const handleElementClick = (atomicNumber: number) => {
    setSelectedElement(atomicNumber === selectedElement ? null : atomicNumber);
  };
  
  const getElementByAtomicNumber = (atomicNumber: number) => {
    return elements.find(el => el.atomicNumber === atomicNumber);
  };
  
  // Simplified periodic table layout for first 20 elements
  const tableLayout = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    [19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  
  // Color categories by group
  const getElementColor = (atomicNumber: number) => {
    const element = getElementByAtomicNumber(atomicNumber);
    if (!element) return 'bg-gray-700';
    
    switch(true) {
      case element.group === 1: 
        return 'bg-red-700/70 hover:bg-red-600/70';
      case element.group === 2: 
        return 'bg-orange-700/70 hover:bg-orange-600/70';
      case element.group >= 13 && element.group <= 16: 
        return 'bg-green-700/70 hover:bg-green-600/70';
      case element.group === 17: 
        return 'bg-yellow-700/70 hover:bg-yellow-600/70';
      case element.group === 18: 
        return 'bg-purple-700/70 hover:bg-purple-600/70';
      default: 
        return 'bg-blue-700/70 hover:bg-blue-600/70';
    }
  };
  
  return (
    <div className="mb-8 bg-blue-900/20 p-4 rounded-lg border border-blue-800/50">
      <h3 className="text-xl mb-4 text-center text-blue-200">Periodic Table Reference</h3>
      
      <div className="overflow-x-auto">
        <div className="min-w-[600px] mb-4">
          {tableLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((atomicNumber, colIndex) => (
                <div 
                  key={colIndex} 
                  className={`w-12 h-12 m-0.5 flex flex-col items-center justify-center rounded-md border border-blue-800/50 transition-all ${
                    atomicNumber === 0 
                      ? 'bg-transparent' 
                      : `${getElementColor(atomicNumber)} cursor-pointer ${
                          selectedElement === atomicNumber ? 'ring-2 ring-white' : ''
                        }`
                  }`}
                  onClick={() => atomicNumber > 0 && handleElementClick(atomicNumber)}
                >
                  {atomicNumber > 0 && (
                    <>
                      <div className="text-xs text-blue-200">{atomicNumber}</div>
                      <div className="text-white font-bold">{getElementByAtomicNumber(atomicNumber)?.symbol}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {selectedElement && (
        <div className="bg-blue-800/40 p-3 rounded-lg mt-4">
          <h4 className="font-bold text-blue-200 mb-2">
            {getElementByAtomicNumber(selectedElement)?.name} ({getElementByAtomicNumber(selectedElement)?.symbol})
          </h4>
          <ul className="text-sm text-white space-y-1">
            <li>Atomic Number: {selectedElement}</li>
            <li>Atomic Mass: {getElementByAtomicNumber(selectedElement)?.atomicMass}</li>
            <li>State at Room Temp: {getElementByAtomicNumber(selectedElement)?.state}</li>
            <li>Electron Configuration: {getElementByAtomicNumber(selectedElement)?.electronConfiguration}</li>
          </ul>
        </div>
      )}
      
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-700/70 rounded mr-1"></div>
          <span className="text-xs text-white">Alkali Metals</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-orange-700/70 rounded mr-1"></div>
          <span className="text-xs text-white">Alkaline Earth</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-700/70 rounded mr-1"></div>
          <span className="text-xs text-white">Basic Metals</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-700/70 rounded mr-1"></div>
          <span className="text-xs text-white">Halogens</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-purple-700/70 rounded mr-1"></div>
          <span className="text-xs text-white">Noble Gases</span>
        </div>
      </div>
    </div>
  );
};

export default PeriodicTableReference;