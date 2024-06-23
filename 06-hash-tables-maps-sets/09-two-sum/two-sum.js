//[2, 7, 11, 15], 17
function twoSum(numbers, target) {
  const numSet = new Set()

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const complement = target - number

    if (numSet.has(complement)) {
      return [numbers.indexOf(complement), i]
    }

    numSet.add(number)
  }

  return []
}

module.exports = twoSum
