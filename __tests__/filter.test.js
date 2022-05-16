import filter from '../src/filter';

import courses from '../src/data';

describe('filter tests', () => {
  test('from null to max', () => {
    const requiredRange1 = [null, 200];
    const result = filter(courses, requiredRange1);
    expect(result).toEqual([
      { name: 'Courses in England', prices: [0, 100] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in France', prices: [null, null] },
    ]);
  });

  test('form min to max', () => {
    const requiredRange2 = [100, 350];
    const result = filter(courses, requiredRange2);
    expect(result).toEqual([
      { name: 'Courses in England', prices: [0, 100] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in China', prices: [50, 250] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in Kazakhstan', prices: [56, 324] },
    ]);
  });

  test('form min to null', () => {
    const requiredRange3 = [200, null];
    const result = filter(courses, requiredRange3);
    expect(result).toEqual([
      { name: 'Courses in Germany', prices: [500, null] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in Russia', prices: [null, 400] },
      { name: 'Courses in China', prices: [50, 250] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in Kazakhstan', prices: [56, 324] },
    ]);
  });

  test('from null to null', () => {
    const result = filter(courses, [null, null]);
    expect(result).toEqual(courses);
  });
});
