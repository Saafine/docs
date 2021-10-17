import { polygonCoreRun } from './polygon-core';

describe('polygon core', () => {
    it('should run', () => {
        expect(polygonCoreRun()).toEqual('123');
    });
});
