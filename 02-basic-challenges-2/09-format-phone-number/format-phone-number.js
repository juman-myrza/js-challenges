function formatPhoneNumber(numbers) {
  const countryCode = numbers.slice(0, 3).join('')
  const firstPart = numbers.slice(3, 6).join('')
  const lastPart = numbers.slice(6, numbers.length).join('')

  return `(${countryCode}) ${firstPart}-${lastPart}`
}

module.exports = formatPhoneNumber
