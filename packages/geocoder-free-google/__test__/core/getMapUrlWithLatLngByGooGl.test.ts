import getMapUrlWithLatLngByGooGl from 'core/getMapUrlWithLatLngByGooGl';

jest.mock('core/getAddressByGooGl', () =>
  jest.fn(type => {
    switch (type) {
      case 'decimal':
        return Promise.resolve('35.123,123.123');
      case 'dms':
        return Promise.resolve(`35°39'31.3"N+139°44'40.3"E`);
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
  const result = await getMapUrlWithLatLngByGooGl('decimal');

  expect(result).toEqual([35.123, 123.123]);
});

test('latitude, longitude dms string', async () => {
  const result = await getMapUrlWithLatLngByGooGl('dms');

  expect(result).toEqual([35.658694, 139.744528]);
});

test('get address', async () => {
  const result = await getMapUrlWithLatLngByGooGl('address');

  expect(result).toEqual([11, 22]);
});

test('get wrong address', async () => {
  const result = await getMapUrlWithLatLngByGooGl('wrong');

  expect(result).toEqual([]);
});
