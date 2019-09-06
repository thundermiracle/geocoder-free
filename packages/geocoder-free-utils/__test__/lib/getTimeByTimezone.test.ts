import getTimeByTimezone from 'lib/getTimeByTimezone';

test('(JST 2019-09-01 11:00:00)should return 1567303200000 in any timezone', () => {
  const dateStrInJST = '2019-09-01 11:00:00';

  const result = getTimeByTimezone(dateStrInJST, +9);

  expect(result).toEqual(1567303200000);
});

test('(UTC 1567303200000)should return 1567270800000 in any timezone', () => {
  const dateStrInUTC = '2019-09-01 11:00:00';

  const result = getTimeByTimezone(dateStrInUTC, 0);

  expect(result).toEqual(1567335600000);
});
