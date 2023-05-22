import './Grid.css';
import './fonts.css';

import Cell from './Cell';

export default function Grid({ rows, cols, determineColor, onCellClick }) {
  
    // ratio of how much the height of the website the grid uses
    let grid_space = 0.4;
    let max = Math.max(rows, cols);
    // percent of the screen each cell is:
    let cellSize = grid_space * 1 / max * 100;
    
    let grid_component = []
    for (let i = 0; i < rows; i++) {
  
      const row_component = [];
  
      for (let j = 0; j < cols; j++) {
        row_component.push(<Cell key={`${i}-${j}`} size={cellSize} color={determineColor(i, j)} onCellClick={() => onCellClick(i, j)}/>);
      }

      grid_component.push(
        <div key={`row-${i}`} className='board-row'>
          {row_component}
        </div>
      );
    }

    return (
        <div>
          {grid_component}
        </div>
      );
}