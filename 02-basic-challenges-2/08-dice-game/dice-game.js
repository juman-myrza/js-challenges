function diceGameSimulation(numSimulations) {
  const collectResult = []

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = getRandomNumber(1, 7)
    const dice2 = getRandomNumber(1, 7)
    const sum = dice1 + dice2
    let result

    if (sum === 7 || sum === 11) {
      result = 'win'
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose'
    } else {
      result = 'roll again'
    }

    collectResult.push({ dice1, dice2, sum, result })
  }

  return collectResult
}

function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

module.exports = diceGameSimulation
