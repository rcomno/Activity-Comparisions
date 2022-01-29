
let gondola = {quantity: 7, insured: true, operational: true, pricePer: 3800};
let stockCar = {quantity: 1, insured: true, operational: false, pricePer: 6500};
let boxCar = {quantity: 8, insured: true, operational: true, pricePer: 4157};
let tankCar = {quantity: 3, insured: true, operational: true, pricePer: 7200};

//Task 1: Get list of all cars reported as non operational (operational = false)
var nonOperational = [];

if (gondola.operational === false)
{
 nonOperational.push("gondola");
}

if (stockCar.operational === false) {
  nonOperational.push("stockCar");
}

if (boxCar.operational === false) {
  nonOperational.push("boxCar");
}

if (tankCar.operational === false) {
  nonOperational.push("tankCar");
}

console.log(nonOperational)

//Task 2: Get count of all cars with no Insurance
let carsWithoutInsurance = 0

if (gondola.insured === false) {
  ++carsWithoutInsurance;
}

if (stockCar.insured === false) {
  ++carsWithoutInsurance;
}

if (boxCar.insured === false) {
  ++carsWithoutInsurance;
}

if (tankCar.insured === false) {
  ++carsWithoutInsurance;
}

console.log(carsWithoutInsurance)
//Task 3: Total dollar amount spent on tankCars, stockCars, boxCars over 6500.00
// if the dollar amount spent on each ^ > 6500.00 add to total
let totalAmountCars = 0

if (gondola.pricePer >= 6500) {
  let gondolaTotal = gondola.pricePer * gondola.quantity;
  totalAmountCars = totalAmountCars + gondolaTotal;
}

if (stockCar.pricePer >= 6500) {
  let stockCarTotal = stockCar.pricePer * stockCar.quantity;
  totalAmountCars =totalAmountCars + stockCarTotal;
}

if (boxCar.pricePer >= 6500) {
  let boxCarTotal = boxCar.pricePer * boxCar.quantity;
  totalAmountCars=totalAmountCars +boxCarTotal;
}

if (tankCar.pricePer >= 6500)
{
  let tankCarTotal = tankCar.pricePer * tankCar.quantity;
  totalAmountCars = totalAmountCars + tankCarTotal;
}

console.log(totalAmountCars)

