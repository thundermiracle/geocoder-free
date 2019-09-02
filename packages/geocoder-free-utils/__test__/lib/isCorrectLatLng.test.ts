import isCorrectLatLng from 'lib/isCorrectLatLng';

test('is empty array', () => {
  const result = isCorrectLatLng([]);
  expect(result).toEqual(false);
});

test('latitude is NaN', () => {
  const result = isCorrectLatLng([NaN, 139.1]);
  expect(result).toEqual(false);
});

test('longitude is NaN', () => {
  const result = isCorrectLatLng([35.1, NaN]);
  expect(result).toEqual(false);
});

test('latitude & longitude is NaN', () => {
  const result = isCorrectLatLng([NaN, NaN]);
  expect(result).toEqual(false);
});

test('is correct', () => {
  const result = isCorrectLatLng([35.1, 139.1]);
  expect(result).toEqual(true);
});
