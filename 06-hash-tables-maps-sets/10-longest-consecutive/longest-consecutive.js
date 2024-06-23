function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums)
  let longestSequence = 0

  for (const num of numSet) {
    // [100, 4, 200, 1, 3, 2]

    console.log(`!numSet.has(${num} - 1) => `, !numSet.has(num - 1))
    if (!numSet.has(num - 1)) {
      let currentSequence = 1
      let currentNum = num

      // console.log(`numSet.has(${currentNum} + 1) => `, numSet.has(currentNum + 1))
      while (numSet.has(currentNum + 1)) {
        currentSequence++
        currentNum++
      }

      longestSequence = Math.max(longestSequence, currentSequence)
    }
  }

  return longestSequence
}

module.exports = longestConsecutiveSequence
