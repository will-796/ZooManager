const data = require('../data/zoo_data');

const mondayClose = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!' });

const animalArrExibition = (day) => data.species
  .filter(({ availability }) => availability.includes(day))
  .map(({ name }) => name);

const createValues = (day) => {
  if (day === 'Monday') return mondayClose();

  const { open, close } = data.hours[day];
  return {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: animalArrExibition(day),
  };
};

function getSchedule(scheduleTarget) {
  const animalArr = data.species.map(({ name }) => name);
  const daysArr = Object.keys(data.hours);

  if (scheduleTarget === 'Monday') {
    return { Monday: mondayClose() };
  }
  if (daysArr.includes(scheduleTarget)) {
    return { [scheduleTarget]: createValues(scheduleTarget) };
  }
  if (animalArr.includes(scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  }
  return daysArr.reduce((obj, day) => ({ ...obj, [day]: createValues(day) }), {});
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
