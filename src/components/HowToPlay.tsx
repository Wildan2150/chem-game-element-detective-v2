import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HowToPlayProps {
  onBack: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ onBack }) => {
  return (
    <div className="min-h-[600px] w-full p-8 molecular-bg animate-fade-in">
      <button
        onClick={onBack}
        className="group flex items-center space-x-2 text-blue-300 hover:text-blue-200 
                 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Menu</span>
      </button>

      <div className="max-w-3xl mx-auto bg-blue-900/30 p-8 rounded-xl border border-blue-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-blue-100 mb-6">How to Play</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Game Objectives</h3>
            <p className="text-blue-100 mb-4">
              ElementDetective challenges you to identify mystery elements and understand their bonding behavior
              through two exciting phases.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 1: Mystery Element</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-100">
              <li>You'll receive clues about a mystery element</li>
              <li>Enter either the element's name or symbol as your guess</li>
              <li>You have 3 attempts per clue to identify the element</li>
              <li>New clues are revealed after using all attempts</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 2: Bonding Challenge</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-100">
              <li>After identifying the element, you'll explore its bonding behavior</li>
              <li>Answer questions about chemical bonds and electron behavior</li>
              <li>Use the periodic table reference for help (available in-game)</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Scoring System</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-100">
              <li>Start with 100 points</li>
              <li>Lose 10 points when using a new clue</li>
              <li>Gain 50 points for each correct bonding answer</li>
              <li>Final grade based on total score (A+ to F)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-100">
              <li>Use the periodic table reference to help identify elements</li>
              <li>Pay attention to feedback on incorrect guesses</li>
              <li>Consider an element's properties and common applications</li>
              <li>Study electron configurations to understand bonding patterns</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;