const getMaxOfArray = (coll) => Math.max.apply(null, coll);
const compareNumbers = (a, b) => a - b;

const descendingSort = (coll) => coll
  .sort((a, b) => {
    const maxA = getMaxOfArray(a.prices);
    const maxB = getMaxOfArray(b.prices);

    return compareNumbers(maxB, maxA);
  });

const ascendingSort = (coll) => coll
  .sort((a, b) => {
    const maxA = getMaxOfArray(a.prices);
    const maxB = getMaxOfArray(b.prices);

    return compareNumbers(maxA, maxB);
  });

export default (query, coll) => {
  const copy = coll.concat([]);

  return query === 'min' ? ascendingSort(copy) : descendingSort(copy);
};
