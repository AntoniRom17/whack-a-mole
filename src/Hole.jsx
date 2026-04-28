import { useGame } from "./GameContext";

export default function Hole({ index }) {
  const { moleIndex, whackMole } = useGame();

  const hasMole = index === moleIndex;

  return (
    <div className="hole">
      {hasMole && (
        <div className="mole" onClick={whackMole}></div>
      )}
    </div>
  );
}