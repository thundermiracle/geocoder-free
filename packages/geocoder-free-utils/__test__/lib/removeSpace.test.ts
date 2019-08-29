import removeSpace from 'lib/removeSpace';

test('empty string', () => {
  const result1 = removeSpace('  ');
  const result2 = removeSpace('');

  expect(result1).toEqual(result1);
  expect(result2).toEqual(result2);
});

test('remove all space', () => {
  const result = removeSpace('  2 3  4  ');

  expect(result).toEqual('234');
});
