import { InputData } from '../tree';
import { Point } from '../point';

// przyklad 1 z cwiczen, powinny byc wszystkie konce odcinkow poziomych
export const input: InputData = {
  horizontals: [
    {
      from: new Point([-2, -3]),
      to: new Point([-1, -3]),
    },
    {
      from: new Point([1, -3]),
      to: new Point([2, -3]),
    },
    {
      from: new Point([-1, -2]),
      to: new Point([1, -2]),
    },
    {
      from: new Point([-2, -1]),
      to: new Point([-1, -1]),
    },
    {
      from: new Point([-1, 0]),
      to: new Point([1, 0]),
    },
    {
      from: new Point([-2, 1]),
      to: new Point([-1, 1]),
    },
    {
      from: new Point([-2, 2]),
      to: new Point([-1, 2]),
    },
    {
      from: new Point([1, 2]),
      to: new Point([2, 2]),
    },
    {
      from: new Point([1, 1]),
      to: new Point([2, 1]),
    },
    {
      from: new Point([1, -1]),
      to: new Point([2, -1]),
    },
  ],
  verticals: [
    {
      from: new Point([-2, -3]),
      to: new Point([-2, 2]),
    },
    {
      from: new Point([-1, -3]),
      to: new Point([-1, 2]),
    },
    {
      from: new Point([1, -3]),
      to: new Point([1, 2]),
    },
    {
      from: new Point([2, -3]),
      to: new Point([2, 2]),
    },
  ],
};
