import dms2deg from 'lib/dms2deg';

test('latitude north', () => {
  const input = `35°39'31.3"N`;

  const result = dms2deg(input);

  expect(result).toEqual(35.658694);
});

test('latitude south', () => {
  const input = `35°39'31.3"S`;

  const result = dms2deg(input);

  expect(result).toEqual(-35.658694);
});

test('longitude east', () => {
  const input = `139°44'40.3"E`;

  const result = dms2deg(input);

  expect(result).toEqual(139.744528);
});

test('longitude west', () => {
  const input = `139°44'40.3"W`;

  const result = dms2deg(input);

  expect(result).toEqual(-139.744528);
});
