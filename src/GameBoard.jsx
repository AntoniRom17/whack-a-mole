import { useGame } from "./GameContext";
import Hole from "./Hole";

export default function GameBoard() {
  const { score, restartGame } = useGame();

  return (
    <div className="game-board">
      <div className="top-bar">
        <h2>Score: {score}</h2>
        <button onClick={restartGame}>Restart</button>
      </div>

      <div className="grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <Hole key={i} index={i} />
        ))}
      </div>
    </div>
  );
}