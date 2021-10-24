import { getNextOrientationPoints } from './polygon-utils';
import { Point } from './point';

describe('getNext', () => {
    it('should get specified number of next items', () => {
        const a = new Point([0, 0])
        const b = new Point([1, 0])
        const c = new Point([2, 0])

        expect(getNextOrientationPoints({index: 0, points: [a, b, c]})).toEqual([a, b, c])
        expect(getNextOrientationPoints({index: 1, points: [a, b, c]})).toEqual([b, c, a])
        expect(getNextOrientationPoints({index: 2, points: [a, b, c]})).toEqual([c, a, b])
    })
})
