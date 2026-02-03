let customer_type = "member";
let purchase_amount = 1200;

let discount = 0;

if (purchase_amount > 0) {
    if (customer_type === "member") {
        if (purchase_amount >= 1000) {
            discount = 20;
        } else if (purchase_amount >= 500) {
            discount = 10;
        } else {
            discount = 5;
        }
    } else {
        if (purchase_amount >= 1000) {
            discount = 10;
        } else if (purchase_amount >= 500) {
            discount = 5;
        } else {
            discount = 0;
        }
    }

    let final_amount = purchase_amount - (purchase_amount * discount / 100);

    console.log(`Customer Type: ${customer_type}`);
    console.log(`Purchase Amount: $${purchase_amount}`);
    console.log(`Discount Applied: ${discount}%`);
    console.log(`Final Price: $${final_amount}`);
} else {
    console.log("Invalid purchase amount.");
}