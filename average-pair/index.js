function averagePair(arr, targetAverage) {
  if (arr.length === 0) return false;

  let indexLeft = 0;
  let indexRight = arr.length - 1;

  while (indexLeft < indexRight) {
    const average = (arr[indexLeft] + arr[indexRight]) / 2;
    if (average === targetAverage) {
      return true;
    } else if (average > targetAverage) {
      indexRight--;
    } else {
      indexLeft++;
    }
  }

  return false;
}
