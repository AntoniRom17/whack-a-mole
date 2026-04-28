import { GameProvider, useGame } from "./GameContext";
import WelcomeScreen from "./WelcomeScreen";
import GameBoard from "./GameBoard";
import "./index.css";

function ScreenRouter() {
  const { screen } = useGame();

  return screen === "welcome" ? <WelcomeScreen /> : <GameBoard />;
}

export default function App() {
  return (
    <GameProvider>
      <ScreenRouter />
    </GameProvider>
  );
}
