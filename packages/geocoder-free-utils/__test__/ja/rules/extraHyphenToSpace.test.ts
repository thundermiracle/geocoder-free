import extraHyphenToSpace from 'ja/rules/extraHyphenToSpace';

test('japanese-number to japanese number', () => {
  const input = '新宿-1-2-3';
  const expected = '新宿 1-2-3';

  const result = extraHyphenToSpace(input);

  expect(result).toEqual(expected);
});

test('number-japanese to number japanese', () => {
  const input = '1-2-3-ビル３０５';
  const expected = '1-2-3 ビル３０５';

  const result = extraHyphenToSpace(input);

  expect(result).toEqual(expected);
});

test('nothing happen with head hyphen', () => {
  const input = '-1-2-3-ビル３０５';
  const expected = '-1-2-3 ビル３０５';

  const result = extraHyphenToSpace(input);

  expect(result).toEqual(expected);
});

test('nothing happen with tail hyphen', () => {
  const input = '1-2-3-ビル３０５-';
  const expected = '1-2-3 ビル３０５-';

  const result = extraHyphenToSpace(input);

  expect(result).toEqual(expected);
});

test('nothing happen with english-number', () => {
  const input = '新宿1-2-3 ビルD-1';
  const expected = '新宿1-2-3 ビルD-1';

  const result = extraHyphenToSpace(input);

  expect(result).toEqual(expected);
});

test('nothing happen with english-number', () => {
  const input = '新宿1-2-3 ビル1-D';
  const expected = '新宿1-2-3 ビル1-D';

  const result = extraHyphenToSpace(input);

  expect(result).toEqual(expected);
});

test('mix test', () => {
  const input = '新宿-1-2-3-ビル1-D-';
  const expected = '新宿 1-2-3 ビル1-D-';

  const result = extraHyphenToSpace(input);

  expect(result).toEqual(expected);
});
