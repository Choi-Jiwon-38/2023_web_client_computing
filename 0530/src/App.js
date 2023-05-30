import logo from './logo.svg';
import './App.css';

function Body() {
  function handleOnClick(e) {
    console.log(e);
    console.log(e.target.name);
  }
  return (
    <div className="body">
      <button name="A Btn" onClick={handleOnClick}>
        A Button
      </button>
      <button name="B Btn" onClick={handleOnClick}>
        B Button
      </button>
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
