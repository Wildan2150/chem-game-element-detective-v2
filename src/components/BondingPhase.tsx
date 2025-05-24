import React from 'react';
import { GameState } from '../types';
import ElementDotDiagram from './ElementDotDiagram';

interface BondingPhaseProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const BondingPhase: React.FC<BondingPhaseProps> = ({ gameState, setGameState }) => {
  if (!gameState.mysteryElement || !gameState.bondingPartner) {
    return <div>Loading bonding challenge...</div>;
  }
  
  const handleAnswerSelect = (answerIndex: number) => {
    if (gameState.answeredCorrectly !== null) return; // Already answered
    
    const currentQuestion = gameState.bondingQuestions[gameState.currentBondingQuestion];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    // Update the score and state
    setGameState(prevState => ({
      ...prevState,
      selectedAnswer: answerIndex,
      answeredCorrectly: isCorrect,
      score: isCorrect ? prevState.score + 50 : prevState.score
    }));
  };
  
  const handleNextQuestion = () => {
    // Move to the next question or end the game
    const nextQuestionIndex = gameState.currentBondingQuestion + 1;
    
    if (nextQuestionIndex >= gameState.bondingQuestions.length) {
      setGameState(prevState => ({
        ...prevState,
        phase: 'gameOver',
      }));
    } else {
      setGameState(prevState => ({
        ...prevState,
        currentBondingQuestion: nextQuestionIndex,
        selectedAnswer: null,
        answeredCorrectly: null
      }));
    }
  };
  
  const currentQuestion = gameState.bondingQuestions[gameState.currentBondingQuestion];
  
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-200">
        Bonding Challenge
      </h2>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <div className="text-center">
            <h3 className="text-lg text-blue-300 mb-2">Mystery Element</h3>
            <div className="flex justify-center">
              <ElementDotDiagram 
                element={gameState.mysteryElement} 
                valenceElectrons={getValenceElectrons(gameState.mysteryElement)}
              />
            </div>
          </div>
          
          <div className="text-4xl text-blue-300">+</div>
          
          <div className="text-center">
            <h3 className="text-lg text-blue-300 mb-2">Bonding Partner</h3>
            <div className="flex justify-center">
              <ElementDotDiagram 
                element={gameState.bondingPartner.element} 
                valenceElectrons={getValenceElectrons(gameState.bondingPartner.element)}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-blue-900/40 p-6 rounded-lg">
          <h3 className="text-xl mb-6 text-center text-blue-200">
            Question {gameState.currentBondingQuestion + 1} of {gameState.bondingQuestions.length}
          </h3>
          
          <p className="text-lg mb-6">{currentQuestion.question}</p>
          
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  gameState.selectedAnswer === index
                    ? gameState.answeredCorrectly 
                      ? 'bg-green-600/50 border-2 border-green-400'
                      : 'bg-red-600/50 border-2 border-red-400'
                    : currentQuestion.correctAnswer === index && gameState.answeredCorrectly !== null
                      ? 'bg-green-600/50 border-2 border-green-400'
                      : 'bg-blue-800/50 border border-blue-700 hover:bg-blue-700/50'
                }`}
              >
                {option}
              </div>
            ))}
          </div>
          
          {gameState.answeredCorrectly !== null && (
            <div className="mb-6">
              <div className={`p-4 rounded-lg ${gameState.answeredCorrectly ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'}`}>
                <h4 className={`font-bold ${gameState.answeredCorrectly ? 'text-green-400' : 'text-red-400'} mb-2`}>
                  {gameState.answeredCorrectly ? 'Correct!' : 'Incorrect!'}
                </h4>
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>
          )}
          
          {gameState.answeredCorrectly !== null && (
            <div className="flex justify-center">
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {gameState.currentBondingQuestion < gameState.bondingQuestions.length - 1
                  ? 'Next Question'
                  : 'See Final Score'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to determine the number of valence electrons
const getValenceElectrons = (element: any): number => {
  if (element.group <= 2) {
    return element.group;
  } else if (element.group >= 13) {
    return element.group - 10;
  }
  // Special cases for transition metals would go here
  return 4; // Default fallback
};

export default BondingPhase;