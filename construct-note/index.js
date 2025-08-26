// Solution 1
function constructNote(message, letters) {
  const messageArr = Array.from(message);
  const lettersArr = Array.from(letters);

  const builtMessage = [];

  for (let i = 0; i < messageArr.length; i++) {
    const letter = messageArr[i];
    const index = lettersArr.indexOf(letter);

    if (index === -1) return false;

    builtMessage.push(letter);
    lettersArr.splice(index, 1);
  }

  return builtMessage.join("") === message;
}

// Solution 2
function constructNote2(message, letters) {
  const hashTable = {};

  for (let char of message) {
    hashTable[char] = (hashTable[char] || 0) + 1;
  }

  if (Object.keys(hashTable).length === 0) return false;

  for (let char of letters) {
    if (hashTable[char]) {
      hashTable[char] = hashTable[char] - 1;
    }
  }

  const values = !Object.values(hashTable).find((val) => val !== 0);

  return values;
}
