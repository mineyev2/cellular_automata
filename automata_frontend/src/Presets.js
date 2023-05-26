import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';
import './Presets.css';

import Preset from './Preset';

import preset1_img from "./imgs/presets/glider2.png";
import preset2_img from "./imgs/presets/light-weight-spaceship2.png";
import preset3_img from "./imgs/presets/middle-weight-spaceship.png";
import preset4_img from "./imgs/presets/heavy-weight-spaceship.png";
import preset5_img from "./imgs/presets/gosper-glider-gun2.png";
import preset6_img from "./imgs/presets/cloverleaf.png";
import preset7_img from "./imgs/presets/pentadecathlon.png";
import preset8_img from "./imgs/presets/hammerhead-spaceship.png";

export default function Presets( {generate_preset} ) {
    const preset1_desc = 'Travels diagonally across the grid';
    const preset2_desc = 'Travels horizontally across the grid';
    const preset3_desc = 'Travels horizontally across the grid';
    const preset4_desc = 'Travels horizontally across the grid';
    const preset5_desc = 'Creates gliders forever';
    const preset6_desc = 'Pattern repeats every 4 frames';
    const preset7_desc = 'Pattern repeats every 15 frames';
    const preset8_desc = 'Travels horizontally across the grid';

    
    
    return(
      <Popup
        contentStyle={{width: '40%', height: 'auto', maxHeight: '90%', overflowX: 'hidden', overflowY: 'auto'}}
        trigger={
          <button className="popup-button">
            <p className='rotated-text'>Presets</p>
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
            <h1 className="header">Presets</h1>
            <div className="content">
              <p className='preset-text'>Click "Generate" under any of the following presets and get them uploaded onto the grid!</p>
              <Preset name={'Cloverleaf'} image={preset6_img} description={preset6_desc} generate={() => generate_preset(5)} close={close}></Preset>
              <Preset name={'Penta-decathlon'} image={preset7_img} description={preset7_desc} generate={() => generate_preset(6)} close={close}></Preset>
              <Preset name={'Glider'}image={preset1_img} description={preset1_desc} generate={() => generate_preset(0)} close={close}></Preset>
              <Preset name={'Light-weight Spaceship'} image={preset2_img} description={preset2_desc} generate={() => generate_preset(1)} close={close}></Preset>
              <Preset name={'Middle-weight Spaceship'} image={preset3_img} description={preset3_desc} generate={() => generate_preset(2)} close={close}></Preset>
              <Preset name={'Heavy-weight Spaceship'} image={preset4_img} description={preset4_desc} generate={() => generate_preset(3)} close={close}></Preset>
              <Preset name={'Happerhead Spaceship'} image={preset8_img} description={preset8_desc} generate={() => generate_preset(7)} close={close}></Preset>
              <Preset name={'Gosper Glider Gun'} image={preset5_img} description={preset5_desc} generate={() => generate_preset(4)} close={close}></Preset>
            </div>
            <div className='space'></div>
          </div>
        )}
      </Popup>
    );
}