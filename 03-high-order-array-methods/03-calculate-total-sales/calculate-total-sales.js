function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.map((product) => product.price * product.quantity).reduce((sum, num) => sum + num, 0)
  const taxRateTotal = (totalSales * taxRate) / 100
  const totalSalesWithTax = totalSales + taxRateTotal

  return parseFloat(totalSalesWithTax.toFixed(2))
}

module.exports = calculateTotalSalesWithTax
