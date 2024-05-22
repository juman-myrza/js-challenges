function flattenArray(arr) {
  // [1, [2, 3], [4, 5, [6]]]
  let res = []

  for (const item of arr) {
    if (!Array.isArray(item)) {
      res.push(item)
    } else {
      res = res.concat(flattenArray(item))
    }
  }

  return res
}

module.exports = flattenArray
