// function findFirstNonRepeatingCharacter(str) {
//   let countChar = {}

//   for (const char of str) {
//     countChar[char] = (countChar[char] || 0) + 1
//   }
//   for (const char in countChar) {
//     if (countChar[char] === 1) {
//       return char
//     }
//   }

//   return null
// }

function findFirstNonRepeatingCharacter(str) {
  let countCharMap = new Map()

  for (const char of str) {
    countCharMap.set(char, (countCharMap.get(char) || 0) + 1)
  }

  for (const char of str) {
    if (countCharMap.get(char) === 1) {
      return char
    }
  }

  return null
}

module.exports = findFirstNonRepeatingCharacter
