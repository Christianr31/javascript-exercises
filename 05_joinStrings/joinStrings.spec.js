const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Christian', () => {
    expect(values.firstName).toEqual('Christian');
  });
  test('lastName is Dragon', () => {
    expect(values.lastName).toEqual('Dragon');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1990', () => {
    expect(values.birthYear).toEqual(1990);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Christian Dragon and I am 35 years old.');
  });
});

