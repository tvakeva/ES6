export function iteratorFunction(start = 0, end = Infinity, step = 1) {
  let value = start;
  let counter = 0;

  const rangeIterator = {
    next: () => {
      let result;
      if (value <= end) {
        result = { value, done: false };
        value += step;
        counter++;
        return result;
      }
      return { value: counter, done: true };
    }
  };
  return rangeIterator;
}

export function* iteratorGenerator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i <= end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
