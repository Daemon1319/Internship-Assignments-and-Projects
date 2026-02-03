function gradingSystem() {
    let score = 95;

    if (score >= 90) {
        console.log("Grade A");
    } else if (score >= 80) {
        console.log("Grade B");
    } else if (score >= 70) {
        console.log("Grade C");
    } else if (score >= 60) {
        console.log("Grade D");
    } else {
        console.log("Grade F");
    }
}
gradingSystem();

function weatherAdvisor() {
    let temperature = 22;

    if (temperature > 30) {
        console.log("It's hot outside. Stay hydrated");
    } else if (temperature >= 16) {
        console.log("The weather is nice. Enjoy your day!");
    } else if (temperature >= 0) {
        console.log("It's cold outside. Wear a jacket.");
    } else {
        console.log("It's freezing outside! Bundle up!");
    }
}
weatherAdvisor();

function eligibilityChecker() {
    let age = 22;

    if (age >= 18) {
        console.log("You are eligible for this activity.");
    } else if (age >= 13) {
        console.log("You need parental permission.");
    } else {
        console.log("You are too young for this activity.");
    }
}
eligibilityChecker();

function ticketPriceCalculator() {
    let age = 32;
    let isMember = true;

    if (age < 12) {
        console.log("Ticket Price: Free");
    } else {
        (isMember) ? console.log("Ticket Price: $10") : console.log("Ticket Price: $15");
    }
}
ticketPriceCalculator();

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2000));