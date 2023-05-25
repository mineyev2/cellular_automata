import { useState, useEffect } from 'react';
import './App.css';
import './fonts.css';

import Information from './Information';

import { gameOfLifeFrame } from './cellular_automata';

import Grid from './Grid';
import Presets from './Presets';
import About from './About';

import { preset_data } from './preset_data';

function App() {
  // grid variables:
  let [numRows, setNumRow] = useState(15);
  let [numCols, setNumCols] = useState(15);
  let [speed, setSpeed] = useState(4);
  let [isPlaying, setIsPlaying] = useState(false);
  let [animationButtonText, setAnimationButtonText] = useState("Play");

  // form input values:
  const [formData, setFormData] = useState({
    speed: '',
    width: '',
    height: ''
  });

  let [cellStates, setCellStates] = useState(
    Array(numRows)
      .fill()
      .map(() => Array(numCols).fill(0))
  );

  function handleCellClick(row, col) {
    let newCellStates = cellStates.slice();
    
    if (newCellStates[row][col] === 0) {
      newCellStates[row][col] = 1;
    } else {
      newCellStates[row][col] = 0;
    }

    setCellStates(newCellStates);
  }

  function determineColor(row, col) {
    if (cellStates[row][col] === 0) {
      return getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    } else {
      return getComputedStyle(document.documentElement).getPropertyValue('--title-color').trim();
    }
  }

  function handleNextFrameClick() {
    let newCellStates = gameOfLifeFrame(cellStates);
    setCellStates(newCellStates);
  }

  function handleClearGridClick() {
    pauseAnimation();

    let newCellStates = Array(numRows)
      .fill()
      .map(() => Array(numCols).fill(0));

    setCellStates(newCellStates);
  }

  function pauseAnimation() {
    setAnimationButtonText("Play");
    setIsPlaying(false);
  }

  function playAnimation() {
    setAnimationButtonText("Pause");
    setIsPlaying(true);
  }

  function handleAnimationButtonClick() {
    if (isPlaying) {
      pauseAnimation();
    } else {
      playAnimation();
    }
  }

  useEffect(() => {
    let animationTimer;

    if (isPlaying) {
      animationTimer = setInterval(() => {
        let newCellStates = gameOfLifeFrame(cellStates);
        setCellStates(newCellStates);
      }, Math.round(1000 * (1 / speed)));
    }

    return () => {
      clearInterval(animationTimer);
    };
  }, [isPlaying, cellStates, speed]);

  const handleGameSettingsSubmit = (event) => {
    event.preventDefault();

    let newSpeed = speed;
    let newNumRows = numRows;
    let newNumCols = numCols;

    if (formData.speed !== "") {
      newSpeed = parseInt(formData.speed);
      setSpeed(newSpeed);
    }

    if (formData.height !== "") {
      newNumRows = parseInt(formData.height);
      setNumRow(newNumRows);
    }

    if (formData.width !== "") {
      newNumCols = parseInt(formData.width);
      setNumCols(newNumCols);
    }


    // When I use numRows instead of newNumRows it doesn't get updated because the value gets updated outside the function I guess
    setCellStates(
      Array(newNumRows)
        .fill()
        .map(() => Array(newNumCols).fill(0))
    );
  }

  const handleGameSettingsChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function generate_preset_on_grid(preset_idx) {
    // make sure animation is stopped before generating the presets
    pauseAnimation();
    // find the dimensions to update values
    const newNumRows = preset_data[preset_idx].length;
    const newNumCols = preset_data[preset_idx][0].length;

    setNumRow(newNumRows);
    setNumCols(newNumCols);

    setCellStates(preset_data[preset_idx]);
  }

  return (
    <div className="App">
      <h1 className="title">THE GAME OF LIFE</h1>
      <div className="program">
        <div className='grid'>
          <Grid rows={numRows} cols={numCols} determineColor={determineColor} onCellClick={handleCellClick}/>
        </div>
        <div className='settings'>
          <form onSubmit={handleGameSettingsSubmit}>
            <div className="form-components-container">
              <div className='settings-input-container'>
                <p className='settings-text'>Enter game speed:</p>
                <input className='settings-input' type="number" min={1} max={100} value={formData.speed} name="speed" placeholder="Range: 1-100fps" onChange={handleGameSettingsChange}/>
              </div>
              <div className='settings-input-container'>
                <p className='settings-text'>Cells per row:</p>
                <input className='settings-input' type="number" min={1} max={100} name="width" placeholder="Range: 1-200" onChange={handleGameSettingsChange}/>
              </div>
              <div className='settings-input-container'>
                <p className='settings-text'>Cells per column:</p>
                <input className='settings-input' type="number" min={1} max={100} name="height" placeholder="Range: 1-200" onChange={handleGameSettingsChange}/>
              </div>
              <div className='submit-button-container'>
                <button className='submit-button' type="submit">Submit Values</button>
              </div>
            </div>

          </form>

          <div className='animation-buttons-container'>
            <button className='animation-button' onClick={() => handleNextFrameClick()}>Next frame</button>
            <button className='animation-button' onClick={() => handleClearGridClick()}>Clear Grid</button>
            <button className='animation-button' onClick={() => handleAnimationButtonClick()}>{animationButtonText}</button>
          </div>
        </div>
        <div className='icon-buttons-container'>
          <Information></Information>
          <Presets generate_preset={generate_preset_on_grid}></Presets>
          <About></About>
        </div>
      </div>

    </div>
  );
}

export default App;
