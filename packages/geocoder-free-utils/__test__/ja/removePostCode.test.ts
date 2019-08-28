import removePostCode from 'ja/removePostCode';

test('contains post code', () => {
  const result = removePostCode('〒123-1234+tokyo+1-2-3');

  expect(result).toEqual('tokyo+1-2-3');
});

test('donot contain post code', () => {
  const result = removePostCode('123-1234+tokyo+1-2-3');

  expect(result).toEqual('123-1234+tokyo+1-2-3');
});
