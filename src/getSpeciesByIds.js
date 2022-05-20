const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return ids.map((idMap) => data.species.find(({ id }) => id === idMap));
}

module.exports = getSpeciesByIds;
