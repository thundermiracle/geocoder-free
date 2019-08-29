import zenToHan from 'ja/rules/zenToHan';

test('全角英語', () => {
  const input = 'ＡＢＣＤｂｃｄ';
  const expected = 'ABCDbcd';

  const result = zenToHan(input);

  expect(result).toEqual(expected);
});

test('全角数字', () => {
  const input = '１２３４５６７８９０';
  const expected = '1234567890';

  const result = zenToHan(input);

  expect(result).toEqual(expected);
});

test('全角ハイフン', () => {
  const input = '―－‐';
  const expected = '---';

  const result = zenToHan(input);

  expect(result).toEqual(expected);
});

test('全角スペース', () => {
  const input = '　　';
  const expected = '  ';

  const result = zenToHan(input);

  expect(result).toEqual(expected);
});

test('全角ミックス', () => {
  const input = '新宿１-２－3　Ｄ―２　３０５室';
  const expected = '新宿1-2-3 D-2 305室';

  const result = zenToHan(input);

  expect(result).toEqual(expected);
});
