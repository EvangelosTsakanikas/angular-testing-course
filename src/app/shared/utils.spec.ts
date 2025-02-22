import { pluck, range } from './utils';

describe('utils', () => {
  describe('range', () => {
    it('returns correct range from 1 to 5', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });

    it('returns correct range from 41 to 45', () => {
      expect(range(41, 45)).toEqual([41, 42, 43, 44]);
    });
  });

  describe('pluck', () => {
    it('returns correct result', () => {
      const data = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Evan' },
      ];
      expect(pluck(data, 'id')).toEqual([1, 2, 3]);
    });
  });
});
