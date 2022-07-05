const data = require('../data/zoo_data');

const funcAux = (e, eM) => {
  if (e.location === eM) {
    return e.name;
  } return null;
};

const getEmpty = () => {
  const nO = {};
  const arrayAux = data.species.map((e) => e.location);
  const locations = arrayAux.filter((e, index) => arrayAux.indexOf(e) === index);
  locations.forEach((eM) => {
    nO[eM] = data.species.map((e) => funcAux(e, eM)).filter((e) => e !== null);
  });
  return nO;
};

const functionAuxThree = (animal, sexo, newArray) => {
  data.species.forEach((eAnimal) => {
    if (eAnimal.name === animal) {
      newArray.push(eAnimal.residents.map((eM) => {
        if (eM.sex === sexo) {
          return eM.name;
        } return null;
      }));
    }
  });
  return newArray[0].filter((e) => e !== null);
};

const creatAnimalArray = (animal, sexo) => {
  const newArray = [];
  if (sexo === undefined) {
    data.species.forEach((eAnimal) => {
      if (eAnimal.name === animal) {
        newArray.push(eAnimal.residents.map((eM) => eM.name));
      }
    });
    return newArray[0];
  } return functionAuxThree(animal, sexo, newArray);
};

const getFilterByNameEmpty = () => {
  const nO = {};
  const arrayAux = data.species.map((e) => e.location);
  const locations = arrayAux.filter((e, index) => arrayAux.indexOf(e) === index);
  locations.forEach((eM) => {
    nO[eM] = data.species.map((e) => funcAux(e, eM)).filter((e) => e !== null).map((eMArray) => {
      const ObjectAnimal = {};
      ObjectAnimal[eMArray] = creatAnimalArray(eMArray);
      return ObjectAnimal;
    });
  });
  return nO;
};

const getFilterBySex = (sexOption) => {
  const nO = {};
  const arrayAux = data.species.map((e) => e.location);
  const locations = arrayAux.filter((e, index) => arrayAux.indexOf(e) === index);
  locations.forEach((eM) => {
    nO[eM] = data.species.map((e) => funcAux(e, eM)).filter((e) => e !== null).map((eMArray) => {
      const ObjectAnimal = {};
      ObjectAnimal[eMArray] = creatAnimalArray(eMArray, sexOption);
      return ObjectAnimal;
    });
  });
  return nO;
};
const getFilterBySexSorted = (sexOption) => {
  const nO = {};
  const arrayAux = data.species.map((e) => e.location);
  const locations = arrayAux.filter((e, index) => arrayAux.indexOf(e) === index);
  locations.forEach((eM) => {
    nO[eM] = data.species.map((e) => funcAux(e, eM)).filter((e) => e !== null).map((eMArray) => {
      const ObjectAnimal = {};
      ObjectAnimal[eMArray] = creatAnimalArray(eMArray, sexOption).sort();
      return ObjectAnimal;
    });
  });
  return nO;
};
const functionAuxTwo = (options) => {
  if (options.includeNames === true && options.sex !== '' && options.sorted === true) {
    return getFilterBySexSorted(options.sex);
  }
};

const functionAux = (o) => {
  if (o.includeNames === true && (o.sex === 'female' || o.sex === 'male') && o.sorted !== true) {
    return getFilterBySex(o.sex);
  }
  return functionAuxTwo(o);
};

function getAnimalMap(options) {
  if (options === undefined) {
    return getEmpty();
  }
  const objectKeys = Object.keys(options);
  if (objectKeys.every((e) => e !== 'includeNames')) {
    return getEmpty();
  }
  if (options.includeNames === true && Object.keys(options).length === 1) {
    return getFilterByNameEmpty();
  }
  return functionAux(options);
}

module.exports = getAnimalMap;
