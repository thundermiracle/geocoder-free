import getAddressByGooGl from 'core/getAddressByGooGl';

const ADDRESS = '1-2-3新宿区,東京都';

jest.mock('lib/HttpClient', () => ({
  GetUrl(type) {
    const GOOGL_START_PLACE = 'https://www.google.com/maps/place/';
    const GOOGL_START_Q = 'https://www.google.com/maps?q=';
    const ENCODE_ADDRESS =
      '1-2-3%E6%96%B0%E5%AE%BF%E5%8C%BA%2C%E6%9D%B1%E4%BA%AC%E9%83%BD';

    switch (type) {
      case 'place':
        return Promise.resolve(
          `${GOOGL_START_PLACE}${ENCODE_ADDRESS}/@23.123,35.123`,
        );
      case 'map':
        return Promise.resolve(`${GOOGL_START_Q}${ENCODE_ADDRESS}&hello`);
      default:
        return Promise.resolve('https://hello.world/address');
    }
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

test('[place]can get address url', async () => {
  const result = await getAddressByGooGl('place');

  expect(result).toEqual(ADDRESS);
});

test('[map]can get address url', async () => {
  const result = await getAddressByGooGl('map');

  expect(result).toEqual(ADDRESS);
});

test('get wrong address url', async () => {
  const result = await getAddressByGooGl('wrong');

  expect(result).toEqual('');
});
