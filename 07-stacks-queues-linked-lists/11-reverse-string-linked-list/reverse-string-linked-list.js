const { LinkedList } = require('./linked-list')

function reverseStringLinkedList(str) {
  const link = new LinkedList()

  for (let i = str.length - 1; i >= 0; i--) {
    link.add(str[i])
  }

  let reversedString = ''
  let current = link.head

  while (current !== null) {
    reversedString += current.data

    current = current.next
  }

  return reversedString
}

module.exports = reverseStringLinkedList
