export interface Element {
  name: string;
  symbol: string;
  atomicNumber: number;
  group: number;
  period: number;
  state: 'solid' | 'liquid' | 'gas';
  electronConfiguration: string;
  atomicMass: number;
  realWorldApplication: string;
}

export interface BondingPartner {
  element: Element;
  bondType: 'ionic' | 'covalent' | 'metallic';
  resultingCompound: string;
  electronTransfer: string;
  properties: string;
}

export interface BondingQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface HighScore {
  initials: string;
  score: number;
  date: string;
}

export interface GameState {
  phase: 'mystery' | 'bonding' | 'gameOver';
  mysteryElement: Element | null;
  bondingPartner: BondingPartner | null;
  clueIndex: number;
  guessesRemaining: number;
  currentGuess: string;
  score: number;
  feedback: string;
  isCorrect: boolean;
  isGameOver: boolean;
  bondingQuestions: BondingQuestion[];
  currentBondingQuestion: number;
  selectedAnswer: number | null;
  answeredCorrectly: boolean | null;
  highScores: HighScore[];
}