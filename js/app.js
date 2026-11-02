// Mama Mboga Fresh: first version of the checkout
const stallName = "Mama Mboga Fresh";
const customerName = "Wanjiru";

// Prices in shillings
const tomatoPrice = 120; // per kilo
const onionPrice = 80; // per kilo
const sukumaPrice = 20; // per bunch
const potatoPrice = 90; // per kilo
const deliveryFee = 50; // flat fee

let total = 0;
total = total + tomatoPrice; // 1 kg tomatoes
total = total + onionPrice; // 1 kg onions
total = total + sukumaPrice * 3; // 3 bunches of sukuma
total = total + potatoPrice * 2; // 2 kg potatoes

console.log("Receipt from", stallName);
console.log("Customer:", customerName);
console.log("Total to pay: KSh", total);
