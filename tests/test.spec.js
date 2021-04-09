import {
  getNeighbors,
} from '../src/cellular_automata';

describe('Cellular Automata Module', () => {
  let previousGen;


  beforeEach(() => {
    previousGen = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,2,0,0,0,0,0],
      [0,0,0,1,2,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,0],
      [0,2,1,0,0,0,0,0,0,0],
      [0,2,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];
  });


  describe('getNeighbors', () => {

    it('retrieves middle neighbors', () => {
      const row = 1;
      const column = 2;
      const expected = [0, 0, 0, 0, 1, 0, 0, 0];
      const neighbors = getNeighbors(previousGen, row, column);
      expect(neighbors).toEqual(expected);
    });

    it('retrieves first column neighbors', () => {
      const row = 1;
      const column = 0;
      const expected = [0, 0, 0, 0, 0];
      const neighbors = getNeighbors(previousGen, row, column);
      expect(neighbors).toEqual(expected);
    });

    it('retrieves last column neighbors', () => {

    });

    it('retrieves top row neighbors', () => {

    });

    it('retrieves bottom row neighbors', () => {

    });
  });
});




/*
wish list
- add import aliases
*/
