function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((totalMileage, car) => totalMileage + car.mileage, 0)
  const averageMileage = totalMileage / cars.length
  const highestMileageCar = cars.reduce(
    (highestMileageCar, car) => (car.mileage > highestMileageCar.mileage ? car : highestMileageCar),
    cars[0]
  )
  const lowestMileageCar = cars.reduce(
    (lowestMileageCar, car) => (car.mileage < lowestMileageCar.mileage ? car : lowestMileageCar),
    cars[0]
  )

  return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage }
}

module.exports = analyzeCarMileage
