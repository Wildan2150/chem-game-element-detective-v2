import React from 'react';

// Component for animated element symbol box
const ElementSymbol: React.FC = () => {
  return (
    <div className="relative w-36 h-36 float">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border-2 border-blue-400/30 backdrop-blur-sm flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-blue-100 mb-1">?</div>
        <div className="text-sm text-blue-300">Mystery Element</div>
        
        {/* Animated electrons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-28 h-28 rounded-full">
            <div className="electron electron-1"></div>
            <div className="electron electron-2"></div>
            <div className="electron electron-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementSymbol;