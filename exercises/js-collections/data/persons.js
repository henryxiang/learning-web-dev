const faker = require('faker');

const getPersons = (n = 100) => {
  const persons = [];
  for (let i = 0; i < n; i++) {
    const id = i + 1;
    const person = { id };
    person.firstName = faker.name.firstName();
    person.lastName = faker.name.lastName();
    person.age = faker.random.number({ min: 18, max: 70 });
    person.salary = faker.random.number({ min: 25000, max: 250000, precision: 2 });
    persons.push(person);
  }
  return persons;
};

module.exports = {
  getPersons,
};
