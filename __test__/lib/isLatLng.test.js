import isLatLng from 'lib/isLatLng';

test('input is normal address', () => {
  const result = isLatLng('東京都新宿区１－２－３');
  expect(result).toEqual(false);
});

test('input is splitable address', () => {
  const result = isLatLng('東京都新宿区, １－２－３');

  expect(result).toEqual(false);
});

test('input has latitude only', () => {
  const result = isLatLng('3213');
  expect(result).toEqual(false);
});

test('input is correct', () => {
  const result = isLatLng('35.123, 123.456');
  expect(result).toEqual(true);
});
