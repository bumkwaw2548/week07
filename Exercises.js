// Order calculator
// Calculate subtotal, 7% VAT, and total.
const vat = 0.07;

let price = 100;
let quantity = 3;

let subtotal = price * quantity;
let vatAmount = subtotal * vat;
let total = subtotal + vatAmount;

document.write("<h2>1. Order Calculator</h2>");
document.write("<p>Price: $" + price + "</p>");
document.write("<p>Quantity: " + quantity + "</p>");
document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
document.write("<p>VAT 7%: $" + vatAmount.toFixed(2) + "</p>");
document.write("<p>Total: $" + total.toFixed(2) + "</p>");

// Delivery rule
// Use if / else if / else to decide the delivery charge.
let orderTotal = 450;
let deliveryFee;

if (orderTotal >= 500) {
    deliveryFee = 0;
} else if (orderTotal >= 300) {
    deliveryFee = 30;
} else {
    deliveryFee = 50;
}

document.write("<h2>2. Delivery Rule</h2>");
document.write("<p>Order total: $" + orderTotal.toFixed(2) + "</p>");
document.write("<p>Delivery fee: $" + deliveryFee.toFixed(2) + "</p>");

// Cart total
// Loop through an array of prices and sum them.
let prices = [100, 50, 75, 25];
let cartTotal = 0;

for (let i = 0; i < prices.length; i++) {
    cartTotal += prices[i];
}

document.write("<h2>3. Cart Total</h2>");
document.write("<p>Prices: " + prices + "</p>");
document.write("<p>Cart total: $" + cartTotal.toFixed(2) + "</p>");

// Discount function
// This function calculates the discount amount.
function calculateDiscount(amount, percentage) {
    let discount = amount * (percentage / 100);
    return discount;
}

let shoppingAmount = 800;
let discountPercent = 10;

let discountAmount = calculateDiscount(shoppingAmount, discountPercent);
let finalAmount = shoppingAmount - discountAmount;

document.write("<h2>4. Discount Function</h2>");
document.write("<p>Amount: $" + shoppingAmount.toFixed(2) + "</p>");
document.write("<p>Discount: " + discountPercent + "%</p>");
document.write("<p>Discount amount: $" + discountAmount.toFixed(2) + "</p>");
document.write("<p>Final amount: $" + finalAmount.toFixed(2) + "</p>");