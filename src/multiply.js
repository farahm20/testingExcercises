function multiply(a, b) {
    if( b === undefined || a === undefined) {
        throw new Error('Please enter two numbers as parameters!');
    }
    if((typeof a !== 'number') || (typeof b !== 'number') ) {
        throw new Error('Please make sure both parameters are numbers');
    }

   return a * b; 
}

module.exports = multiply; 