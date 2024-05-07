function sumOfEvenSquares(numbers) {
  const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((square, num) => square + num, 0)

  return result
}

module.exports = sumOfEvenSquares
