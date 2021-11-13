import { getTotalTableConfigurations } from './001-table';

describe('table', () => {
  it('should get total count', () => {
    expect(getTotalTableConfigurations(1, 1)).toEqual(1)
    expect(getTotalTableConfigurations(1, 2)).toEqual(2)
    expect(getTotalTableConfigurations(2, 2)).toEqual(2)
    expect(getTotalTableConfigurations(2, 3)).toEqual(12)
    expect(getTotalTableConfigurations(3, 3)).toEqual(12)
    expect(getTotalTableConfigurations(4, 7)).toEqual(604_800)
  });
});
