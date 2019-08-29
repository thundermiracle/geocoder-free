import cutToBlockNumber from 'ja/cutToBlockNumber';

test('cut successful', () => {
  const input = '東京都新宿2-3-1 丸の内サディスティック3';
  const expected = '東京都新宿2-3-1';

  const result = cutToBlockNumber(input);

  expect(result).toEqual(expected);
});

test('multiple cut', () => {
  const input = '東京都新宿 2-3-1 丸の内サディスティック3';
  const expected = '東京都新宿 2-3-1';

  const result = cutToBlockNumber(input);

  expect(result).toEqual(expected);
});

test('cannot cut without space', () => {
  const input = '東京都新宿2-3-1丸の内サディスティック';
  const expected = '東京都新宿2-3-1丸の内サディスティック';

  const result = cutToBlockNumber(input);

  expect(result).toEqual(expected);
});
