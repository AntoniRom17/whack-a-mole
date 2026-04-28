import { useGame } from "./GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whack‑a‑Mole</h1>
      <p>Click the mole as fast as you can!</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}