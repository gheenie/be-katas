const { sumConsecutiveDuplicates, reduceConsecutives } = require('../sum-consecutive-duplicates');

describe('sumConsecutiveDuplicates()', () => {
  test('no consecutives', () => {
    expect( sumConsecutiveDuplicates([1,2,3]) ).toEqual([1,2,3]);
  });

  test('1 consecutive', () => {
    expect( sumConsecutiveDuplicates([1, 1, 2, 3]) ).toEqual([2,2,3]);
  });

  test('>1 consecutives; no non-consecs', () => {
    expect( sumConsecutiveDuplicates([1, 1, 2, 2, 3, 3]) ).toEqual([2,4,6]);
  });

  test('>1 consecutives; with consecs', () => {
    expect( sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]) ).toEqual([2,2,4,2,3]);
  });

  test('function is pure', () => {
    const input = [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1];
    sumConsecutiveDuplicates(input);
    expect(input).toEqual([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]);
  });
});

describe('reduceConsecutives()', () => {
  test('duplicates exist after 1 run', () => {
    expect( reduceConsecutives([1, 1, 2, 3]) ).toEqual([4,3]);
  });

  test('duplicates exist after >1 run', () => {
    expect( reduceConsecutives([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]) ).toEqual([8,2,3]);
  });

  test('function is pure', () => {
    const input = [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1];
    reduceConsecutives(input);
    expect(input).toEqual([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]);
  });
});
