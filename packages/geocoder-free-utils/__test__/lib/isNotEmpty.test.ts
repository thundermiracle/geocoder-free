import isNotEmpty from 'lib/isNotEmpty';

test('is null', () => {
  const result = isNotEmpty(null);

  expect(result).toEqual(false);
});

test('is empty string', () => {
  const result = isNotEmpty('');

  expect(result).toEqual(false);
});

test('is empty array', () => {
  const result = isNotEmpty([]);

  expect(result).toEqual(false);
});

test('is an array', () => {
  const result = isNotEmpty(['1']);

  expect(result).toEqual(true);
});

test('is a string', () => {
  const result = isNotEmpty('1');

  expect(result).toEqual(true);
});
