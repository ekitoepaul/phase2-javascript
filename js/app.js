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
let itemcount = 0;
total += tomatoPrice; // 1 kg tomatoes
itemcount++;
total += onionPrice; // 1 kg onions
itemcount++;
total += sukumaPrice * 3; // 3 bunches of sukuma
itemcount += 3;
total += potatoPrice * 2; // 2 kg potatoes
itemcount += 2;

console.log("Receipt from", stallName);
console.log("Customer:", customerName);
console.log("Total to pay: KSh", total);
console.log("Number of items:", itemcount);

// Finish yesterday's egg exercise

//Eggs details
const eggs = 95;
const eggsPerTray = 30;
const pricePerEgg = 20; // KES 20 per egg

// Calculate full trays and loose eggs

const fullTrays = Math.floor(eggs / eggsPerTray); // 1
const looseEggs = eggs % eggsPerTray; // 17

// Calculate checkout total before VAT
const checkoutTotal = eggs * pricePerEgg;

// Add 16% VAT
const vat = checkoutTotal * 0.16;
const finalTotal = checkoutTotal + vat;

// Random receipt number from 1000 to 9999
const receiptNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

console.log("EGG EXERCISE");
console.log("----------------------------");
console.log("Total eggs:", eggs);
console.log("Eggs per tray:", eggsPerTray);
console.log("Full trays:", fullTrays);
console.log("Loose eggs:", looseEggs);
console.log("Checkout total before VAT: KSh", checkoutTotal);
console.log("VAT (16%): KSh", vat);
console.log("Final total to pay: KSh", finalTotal);

console.log("Receipt number:", receiptNumber);
console.log("----------------------------");
console.log(pricePerEgg, "per egg");
console.log(checkoutTotal, "before VAT");
console.log(finalTotal, "after VAT");
console.log(receiptNumber, "receipt number");

// Ask the customer for the quantity of onions
let quantityInput = prompt("Enter the quantity of onions:");

// Price per onion
const pricePerOnion = 20;

// Delivery fee
const deliveryFee = 100;

// ==================================
// STEP 1: Demonstrate the BUG
// ==================================

// Calculate without using Number()
let wrongCost = quantityInput * pricePerOnion + deliveryFee;

console.log("BUG - Cost without Number(): KSh " + wrongCost);

// ==================================
// STEP 2: FIX THE BUG
// ==================================

// Convert the input from string to number
let quantity = Number(quantityInput);

// Check whether the input is a valid number
if (Number.isNaN(quantity) || quantity <= 0) {
  console.log("Invalid quantity. Please enter a valid number.");
} else {
  // Calculate the correct cost
  let totalCost = quantity * pricePerOnion + deliveryFee;

  console.log("Quantity of onions: " + quantity);
  console.log("Cost of onions: KSh " + quantity * pricePerOnion);
  console.log("Delivery fee: KSh " + deliveryFee);
  console.log("Total cost: KSh " + totalCost);
}

// Store the checkout total
let checkoutTotal = 1200;

// Check whether the customer qualifies for free delivery
if (checkoutTotal >= 1000) {
  console.log("Congratulations! You qualify for FREE delivery.");
} else {
  console.log("You do not qualify for free delivery. Delivery fee applies.");
}

// Print the checkout total
console.log("Checkout total: KSh " + checkoutTotal);

// Test 1: Strict equality
console.log("'10' === 10:", "10" === 10);

// Test 2: Loose equality
console.log("'10' == 10:", "10" == 10);

// Test 3: Greater than or equal to
console.log("10 >= 10:", 10 >= 10);

// Test 4: Case-sensitive string comparison
console.log("'Kisumu' === 'kisumu':", "Kisumu" === "kisumu");
