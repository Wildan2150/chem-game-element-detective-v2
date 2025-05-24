import React from 'react';
import { Play, HelpCircle } from 'lucide-react';

interface HomeScreenProps {
  onStartGame: () => void;
  onShowInstructions: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStartGame, onShowInstructions }) => {
  return (
    <div className="min-h-[600px] w-full flex flex-col items-center justify-center space-y-8 molecular-bg animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-blue-100 mb-2">ElementDetective</h1>
        <p className="text-blue-300 text-xl">Master the Elements, Unlock the Bonds</p>
      </div>

      <div className="flex flex-col space-y-4 w-full max-w-md">
        <button
          onClick={onStartGame}
          className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl 
                   hover:from-blue-500 hover:to-blue-600 transition-all duration-300 
                   shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-center space-x-3">
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-semibold">Start Game</span>
          </div>
        </button>

        <button
          onClick={onShowInstructions}
          className="group bg-gradient-to-r from-blue-800/50 to-blue-900/50 text-blue-100 px-8 py-4 
                   rounded-xl hover:from-blue-700/50 hover:to-blue-800/50 transition-all duration-300
                   border border-blue-700/30 hover:border-blue-600/50"
        >
          <div className="flex items-center justify-center space-x-3">
            <HelpCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-semibold">How to Play</span>
          </div>
        </button>
      </div>

      <div className="absolute bottom-8 text-blue-400 text-sm">
        <p>© 2025 ElementDetective - Learn Chemistry Through Play</p>
      </div>
    </div>
  );
};

export default HomeScreen;