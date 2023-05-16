export function gameOfLifeFrame(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const nextFrame = [];
  
    // Create a new matrix for the next frame
    for (let i = 0; i < numRows; i++) {
      nextFrame[i] = [];
    }
  
    // Helper function to count live neighbors
    function countLiveNeighbors(row, col) {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue; // Skip the current cell
          const newRow = row + i;
          const newCol = col + j;
          if (
            newRow >= 0 &&
            newRow < numRows &&
            newCol >= 0 &&
            newCol < numCols &&
            matrix[newRow][newCol] === 1
          ) {
            count++;
          }
        }
      }
      return count;
    }
  
    // Compute the next frame based on the current state
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const cell = matrix[i][j];
        const liveNeighbors = countLiveNeighbors(i, j);
  
        if (cell === 1) {
          // Cell is alive
          if (liveNeighbors < 2 || liveNeighbors > 3) {
            // Any live cell with fewer than 2 or more than 3 live neighbors dies
            nextFrame[i][j] = 0;
          } else {
            // Live cell with 2 or 3 live neighbors survives
            nextFrame[i][j] = 1;
          }
        } else {
          // Cell is dead
          if (liveNeighbors === 3) {
            // Dead cell with exactly 3 live neighbors becomes alive
            nextFrame[i][j] = 1;
          } else {
            // Dead cell remains dead
            nextFrame[i][j] = 0;
          }
        }
      }
    }
  
    return nextFrame;
  }