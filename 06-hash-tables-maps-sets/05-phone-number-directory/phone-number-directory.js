function phoneNumberDirectory(phoneNumbers) {
  const phoneNumbersDirectories = new Map()

  for (const phoneNumber of phoneNumbers) {
    const [key, value] = phoneNumber.split(':')

    phoneNumbersDirectories.set(key, value)
  }

  return phoneNumbersDirectories
}

module.exports = phoneNumberDirectory
