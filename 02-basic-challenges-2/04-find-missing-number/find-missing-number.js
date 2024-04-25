// function findMissingNumber(numbers) {
//   if (typeof numbers === 'undefined') {
//     return
//   } else if (numbers.length === 0) {
//     return 1
//   }

//   const n = numbers.length + 1
//   const expectedSum = (n * (n + 1)) / 2

//   let actualSum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     actualSum += numbers[i]
//   }

//   return expectedSum - actualSum
// }

function findMissingNumber(numbers) {
  if (typeof numbers === 'undefined') {
    return
  } else if (numbers.length === 0) {
    return 1
  }

  const n = numbers.length + 1
  const expectedSum = (n * (n + 1)) / 2

  const actualSum = numbers.reduce((acc, curVal) => acc + curVal, 0)

  return expectedSum - actualSum
}

module.exports = findMissingNumber
