import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";
import { ClearButton } from "./components/ClearButton";
import { Input } from "./components/Input";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import { evaluate } from "mathjs";
function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput("");
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingrese datos para calcular");
    }
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Input input={input} />
        <div className="fila">
          <Button onClick={addInput}>1</Button>
          <Button onClick={addInput}>2</Button>
          <Button onClick={addInput}>3</Button>
          <Button onClick={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button onClick={addInput}>4</Button>
          <Button onClick={addInput}>5</Button>
          <Button onClick={addInput}>6</Button>
          <Button onClick={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button onClick={addInput}>7</Button>
          <Button onClick={addInput}>8</Button>
          <Button onClick={addInput}>9</Button>
          <Button onClick={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button onClick={calcResult}> = </Button>
          <Button onClick={addInput}>0</Button>
          <Button onClick={addInput}>.</Button>
          <Button onClick={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton onClick={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
