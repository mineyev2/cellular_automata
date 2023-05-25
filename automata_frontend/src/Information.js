import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';

export default () => (
  <Popup
    contentStyle={{width: '40%', height: '90%', overflowY: 'auto', overflowX: 'hidden'}}
    trigger={
      <button className="information-button">
        <p className='rotated-text'>Information</p>
      </button>
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Information Page</div>
        <div className="content">
          <h2>Quick Start</h2>
            <p className='tab-indent'>
              If you're impatient like me or just want to play around, I suggest you press the "Presets" button right below the "Information" button.
              Here, you can select different shapes and observe how they change through time by pressing the "Play" button on the bottom right.
              If you ever want to learn how this game actually works, you can always come back and read the nitty-gritty of the implementation below.
            </p>
          <h2>Introduction</h2>
          <p className='tab-indent'>
            Conway's Game of Life is a cellular automaton devised by mathematician John Horton Conway.
            It consists of a grid of squares, which we call cells, and each of them can be in one of two states: alive or dead.
            Clicking any of the squares on the grid will light it up, making that square "alive".
            Clicking it again will revert it back to the "dead" state.
            Every frame, the cells in the grid evolve based on a set of rules.
            You can see this by clicking the "Next Frame" button on the bottom right.
            Alternatively, clicking "Play" will automatically run frames until the same button is clicked again to "Pause".
          </p>
          <h2>Rules of the Game</h2>
          <p className='tab-indent'>
            The rules determine the state of each cell in the next generation based on its current state and the states of its 8 surrounding cells, called neighbors.
            The rules are simple but can give rise to complex and fascinating patterns. They are described as follows:
            <ol>
              <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
              <li>Any live cell with two or three live neighbors survives to the next generation.</li>
              <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
              <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
            </ol>
          </p>
          <h2>Settings</h2>
          <p className='tab-indent'>
            To give you the freedom to play around with the website, I have created some settings that you can play with to change the behavior of the game.
            You can see the located to the right of the grid. The functions are as follows:
            <ol>
              <li>Game Speed (1-100): Denotes the number of frames the game will update, per second</li>
              <li>Cells per row: Change the dimensions of the grid by increasing the number of cells in each row</li>
              <li>Cells per column: Change the dimensions of the grid by increasing the number of cells in each column</li>
            </ol>
            By clicking the "Submit Values" button, the settings of the website will change according to your inputs.
          </p>

        </div>
        <div className="actions">
          <button
            className="action-button"
            onClick={() => {
              close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Popup>
);