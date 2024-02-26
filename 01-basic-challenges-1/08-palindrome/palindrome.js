function isPalindrome(str) {
  const removedChars = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reversedString = removedChars.split('').reverse().join('')

  console.log(reversedString)
  return reversedString === removedChars
}

module.exports = isPalindrome
