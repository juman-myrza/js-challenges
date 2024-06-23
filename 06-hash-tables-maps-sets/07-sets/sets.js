const adam = {
  name: 'Foo',
  age: 20,
}

const set = new Set([adam])

set.add({ ...adam, age: 21 })

console.log(set)
