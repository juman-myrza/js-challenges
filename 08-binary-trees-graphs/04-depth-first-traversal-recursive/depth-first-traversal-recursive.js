class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }
}

function recDepthFirstTraversal(root) {
  const result = []

  function travers(node) {
    if (node !== null) {
      result.push(node.data)
      travers(node.left)
      travers(node.right)
    }
  }

  travers(root)

  return result
}

module.exports = { Node, recDepthFirstTraversal }
