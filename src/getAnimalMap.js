const data = require('../data/zoo_data');

// caro leitor desse código não tive imaginação e nem capacidade para melhorar ele, sei que está horrível, e pode ser melhorado de infinitas maneiras, mas ao menos está funcionando, #feitoMelhorQuePerfeito

const createArrBykey = (key) => data.species
  .filter(({ location }) => location === key)
  .map(({ name }) => name);

const objNameSpecie = (nameKey) => ({ [nameKey]: data.species
  .find(({ name }) => name === nameKey).residents
  .map(({ name }) => name) });

const objNameAndSort = (nameKey) => ({ [nameKey]: data.species
  .find(({ name }) => name === nameKey).residents
  .map(({ name }) => name).sort() });

const objNameSex = (nameKey, sex) => ({ [nameKey]: data.species
  .find(({ name }) => name === nameKey).residents
  .filter(({ sex: sexfilter }) => sexfilter === sex)
  .map(({ name }) => name) });

const objNameSortAndSex = (nameKey, sex) => ({ [nameKey]: data.species
  .find(({ name }) => name === nameKey).residents
  .filter(({ sex: sexfilter }) => sexfilter === sex)
  .map(({ name }) => name).sort() });

const crateLocationArr = (key, sex, callback) => data.species
  .filter(({ location }) => location === key)
  .map(({ name }) => name)
  .reduce((arr, nameKey) => ([...arr, callback(nameKey, sex)]), []);

const objIncludeName = (callback, sex) => {
  const arrLocations = ['NE', 'NW', 'SE', 'SW'];
  return arrLocations
    .reduce((obj, key) => ({ ...obj, [key]: crateLocationArr(key, sex, callback) }), {});
};

const createObjDefalult = () => {
  const arrLocations = ['NE', 'NW', 'SE', 'SW'];
  return arrLocations
    .reduce((obj, key) => ({ ...obj, [key]: createArrBykey(key) }), {});
};

const verifyConditions = (sorted, sex) => {
  if (sorted && sex) return objIncludeName(objNameSortAndSex, sex);
  if (sex) return objIncludeName(objNameSex, sex);
  if (sorted) return objIncludeName(objNameAndSort);
  return objIncludeName(objNameSpecie);
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (!includeNames) return createObjDefalult();
  return verifyConditions(sorted, sex);
}

module.exports = getAnimalMap;
