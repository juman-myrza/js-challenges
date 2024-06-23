function anagramGrouping(words) {
  const anagramGroup = new Map()

  for (const word of words) {
    const key = word.split('').sort().join('')

    if (anagramGroup.has(key)) {
      anagramGroup.set(key, [...anagramGroup.get(key), word])
    } else {
      anagramGroup.set(key, [word])
    }
  }

  return Array.from(anagramGroup.values())
}

module.exports = anagramGrouping
