function sameFrequency(num1, num2) {
  const val1 = Array.from(num1.toString()).sort().join("");
  const val2 = Array.from(num2.toString()).sort().join("");

  return val1 === val2;
}
