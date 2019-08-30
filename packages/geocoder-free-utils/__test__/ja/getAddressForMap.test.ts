import getAddressForMap from 'ja/getAddressForMap';

test('prefix is not set', () => {
  const result = getAddressForMap('Shinjuku1-2-3 building2F');
  const expected = 'Shinjuku1-2-3';

  expect(result).toEqual(expected);
});

test('prefix is set', () => {
  const result = getAddressForMap('Shinjuku1-2-3 building2F', 'Tokyo ');
  const expected = 'Tokyo Shinjuku1-2-3';

  expect(result).toEqual(expected);
});
