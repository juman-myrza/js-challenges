function arraySum(arr) {
  if (arr.length === 0) {
    return 0
  }

  let initialNumber = arr[0]

  return initialNumber + arraySum(arr.slice(1))
}

module.exports = arraySum
