function findMiddle(list) {
  let fast = list.head
  let slow = list.head
  let prev = null

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    prev = slow
    slow = slow.next
  }

  if (fast === null) {
    return prev.next
  }

  return slow
}

module.exports = findMiddle
