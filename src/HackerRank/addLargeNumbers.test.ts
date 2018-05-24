import addLargeNumbers from "./addLargeNumbers";

describe('Add large numbers', () => {
  it('Should retun the sum of the arguments', () => {
    expect(addLargeNumbers('384324864232197852005', '54321554862335488663')).toEqual(
      '438646419094533340668'
    )
  })
});