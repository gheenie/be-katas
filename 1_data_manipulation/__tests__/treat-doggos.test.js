const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  test('input not mutated', () => {
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    treatDoggos(dogs);
    expect(dogs).toEqual([{ name: 'Otis', age: 3, hasRabies: true }]);
  });

  test('references of outermost array and inner elements', () => {
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    const newDogs = treatDoggos(dogs);
    expect(dogs === newDogs).toBe(false);
    expect(dogs[0] === newDogs[0]).toBe(false);
  });

  test('correct output', () => {
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    const newDogs = treatDoggos(dogs);
    expect(newDogs).toEqual([{ name: 'Otis', age: 3, hasRabies: false }]);
  });
});
