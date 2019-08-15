import getMapUrlWithLatLngByGooGl from 'core/getMapUrlWithLatLngByGooGl';

jest.mock('core/getAddressByGooGl', () =>
  jest.fn(type => {
    switch (type) {
      case 'geocode':
        return Promise.resolve('35.123,123.123');
      case 'address':
        return Promise.resolve('1-2-3Shinjuku,Tokyo');
      default:
        return Promise.resolve('');
    }
  }),
);

jest.mock('core/getMapUrlWithLatLngByAddress', () =>
  jest.fn(type => {
    switch (type) {
      case '1-2-3Shinjuku,Tokyo':
        return Promise.resolve([11, 22]);
      default:
        return Promise.resolve([]);
    }
  }),
);

test('latitude, longitude string', async () => {
  const result = await getMapUrlWithLatLngByGooGl('geocode');

  expect(result).toEqual([35.123, 123.123]);
});

test('get address', async () => {
  const result = await getMapUrlWithLatLngByGooGl('address');

  expect(result).toEqual([11, 22]);
});

test('get wrong address', async () => {
  const result = await getMapUrlWithLatLngByGooGl('wrong');

  expect(result).toEqual([]);
});
