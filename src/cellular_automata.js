import cloneDeep from 'lodash/cloneDeep';

export const getEmptyNextVal = neighbors => {
  // an empty cell becomes a newborn if there are 2 neighboring adults

  const count = neighbors.reduce((count, neighbor) => {
    return neighbor === 2 ? count + 1 : count;
  }, 0);

  return count === 2 ? 1 : 0;
};

/*
  accepts an index's surrounding neighbors

  returns the newborn's next value
*/
export const getNewbornNextVal = neighbors => {
  // a newborn dies if it has 5 or more neighbors, or only 1 neighbor
  // else becomes an adult

  const count = neighbors.reduce((count, neighbor) => {
    return neighbor > 0 ? count + 1 : count;
  }, 0);

  if (count >= 5 || count <= 1) return 0;
  return 2;
};

/*
  accepts an adult's neighbors

  returns its next value
*/
export const getAdultNextVal = neighbors => {
  // an adult dies if there are 3 or more neighbors, or 0 neighbors
  // else becomes a senior

  const count = neighbors.reduce((count, neighbor) => {
    return neighbor > 0 ? count + 1 : count;
  }, 0);

  if (count >= 3 || count === 0) return 0;
  return 3;
};

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
