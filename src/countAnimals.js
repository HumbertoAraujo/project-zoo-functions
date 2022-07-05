const data = require('../data/zoo_data');

const countParameters = (animal) => {
  const arrayParameters = (Object.values(...animal));
  return arrayParameters.length;
};
const returnNoParameters = () => {
  const objectAnimals = {};
  data.species.forEach((animalData) => {
    objectAnimals[animalData.name] = animalData.residents.length;
  });
  return objectAnimals;
};
const returnTwoParameters = (...animal) => {
  const arrayNames = (Object.values(...animal));
  const nameAnimal = arrayNames[0];
  const sexAnimal = arrayNames[1];
  const objectAnimals = (data.species.filter((element) => element.name === nameAnimal))[0];
  const { residents } = objectAnimals;
  return residents.filter((element) => element.sex === sexAnimal).length;
};
const returnOneParameter = (...animal) => {
  const arrayNames = (Object.values(...animal));
  const nameAnimal = arrayNames[0];
  const objectAnimals = (data.species.filter((element) => element.name === nameAnimal.specie))[0];
  const { residents } = objectAnimals;
  return residents.length;
};
function countAnimals(...animal) {
  // seu código aqui
  if (animal.length === 0) {
    return returnNoParameters();
  }
  if (countParameters(animal) === 2) {
    return returnTwoParameters(...animal);
  }
  return returnOneParameter(animal);
}
module.exports = countAnimals;
