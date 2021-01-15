require('jest');

const multiply = require('../src/multiply.js')
//test Cases
//1: Should calculate the product of two numbers
//2: Should throw an error if less than two parameters given
//3: Should throw an error if one parameter is in -
it('the function should multipy two number properly', () => {
    let a = 2;
    let b = 5;
    const expected = 10;
    let actual = multiply(a, b);

    expect(actual).toBe(expected);
});

it('Should throw an error if less than two parameters given', () => {
    //Jest exceptions ToThrow
    let a = 123;
    //make a function danger and test multiply with one paramter
    const danger = () => {
        multiply(a);
    }

    //throws an exception if one parameter
    expect(danger).toThrow()
})

it('Should throw an error if one or both parameters are not a number or in - ', () => {
    //Jest exceptions ToThrow
    let a = 'a';
    let b = 'b';
    //make a function danger and test multiply with one paramter
    const danger = () => {
        multiply(a, b);
    }
    //throws an exception if one parameter
    expect(danger).toThrow()
})

