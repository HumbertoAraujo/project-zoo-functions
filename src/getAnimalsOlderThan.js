const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalReceived = data.species.filter(({ name, residents }) => name === animal)[0].residents;
  return animalReceived.every((animalSelect) => animalSelect.age >= age);
}

module.exports = getAnimalsOlderThan;
