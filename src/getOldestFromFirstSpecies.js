const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieID = data.employees.find(({ id: idFind }) => idFind === id).responsibleFor[0];
  const oldSpecie = data.species
    .find(({ id: idFind }) => idFind === firstSpecieID).residents
    .reduce((old, resident) => {
      if (old.age > resident.age) return old;
      return resident;
    });
  return Object.values(oldSpecie);
}

module.exports = getOldestFromFirstSpecies;
