import './Cell.css';
import './fonts.css';

import React, { useState } from 'react';

export default function Cell({ size, color, onCellClick }) {

    // add code to light the cell up when mouse is above it:
    const [isHovered, setIsHovered] = useState(false);
    let tempColor = color;

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    if (isHovered) {
      tempColor = '#635985';
    } else {
      tempColor = color;
    }

    function handleCellClick() {
      setIsHovered(false);
      onCellClick();
    }

    // when I move my cursor up the square sizes change because of the updated window size. How do I make it so that it doesn't change?
    let wh = size.toString() + 'vw';
    let border_rad = (size / 6).toString() + 'vw';
    return <button className='cell' onClick={handleCellClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
      backgroundColor: tempColor,
      width: wh,
      height: wh,
      borderRadius: border_rad,
    }}></button>;
  }