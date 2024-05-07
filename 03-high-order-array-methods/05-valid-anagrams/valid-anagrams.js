function validAnagrams(str1, str2) {
  const stringFrequency1 = str1.split('').reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1

    return acc
  }, {})
  const stringFrequency2 = str2.split('').reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1

    return acc
  }, {})

  const result =
    Object.keys(stringFrequency1).every((key) => stringFrequency1[key] === stringFrequency2[key]) &&
    Object.keys(stringFrequency2).every((key) => stringFrequency1[key] === stringFrequency2[key])

  return result
}

module.exports = validAnagrams
