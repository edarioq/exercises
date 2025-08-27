function findAllDuplicates(numArray) {
  const hashTable = {};

  for (let num of numArray) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }

  const duplicateValues = [];
  for (const key in hashTable) {
    if (hashTable[key] > 1) {
      duplicateValues.push(parseInt(key));
    }
  }

  return duplicateValues;
}
