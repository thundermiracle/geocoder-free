import getLatLngFromMapUrl from 'core/getLatLngFromMapUrl';

const GOOGL_START_PLACE = 'https://www.google.com/maps/place/';

test('input is array', () => {
  const result = getLatLngFromMapUrl([35.123, 125.123]);

  expect(result).toEqual([35.123, 125.123]);
});

test('input does not have /@', () => {
  const input = `${GOOGL_START_PLACE}xxx/xxxx/35.123,125.123,17z/xxxxx/xxxxx`;
  const result = getLatLngFromMapUrl(input);

  expect(result).toEqual([]);
});

test('input is correct', () => {
  const input = `${GOOGL_START_PLACE}xxx/xxxx/@35.123,125.123,17z/xxxxx/xxxxx`;
  const result = getLatLngFromMapUrl(input);

  expect(result).toEqual([35.123, 125.123]);
});
