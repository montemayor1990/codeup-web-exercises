// "use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
const sayHello = (name) => {
    return `Hello, ${name}`
};

console.log(sayHello("Codeup!"));


//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */


const myName = "David"
const helloMessage = sayHello(myName)


console.log(helloMessage)
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
sayHello("David")

//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
const isTwo = (number) =>  {
    return number === 2
}

console.log(isTwo(3))
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.

isTwo(random)
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
console.log(random)
// //
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip

const tipPercentage = 0.20
const totalBill = 20
//  *
const calculateTip = (tip) => {
    return tip * tipPercentage
};

console.log(calculateTip(totalBill))
//**create two parameters like you first started

//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
let userInput1 = prompt('What was the total Bill?');
console.log(`The user entered: ${userInput1}`);
let userInput2 = prompt('What percentage would you like to tip?');
console.log(`The user entered: ${userInput2}`);
let tipAmount = userInput1 * userInput2
alert(`This is the suggested tip ${tipAmount}`);



//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.

 let originalPrice = 5000;
 let discountPercent = .2; // 20%

const applyDiscount = (price, discount) => {
    return originalPrice * discountPercent
}
console.log(applyDiscount(originalPrice))
//  *
//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */