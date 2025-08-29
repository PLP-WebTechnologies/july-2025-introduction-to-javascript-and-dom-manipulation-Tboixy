// ==========================
// Part 1: Variables, Data Types, Conditionals
// ==========================

let userName = "Alice";
let age = 18;

// Conditional logic
if (age >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

console.log("Total with tax: ", calculateTotal(100, 0.15));

// Function 2: Format a greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(greetUser(userName));

// ==========================
// Part 3: Loops
// ==========================

// Loop 1: For loop — count down from 5
for (let i = 5; i > 0; i--) {
  console.log("Countdown: " + i);
}

// Loop 2: forEach loop — iterate over array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  console.log("Fruit: " + fruit);
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// 1. Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("greeting").textContent = "🎉 Greeting changed with JS!";
});

// 2. Toggle CSS class on button click
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.getElementById("greeting").classList.toggle("colorToggle");
});

// 3. Dynamically create a list and add it to the DOM
let listContainer = document.getElementById("listContainer");
let ul = document.createElement("ul");
["One", "Two", "Three"].forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
listContainer.appendChild(ul);
