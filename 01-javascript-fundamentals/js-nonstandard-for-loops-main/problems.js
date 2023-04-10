function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    result = [];
    for(let i=1; i < arr.length; i+=2){
        result.push(arr[i]);
    }
    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    result = [];
    for(let i = arr.length - 1; i > 0; i--){
        if(i % 2 != 0){
            result.push(arr[i]);
        }
    }
    return result;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    result = [];
    for(let i = 1; i < arr.length; i*=2){
        result.push(arr[i]);
    }
    return result;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    result = [];
    for(let i = 1; i < arr.length; i*=n){
        result.push(arr[i]);
    }
    return result;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    result = [];
    for(let i=0; i < arr.length/2; i++){
        result.push(arr[i]);
    }
    return result;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    result = [];
    for(let i = arr.length - 1; i >= arr.length/2; i--){
        result.push(arr[i]);
    }
    return result.reverse();
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
