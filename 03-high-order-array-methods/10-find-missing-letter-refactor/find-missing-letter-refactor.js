// function findMissingLetter(arr) {
//   let startIndex = arr.charCodeAt(0)

//   const missingCarCode = arr
//     .map((char) => char.charCodeAt(0))
//     .find((current) => {
//       if (current - startIndex > 1) {
//         return true
//       }

//       startIndex = current

//       return false
//     })

//   return missingCarCode ? String.fromCharCode(missingCarCode - 1) : ''
// }

// function findMissingLetter(arr) {
//   let startIndex = arr[0].charCodeAt(0)

//   const charAfterMissing = arr.filter((char) => {
//     if (char.charCodeAt(0) - startIndex > 1) {
//       return char.charCodeAt(0)
//     }

//     startIndex = char.charCodeAt(0)
//   })[0]

//   const charCodeMissingChar = charAfterMissing.charCodeAt(0) - 1

//   return String.fromCharCode(charCodeMissingChar)
// }

function findMissingLetter(arr) {
  let startIndex = arr[0].charCodeAt(0)

  const missingCharCode = arr.reduce((missing, char) => {
    const current = char.charCodeAt(0)

    if (current - startIndex > 1 && missing === null) {
      missing = startIndex + 1
    }

    startIndex = current

    return missing
  }, null)

  return String.fromCharCode(missingCharCode)
}
module.exports = findMissingLetter
