import countOfStr from 'lib/countOfStr';

describe('count hyphen', () => {
  test('not exist', () => {
    const result = countOfStr('新宿区三丁目', '-');
    expect(result).toEqual(0);
  });

  test('success 1', () => {
    const result = countOfStr('新宿区三丁目2-32 スーパービル1-202', '-');
    expect(result).toEqual(2);
  });

  test('success 2', () => {
    const result = countOfStr('新宿区三丁目2-32-202', '-');
    expect(result).toEqual(2);
  });
});
