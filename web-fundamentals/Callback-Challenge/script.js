// Custom Map Function
function customMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function (num) { return num * 2; });
console.log(doubled);


// Filter Function
function filter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let result1 = filter([1, 2, 3, 4, 15], function (val) { return val < 10; });
console.log(result1);


// Some Function
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

let result2 = some([1, 2, 3, 4], function (val) { return val > 5; });
console.log(result2);


// Every Function
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

let result3 = every([1, 2, 3], function (val) { return val > 0; });
console.log(result3);


// Reduce Function
function reduce(array, callback) {
    let accumulated = array[0];
    for (let i = 1; i < array.length; i++) {
        accumulated = callback(accumulated, array[i]);
    }
    return accumulated;
}

let sum = reduce([1, 2, 3], function (acc, num) { return acc + num; });
console.log(sum);


// Includes Check
function includes(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

let result4 = includes([1, 2, 3], function (val) { return val === 2; });
console.log(result4);