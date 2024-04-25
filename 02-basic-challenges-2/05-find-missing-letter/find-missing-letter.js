// function findMissingLetter(arr) {
//   const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   const startIndex = alphabets.indexOf(arr[0])

//   for (let i = 0; i < alphabets.length; i++) {
//     console.log(startIndex)
//     if (arr[i] !== alphabets[startIndex + i]) {
//       return alphabets[startIndex + i]
//     }
//   }

//   return ''
// }

function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0)

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0)

    if (current - start > 1) {
      return String.fromCharCode(start + 1)
    }

    start = current
  }

  return ''
}

module.exports = findMissingLetter
