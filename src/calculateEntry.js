const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices;
  const { adult, senior, child } = countEntrants(entrants);
  return adult * adultPrice + senior * seniorPrice + child * childPrice;
}

module.exports = { calculateEntry, countEntrants };
