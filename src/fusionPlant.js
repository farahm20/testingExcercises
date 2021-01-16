function isWaterBoiling(degrees) {
    if(typeof degrees !== 'number'){
        throw new Error('Illegal input');
    } 
    else if(degrees >= 100){
        return true;
    } else {
        return false;
    }
}

module.exports = isWaterBoiling;

/**
 * if you get an error recieved function did not through, 
 * it means that the code/codition for the the corresponding test 
 * is missing
 */