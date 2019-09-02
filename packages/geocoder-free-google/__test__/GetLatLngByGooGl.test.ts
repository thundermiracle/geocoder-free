import GetLatLngByGooGl from 'src/GetLatLngByGooGl';

test('shortenurl with address', async () => {
  const result = await GetLatLngByGooGl(
    'https://goo.gl/maps/TmYFq1DdceHVpsHV6',
  );

  expect(result).toEqual([35.6585769, 139.7454506]);
});

test('shortenurl with geocode', async () => {
  const result = await GetLatLngByGooGl(
    'https://goo.gl/maps/FELwD1G9JibSgbFr8',
  );

  expect(result).toEqual([35.6586982, 139.7445263]);
});

test('wrong url', async () => {
  const result = await GetLatLngByGooGl(
    'https://goo.gl/maps/TmYFq1DdasdfpsHV6',
  );

  expect(result).toEqual([]);
});
