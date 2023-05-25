import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';
import './Presets.css';

import Preset from './Preset';

import preset1_img from "./imgs/presets/glider.png";
import preset2_img from "./imgs/presets/light-weight-spaceship.png";
import preset3_img from "./imgs/presets/gosper-glider-gun.png";

export default function Presets( {generate_preset} ) {
    const preset1_desc = 'Travels diagonally across the grid';
    const preset2_desc = 'Travels horizontally across the grid';
    const preset3_desc = 'Creates gliders forever';

    
    
    return(
        <Popup
        contentStyle={{width: '40%', height: '90%', overflowX: 'hidden', overflowY: 'auto'}}
        trigger={
          <button className="information-button">
            <p className='rotated-text'>Presets</p>
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
            <div className="header">Presets</div>
            <div className="presets-container">
              <p>Click on any of the following presets and get them uploaded onto the grid!</p>
              <Preset name={'Glider'}image={preset1_img} description={preset1_desc} generate={() => generate_preset(0)} close={close}></Preset>
              <Preset name={'Light-weight Spaceship'} image={preset2_img} description={preset2_desc} generate={() => generate_preset(1)} close={close}></Preset>
              <Preset name={'Gosper Glider Gun'} image={preset3_img} description={preset3_desc} generate={() => generate_preset(2)} close={close}></Preset>
    
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
}