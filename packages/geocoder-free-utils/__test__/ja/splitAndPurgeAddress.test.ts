import splitAndPurgeAddress from 'ja/splitAndPurgeAddress';

test('right hyphen will not be deleted', () => {
  const input = '新宿区1-2-3 205号室';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(input);
});

test('hyphen with number and character', () => {
  const input = '新宿区1-2-3 スーパービル-205号室';
  const expected = '新宿区1-2-3 スーパービル 205号室';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('hyphen with character and number', () => {
  const input = '新宿区-1-2-3 スーパービル205号室';
  const expected = '新宿区 1-2-3 スーパービル205号室';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('hyphen with character and number No1', () => {
  const input = '3-2-1-新宿ビル';
  const expected = '3-2-1 新宿ビル';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('wrong hyphen mixed', () => {
  const input = '新宿区-1-2-3 スーパービル-205号室';
  const expected = '新宿区 1-2-3 スーパービル 205号室';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('startwith Hyphen', () => {
  const input = '-1-2-3 スーパービル-205号室';
  const expected = '1-2-3 スーパービル 205号室';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('endwith Hyphen', () => {
  const input = 'スーパービル205-';
  const expected = 'スーパービル205';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('multiple Hyphen', () => {
  const input = '新宿区---1---2--3';
  const expected = '新宿区 1-2-3';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('not remove alphabet-number', () => {
  const input = 'スーパービルD-1';
  const expected = 'スーパービルD-1';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});

test('remove a-b-c-1-2-3', () => {
  const input = '新宿2-32-10-団地';
  const expected = '新宿2-32-10 団地';

  const result = splitAndPurgeAddress(input);

  expect(result).toEqual(expected);
});
