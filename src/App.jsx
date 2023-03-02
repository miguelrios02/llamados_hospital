import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./layout/Header";
import LLamado from "./components/LLamado";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <LLamado />
    </div>
  );
}

export default App;
