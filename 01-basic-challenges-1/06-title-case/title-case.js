// function titleCase(str) {
//   const lowerCasedStr = str.toLowerCase()

//   return lowerCasedStr
//     .split(' ')
//     .map((str) => str.replace(str.charAt(0), str.charAt(0).toUpperCase()))
//     .join(' ')
// }

function titleCase(str) {
  const word = str.toLowerCase().split(' ')

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1)
  }

  return word.join(' ')
}

module.exports = titleCase
