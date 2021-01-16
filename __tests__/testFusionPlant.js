// Returns true if water would be boiling at the specified temperature **(true/false)
// Throws an Error on illegal input isWaterBoiling (degreesCelsius); **(regarding parameter)

// While working, discuss with a classmate. You can think about the following questions:
// What values ​​can the degreeCelsius parameter have?
// What values ​​can the function return?
// When should the function throw an Error with a descriptive error message?
// Need More Kinds of Error? Justify your answer.
// Are there values ​​that are more important to test than others? Why?


require ('jest');

const isWaterBoiling = require('../src/fusionPlant');

it('The temp should be of typeof number', () => {
    //arrange
    let input = 'fifty';
    const arrowFunction = () => {
        isWaterBoiling(input);
    }
    //act + assert
    expect(arrowFunction).toThrow('Illegal input');
})

it('It should return true if input temperature is 100 degs', () => {
    //arrange
    let input = 100;
    const expected = true;

    //act
    const actual = isWaterBoiling(input);
    //assert
    expect(actual).toBe(expected);
})

it('It should return false if value is less than 100 deg', () => {
    //arrange
    let input = 50;
    const expected = false;
    //act
    const actual = isWaterBoiling(input);
    //assert
    expect(actual).toBe(expected);
})

