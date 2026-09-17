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