import rmTailHyphen from 'ja/rules/rmTailHyphen';

test('one hyphen', () => {
  const input = '-1-2-3-';
  const expected = '-1-2-3';

  const result = rmTailHyphen(input);

  expect(result).toEqual(expected);
});

test('multi hyphen', () => {
  const input1 = '--1-2-3--';
  const input2 = '--1-2-3---';
  const expected = '--1-2-3';

  const result1 = rmTailHyphen(input1);
  const result2 = rmTailHyphen(input2);

  expect(result1).toEqual(expected);
  expect(result2).toEqual(expected);
});
