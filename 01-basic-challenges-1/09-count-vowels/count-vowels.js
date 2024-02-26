function countVowels(str) {
  const lowercasedStriing = str.toLowerCase()

  let count = 0

  for (let i = 0; i < lowercasedStriing.length; i++) {
    const char = lowercasedStriing[i]

    if (char === 'a' || char === 'o' || char === 'u' || char === 'i' || char === 'e') {
      count++
    }
  }

  return count
}

module.exports = countVowels
