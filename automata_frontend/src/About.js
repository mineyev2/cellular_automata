import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';
import './About.css';

export default () => (
  <Popup
    contentStyle={{width: '40%', height: '90%', overflowY: 'auto', overflowX: 'hidden'}}
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
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">About Me</div>
        <div className="content">
            <h2>About Me</h2>
            <div className='text-wrap-container'>
                <img className='text-wrap-image' src={require("./imgs/pic1.jpg")} alt="Description of the image"></img>
                <p className='text-wrap-text'>
                    My name is Roman Mineyev, an undergraduate majoring in Math & Computer Science at the University of Illinois at Urbana-Champaign as of May, 2023.


                </p>
            </div>


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