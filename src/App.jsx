import { useState } from 'react';
import './App.css';
import './counter.css';

function App() {
  const [counter, setCounter] = useState(0); // useState returns an array with the current state and a function to update it

  const addValue = () => {
    console.log("clicked", );
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1);
      console.alert("reached at zero")
    }
    
  };

  const restartValue = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button  onClick={addValue}>Add value</button>
      <br />
      <button  onClick={removeValue}>Remove value</button>
      <br />
      <button onClick={restartValue}>Restart</button>
    </>
  );
}

export default App;
