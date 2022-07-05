const data = require('../data/zoo_data');

function countEntrants(...entrants) {
  // seu código aqui
  const [name] = entrants;
  const visitants = name;
  const adultQtd = [];
  const childQtd = [];
  const seniorQtd = [];
  visitants.forEach((element) => {
    if (element.age < 18) {
      childQtd.push(element.age);
    }
    if (element.age >= 18 && element.age < 50) {
      adultQtd.push(element.age);
    }
    if (element.age >= 50) {
      seniorQtd.push(element.age);
    }
  });
  return { adult: adultQtd.length, child: childQtd.length, senior: seniorQtd.length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) {
    return 0;
  }
  if (Object.entries(entrants).length === 0) {
    return 0;
  }
  const entrantsQtd = countEntrants(entrants);
  const { adult, child, senior } = entrantsQtd;
  return adult * data.prices.adult + child * data.prices.child + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
