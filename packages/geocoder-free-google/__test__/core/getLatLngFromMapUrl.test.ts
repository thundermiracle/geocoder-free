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

test('input have !3d', () => {
  const input = `${GOOGL_START_PLACE}xxx/xxxx/xxxxx/xxxxx/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d35.6586982!4d139.7445263?shorturl=1`;
  const result = getLatLngFromMapUrl(input);

  expect(result).toEqual([35.6586982, 139.7445263]);
});

test('input have !3d and /@', () => {
  const input = `${GOOGL_START_PLACE}xxx/xxxx/@35.123,125.123,17z/xxxxx/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d35.6586982!4d139.7445263?shorturl=1`;
  const result = getLatLngFromMapUrl(input);

  expect(result).toEqual([35.6586982, 139.7445263]);
});

test('input have !3d without ?', () => {
  const input = `${GOOGL_START_PLACE}xxx/xxxx/@35.123,125.123,17z/xxxxx/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d35.6586982!4d139.7445263`;
  const result = getLatLngFromMapUrl(input);

  expect(result).toEqual([35.6586982, 139.7445263]);
});
