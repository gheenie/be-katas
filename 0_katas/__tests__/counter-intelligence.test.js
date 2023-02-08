const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  test('final letter', () => {
    expect( counterIntelligence('Y') ).toBe('X');
  });

  test('final letter; 1 word', () => {
    expect( counterIntelligence('BCD Y') ).toBe('ABC X');
  });

  test('final letter; >1 word', () => {
    expect( counterIntelligence('NKRRU YCKKZNKGXZ D') ).toBe('HELLO SWEETHEART X');
  });

  test('final letter; >1 word; punctuation', () => {
    expect( counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G') )
    .toBe('REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X');
  });

  test('final letter; >1 word; punctuation; lower cased', () => {
    expect( counterIntelligence('ngbk g toik jge :) d') ).toBe('HAVE A NICE DAY :) X');
  });
});
