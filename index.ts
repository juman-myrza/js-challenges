Array.prototype.unique = function () {
  return Array.from(new Set(this))
}
