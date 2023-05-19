import { useState, useEffect } from 'react';
import './App.css';
import './fonts.css';

import { gameOfLifeFrame } from './cellular_automata';

function Cell({ size, color, onCellClick }) {
  let wh = size.toString() + 'vh';
  let border_rad = (size / 6).toString() + 'vh';
  return <div className='App-square' onClick={onCellClick} style={{backgroundColor: color, width: wh, height: wh, borderRadius: border_rad}}></div>;
}

function Grid({ rows, cols }) {
  let [cellStates, setCellStates] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(0))
  );

  let [isPlaying, setIsPlaying] = useState(false);
  
  // ratio of how much the height of the website the grid uses
  let grid_space = 0.65;
  let max = Math.max(rows, cols);
  // percent of the screen each cell is:
  let cellSize = grid_space * 1 / max * 100;

  

  function handleClick(row, col) {
    let newCellStates = cellStates.slice();
    
    if (newCellStates[row][col] === 0) {
      newCellStates[row][col] = 1;
    } else {
      newCellStates[row][col] = 0;
    }

    setCellStates(newCellStates);
  }

  function handleNextFrameClick() {
    let newCellStates = gameOfLifeFrame(cellStates);

    setCellStates(newCellStates);
  }

  function handleClearGridClick() {
    let newCellStates = Array(rows)
      .fill()
      .map(() => Array(cols).fill(0));

    setCellStates(newCellStates);
  }

  function handlePlayAnimationClick() {
    setIsPlaying(true);
  }

  function handlePauseAnimationClick() {
    setIsPlaying(false);
  }

  useEffect(() => {
    let animationTimer;

    if (isPlaying) {
      animationTimer = setInterval(() => {
        // handleNextFrameClick();
        // update so that I can just call handleNextFrameClick() so that I don't have to be remaking 
        let newCellStates = gameOfLifeFrame(cellStates);
        setCellStates(newCellStates);
      }, 250);
    }

    return () => {
      clearInterval(animationTimer);
    };
  }, [isPlaying, cellStates]);

  function determineColor(row, col) {
    if (cellStates[row][col] === 0) {
      return getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    } else {
      return getComputedStyle(document.documentElement).getPropertyValue('--cell-fill-color').trim();
    }
  }
  
  let grid_component = []
  for (let i = 0; i < rows; i++) {

    const row_component = [];

    for (let j = 0; j < cols; j++) {
      row_component.push(<Cell size={cellSize} color={determineColor(i, j)} onCellClick={() => handleClick(i, j)}/>);
    }

    grid_component.push(
      <div className='board-row'>
        {row_component}
      </div>
    );
  }

  return (
    <div>
      {grid_component}
      <button onClick={() => handleNextFrameClick()}>Click to go to next frame</button>
      <button onClick={() => handleClearGridClick()}>Click to clear the grid</button>
      <button onClick={() => handlePlayAnimationClick()}>Start animation</button>
      <button onClick={() => handlePauseAnimationClick()}>Pause animation</button>
    </div>
  );

}

function App() {
  return (
    <div className="App">
      <h1 className="title">The Game of Life</h1>
      <div className='grid'>
        <Grid rows={40} cols={40}/>
      </div>
    </div>
  );
}

export default App;
