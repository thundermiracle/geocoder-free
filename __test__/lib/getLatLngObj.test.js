import getLatLngObj from 'lib/getLatLngObj';

test('input is not right', () => {
  const wrongInputs = [null, undefined, 123, '123'];

  const results = wrongInputs.map(getLatLngObj);

  results.forEach(result => {
    expect(result).toEqual({});
  });
});

test('input is right', () => {
  const result1 = getLatLngObj('35.123, 128.123');
  const result2 = getLatLngObj(' 35.123 , 128.123  ');

  const expected = {
    lat: 35.123,
    lng: 128.123,
  };

  expect(result1).toEqual(expected);
  expect(result2).toEqual(expected);
});

test('input is not number', () => {
  const result1 = getLatLngObj('abc, 123');
  const result2 = getLatLngObj('234, def');

  expect(result1).toEqual({});
  expect(result2).toEqual({});
});
