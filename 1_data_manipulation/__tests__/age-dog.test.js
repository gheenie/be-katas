const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  test('input not mutated', () => {
    const dog = { name: 'Otis', age: 1 };
    ageDog(dog, 1);
    expect(dog).toEqual({ name: 'Otis', age: 1 });
  });

  test('correct output', () => {
    const dog = { name: 'Otis', age: 1 };
    const newDog = ageDog(dog, 1);
    expect(newDog).toEqual({ name: 'Otis', age: 2 });
  });
});
