import { useState, useEffect } from 'react';
import './App.css';
import './fonts.css';

import PauseImg from './imgs/Pause.png';
// import PlayImg from './imgs/Play.png';

import { gameOfLifeFrame } from './cellular_automata';

function Cell({ color, onCellClick }) {

  return <div className='App-square' onClick={onCellClick} style={{backgroundColor: color}}></div>;
}

function Grid({ rows, cols }) {
  let [cellStates, setCellStates] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(0))
  );

  let [isPlaying, setIsPlaying] = useState(false);

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
      row_component.push(<Cell color={determineColor(i, j)} onCellClick={() => handleClick(i, j)}/>);
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
      <button onClick={() => handlePlayAnimationClick()}>Click here to start the animation</button>
      <button onClick={() => handlePauseAnimationClick()}>Click here to pause the animation</button>
    </div>
  );

}

function App() {
  return (
    <div className="App">
      <h1 className="title">The Game of Life</h1>
      <div className='grid'>
        <Grid rows={30} cols={30}/>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}

export default App;
