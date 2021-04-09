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

  const topRow = i - 1;
  const bottomRow = i + 1;
  const leftColumn = j - 1;
  const rightColumn = j + 1;

  const hasTopRow = topRow >= 0;
  const hasBottomRow = bottomRow <= 9;
  const hasLeftColumn = leftColumn >= 0;
  const hasRightColumn = rightColumn <= 9;

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
  Loop through each element in the 2d array
  - get its neighbors
  - determine its next value
*/

export const getNextGeneration = previousGen => {
  // use previous gen as starting point
  const nextGen = cloneDeep(previousGen);

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const neighbors = getNeighbors(previousGen, i, j);
      const subject = previousGen[i][j];
      let nextVal;

      if (subject === 0) nextVal = getEmptyNextVal(neighbors);
      if (subject === 1) nextVal = getNewbornNextVal(neighbors);
      if (subject === 2) nextVal = getAdultNextVal(neighbors);
      if (subject === 3) nextVal = 0;

      nextGen[i][j] = nextVal;
    }
  }

  return nextGen;
};

/*
Given a 2d array, getGen20 will return the 20th generation
determined by the defined set of rules
*/
export const getGen20 = gen1 => {
  let currentGen = 1;
  let currentData = gen1;

  while (currentGen <= 20) {
    currentData = getNextGeneration(currentData);
    currentGen += 1;
  }

  return currentData;
};
