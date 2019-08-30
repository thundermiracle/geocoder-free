import multiSpaceToOne from 'ja/rules/multiSpaceToOne';

test('2 space to 1', () => {
  const input = ' 1-2-3  ';
  const expected = ' 1-2-3 ';

  const result = multiSpaceToOne(input);

  expect(result).toEqual(expected);
});

test('multi space to 1', () => {
  const input = '   1  2-3  ';
  const expected = ' 1 2-3 ';

  const result = multiSpaceToOne(input);

  expect(result).toEqual(expected);
});
