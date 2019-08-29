import purgeAddress from 'ja/purgeAddress';

jest.mock('ja/purgeFullAddress', () =>
  jest.fn(input => (input === 'success' ? 'step1' : input)),
);

jest.mock('ja/splitAndPurgeAddress', () =>
  jest.fn(input => (input === 'step1' ? 'step2' : input)),
);

test('success', () => {
  const result = purgeAddress('success');

  expect(result).toEqual('step2');
});

test('failed', () => {
  const result = purgeAddress('failed');

  expect(result).toEqual('failed');
});
