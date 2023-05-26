// Definitions:

// Variable:
        // It stores data temporarily in a computer's memory.  (containers for storing information)
// Value:
        // It is assigned to a variable. (It is a data type)
// Data type:
        // The type of value a variable has assigned to it. (number, boolean, string, etc)
// Initialization:
        // It is storing a value in a variable.
// Tell me the difference between let, var, and const:
        // let = used to declare a block scoped variable.
        // var = used to reassign values. (with hoisting behaviour)(declares globally)
        // const = used if you don't want a variable to change.
// What is a variable scope:
        // It determines the accessibility of variables.
// When can you decide when to use a for or while, forEach and do while loop:
        // Use for loop to repeat a specific code a known number of times and use while loop to repeat a specific code a unknown amount of times.
        // Use forEach loop when you want to loop the values in an array.
        // Use do while loop when array needs to be executed at least one time.
// Define hoisting and variable scoping:
        // Hoisting is whe you move function declarations to the top of the file.
        // It determines the accessibility of variables.

// How to create a function called fullName that returns your full name and displays it on the console.



// Question 1
function fullName(name) {
    console.log(name);
};
fullName("Keeno Fourie");


// Question 2
let firstName = "Keeno";
let lastName = "Fourie"; 
let age = 18;
let subjects = [
    "Math",
    "English",
    "Afrikaans",
    "Life Orientation",
    "Physical Science",
    "Life Science",
    "Accounting",
];
let address = "46 Clover Crescent, Silvertown, Athlone, Cape Town, South Africa"

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(subjects);
console.log(address);


// Question 3
function calculate() {
        
        
        let num1 = +document.querySelector(".num1").value
        let num2 = +document.querySelector(".num2").value
        let ops = document.querySelector(".ops").value
        let result = document.querySelector(".input_answer")
        
        if(ops == "+"){
                result.innerText = num1 + num2;
            }
            
        else if(ops == "-"){
                result.innerText = num1 - num2;
            }
            
        else if(ops == "/"){
                result.innerText = num1 / num2;
            }
        
        else if(ops == "*"){
                result.innerText = num1 * num2;
            }
        
}