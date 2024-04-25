function validateEmail(email) {
  if (email.indexOf('@') === 0) {
    return false
  }

  if (email.includes('@') && email.includes('.')) {
    return true
  }

  return false
}

module.exports = validateEmail
