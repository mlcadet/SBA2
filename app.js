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




/* E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."  */

function canDrive (name, age) {
    let person = {
        name: "John",
        age: 25,
    };
    if (person.age >=16) {
        return person.name + " Here are the Keys.";
    }
    else {
        return person.name + " Sorry, you're too young.";
    }
}
canDrive();
console.log(canDrive());


/*  II. Loops
Remember: USE letwhen you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++) */




/* II. LOOPS


Remember: USE letwhen you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)*/

/*A. The basics
/*Write a loop that will print out all the numbers from 0 to 10, inclusive*/
for (let i = 0; i < 11; i++){
    console.log("Number" + i);
    if (i == 11) {
        break;
    }
}

/*Write a loop that will print out all the numbers from 10 up to and including 400*/

    for (let i = 10; i < 401; i++) {
    console.log(i);
    }

/*Write a loop that will print out every third number starting with 12 and going no higher than 4000*/

let num = 3;
while(num <= 4000) {
    //log each number
    console.log
    // increase by 3
    num = num + 3
}



/* 
B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"  */


for (let x = 0; x <= 100; x++) {
// Checking if the current number is 0
    if (x === 0) {
        console.log(x + " is an even number");
    }
    // Checking if the current number is even
    else if (x % 2 === 0) {
        console.log(x + " is an even number");
    }
    // If the number is not 0 and not even, it is odd
    else {
        console.log(x);
    }
};



/*C. Give me Five   */
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five/

for (k=1; k <= 100; k++){
   
    if( k % 5 == 0 ){
        console.log("I found a 5. High five");
        
    }
    else {
        if( k % 10 == 0 ){
        console.log("I found a 10. High five");
            }
    else {
         console.log(k);
    }
    }
    };



/* Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three  */

for (let m=1; m <= 100; m++){
    if( m % 3 && m % 5 ) {
        console.log(m);
    } else {
        if( m % 3 == 0 ) {
            console.log("I found a 3. Three is a crowd");
        }
        if( m % 5 == 0 ) {
            console.log("I found a 5. High five!");
        }
    }
    console.log(m);
};



/* D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.  */



/* D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.  */

class Bank_Account {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactions.push(`Deposited: $${amount}`);
        console.log(`Deposited: $${amount}`);
    }

}


/*  III. Arrays & Control flow*/



/* A. Talk about it:
What are the things in an array called?*/
    //The things in the array are called properties. They are inside of the braces

/* Do Arrays guarantee those things will be in order?*/
    //In cases where you have the need for a certain type of ordering of object entries array (returned by the Object.entries() method), you can simply sort the resulting array. This would guarantee the order you expect.
    //You can use a Map, instead of an object literal, in which the order is guaranteed. It uses insertion order:


/* What real-life thing could you model with an array? */

let shoes = ["high heel", "flats", "sneakers"];

shoes.sort((a, b) => {
  let nameA = a.toUpperCase(); 
  let nameB = b.toUpperCase();

  if (nameA < nameB) {return -1;}
  if (nameA > nameB) {return 1;}

  return 0;
}); 

console.log(shoes); // [high heel, flats, sneakers]



/*  B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes  */
let myQuotes = ["So many books, so little time.", "Be the change that you wish to see in the world..", "If you tell the truth, you don't have to remember anything."];



/* C. Accessing elements*/
/*Given the following array const randomThings = [1, 10, "Hello", true]*/
const randomThings = [1, 10, "Hello", true];
/*How do you access the 1st element in the array?*/
const year = randomThings[0];
console.log(year); //output: 1

/*Change the value of "Hello"to "World"*/
randomThings[2] = "World";
console.log(randomThings);

/*Check the value of the array to make sure it updated the array. How? Why, yes! console.log();  */
        //CHECK - IT WORKS



/*  D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]*/
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
/* What would you write to access the 3rd element of the array?*/
        //array indices start at 0, meaning the first element is at index 0, the second element is at index 1, and so forth.
        const name = ourClass[2];
        const lame = ourClass[ourClass.length];
        console.log(name);
/* Change the value of "Github" to "Octocat"*/
        ourClass.splice(3, 2, "Octocat");
        console.log(ourClass);
/* Add a new element, "Cloud City" to the array  - Using push or unshift method*/
        const ourGlass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]        
        ourGlass.push('Cloud City');
        console.log(ourGlass);


/* E. Mix It Up*/
/*Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.*/

/*Given the following array: const myArray = [5, 10, 500, 20]*/
        const myArray = [5, 10, 500, 20];

/*Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.*/
        let yoArray = [...myArray, 'Aegon'];
        console.log(yoArray);

/*Remove the 5from the beginning of the array. Using */
        yoArray.splice(0, 1);
        console.log(yoArray);

/*Add the string "Bob Marley"to the beginning of the array.*/
        yoArray.unshift('Bob Marley');
        console.log(yoArray);

/*Remove the string of your choice from the end of the array.*/
        yoArray.pop();
        console.log(yoArray);
/*Reverse this array using Array.prototype.reverse().   */
        yoArray.reverse();
        console.log(yoArray);
/* Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?*/ 
        // Yes the array is mutated. The reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.  Also the reverse() method preserves empty slots.*/




/* F. Biggie Smalls*/
/* Create a variable that contains an integer.*/
        let yourBiggie = 25.9;
        console.log(yourBiggie);            // 25.9
        console.log(typeof yourBiggie);     // Number

