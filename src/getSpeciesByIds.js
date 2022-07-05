const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui;
  const newArray = [];
  ids.forEach((idReceived) => {
    newArray.push(species.filter(({ id }) => id === idReceived)[0]);
  });
  return newArray;
}

module.exports = getSpeciesByIds;
