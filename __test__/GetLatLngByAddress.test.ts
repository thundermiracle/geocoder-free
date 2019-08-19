import GetLatLngByAddress from 'src/GetLatLngByAddress';

test('correct address', async () => {
  const result = await GetLatLngByAddress('東京都港区芝公園４丁目２−８');

  expect(result).toEqual([35.6585769, 139.7454506]);
});

test('wrong address', async () => {
  const result = await GetLatLngByAddress('香川県新宿区公園４丁目２−８');

  expect(result).toEqual([]);
});
