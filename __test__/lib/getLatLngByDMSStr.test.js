import getLatLngByDMSStr from 'lib/getLatLngByDMSStr';

test('input is invalid', () => {
  expect(getLatLngByDMSStr(null)).toEqual(null);
  expect(getLatLngByDMSStr()).toEqual(null);
  expect(getLatLngByDMSStr('')).toEqual(null);
  expect(getLatLngByDMSStr('東京都新宿区１－２－３')).toEqual(null);
});

test('input contains invalid dms latitude', () => {
  const input = `3539'31.3"N+139°44'40.3"E`;
  const result = getLatLngByDMSStr(input);

  expect(result).toEqual(null);
});

test('input contains invalid dms longitude', () => {
  const input = `35°39'31.3"N+13944'40.3"E`;
  const result = getLatLngByDMSStr(input);

  expect(result).toEqual(null);
});

test('input is right', () => {
  const input = `35°39'31.3"N+139°44'40.3"E`;
  const result = getLatLngByDMSStr(input);

  expect(result).toEqual([35.658694, 139.744528]);
});
