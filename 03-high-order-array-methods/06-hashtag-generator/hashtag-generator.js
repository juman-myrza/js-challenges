// function generateHashtag(str) {
//   str.trim()

//   if (!str || str.length > 140) {
//     return false
//   }

//   const words = str.split(' ')
//   const upperCasedWords = words.map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))

//   return `#${upperCasedWords.join('')}`
// }

function generateHashtag(str) {
  str.trim()

  if (!str || str.length > 140) {
    return false
  }

  const words = str.split(' ')
  const hashTag = words.reduce((acc, word) => acc + word.replace(word.charAt(0), word.charAt(0).toUpperCase()), '#')

  return hashTag
}

module.exports = generateHashtag
