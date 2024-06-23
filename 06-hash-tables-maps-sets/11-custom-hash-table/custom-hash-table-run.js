const HashTable = require('./custom-hash-table')

const ht = new HashTable(8)
ht.set('john', '555-234-3544')
ht.set('james', '555-384-5523')
ht.set('jack', '555-384-9933')
ht.set('jill', '555-390-0034')
console.log(ht.get('jill')) // 555-390-0034
console.log(ht.get('jack')) // 555-384-9933
console.log(ht.get('james'))

console.log(ht.getValues())
