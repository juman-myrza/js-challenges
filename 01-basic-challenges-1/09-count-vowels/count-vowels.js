function countVowels(str) {
  const lowercasedString = str.toLowerCase()

  let count = 0

  for (let i = 0; i < lowercasedString.length; i++) {
    const char = lowercasedString[i]

    if (char === 'a' || char === 'o' || char === 'u' || char === 'i' || char === 'e') {
      count++
    }
  }

  return count
}

module.exports = countVowels
