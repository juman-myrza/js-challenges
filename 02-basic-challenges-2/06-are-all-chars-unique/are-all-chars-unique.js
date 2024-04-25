// function areAllCharactersUnique(str) {
//   let startChar = str[0]

//   for (let i = 1; i < str.length; i++) {
//     const currentChar = str[i]

//     if (currentChar === startChar) {
//       return false
//     }

//     startChar = currentChar
//   }

//   return true
// }

// function areAllCharactersUnique(str) {
//   const charSet = new Set()

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]

//     if (charSet.has(char)) {
//       return false
//     }

//     charSet.add(char)
//   }

//   return true
// }

function areAllCharactersUnique(str) {
  const charCount = {}

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (charCount[char]) {
      return false
    }

    charCount[char] = true
  }

  return true
}

module.exports = areAllCharactersUnique
