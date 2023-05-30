import "./App.css";
import { useState } from "react";

function Body() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

function App() {
  return (
    <ul>
      <Body />
    </ul>
  );
}

export default App;
