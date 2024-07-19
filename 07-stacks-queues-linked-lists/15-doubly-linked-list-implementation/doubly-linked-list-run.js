const DoublyLinkedList = require('./doubly-linked-list')

const list = new DoublyLinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend('hello')

list.printAll()
