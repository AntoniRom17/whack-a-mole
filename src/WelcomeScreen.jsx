import { useGame } from "./GameContext";

export default function WelcomeScreen() {
  const { startGame, highScore } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whack‑a‑Mole</h1>

      <p>Click the mole as fast as you can!</p>

      <h3>High Score: {highScore}</h3>

      <button onClick={startGame}>Play</button>
    </div>
  );
}