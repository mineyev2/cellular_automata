import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';
import './About.css';

export default () => (
  <Popup
    contentStyle={{width: '40%', height: 'auto', maxHeight: '90%', overflowY: 'auto', overflowX: 'hidden'}}
    trigger={
      <button className="popup-button">
        <p className='rotated-text'>About</p>
      </button>
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="actions">
          <button
            className="action-button"
            onClick={() => {
              close();
            }}
          >
            X
          </button>
        </div>
        <h1 className="header">About Me</h1>
        <div className="content">
            <div className='text-wrap-container'>
                <img className='text-wrap-image' src={require("./imgs/pic1.jpg")} alt="Description of the image"></img>
                <p className='tab-indent'>
                    My name is Roman Mineyev, an undergraduate majoring in Math & Computer Science at the University of Illinois at Urbana-Champaign as of May, 2023.
                </p>
            </div>
        </div>
        <div className='space'></div>
      </div>
    )}
  </Popup>
);