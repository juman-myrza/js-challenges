// Solution: 1
// function arrayIntersection(arr1, arr2) {
//   const commonElements = []

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       commonElements.push(arr1[i])
//     }
//   }

//   return commonElements
// }

// Solution: 2
function arrayIntersection(arr1, arr2) {
  const commonElements = []
  const firstArr = new Set(arr1)

  for (let i = 0; i < arr2.length; i++) {
    if (firstArr.has(arr2[i])) {
      commonElements.push(arr2[i])
    }
  }

  return commonElements
}

module.exports = arrayIntersection
