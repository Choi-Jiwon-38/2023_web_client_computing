import "./App.css";
import { useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  
  return (
    <div>
      <input onChange={handleOnChange} />
      <div>{text}</div>
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
