import React, { useState, useEffect } from 'react';
import { getClue, validateElementGuess, getGuessFeedback } from '../data/elementData';
import { GameState } from '../types';
import ElementSymbol from './ElementSymbol';

interface MysteryPhaseProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const MysteryPhase: React.FC<MysteryPhaseProps> = ({ gameState, setGameState }) => {
  const [inputValue, setInputValue] = useState('');
  const [shake, setShake] = useState(false);
  const [revealedClues, setRevealedClues] = useState<string[]>([]);
  
  useEffect(() => {
    if (gameState.mysteryElement && revealedClues.length === 0) {
      // Reveal the first clue automatically
      setRevealedClues([getClue(gameState.mysteryElement, 0)]);
    }
  }, [gameState.mysteryElement, revealedClues]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gameState.mysteryElement) return;
    
    const guess = inputValue.trim();
    if (guess === '') return;
    
    // Check if the guess is correct
    const isCorrect = validateElementGuess(guess, gameState.mysteryElement);
    
    if (isCorrect) {
      // Correct guess - move to bonding phase
      setGameState(prevState => ({
        ...prevState,
        phase: 'bonding',
        feedback: `Correct! The element is ${gameState.mysteryElement?.name} (${gameState.mysteryElement?.symbol})`,
        isCorrect: true
      }));
    } else {
      // Wrong guess - provide feedback and update remaining guesses
      const feedback = getGuessFeedback(guess, gameState.mysteryElement);
      
      setGameState(prevState => {
        const newGuessesRemaining = prevState.guessesRemaining - 1;
        
        // If no more guesses for this clue
        if (newGuessesRemaining <= 0) {
          const newClueIndex = prevState.clueIndex + 1;
          
          // If we've shown all clues and still no correct guess
          if (newClueIndex >= 4) {
            return {
              ...prevState,
              phase: 'gameOver',
              feedback: `Game over! The mystery element was ${gameState.mysteryElement?.name} (${gameState.mysteryElement?.symbol}).`,
              score: Math.max(0, prevState.score - 10), // Deduct 10 points for using a new clue
              isGameOver: true
            };
          }
          
          // Reveal next clue
          setRevealedClues(prev => [
            ...prev, 
            getClue(gameState.mysteryElement!, newClueIndex)
          ]);
          
          return {
            ...prevState,
            clueIndex: newClueIndex,
            guessesRemaining: 3,
            feedback,
            score: Math.max(0, prevState.score - 10) // Deduct 10 points for using a new clue
          };
        }
        
        return {
          ...prevState,
          guessesRemaining: newGuessesRemaining,
          feedback
        };
      });
      
      // Shake the input field for incorrect guess
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    
    setInputValue('');
  };
  
  if (!gameState.mysteryElement) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-200">Mystery Element Challenge</h2>
      
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <ElementSymbol />
        </div>
        
        <div className="bg-blue-900/40 p-4 rounded-lg mb-6">
          <h3 className="text-xl mb-3 text-blue-200">Clues:</h3>
          <ul className="space-y-3">
            {revealedClues.map((clue, index) => (
              <li 
                key={index} 
                className="slide-in p-3 bg-blue-800/30 rounded-lg border border-blue-700/50"
              >
                {clue}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-lg mb-2">
            Guesses remaining for this clue: 
            <span className="font-bold text-yellow-300 ml-2">{gameState.guessesRemaining}</span>
          </p>
          <p className="text-orange-300">{gameState.feedback}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="w-full max-w-md">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter element name or symbol"
              className={`w-full p-3 rounded-lg bg-blue-900/60 text-white border ${
                shake ? 'animate-shake border-red-500' : 'border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4`}
            />
          </div>
          
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit Guess
          </button>
        </form>
      </div>
    </div>
  );
};

export default MysteryPhase;