import { Switch, Route } from "react-router-dom";
import Scoreboard from "./components/Scoreboard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Scoreboard />
    </div>
  );
}
