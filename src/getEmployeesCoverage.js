const data = require('../data/zoo_data');

const getSpecie = (array) => {
  const newArraySpecie = array.map((elementMap) => {
    data.species.filter((elementFilter) => elementFilter.id === elementMap);
    return elementMap;
  });
  const arrayForEXport = [];
  newArraySpecie.forEach((elementForEach) => {
    const name = data.species;
    arrayForEXport.push(name.find((element) => element.id === elementForEach).name);
  });
  return arrayForEXport;
};
const getLocations = (array) => {
  const newArray = [];
  array.forEach((elementForEachLocations) => {
    const location = data.species;
    newArray.push(location.find((element) => element.name === elementForEachLocations).location);
  });
  return newArray;
};
const getByName = (nameInput) => {
  const objecSend = {};
  let fullName = '';
  let id = '';
  let species = [];
  let locations = [];
  data.employees.forEach((elementForEach) => {
    if (elementForEach.firstName === nameInput || elementForEach.lastName === nameInput) {
      fullName = `${elementForEach.firstName} ${elementForEach.lastName}`;
      id = `${elementForEach.id}`;
      species = getSpecie(elementForEach.responsibleFor);
      locations = getLocations(species);
    }
  });
  objecSend.id = id;
  objecSend.fullName = fullName;
  objecSend.species = species;
  objecSend.locations = locations;
  return objecSend;
};
const getById = (idInput) => {
  const objecExport = {};
  let fullName = '';
  let id = '';
  let species = [];
  let locations = [];
  data.employees.forEach((elementForEach) => {
    if (elementForEach.id === idInput) {
      fullName = `${elementForEach.firstName} ${elementForEach.lastName}`;
      id = `${elementForEach.id}`;
      species = getSpecie(elementForEach.responsibleFor);
      locations = getLocations(species);
    }
  });
  objecExport.id = id;
  objecExport.fullName = fullName;
  objecExport.species = species;
  objecExport.locations = locations;
  return objecExport;
};
const getEmpty = (arrayEmployees) => {
  const arrayAllEmployees = [];
  arrayEmployees.forEach((element) => {
    arrayAllEmployees.push(getById(element.id));
  });
  return arrayAllEmployees;
};
function getEmployeesCoverage(input) {
  const ObjectAllEmployees = data.employees;
  if (input === undefined) {
    return getEmpty(ObjectAllEmployees);
  }
  if ((ObjectAllEmployees.some((elementSome) => elementSome.firstName === Object.values(input)[0]))
  || (ObjectAllEmployees.some((elementSome) => elementSome.lastName === Object.values(input)[0]))) {
    return getByName(input.name);
  }
  if ((ObjectAllEmployees.some((elementSomeId) => elementSomeId.id === Object.values(input)[0]))) {
    return getById(input.id);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
