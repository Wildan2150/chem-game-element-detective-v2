import React, { useState } from 'react';
import { Beaker } from 'lucide-react';
import GameContainer from './components/GameContainer';
import HomeScreen from './components/HomeScreen';
import HowToPlay from './components/HowToPlay';
import './App.css';

type Screen = 'home' | 'game' | 'instructions';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen 
            onStartGame={() => setCurrentScreen('game')}
            onShowInstructions={() => setCurrentScreen('instructions')}
          />
        );
      case 'instructions':
        return <HowToPlay onBack={() => setCurrentScreen('home')} />;
      case 'game':
        return <GameContainer onBackToMenu={() => setCurrentScreen('home')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center justify-start py-8 px-4">
      <header className="w-full max-w-4xl mb-8 flex items-center justify-center">
        <div className="flex items-center gap-3 bg-blue-800/30 px-6 py-4 rounded-xl backdrop-blur-sm border border-blue-700/50">
          <Beaker className="text-blue-300 h-8 w-8" />
          <h1 className="text-3xl font-bold text-blue-100">ElementDetective</h1>
        </div>
      </header>
      
      <main className="w-full max-w-4xl">
        {renderScreen()}
      </main>
    </div>
  );
}

export default App;