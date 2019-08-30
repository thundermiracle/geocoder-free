import purgeFullAddress from 'ja/purgeFullAddress';

test('mix purge', () => {
  const input = '   新宿区　　１－－2―3 スーパービル---205号室--';
  const expected = ' 新宿区 1-2-3 スーパービル-205号室-';

  const result = purgeFullAddress(input);

  expect(result).toEqual(expected);
});
