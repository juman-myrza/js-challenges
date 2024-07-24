const { Node, depthFirstTraversal } = require('./depth-first-traversal')
const root = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

root.left = b
root.right = c
b.left = d
b.right = e
c.left = f

const res = depthFirstTraversal(root)
console.log(res)

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f
