import React, { useState, useEffect } from 'react';
import MysteryPhase from './MysteryPhase';
import BondingPhase from './BondingPhase';
import GameOver from './GameOver';
import { getRandomElement } from '../data/elementData';
import { getBondingPartner, generateBondingQuestions } from '../data/bondingData';
import { Element, BondingPartner, BondingQuestion, GameState, HighScore } from '../types';
import PeriodicTableReference from './PeriodicTableReference';

interface GameContainerProps {
  onBackToMenu: () => void;
}


// Get high scores from localStorage or default to empty array
const getStoredHighScores = (): HighScore[] => {
  const storedScores = localStorage.getItem('elementDetectiveHighScores');
  return storedScores ? JSON.parse(storedScores) : [];
};

const GameContainer: React.FC<GameContainerProps> = ({ onBackToMenu }) => {
  const [showPeriodicTable, setShowPeriodicTable] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>({
    phase: 'mystery',
    mysteryElement: null,
    bondingPartner: null,
    clueIndex: 0,
    guessesRemaining: 3,
    currentGuess: '',
    score: 100, // Start with 100 points
    feedback: 'Try to guess the mystery element!',
    isCorrect: false,
    isGameOver: false,
    bondingQuestions: [],
    currentBondingQuestion: 0,
    selectedAnswer: null,
    answeredCorrectly: null,
    highScores: getStoredHighScores()
  });
  
  // Initialize the game
  useEffect(() => {
    startNewGame();
  }, []);
  
  const startNewGame = () => {
    const mysteryElement = getRandomElement();
    const bondingPartner = getBondingPartner(mysteryElement);
    const bondingQuestions = generateBondingQuestions(mysteryElement, bondingPartner);
    
    setGameState({
      phase: 'mystery',
      mysteryElement,
      bondingPartner,
      clueIndex: 0,
      guessesRemaining: 3,
      currentGuess: '',
      score: 100, // Start with 100 points
      feedback: 'Try to guess the mystery element!',
      isCorrect: false,
      isGameOver: false,
      bondingQuestions,
      currentBondingQuestion: 0,
      selectedAnswer: null,
      answeredCorrectly: null,
      highScores: getStoredHighScores()
    });
  };
  
  const saveHighScore = (initials: string) => {
    const newHighScore: HighScore = {
      initials: initials.toUpperCase().substring(0, 3),
      score: gameState.score,
      date: new Date().toISOString()
    };
    
    const updatedHighScores = [...gameState.highScores, newHighScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Keep only top 10
    
    localStorage.setItem('elementDetectiveHighScores', JSON.stringify(updatedHighScores));
    
    setGameState(prevState => ({
      ...prevState,
      highScores: updatedHighScores
    }));
  };
  
  const togglePeriodicTable = () => {
    setShowPeriodicTable(prev => !prev);
  };
  
  // Render the appropriate game phase
    return (
    <div className="bg-blue-800/20 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToMenu}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Menu
          </button>
        </div>
        <div className="text-white text-2xl font-bold">
          Score: <span className="text-green-300">{gameState.score}</span>
        </div>
        <button
          onClick={togglePeriodicTable}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showPeriodicTable ? 'Hide Periodic Table' : 'Show Periodic Table'}
        </button>
      </div>
      
      {showPeriodicTable && <PeriodicTableReference />}
      
      {gameState.phase === 'mystery' && gameState.mysteryElement && (
        <MysteryPhase
          gameState={gameState}
          setGameState={setGameState}
        />
      )}
      
      {gameState.phase === 'bonding' && gameState.mysteryElement && gameState.bondingPartner && (
        <BondingPhase
          gameState={gameState}
          setGameState={setGameState}
        />
      )}
      
      {gameState.phase === 'gameOver' && (
        <GameOver
          score={gameState.score}
          highScores={gameState.highScores}
          onSaveScore={saveHighScore}
          onPlayAgain={startNewGame}
        />
      )}
    </div>
  );
};

export default GameContainer;