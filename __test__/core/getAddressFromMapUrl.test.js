import getAddressFromMapUrl from 'core/getAddressFromMapUrl';

const GOOGL_START_PLACE = 'https://www.google.com/maps/place/';
const GOOGL_START_Q = 'https://www.google.com/maps?q=';
const ADDRESS = '1-2-3shinjyuku,tokyo';

test('input is empty', () => {
  const result = getAddressFromMapUrl('');

  expect(result).toEqual('');
});

test('input is not startwith correct url', () => {
  const result = getAddressFromMapUrl(
    'https://www.yahoo.com/maps/place/1-2-3shinjyuku,tokyo/@35.123, 135.123',
  );

  expect(result).toEqual('');
});

test('start with place & have address', () => {
  const input = `${GOOGL_START_PLACE}${ADDRESS}/@35.123, 123.123/xxxx`;
  const result = getAddressFromMapUrl(input);

  expect(result).toEqual(ADDRESS);
});

test('start with maps & have address', () => {
  const input = `${GOOGL_START_Q}${ADDRESS}&geo=@35.123, 123.123&extra=xxxx`;
  const result = getAddressFromMapUrl(input);

  expect(result).toEqual(ADDRESS);
});
