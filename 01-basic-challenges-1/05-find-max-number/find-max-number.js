// function findMaxNumber(arr) {
//   return Math.max(...arr)
// }

function findMaxNumber(arr) {
  let maxNumber = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i]
    }
  }

  return maxNumber
}

module.exports = findMaxNumber
