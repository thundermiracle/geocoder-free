import getLatLngByDecimalStr from 'lib/getLatLngByDecimalStr';

test('input is normal address', () => {
  const result = getLatLngByDecimalStr('東京都新宿区１－２－３');
  expect(result).toEqual(null);
});

test('input is splitable address', () => {
  const result = getLatLngByDecimalStr('東京都新宿区, １－２－３');

  expect(result).toEqual(null);
});

test('input has latitude only', () => {
  const result = getLatLngByDecimalStr('3213');
  expect(result).toEqual(null);
});

test('input is correct', () => {
  const result = getLatLngByDecimalStr('35.123, 123.456');
  expect(result).toEqual([35.123, 123.456]);
});
