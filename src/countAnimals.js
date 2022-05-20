const data = require('../data/zoo_data');

const countSpecie = (nameAnimal) => data.species
  .find(({ name }) => name === nameAnimal).residents.length;

const countSpecieAndSex = (specie, sexAnimal) => data.species
  .find(({ name }) => name === specie).residents
  .filter(({ sex }) => sex === sexAnimal).length;

function countAnimals(animal = {}) {
  const { specie, sex } = animal;
  if (sex) return countSpecieAndSex(specie, sex);
  if (specie) return countSpecie(specie);

  return data.species
    .reduce((obj, { name }) => ({ ...obj, [name]: countSpecie(name) }), {});
}

module.exports = countAnimals;
