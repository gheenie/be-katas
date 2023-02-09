const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  test('seconds; singular', () => {
    expect( secondsToTimeString(1) ).toBe('1 second');
  });

  test('seconds; plural', () => {
    expect( secondsToTimeString(2) ).toBe('2 seconds');
  });

  test('minutes; singular', () => {
    expect( secondsToTimeString(60) ).toBe('1 minute');
  });

  test('minutes; plural', () => {
    expect( secondsToTimeString(120) ).toBe('2 minutes');
  });

  test('mins and secs; singular and plural', () => {
    expect( secondsToTimeString(121) ).toBe('2 minutes and 1 second');
  });

  test('hour, min and sec; singular', () => {
    expect( secondsToTimeString(3661) ).toBe('1 hour, 1 minute and 1 second');
  });

  test('year, day, hour, min, sec; singular', () => {
    expect( secondsToTimeString(31626061) ).toBe('1 year, 1 day, 1 hour, 1 minute and 1 second');
  });

  test('year, day, hour, min, sec; singular and plural', () => {
    expect( secondsToTimeString(127702942) ).toBe('4 years, 18 days, 1 hour, 2 minutes and 22 seconds');
  });
});
