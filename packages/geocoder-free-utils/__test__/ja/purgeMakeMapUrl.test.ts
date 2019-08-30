import purgeMakeMapUrl from 'ja/purgeMakeMapUrl';

jest.mock('ja/purgeAddress', () =>
  jest.fn(input => (input === 'success' ? 'purgeAddress' : input)),
);

jest.mock('ja/cutToBlockNumber', () =>
  jest.fn(input => (input === 'purgeAddress' ? 'cutToBlockNumber' : input)),
);

test('default', () => {
  const result = purgeMakeMapUrl('success', '', 'https://google.com/');

  expect(result).toEqual('https://google.com/cutToBlockNumber');
});

test('have prefix', () => {
  const result = purgeMakeMapUrl('success', 'Hello ', 'https://google.com/');

  expect(result).toEqual('https://google.com/Hello%20cutToBlockNumber');
});

test('remove space', () => {
  const result = purgeMakeMapUrl(
    'success',
    'Hello ',
    'https://google.com/',
    true,
  );

  expect(result).toEqual('https://google.com/HellocutToBlockNumber');
});
