// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A string variable called name is declared with the value of Dane.
// Using a conditional if statement to see if the name variable is exactly equal to Mary.  If so the console would output "Hi, Mary!"
// Since this is false, it moves to the else statment which would give us the output "How do you do?" in our console log.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// A variable with the name secret is declared but has not yet been given a value.
// A variable named code is declared and given a number value of 123.
// A conditional statment says if the code variable is an exact match to 123, then the secret variable will be given a string value of super and the code variable will multiply by 2.
// An additional conditional if statment says if the code variable is greater than 250, then the secret variable will have a value of duper.
// Since the code value is 246,  the secret variable will output "super" on the console log.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// A boolean variable called isStudent is declared with a value of true.
// A number variable called age is declared with a value of 34.
// A number variable called zip is declared with a value of 55407
// A conditional statment is written stating if the isStudent variable is true AND the zip variable is greater than 80000, then the console log would output `You're a student on the West Coast!`
// Since this is false, it would move onto the else if statement of if isStudent equals false OR the age value is smaller then 30 the console log would output 'What are your hobbies?'
// Since this is also false, it moves to the next else if of if the isStudent variable is true, then the console log would output "Welcome to Prime!"
// This else if statment is true so the console log would output "Welcome to Prime!"
// Since the previous statement was true the final else statment is irrelevent.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to blue
let colorOne = 'red';
// FIX - colorTwo should be set to red
let colorTwo = 'blue';
let mix = true;

// FIX - Only colorOne has changed its value to purple.  Need to change the value of colorTwo to purple as well.
if (mix === true) {
  colorOne = 'purple';
// FIX - colorTwo = "purple";
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the if statment should written with && and not || since BOTH conditions of temp and time must be true, not one or the other.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


if(minAge <= age) {
// FIX - console log should read 'enter' if age is greater than or equal to minAge
  console.log('no entry');
} else {
// FIX - This log should output 'no entry' because age would be less than minAge
  console.log('enter');
}
*/
