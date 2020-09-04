import React, {useState} from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Values from './Values';
import data from "./values.json"
function App() {
  const [selected, setSelected] = useState([]);
  const generate = () => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    setSelected(shuffled.slice(0,4))

  }
 // Get sub-array of first n elements after shuffled
  return (
    
    <div className="App">
      <header className="App-header">
        <Values data={selected} />
        <Button onClick={() => generate()}>Generate Values</Button>
      </header>
    </div>
  );

 
}

export default App;
