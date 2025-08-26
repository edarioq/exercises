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
