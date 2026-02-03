function multiplicationTableGenerator() {
    let num = 3;

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTableGenerator();

function sumOfFirstNNumbers() {
    let n = 5;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }
    console.log(`The sum of the first ${n} numbers is: ${total}`);
}
sumOfFirstNNumbers();

function arrayElementsPrinter() {
    let integers = [10, 20, 30, 40, 50];

    for (let i = 0; i < integers.length; i++) {
        console.log(`Array Element: ${integers[i]}`);
    }
}
arrayElementsPrinter();

function patternPrinter() {
    let row = 5;

    for (let i = 1; i <= row; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
}
patternPrinter();

function reverseArrayElements() {
    let integers = [1, 3, 5, 7, 9];

    for (let i = integers.length - 1; i >= 0; i--) {
        console.log(`Reversed Element: ${integers[i]}`);
    }
}
reverseArrayElements();