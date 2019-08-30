import isAlphOrNum from 'lib/isAlphaOrNum';

test('single number', () => {
  const result = isAlphOrNum('2');
  expect(result).toEqual(true);
});

test('single alphabet', () => {
  const result1 = isAlphOrNum('a');
  const result2 = isAlphOrNum('D');

  expect(result1).toEqual(true);
  expect(result2).toEqual(true);
});

test('multi number', () => {
  const result = isAlphOrNum('3213');
  expect(result).toEqual(true);
});

test('multi alphabet', () => {
  const result = isAlphOrNum('aBcdeF');
  expect(result).toEqual(true);
});

test('number with alphabet', () => {
  const result1 = isAlphOrNum('D123');
  const result2 = isAlphOrNum('234A');

  expect(result1).toEqual(true);
  expect(result2).toEqual(true);
});

test('minus number', () => {
  const result = isAlphOrNum('-2');

  expect(result).toEqual(false);
});
