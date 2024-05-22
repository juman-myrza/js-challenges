function factorial(num) {
  if (num <= 1) {
    return 1
  }
  console.log(`factorial(${num}) = ${num} * ${factorial(num - 1)}`)
  return num * factorial(num - 1)
}

module.exports = factorial
