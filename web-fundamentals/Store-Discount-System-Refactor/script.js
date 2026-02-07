function getDiscount(customer_type, purchase_amount) {
    let discountRate = 0;

    if (purchase_amount > 0) {
        if (customer_type === "member") {
            if (purchase_amount >= 1000) {
                discountRate = 20;
            } else if (purchase_amount >= 500) {
                discountRate = 10;
            } else {
                discountRate = 5;
            }
        } else {
            if (purchase_amount >= 1000) {
                discountRate = 10;
            } else if (purchase_amount >= 500) {
                discountRate = 5;
            } else {
                discountRate = 0;
            }
        }
        return discountRate / 100;
    } else {
        return 0;
    }
}

function calculateFinalPrice(purchase_amount, discountRate) {
    let finalPrice = purchase_amount - purchase_amount * discountRate;
    return {
        finalPrice: finalPrice,
        discountAmount: purchase_amount * discountRate,
        discountPercent: discountRate * 100
    };
}

const customerType = [
    { name: "Alice", customer_type: "member", purchase_amount: 1200 },
    { name: "Bob", customer_type: "member", purchase_amount: 800 },
    { name: "Charlie", customer_type: "member", purchase_amount: 400 },
    { name: "David", customer_type: "non-member", purchase_amount: 1500 },
    { name: "Eve", customer_type: "non-member", purchase_amount: 700 },
    { name: "Frank", customer_type: "non-member", purchase_amount: 300 },
    { name: "Grace", customer_type: "member", purchase_amount: -100 },
    { name: "Heidi", customer_type: "", purchase_amount: 600 }
]

for (let customer of customerType) {
    let discountRate = getDiscount(customer.customer_type, customer.purchase_amount);
    let result = calculateFinalPrice(customer.purchase_amount, discountRate);

    if (customer.customer_type !== "member" && customer.customer_type !== "non-member") {
        console.log(`Member type for ${customer.name} is invalid.`);
    }

    if (customer.purchase_amount <= 0) {
        console.log(`Purchase amount for ${customer.name} is invalid.`);
    } else {
        console.log(
            `${customer.name} (${customer.customer_type}) - Original: $${customer.purchase_amount} → Discount: ${result.discountPercent}% ($${result.discountAmount}) → Final: $${result.finalPrice}`
        );
    }
}