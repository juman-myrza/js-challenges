function symmetricDifference(arr1, arr2) {
  const simmetricDifference = new Set(arr1)
  const set2 = new Set(arr2)

  for (const item of set2) {
    if (simmetricDifference.has(item)) {
      simmetricDifference.delete(item)
    } else {
      simmetricDifference.add(item)
    }
  }

  return Array.from(simmetricDifference.values())
}

module.exports = symmetricDifference
