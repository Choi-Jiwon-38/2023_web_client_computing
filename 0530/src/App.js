import "./App.css";
import { useState } from "react";

function Viewer() {
  console.log('rendering');
}

function Body() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  }
  
  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />

      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <ul>
      <Body />
    </ul>
  );
}

export default App;
