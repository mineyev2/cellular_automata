import './Cell.css';
import './fonts.css';

export default function Cell({ size, color, onCellClick }) {

    // when I move my cursor up the square sizes change because of the updated window size. How do I make it so that it doesn't change?
    let wh = size.toString() + 'vw';
    let border_rad = (size / 6).toString() + 'vw';
    return <button className='cell' onClick={onCellClick} style={{backgroundColor: color, width: wh, height: wh, borderRadius: border_rad}}></button>;
  }