const findTheOldest = function(arr) {
  const peopleMapped = arr.map(person => ({
    name: person.name,
    age: (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth
}));
  const sorted = peopleMapped.sort((a, b) => b.age - a.age);
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
