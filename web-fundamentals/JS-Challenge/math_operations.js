function totalCost() {
    let item1 = 10;
    let item2 = 20;
    let item3 = 30;

    let totalCost = item1 + item2 + item3;
    console.log(`The total cost of the items is ${totalCost}.`);
}
totalCost();

function average() {
    let num1 = 5;
    let num2 = 10;
    let num3 = 15;

    let average = (num1 + num2 + num3) / 3;
    console.log(`The average is: ${average}.`);
}
average();

function oddOrEven() {
    let num = 5;

    if (num % 2 === 0) {
        console.log(`${num} is an even number.`);
    }
    else {
        console.log(`${num} is an odd number.`);
    }
}
oddOrEven();

function calculateDiscounts() {
    let originalPrice = 100;
    let discountPercentage = 20;

    let discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;
    console.log(`The discounted price is ${discountedPrice}.`);
}
calculateDiscounts();

function reversePercentageCalculation() {
    let finalPrice = 80;
    let discountPercentage = 20;
    let originalPrice = finalPrice / (1 - discountPercentage / 100);
    console.log(`The original price before the discount was: ${originalPrice}.`);
}
reversePercentageCalculation();