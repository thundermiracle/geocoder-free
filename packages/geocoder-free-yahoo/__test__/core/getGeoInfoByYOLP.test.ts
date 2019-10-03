import getGeoInfoByYOLP from 'core/getGeoInfoByYOLP';

jest.mock('lib/HttpClient', () => ({
  Get(url: string, type: string): Promise<any> {
    if (
      url.startsWith(
        'https://map.yahooapis.jp/geocode/V1/geoCoder?output=json&recursive=true&appid=querytest',
      )
    ) {
      return Promise.resolve(url);
    }

    if (
      url.startsWith(
        'https://map.yahooapis.jp/geocode/V1/geoCoder?output=json&recursive=true&appid=typetest',
      )
    ) {
      return Promise.resolve(type);
    }

    return Promise.resolve({});
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

test('query encode test', async () => {
  const result = await getGeoInfoByYOLP('querytest', '東京都新宿区');
  const expected = `https://map.yahooapis.jp/geocode/V1/geoCoder?output=json&recursive=true&appid=querytest&query=${encodeURIComponent(
    '東京都新宿区',
  )}`;

  expect(result).toEqual(expected);
});

test('type test', async () => {
  const result = await getGeoInfoByYOLP('typetest', 'ttt');
  const expected = 'json';

  expect(result).toEqual(expected);
});

test('return {}', async () => {
  const result = await getGeoInfoByYOLP('appid', 'ttt');
  const expected = {};

  expect(result).toEqual(expected);
});
