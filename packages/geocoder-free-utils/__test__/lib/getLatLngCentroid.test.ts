import getLatLngCentroid from 'lib/getLatLngCentroid';

test('input is empty', () => {
  const result = getLatLngCentroid([]);
  expect(result).toEqual([]);
});

test('input has 1 element', () => {
  const result = getLatLngCentroid([[35.123, 139.234]]);
  expect(result).toEqual([35.123, 139.234]);
});

test('input has 2 elements', () => {
  const result = getLatLngCentroid([[35.123, 139.234], [35.456, 139.567]]);
  expect(result).toEqual([35.289614, 139.400158]);
});

test('input has 4 elements', () => {
  const result = getLatLngCentroid([
    [35.123, 139.234],
    [35.456, 139.567],
    [36.1, 138.5],
    [37.2, 137.6],
  ]);
  expect(result).toEqual([35.972092, 138.732512]);
});
