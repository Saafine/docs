import { InputData } from '../tree';
import { Point } from '../point';

// przyklad 3 z cwiczen, powinno byc 4: (-1, 1), (-1, -1), (1,1), (1, -1)
export const input: InputData = {
  horizontals: [
    {
      from: new Point([-2, 1]),
      to: new Point([2, 1]),
    },
    {
      from: new Point([-2, -1]),
      to: new Point([2, -1]),
    },
  ],
  verticals: [
    {
      from: new Point([-1, -2]),
      to: new Point([-1, 2]),
    },
    {
      from: new Point([1, -2]),
      to: new Point([1, 2]),
    },
  ],
};
