// here is the code for my final project in JS for the meta cert.
// an array of objects
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "vegetarian pizza", price: 6.45 },
];

const tax = 1.2;

//this will loop over al of the objects in the array and also check to see if tax boolean variable is true if yes
// it will multiply the object price by tax.
function getPrice(taxBoolean) {
  for (obj of dishData) {
    let finalPrice;
    if (taxBoolean) {
      finalPrice = obj.price * tax;
    } else if (!taxBoolean) {
      finalPrice = obj.price;
    } else {
      console.log("You need to pass a boolean to the getPrice call!");
      return;
    }
    console.log("Dish " + foodItems.name + "Price: $" + finalPrice);
  }
}
// this will run /print the get price function first then will check to see what your discount is based on the number of people
function getDiscount(taxBoolean, guests) {
  getPrice(taxBoolean);
  if (typeof guests == "number" && 0 < guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else {
      discount = 10;
    }
    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// calling the function getDiscount  since the getDiscount function runs the getPrice function for us we only
// need to call the getDiscount function
getDiscount(true, 2);
getDiscount(false, 10);
