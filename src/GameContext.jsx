import { createContext, useContext, useState, useRef, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [screen, setScreen] = useState("welcome");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [moleIndex, setMoleIndex] = useState(() => Math.floor(Math.random() * 9));

  const [timeLeft, setTimeLeft] = useState(15);
  const intervalRef = useRef(null);

  function startGame() {
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
    setTimeLeft(15);
    setScreen("game");

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
  }

  function restartGame() {

    setHighScore(prev => Math.max(prev, score));

    if (intervalRef.current) clearInterval(intervalRef.current);

    setScreen("welcome");
  }

  function whackMole() {
    if (timeLeft === 0) return; 

    setScore(prev => prev + 1);

    let newIndex = moleIndex;
    while (newIndex === moleIndex) {
      newIndex = Math.floor(Math.random() * 9);
    }

    setMoleIndex(newIndex);
  }

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  return (
    <GameContext.Provider
      value={{
        screen,
        score,
        highScore,
        moleIndex,
        timeLeft,
        startGame,
        restartGame,
        whackMole
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}