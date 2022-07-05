const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const objectEmployee = employees.find((element) => element.id === id);
  const firstAnimal = objectEmployee.responsibleFor[0];
  const objectOlderAnimals = species.find((elementFind) => elementFind.id === firstAnimal);
  const getOlder = (acc, ageReduce) => {
    if (acc.age > ageReduce.age) return acc;
    return ageReduce;
  };
  const { name, age, sex } = objectOlderAnimals.residents.reduce(getOlder);
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
