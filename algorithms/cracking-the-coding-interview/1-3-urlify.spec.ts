import { urlify } from './1-3-urlify';

describe('urlify', () => {
    it('should run', () => {
        const fns = [urlify];

        fns.forEach((fn) => expect(fn('Mr John    Smith   ')).toBe('Mr%20John%20Smith'))
    })
})
