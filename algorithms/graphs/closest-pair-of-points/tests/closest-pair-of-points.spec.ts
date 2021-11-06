import * as inputs from '../inputs';
import { Point } from '../point';
import { closestPairOfPoints, closestPairOfPointsSimple } from '../closest-pair-of-points';

describe('closest pair of points', () => {
  it('should find closest pair of points', () => {
    const toPoints = (coords: number[]) => new Point(coords);

    const data = [
      inputs.input1,
      inputs.input2,
      inputs.input3,
      inputs.input4,
      inputs.input5,
      inputs.input6,
      inputs.input7,
    ];
    data.forEach((testData) => {
      const points = testData.input.map(toPoints);
      const output = testData.output.map(toPoints);
      expect(new Set(closestPairOfPoints(points).pair)).toEqual(new Set(output));
    });
  });
});
