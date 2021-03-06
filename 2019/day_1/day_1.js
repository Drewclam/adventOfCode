// --- Day 1: The Tyranny of the Rocket Equation ---

const parseInput = input =>
  input
    .split('\n')
    .map(str => str.trim())
    .map(str => Number(str));

const calculateFuel = mass => Math.floor(mass / 3) - 2;

const fuelCounterUpper = (modules, fuelCalculator) => {
  return modules.reduce((fuelRequired, mass) => {
    fuelRequired += fuelCalculator(mass);
    return fuelRequired;
  }, 0);
};

const calculateFuelWithAdditional = mass => {
  const fuelRequired = calculateFuel(mass);
  if (fuelRequired <= 0) {
    return 0;
  }
  return fuelRequired + calculateFuelWithAdditional(fuelRequired);
};

module.exports = {
  parseInput,
  calculateFuel,
  fuelCounterUpper,
  calculateFuelWithAdditional,
};
