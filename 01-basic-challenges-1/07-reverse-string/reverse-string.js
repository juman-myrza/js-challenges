// 1 solution:
// function reverseString(str) {
//   let res = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
//   }

//   return res
// }

// 2 solution:
// function reverseString(str) {
//   const arrOfStrings = []

//   for (let i = 0; i < str.length; i++) {
//     arrOfStrings.push(str[i])
//   }

//   return arrOfStrings.reverse().join('')
// }

// 3 solution:
function reverseString(str) {
  return str.split('').reverse().join('')
}

module.exports = reverseString
