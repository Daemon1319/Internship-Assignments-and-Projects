// Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(5, 3, add));
console.log(calculate(4, 2, multiply));
console.log(calculate(10, 2, subtract));
console.log(calculate(32, 4, divide));

// Exercise 2
function delayedMessage(message, delay, callback, callback2) {
    setTimeout(() => {
        callback(message);
    }, delay);
    callback2("Will show first");
}

delayedMessage("Hello, world!", 2000,
    function (msg) { console.log(msg); },
    function (msg) { console.log(msg); }
);

// Exercise 3
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break;
        }
    }
}

repeatTask(10,
    function (index) {
        console.log("Iteration:", index);
        if (index === 5) {
            console.log("Stop");
            return false;
        }
    }
);