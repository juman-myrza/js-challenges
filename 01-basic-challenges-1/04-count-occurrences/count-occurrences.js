// function countOccurrences(str, char) {
//   let countChar = 0

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(char)) {
//       countChar++
//     }
//   }

//   return countChar
// }

// const countOccurrences = (str, char) => str.split('').filter((letter) => letter === char).length

const countOccurrences = (str, char) => str.split(char).length - 1

module.exports = countOccurrences
