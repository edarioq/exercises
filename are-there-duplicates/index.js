function areThereDuplicates(...args) {
  const hashTable = {};

  for (let arg of args) {
    hashTable[arg] = (hashTable[arg] || 0) + 1;
  }

  const values = Object.values(hashTable);
  const isDuplicate = values.some((val) => val > 1);

  return isDuplicate;
}
