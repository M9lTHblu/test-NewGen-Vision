import sort from '../src/sort';

describe('testing sort function', () => {
  const data = [
    { prices: [0, 100] },
    { prices: [500, null] },
    { prices: [100, 200] },
    { prices: [null, 400] },
    { prices: [50, 250] },
    { prices: [200, null] },
    { prices: [56, 324] },
    { prices: [null, null] },
  ];

  test('array must be sorted in ascending order', () => {
    const result = sort('min', data);
    expect(result)
      .toEqual(
        [
          { prices: [null, null] },
          { prices: [0, 100] },
          { prices: [100, 200] },
          { prices: [200, null] },
          { prices: [50, 250] },
          { prices: [56, 324] },
          { prices: [null, 400] },
          { prices: [500, null] },
        ],
      );
  });
  test('array must be sorted in descending order', () => {
    const result = sort('max', data);
    expect(result)
      .toEqual(
        [
          { prices: [null, null] },
          { prices: [0, 100] },
          { prices: [200, null] },
          { prices: [100, 200] },
          { prices: [50, 250] },
          { prices: [56, 324] },
          { prices: [null, 400] },
          { prices: [500, null] },
        ].reverse(),
      );
  });
});
