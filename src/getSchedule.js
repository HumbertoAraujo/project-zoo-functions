// const { TestScheduler } = require('jest');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { hours } = data;
const allDays = Object.keys(hours);
const allAnimals = species.map((element) => element.name);

const animalSchedule = (animal) => {
  species.find((element) => element.name === animal);
  return species.find((element) => element.name === animal).availability;
};

const daySchedule = (day) => {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const newObjectDays = {};
  let objectExhibition = (species.map((elementmap) => {
    if (elementmap.availability.some((filterSome) => filterSome === day)) {
      return elementmap.name;
    } return undefined;
  }));
  objectExhibition = objectExhibition.filter((elementFilter) => elementFilter !== undefined);
  newObjectDays[day] = {
    officeHour: `Open from ${(hours[day]).open}am until ${(hours[day]).close}pm`,
    exhibition: objectExhibition };
  return newObjectDays;
};

const emptySchedule = () => {
  const newObjectDays = {};
  allDays.forEach((element) => {
    let objectExhibition = (species.map((elementmap) => {
      if (elementmap.availability.some((filterSome) => filterSome === element)) {
        return elementmap.name;
      } return undefined;
    }));
    objectExhibition = objectExhibition.filter((elementFilter) => elementFilter !== undefined);
    if (element !== 'Monday') {
      newObjectDays[element] = {
        officeHour: `Open from ${(hours[element]).open}am until ${(hours[element]).close}pm`,
        exhibition: objectExhibition };
    } else {
      newObjectDays[element] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    }
  });
  return newObjectDays;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (allDays.some((element) => element === scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  if (allAnimals.some((element) => element === scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
  if (scheduleTarget === undefined) {
    return emptySchedule();
  }
  return emptySchedule();
}

module.exports = getSchedule;
