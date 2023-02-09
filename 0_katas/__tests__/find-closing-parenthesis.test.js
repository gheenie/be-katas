const { findClosingParenthesis } = require('../find-closing-parenthesis')

describe('findClosingParenthesis()', () => {
  test('empty string', () => {
    expect( findClosingParenthesis('') ).toBe(-1);
  });

  test('no 2nd arg', () => {
    expect( findClosingParenthesis('hello') ).toBe(-1);
  });

  test('1st (', () => {
    expect( findClosingParenthesis('(hello)', 1) ).toBe(6);
  });

  test('>1st (; unnested inside; unnested outside', () => {
    expect( findClosingParenthesis('Hello, (world). (Something Else).', 2) ).toBe(31);
  });

  test('>1st (; unnested inside; unnested outside', () => {
    expect( findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 3) ).toBe(35);
  });

  test('1st (; breadth nested inside; unnested outside', () => {
    expect( findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 1) ).toBe(41);
  });
});
