import { useState, useEffect } from 'react';
import './App.css';
import './fonts.css';

import Grid from './Grid';

function App() {

  return (
    <div className="App">
      <h1 className="title">The Game of Life</h1>
      <div className="program">
        <div className='grid'>
          <Grid rows={40} cols={40}/>
        </div>
        <div className='gameSettings'>
          <div className='input-container'>
            <p className='gameSettings-text'>Enter the speed of the game:</p>
            <input type="text" name="speed" placeholder="Range: 1-100fps"/>
          </div>
          <div className='input-container'>
            <p className='gameSettings-text'>Number of cells in each row:</p>
            <input type="text" name="width" placeholder="Range: 1-200"/>
          </div>
          <div className='input-container'>
            <p className='gameSettings-text'>Number of cells in each column:</p>
            <input type="text" name="height" placeholder="Range: 1-200"/>
          </div>
         
        </div>
      </div>

    </div>
  );
}

export default App;
