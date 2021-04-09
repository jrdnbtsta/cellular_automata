import {
  getNeighbors,
  getNextGeneration,
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

    it('retrieves last column neighbors', () => {});

    it('retrieves top row neighbors', () => {});

    it('retrieves bottom row neighbors', () => {});
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
