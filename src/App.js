import React, {useState} from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Values from './Values';
import data from "./values.json"
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [selected, setSelected] = useState([]);
  const generate = () => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    setSelected(shuffled.slice(0,4))

  }
 // Get sub-array of first n elements after shuffled
  return (
    
    <div className="App">
        
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto"><h1>Enterprise Values Generator</h1></Col>
        </Row>
        <Values data={selected} />
        <Button onClick={() => generate()}>Generate Values</Button>
      </Container>
    </div>
  );

 
}

export default App;
