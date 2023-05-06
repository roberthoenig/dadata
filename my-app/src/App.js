import logo from './logo.jpg';
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
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1 className="heading">Drag and Drop Image Upload</h1>
        <DragAndDrop />
        <div className="select-container">
          <label htmlFor="disease-select" className="label">Select Disease:</label>
          <select id="disease-select" value={selectedDisease} onChange={handleChange} className="select">
            <option value="Acne">Acne</option>
            <option value="Baldness">Baldness</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;

