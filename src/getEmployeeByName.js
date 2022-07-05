const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  // seu código aqui
  return data.employees.filter((empregado) => {
    if (empregado.firstName === employeeName || empregado.lastName === employeeName) {
      return true;
    }
    return false;
  })[0];
}

module.exports = getEmployeeByName;
