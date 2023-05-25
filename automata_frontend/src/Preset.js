import React from 'react';
import './Preset.css';

export default function Preset({ name, image, description, generate, close }) {
    function onPresetGenerateClick() {
        close();
        generate();
    }

    return(
        <div className='preset-container'>
            <h3 className='preset-name'>{name}</h3>
            <img className='preset-img' src={image}></img>
            <div>
                <p className='preset-description'>{description}</p>
            </div>
            <button className='preset-generate-button' onClick={() => onPresetGenerateClick()}>Generate</button>
            <div className='divider'></div>
        </div>
    );
}