/* Write an if ... elsestatement that:*/
/*console.log()s "little number" /*if the number is entered is less than 100 */
/*console.log()s /*big numberif the number is greater than or equal to 100.  */
        if (yourBiggie >= 100) {
            console.log("Little number");
        }
        else  {
            console.log("Big number");
        }
        


/* G. Monkey in the Middle*/
/* Write an if ... else if ... elsestatement:*/
        let yourMonkey = 2;

/* console.log()little numberif the number entered is less than 5.*/
/* If the number entered is more than 10, log big number.*/
/* Otherwise, log "monkey".   */
        if (yourMonkey <= 5) {
        console.log("Little number");
        }
        else  {
        console.log("Big number");
        }



/* // Kristyn's closet is more complicated. Check out this nested data structure!!  */

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

/* 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.*/

        console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

/* 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".*/
  
        kristynsCloset.splice(6, 0, 'raybans');
        console.log(kristynsCloset);

/* 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.*/
         kristynsCloset[5] = "stained knit hat";
         console.log(kristynsCloset);


/* 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.*/

         console.log(thomsCloset[0][2])


/* 5. In the same way, access one item from Thom's pants array.*/

            console.log(thomsCloset[1][0]);

/* 6. Access one item from Thom's accessories array.*/

            console.log(thomsCloset[2][1]);

/* 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"*/

            console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");

/* 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.  */
            thomsCloset[1] = "Footie Pajamas";
            console.log(kristynsCloset);





/* IV. Functions  */

/* A. printGreeting
Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
Like so?*/

        const printGreeting = (name) => {
            console.log("Hello there,"  + name + "!");
        };
        console.log(printGreeting("Slimer"));
        
/*   B. printCool
Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool. */

     let printCool = (value) => value.split("").reverse().join("");
            console.log(printCool("Captain Reynolds is cool"))
            
        
/*C. calculateCube*/
/* Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.*/

const calculateCube = (cube) => {
    let sum =cube * cube * cube
    return sum
}
console.log(calculateCube(5));


/* D. isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.  */

        let isVowel = (wel) => {
            if (wel === "a", "b", "c", "e", "i", "o") {
                console.log("true")
            } 
            else {
                console.log("false")
            }
        }; 
        console.log(isVowel("a"));


/* E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.  */
            let getTwoLengths = (name1, name2) => {
                return [name1.length, name2.length];

            };
            console.log(getTwoLengths("Hank", "Hippopopalous"));


/*  F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. */

            let getMultipleLengths = (multi) => {
                return [multi.length];
            };

            console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


            
            let getsMultipleLengths = (multi) => {
                let wordCount = 0;
                for (let i = 0; i< multi.length; i++);
                const char = multi[i];

                if (/[a-zA-Z]/.multi(char)) {
                    wordCountCount++;
                }

            }
            console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


            

/* G. maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.  */

        function maxOfThree(x, y, z) 
        {
             maxVal = 0;
            if (x > y)
        {
            maxVal = x;
        }    else
        {
            maxVal = y;
        }
            if (z > maxVal) 
        {
            maxVal = z;
        }
            return maxVal;
        }

            console.log(maxOfThree(6, 9, 1));




/* H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.  */
            const cleanLongestWord = (arr)  => {
                let longest = '';
                arr.forEach(str => {
                    if (str.length > longest.length) {
                        longest = str;
                    }
                });
                return longest;
            };
            const clean = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];
            console.log(cleanLongestWord(clean));
        


/* Objects  */

/* Objects
/* Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.*/

/* A. Make a user object*/
/* Create an object called user.*/
/* Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.*/

            let purchased = [];        
            let username = [
              [  
                "name", 
                "email", 
                "age",
            ],[
                "Phil", 
                "yaya@vv.com", 
                25
            ]
        ];                     
        
/* B. Update the user
/* Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.*/
            username[1][1] = "mama@vv.com";
                console.log(username);

/* Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++*/
          
           

/* C. Adding keys and values*/
/* You have decided to add your user's location to the data that you want to collect.*/
/* Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).*/

           username[0][1] = "location", "San Francisco";
                console.log(username);      



/* D. Shopaholic!*/
/* Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.*/
            let addPurchased = ["Apple", "Grapes"]
            addPurchased.push("carbohydrates");
            console.log(addPurchased);  

/* Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.*/
            addPurchased.push("peace of mind");
            console.log(addPurchased); 


/* Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.*/
            addPurchased.push("Merino jodhpur");
            console.log(addPurchased); 

/* Console.log just the "Merino jodhpurs" from the purchasedarray.  */   

            console.log(addPurchased[addPurchased.length - 1]);



/* F. Loops  */
/*  Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.*/

    let purchasedArray = ['shoes', 'dresses', 'pants', 'sun glasses'];
    let friendPurchasedArray = ['pants', 'shirts', 'socks', 'jeans'];
    for (let i = 0; i < purchasedArray.length; i++){
        console.log(purchasedArray[i]);
    }

/*Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console. --  
            NOT SURE WHAT TO DO OVER HERE  --------  I'LL USE A FOR ... OF*/
            for (let i = 0; i < friendPurchasedArray.length; i++){
                console.log(friendPurchasedArray[i]);
            }
        


/* G. Functions can operate on objects */
/*Write a single function updateUser that takes no parameters. When the function is run, it should:
/*it should increment the user's age by 1 */
/*make the user's name uppercase */

        let updateUser = {
            name: 'John',
            age: 25,
         };
  
         function increaseAge(obj) {
            obj.age += 1;
  
        }
  
        increaseAge(updateUser);
  
        console.log(updateUser);


/*The function does not need a return statement, it will merely modify the user object. */


/*Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument. */



/*   */