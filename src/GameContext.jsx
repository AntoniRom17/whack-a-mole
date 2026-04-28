import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [screen, setScreen] = useState("welcome"); // "welcome" or "game"
  const [highScore, setHighScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(() => Math.floor(Math.random() * 9));

  function startGame() {
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
    setScreen("game");
  }

  function restartGame() {
  setHighScore(prev => Math.max(prev, score));
  setScreen("welcome");
}

function whackMole() {
  setScore(prev => prev + 1);

  let newIndex = moleIndex;
  while (newIndex === moleIndex) {
    newIndex = Math.floor(Math.random() * 9);
  }

  setMoleIndex(newIndex);
}

  return (
    <GameContext.Provider value={{ screen, score, moleIndex, startGame, restartGame, whackMole }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}