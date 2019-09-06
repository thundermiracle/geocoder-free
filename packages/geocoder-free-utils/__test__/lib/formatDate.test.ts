import formatDate from 'lib/formatDate';

test('input is date', () => {
  const input = new Date('2019-09-01 10:00:00');
  const result = formatDate(input);

  expect(result).toEqual('2019/09/01 10:00:00');
});

test('format yyyy/MM/ddHH:mm:ss.SSS', () => {
  const input = '2019-09-01 10:00:00';
  const result = formatDate(input, 'yyyy/MM/ddHH:mm:ss.SSS');

  expect(result).toEqual('2019/09/0110:00:00.000');
});

test('format yyyy/M/d H:m:s', () => {
  const input = '2019-09-01 8:00:00';
  const result = formatDate(input, 'yyyy/M/d H:m:s');

  expect(result).toEqual('2019/9/1 8:0:0');
});

test('dateStr is invalid', () => {
  const result1 = formatDate(null);
  const result2 = formatDate('');

  expect(result1).toEqual('');
  expect(result2).toEqual('');
});
