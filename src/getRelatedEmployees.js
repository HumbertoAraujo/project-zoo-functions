const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  let gerentes = [];
  const funcionarios = data.employees.filter((funcionario) => funcionario.managers);
  funcionarios.forEach((funcionario) => {
    if ((gerentes.some((valor) => valor === funcionario)) === false) {
      gerentes.push(...funcionario.managers);
    }
    gerentes = gerentes.filter((idManager, index) => gerentes.indexOf(idManager) === index);
  });
  return gerentes.some((managerCompare) => managerCompare === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const imp = data.employees;
    const funcs = imp.filter((func) => func.managers.some((gerente) => gerente === managerId));
    const fullNames = funcs.map((person) => `${person.firstName} ${person.lastName}`);
    return fullNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
