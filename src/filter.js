const sort = ([a, b]) => (b > a ? [a, b] : [b, a]);

const isMatchItem = (ranges, prices) => {
  const [, maxRange] = sort(ranges);
  const [minPrice, maxPrice] = sort(prices);
  if (ranges[0] && !ranges[1]) {
    return maxPrice >= ranges[0];
  }
  if (!ranges[0] && ranges[1]) {
    return maxPrice <= maxRange;
  }

  return maxPrice !== minPrice && maxPrice <= maxRange;
};

// Реализация фильтра с использованием цикла
export const filter1 = (coll, ranges) => {
  if (!ranges[0] && !ranges[1]) {
    return coll;
  }
  const result = [];
  for (let i = 0; i < coll.length; i += 1) {
    const { prices } = coll[i];
    if (isMatchItem(ranges, prices)) {
      result.push(coll[i]);
    }
  }

  return result;
};

// Реализация фильтра c использованием стандартных методов массивов
export const filter2 = (coll, ranges) => {
  if (!ranges[0] && !ranges[1]) {
    return coll;
  }
  return coll.filter(({ prices }) => isMatchItem(ranges, prices));
};
