const map1 = new Map([
  [1, 'Foo'],
  [2, 'Bar'],
  [3, 'Baz'],
])

const map2 = new Map([
  ['one', 'Foo'],
  [true, 'Bar'],
  [null, 'Baz'],
  [undefined, 'Baz'],
])

map1.set(4, 'Boo')

// console.log(map1)

// for (const [key, value] of map1) {
//   console.log(key, value)
// }

// map1.forEach((value, key) => console.log(key, value))

console.log(map1.size)
