import {
  getNeighbors,
  getNextGeneration,
  getEmptyNextVal,
  getNewbornNextVal,
  getAdultNextVal,
  getGen20,
} from '../src/cellularAutomata';

describe('Cellular Automata Module', () => {
  let previousGen;

  beforeEach(() => {
    previousGen = [
      [0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 3, 1, 0, 0, 0],
      [0, 0, 0, 2, 0, 3, 0, 0, 1, 3],
      [0, 0, 0, 0, 1, 3, 0, 0, 0, 3],
      [0, 2, 2, 0, 0, 0, 1, 3, 1, 0],
      [0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  });

  describe('getNextGeneration', () => {
    it('returns the correct next generation', () => {
      const actual = getNextGeneration(previousGen);
      const expected = [
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
        [0, 0, 0, 3, 0, 0, 0, 0, 2, 0],
        [0, 1, 0, 1, 2, 0, 0, 0, 0, 0],
        [0, 3, 3, 0, 0, 1, 2, 0, 2, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 3, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe('getNeighbors', () => {
    it('retrieves middle neighbors', () => {
      const row = 1;
      const column = 2;
      const expected = [2, 0, 2, 0, 0, 0, 0, 2];
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
      const row = 1;
      const column = 9;
      const expected = [0, 0, 0, 3, 1];
      const neighbors = getNeighbors(previousGen, row, column);

      expect(neighbors).toEqual(expected);
    });

    it('retrieves top row neighbors', () => {
      const row = 0;
      const column = 1;
      const expected = [0, 2, 0, 0, 0];
      const neighbors = getNeighbors(previousGen, row, column);

      expect(neighbors).toEqual(expected);
    });

    it('retrieves bottom row neighbors', () => {
      const row = 9;
      const column = 1;
      const expected = [0, 0, 0, 0, 0];
      const neighbors = getNeighbors(previousGen, row, column);

      expect(neighbors).toEqual(expected);
    });
  });

  describe('getEmptyNextVal', () => {
    it('stays empty if less than 2 adults', () => {
      const neighbors = [0, 0, 0, 1, 2];
      const actual = getEmptyNextVal(neighbors);

      expect(actual).toEqual(0);
    });

    it('becomes an infant if 2 adults', () => {
      const neighbors = [0, 0, 0, 2, 2];
      const actual = getEmptyNextVal(neighbors);

      expect(actual).toEqual(1);
    });
  });

  describe('getNewbornNextVal', () => {
    it('dies if it has 5 or more neighbors', () => {
      const neighbors = [3, 1, 1, 2, 2];
      const actual = getNewbornNextVal(neighbors);

      expect(actual).toEqual(0);
    });

    it('becomes an adult if less than 5 neighbors', () => {
      const neighbors = [0, 1, 1, 2, 2];
      const actual = getNewbornNextVal(neighbors);

      expect(actual).toEqual(2);
    });
  });

  describe('getAdultNextVal', () => {
    it('dies if it has 3 or more neighbors', () => {
      const neighbors = [3, 1, 1, 0, 0];
      const actual = getAdultNextVal(neighbors);

      expect(actual).toEqual(0);
    });

    it('dies if it has 0 neighbors', () => {
      const neighbors = [0, 0, 0, 0, 0];
      const actual = getAdultNextVal(neighbors);

      expect(actual).toEqual(0);
    });

    it('becomes a senior if 1 or 2 neighbors', () => {
      const neighbors = [0, 1, 1, 0, 0];
      const actual = getAdultNextVal(neighbors);

      expect(actual).toEqual(3);
    });
  });

  describe('getGen20', () => {
    it('answers the Final Question accurately', () => {
      const gen1 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 3, 3, 1, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 2, 0, 2, 0],
        [0, 0, 3, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 3, 0, 0, 2, 0, 2, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 3, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ];

      const actual = getGen20(gen1);

      console.log('Final Problem Answer -- Generation 20: ', actual);

      expect(actual).toEqual(expected);
    });
  });
});
