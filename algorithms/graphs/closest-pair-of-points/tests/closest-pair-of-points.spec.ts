import * as inputs from '../inputs';
import { Point } from '../point';
import { closestPairOfPoints, closestPairOfPointsSimple } from '../closest-pair-of-points';

describe('closest pair of points', () => {
  it('should find closest pair of points', () => {
    const toPoints = (coords: number[]) => new Point(coords);

    [inputs.input1, inputs.input2, inputs.input3].forEach((testData) => {
      const points = testData.input.map(toPoints);
      const output = testData.output.map(toPoints);
      expect(closestPairOfPointsSimple(points).pair).toEqual(output);
      expect(closestPairOfPoints(points).pair).toEqual(output);
    });
  });
});
