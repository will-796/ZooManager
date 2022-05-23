const data = require('../data/zoo_data');

// Depois de fazer code review e ter visto modos mais otimizados de fazer o codigo, refatorei e me sinto melhor, pois agora ta mais bonito e dinamico. :)

const arrayNames = (sex, sorted, residents) => {
  if (sorted && sex) {
    return residents.filter(({ sex: filter }) => filter === sex).map(({ name }) => name).sort();
  }
  if (sorted) {
    return residents.map(({ name }) => name).sort();
  }
  if (sex) {
    return residents.filter(({ sex: filter }) => filter === sex).map(({ name }) => name);
  }
  return residents.map(({ name }) => name);
};

const createObjectNames = (sex, sorted) => data.species
  .reduce((obj, { name, location, residents }) =>
    ({ ...obj,
      [location]: [...(obj[location] || []),
        { [name]: arrayNames(sex, sorted, residents) }] }), {});

const createObjDefalult = () => data.species
  .reduce((obj, { name, location }) =>
    ({ ...obj, [location]: [...(obj[location] || []), name] }), {});

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (!includeNames) return createObjDefalult();
  if (includeNames) return createObjectNames(sex, sorted);
}

module.exports = getAnimalMap;
