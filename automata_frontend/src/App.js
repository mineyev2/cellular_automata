import { useState } from 'react';
import './App.css';

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

  function determineColor(row, col) {
    if (cellStates[row][col] == false) {
      return '#011611';
    } else {
      return '#cbe58e';
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

  // gameOfLifeFrame(cellStates);
  return (
    <div>
      {grid_component}
      <button onClick={() => handleNextFrameClick()}>Click to see next frame</button>
      <button onClick={() => handleClearGridClick()}>Click to clear the grid</button>
    </div>
  );

}

function App() {
  return (
    <div className="App">
      <div className='grid'>
        <Grid rows={15} cols={30}/>
      </div>
    </div>
  );
}

export default App;
