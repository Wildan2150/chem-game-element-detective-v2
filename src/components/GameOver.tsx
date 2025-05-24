import React, { useState } from 'react';
import { HighScore } from '../types';

interface GameOverProps {
  score: number;
  highScores: HighScore[];
  onSaveScore: (initials: string) => void;
  onPlayAgain: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, highScores, onSaveScore, onPlayAgain }) => {
  const [initials, setInitials] = useState('');
  const [scoreSaved, setScoreSaved] = useState(false);
  
  const handleInitialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitials(e.target.value.slice(0, 3).toUpperCase()); // Limit to 3 characters and uppercase
  };
  
  const handleSaveScore = () => {
    if (initials.length > 0) {
      onSaveScore(initials);
      setScoreSaved(true);
    }
  };
  
  // Calculate grade based on score
  const getGrade = (score: number): string => {
    if (score >= 250) return 'A+';
    if (score >= 225) return 'A';
    if (score >= 200) return 'B+';
    if (score >= 175) return 'B';
    if (score >= 150) return 'C+';
    if (score >= 125) return 'C';
    if (score >= 100) return 'D+';
    if (score >= 75) return 'D';
    return 'F';
  };
  
  const grade = getGrade(score);
  
  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-200">Game Over!</h2>
      
      <div className="flex flex-col items-center">
        <div className="mb-8 text-center">
          <p className="text-2xl mb-2">Your final score: <span className="text-green-300 font-bold">{score}</span></p>
          <p className="text-xl">
            Grade: <span className={`font-bold ${
              grade.startsWith('A') ? 'text-green-400' :
              grade.startsWith('B') ? 'text-blue-400' :
              grade.startsWith('C') ? 'text-yellow-400' :
              grade.startsWith('D') ? 'text-orange-400' :
              'text-red-400'
            }`}>{grade}</span>
          </p>
        </div>
        
        {!scoreSaved ? (
          <div className="mb-8 bg-blue-900/40 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl mb-4 text-center">Save your score</h3>
            <div className="flex gap-4">
              <input
                type="text"
                value={initials}
                onChange={handleInitialsChange}
                placeholder="AAA"
                className="p-3 rounded-lg bg-blue-900/60 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 w-24 text-center text-lg"
                maxLength={3}
              />
              <button
                onClick={handleSaveScore}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex-grow"
                disabled={initials.length === 0}
              >
                Save Score
              </button>
            </div>
          </div>
        ) : null}
        
        <div className="mb-8 bg-blue-900/40 p-6 rounded-lg w-full max-w-md">
          <h3 className="text-xl mb-4 text-center">High Scores</h3>
          {highScores.length > 0 ? (
            <ul className="space-y-2">
              {highScores.slice(0, 5).map((highScore, index) => (
                <li key={index} className="flex justify-between p-2 bg-blue-800/30 rounded-lg">
                  <span className="font-bold">{index + 1}. {highScore.initials}</span>
                  <span>{highScore.score}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-blue-300">No high scores yet!</p>
          )}
        </div>
        
        <button
          onClick={onPlayAgain}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;