import { isUniqueChars, isUniqueChars2, isUniqueChars3 } from './1-1-is-unique-chars';

describe('isUnique', () => {
    it('should run', () => {
        const fns = [isUniqueChars, isUniqueChars2, isUniqueChars3]

        fns.forEach((fn) => expect(fn('abc')).toBeTruthy())
        fns.forEach((fn) => expect(fn('abca')).toBeFalsy())
    })
})
