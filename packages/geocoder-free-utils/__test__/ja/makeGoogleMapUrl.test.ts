import makeGoogleMapUrl from 'ja/makeGoogleMapUrl';

test('default map url', () => {
  const result = makeGoogleMapUrl('Shinjuku1-2-3');
  const expected = 'https://www.google.com/maps?q=Shinjuku1-2-3';

  expect(result).toEqual(expected);
});

test('customize map url', () => {
  const result = makeGoogleMapUrl('Shinjuku1-2-3', 'https://www.google.com/');
  const expected = 'https://www.google.com/Shinjuku1-2-3';

  expect(result).toEqual(expected);
});

test('address need encode', () => {
  const result = makeGoogleMapUrl('Shinjuku 1-2-3', 'https://www.google.com/');
  const expected = 'https://www.google.com/Shinjuku%201-2-3';

  expect(result).toEqual(expected);
});
