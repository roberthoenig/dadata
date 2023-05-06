import logo from './logo.svg';
import axios from "axios";
import './App.css';
import DragAndDrop from './DragAndDrop';
import React, { useState } from "react";

function App() {

  const [selectedDisease, setSelectedDisease] = useState("Acne");

  const handleChange = (event) => {
    const selectedDisease = event.target.value;
    console.log(selectedDisease);
    setSelectedDisease(selectedDisease);
  };


  return (
    <div className="App">
      <header className="App-header">
      <div>
        <label htmlFor="disease-select">Select Disease:</label>
        <select id="disease-select" value={selectedDisease} onChange={handleChange}>
          <option value="Acne">Acne</option>
          <option value="Baldness">Baldness</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </select>
      </div>
        <p></p>
        <DragAndDrop />
      </header>
    </div>
  );
}

export default App;
