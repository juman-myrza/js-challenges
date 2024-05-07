// function validatePassword(str) {
//   str.trim()

//   const password = str.split('')

//   if (str.length < 8) {
//     return false
//   }

//   const lowercaseChar = password.some((char) => char === char.toLowerCase() && char !== char.toUpperCase())
//   const uppercaseChar = password.some((char) => char === char.toUpperCase() && char !== char.toLowerCase())
//   const integerChar = password.some((char) => parseInt(char) === parseInt(char))

//   if (!lowercaseChar || !uppercaseChar || !integerChar) {
//     return false
//   }

//   return true
// }

function validatePassword(password) {
  const isLengthLong = password.length >= 8
  const characters = password.split('')
  const hasLowerCase = characters.some((char) => char === char.toLowerCase() && char !== char.toUpperCase())
  const hasUpperCase = characters.some((char) => char === char.toUpperCase() && char !== char.toLowerCase())
  const hasInteger = characters.some((char) => !isNaN(parseInt(char, 10)))

  return isLengthLong && hasLowerCase && hasUpperCase && hasInteger
}

module.exports = validatePassword
