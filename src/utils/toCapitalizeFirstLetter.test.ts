import toCapitalizeFirstLetter from './toCapitalizeFirstLetter'

describe('toCapitalizeFirstLetter', () => {
  test('Should get a string and return a string with first letter in uppercase and other letter in lowercase', () => {
    const testString1 = 'some_string';
    const testResult1 = 'Some_string';

    const testString2 = 'somE String';
    const testResult2 = 'Some string';

    expect(toCapitalizeFirstLetter(testString1)).toEqual(testResult1);
    expect(toCapitalizeFirstLetter(testString2)).toEqual(testResult2);
  });

  test('Should get empty string and return empty string', () => {
    const testString = '';
    const testResult = '';

    expect(toCapitalizeFirstLetter(testString)).toEqual(testResult);
  });

  test('Should get a string of one letter and return a string of one letter in uppercase', () => {
    const testString = 's';
    const testResult = 'S';

    expect(toCapitalizeFirstLetter(testString)).toEqual(testResult);
  })
})
