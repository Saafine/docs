import { getTotalTableConfigurations } from './001-table';

describe('table', () => {
  it('should get total count', () => {
    expect(getTotalTableConfigurations(1, 1)).toEqual(2)
    expect(getTotalTableConfigurations(1, 2)).toEqual(6)
    expect(getTotalTableConfigurations(2, 2)).toEqual(8)
    expect(getTotalTableConfigurations(4, 7)).toEqual(6_652_800)
  });
});
