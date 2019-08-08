import parseGoogleMapUrl from '../src/parseGoogleMapUrl';

test('input is not right', () => {
  const wrongInputs = ['https://google.com/map/p=aweoiroiwuer', ''];

  const results = wrongInputs.map(parseGoogleMapUrl);

  results.forEach(result => {
    expect(result).toEqual([]);
  });
});

test('input is right', () => {
  const input =
    'https://www.google.com/maps/preview/place/%E3%80%92101-0021+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E5%A4%96%E7%A5%9E%E7%94%B0%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%91%EF%BC%92/@35.700407,139.7705424,3240a,13.1y/data\u003d!4m2!3m1!1s0x60188c1dca786a35:0x2127e70608cf10e';

  const result = parseGoogleMapUrl(input);

  expect(result).toEqual([35.700407, 139.7705424]);
});

test('input is array', () => {
  const input = [35.123, 23.123];

  const result = parseGoogleMapUrl(input);

  expect(result).toEqual(input);
});
