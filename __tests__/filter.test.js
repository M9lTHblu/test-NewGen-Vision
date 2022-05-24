import { filter1, filter2 } from '../src/filter';

import courses from '../src/data';

describe('filter tests', () => {
  test('from null to max', () => {
    const requiredRange1 = [null, 200];
    const result1 = filter1(courses, requiredRange1);
    const result2 = filter2(courses, requiredRange1);
    const expected = [
      { name: 'Courses in England', prices: [0, 100] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in France', prices: [null, null] },
    ];
    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  test('form min to max', () => {
    const requiredRange2 = [100, 350];
    const result1 = filter1(courses, requiredRange2);
    const result2 = filter1(courses, requiredRange2);
    const expected = [
      { name: 'Courses in England', prices: [0, 100] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in China', prices: [50, 250] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in Kazakhstan', prices: [56, 324] },
    ];
    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  test('form min to null', () => {
    const requiredRange3 = [200, null];
    const result1 = filter1(courses, requiredRange3);
    const result2 = filter1(courses, requiredRange3);
    const expected = [
      { name: 'Courses in Germany', prices: [500, null] },
      { name: 'Courses in Italy', prices: [100, 200] },
      { name: 'Courses in Russia', prices: [null, 400] },
      { name: 'Courses in China', prices: [50, 250] },
      { name: 'Courses in USA', prices: [200, null] },
      { name: 'Courses in Kazakhstan', prices: [56, 324] },
    ];
    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  test('from null to null', () => {
    const result1 = filter1(courses, [null, null]);
    const result2 = filter1(courses, [null, null]);
    expect(result1).toEqual(courses);
    expect(result2).toEqual(courses);
  });
});
