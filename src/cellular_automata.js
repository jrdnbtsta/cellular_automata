


export const getEmptyNextVal = (neighbors) => {

};

/*
  accepts an index's surrounding neighbors

  returns the newborn's next value
*/
export const getNewbornNextVal = (neighbors) => {
};

/*
  accepts an adult's neighbors

  returns its next value
*/
export const getAdultNextVal = (neighbors) => {};


/*
  accepts a senior's neighbors

  returns its next value
*/
export const getSeniorNextVal = (neighbors) => {};



/*
  accepts the previous Gen, i index and j index

  returns an array of the values of its neighbors
*/
export const getNeighbors = (previousGen, i, j) => {
  const neighbors = [];

  const topRow = i-1;
  const bottomRow = i+1;
  const leftColumn = j-1;
  const rightColumn = j+1;

  const hasTopRow = topRow >= 0;
  const hasBottomRow = bottomRow <= 10;
  const hasLeftColumn = leftColumn >= 0;
  const hasRightColumn = rightColumn <= 10;

  // get top 3 neighbors
  if (hasTopRow) {
    // directly on top
    neighbors.push(previousGen[topRow][j]);

    if (hasLeftColumn) {
      neighbors.push(previousGen[topRow][leftColumn]);
    }

    if (hasRightColumn) {
      neighbors.push(previousGen[topRow][rightColumn]);
    }
  }

  // get left neighbor
  if (hasLeftColumn) {
    neighbors.push(previousGen[i][leftColumn]);
  }

  // get right neighbor
  if (hasRightColumn) {
    neighbors.push(previousGen[i][rightColumn]);
  }

  // get bottom neighbors
  if (hasBottomRow) {
    // directly below
    neighbors.push(previousGen[bottomRow][j]);

    if (hasLeftColumn) {
      neighbors.push(previousGen[bottomRow][leftColumn]);
    }

    if (hasRightColumn) {
      neighbors.push(previousGen[bottomRow][rightColumn]);
    }
  }

  return neighbors;
};



/*
  accepts the previous gen and returns its next gen


*/
export const getNextGeneration = (previousGen) => {

};
