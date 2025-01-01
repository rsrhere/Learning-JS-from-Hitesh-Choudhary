let score = "32"
let name1 = "Rahul"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(typeof Number(name1));

// console.log(Number(name1))

// "32" => 32
// "Rahul" => NaN
// "Rahul123" => NaN


// true => 1 and false => 0

let isLoggedIn = "Hitesh"
let booleanisLoggedIn = Boolean(isLoggedIn)

let isNumber = 35
let booleanisNumber = Boolean(isNumber)

// console.log(typeof booleanisLoggedIn, booleanisLoggedIn);
// console.log(typeof booleanisLoggedIn, booleanisNumber);

/*
Boolean conversion:-
-String => true
- "" => false
- 1 => true and 0 => false
-otherNumbers => true
*/

let isTrue = true
let isFalse = false
let stringisNumber = String(isNumber)
let stringIsTrue = String(isTrue)

// console.log(typeof stringisNumber, stringisNumber);
// console.log(typeof stringIsTrue, stringIsTrue);

/*
String conversion:
- 35 => "35"
- true => "true"
*/

// **Operations**********************

let value = 28
let negValue = -28

// console.log(negValue);
// console.log(2+2);
// console.log(17-3);
// console.log(4*9);
// console.log(7/5);
// console.log(3**3);
// console.log(73%3);

let str1 = "Rahul"
let str2 = "Abhishek"

let str3 = str1 + str2

// console.log(str3);

// real problem starts when we try to operate between different datatypes

// console.log("3"+2);
// console.log(3+"2");
// console.log("3"+2+2);
// console.log(3+2+"2");

// console.log(3-2+8/5*5+6%4);//BODMAS

// console.log(+true);
// console.log(+"");

// let num1, num2, num3
// num1 = num2 = num3 = 4+5

// console.log(num1,num2,num3);

//the above code is an example of bad coding practice

// let gameCounter = 5n
// let r = gameCounter++;
// console.log(gameCounter, r);

// //Boolean Conversion*******
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(28));
// console.log(Boolean(-28));
// console.log(Boolean(+0));
// console.log(Boolean(-0));
// console.log(Boolean(2.8786));
// console.log(Boolean(-2.8783),"\n");
// console.log(Boolean("rahul"));
// console.log(Boolean("1"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

// it is very easy to understand Boolean conversion, just remember the false cases(the things which show nothingness)
// like 0(and all other type of zeroes), false, null, undefined, empty string, NaN

//Number conversion********

console.log(Number(1),Number(0),Number(28),Number(-5),Number(2.66),Number(-2.77));
console.log(Number("rahul",),Number(""),Number("123"));
console.log(Number(false),Number(true));
console.log(Number(null),Number(undefined));
console.log(String(null));