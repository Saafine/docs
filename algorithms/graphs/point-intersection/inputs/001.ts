import { InputData } from '../model';
import { Point } from '../point';

// przyklad 2 z cwiczen, powinno byc 0
export const input: InputData = {
  horizontals: [
    {
      from: new Point([0, 4]),
      to: new Point([4, 4]),
    },
    {
      from: new Point([0, 3]),
      to: new Point([3, 3]),
    },
    {
      from: new Point([0, 2]),
      to: new Point([2, 2]),
    },
    {
      from: new Point([0, 1]),
      to: new Point([1, 1]),
    },
  ],
  verticals: [],
};
