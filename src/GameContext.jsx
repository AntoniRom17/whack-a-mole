import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [screen, setScreen] = useState("welcome"); // "welcome" or "game"
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(() => Math.floor(Math.random() * 9));

  function startGame() {
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
    setScreen("game");
  }

  function restartGame() {
    setScreen("welcome");
  }

  function whackMole() {
    setScore(prev => prev + 1);

    // pick a new random hole
    const newIndex = Math.floor(Math.random() * 9);
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