/* Section 1
JavaScript Total Recall  */


/*
1. How do we assign a value to a variable? A. With the assignment operator /*2. How do we change the value of a...
...
*/

/* How do we assign a value to a variable?*/
/*  JavaScript Variables can be declared in 4 ways:
        Automatically
        Using var
        Using let
        Using const */
var x = "Hello"; 
let y = "World";
const z = 100;
        
        // The above code lines are examples of declarations of variables. 
        // We use the variable syntax (var, let, const) followed by the name 
        // (x, y, z) then assign our value ("Hello", "World", 100) with the 
        // assignment operator "=".



/* How do we change the value of a variable?*/
        // assign 5 to variable score
        //The value of a variable may vary. Hence, the name variable.
let score = 15; 
console.log(score); // 15

        // change the value of score to 13
score = 13; 
console.log(score); // 13


/* How do we assign an existing variable to a new variable?*/
        // Reassign
let w= 20;
console.log(w, typeof w) // 20, number
w = "50";
console.log(w, typeof wx) // 350, string
        //By assigning our already declared variable a new value, this becomes the new value of the variable. 




/* Remind me, what are declare, assign, and define?*/
        //Declare:  the declaration of the variable happens with the help of the "var" keyword. //
       
            var noel; // where the Noel is the name of the declared variable.

        
            //Assign:  After the declaration, we  use the equal(=) sign to assign value to the variable:  //
        var h; // Declaration
        h = 10; // Initialization
        var f = 20; // Declaration and initialization in one step

       
        //Define:  JavaScript functions are defined using an expression. //
        const g = function (a, b) {return a * b};


/* What is pseudocoding and why should you do it?*/
        //Pseudocoding serves as a bridge between the abstract world of problem-solving and the concrete realm of coding. 
        
        //It involves creating a high-level description of the logic and steps required to solve a specific problem without getting bogged down by the complexities of a particular programming language. It allows us to list out each step in a sequential form, guiding us to a logical solution. 
        
        //You need to know when, where to use it

/* What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?  */
        
        //Spending the 10-15min pseudocoding before writing code allows for a quicker and less stressful construction phase.



/*  B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

/*Create a variable called firstVariable*/
        //let firstVariable;
        //firstVariable = "Hello World."

/*Assign it the value of the string "Hello World"*/
let firstVariable = "Hello World";

/*Change the value of this variable to some number*/
firstVariable = "25";

/*Store the value of firstVariable in a new variable called secondVariable*/
    //let secondVariable;
    //secondVariable = "Hello World, 25";

/*Change the value of secondVariable to any string.*/
let secondVariable = "Hello World , 25";
let newVariable = secondVariable.replaceAll("Happy", "Holiday");
console.log(newVariable);

/*What is the value of firstVariable?*/
        //Hello World

/*Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated. */
let myName = 'Lucia Remie';
let string = 'Hello, my name is';
let welcome = string + ' ' + myName;
console.log(welcome);



/* C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console  */


  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a !== b);
  console.log(c > d);
  console.log('Name' == 'Name');

  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
 
 console.log(false && false && false && false && false || true);
  
  console.log(false === false)
  
  console.log(e == 'Kevin');
  
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  
  console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
 
  console.log(48 !== '48');




/* D. The farm
/*Declare a variable animal. Set it to be either "cow" or something else*/
let animal = "cow";

/*Write code that will print out "mooooo" if the it is equal to cow*/
const mwoo = (a) => {
    return a.toLowerCase === "cow"? "mooooo" : "Hey! You're not a cow."
}

/*Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."*/
console.log(mwoo(animal));

/* Commit  */



/*   */



/*   */



/*   */



/*   */



/*   */



/*   */



/*   */



/*   */



/*   */