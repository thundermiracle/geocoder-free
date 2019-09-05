import getLocaleString from 'lib/getLocaleString';

test('input is wrong', () => {
  const result1 = getLocaleString(null);
  const result2 = getLocaleString('');

  expect(result1).toEqual('');
  expect(result2).toEqual('');
});

test('input is not date string', () => {
  const result = getLocaleString('abc');

  expect(result).toEqual('');
});

test('input is correct', () => {
  const result = getLocaleString('2019-08-29');
  const expected = new Date('2019-08-29').toLocaleString();

  expect(result).toEqual(expected);
});
