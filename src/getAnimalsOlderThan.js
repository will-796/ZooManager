const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find(({ name }) => animal === name).residents
    .every(({ age: ageAnimal }) => age < ageAnimal);
}

module.exports = getAnimalsOlderThan;
