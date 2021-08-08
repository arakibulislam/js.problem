// declare variable

var stringVariable = 'Akash';
var numberVariable = 28;
var booleanVariable = true;

// let & const 

const myName = 'akash';
let myAge = 22;
myAge = 23;
console.log(myAge);

// math the variable 

const num1 = 20;
const num2 = 10;
const sum = num1 + num2;
const subtract = num1 - num2;
const multification = num1 * num2;
const divided = num1 / num2;
console.log(sum);
console.log(subtract);
console.log(multification);
console.log(divided);

// comparison 2 variable

const numOne = 12;
const numSecond = 4;
console.log(numOne > numSecond);
console.log(numOne < numSecond);
console.log(numOne == numSecond);
console.log(numOne != numSecond);
console.log(numOne <= numSecond);
console.log(numOne >= numSecond);

// conditions

let myMoney = 2000;
let mobilePrice = 3000;
let discount = true;

if (myMoney >= mobilePrice || discount == true) {
   console.log('i will get the mobile');
}
else {
   console.log('dont buy the mobile');
}

// while Loop 

let numbers = 7;
while (numbers <= 19) {
   // console.log(numbers);
   numbers = numbers + 2;
}

//  array

let myArray = [12, 23, 12, 13, 34, 56, 6, 1, 23, 4, 656, 77, 543, 23, 24, 4, 5, 4, 23, 45, 6];
myArray[4] = 1212;
myArray.push(99, 99);
myArray.pop();
console.log(myArray);

// array in loop

let mySecArrary = [12, 86, 3434, 654, 23, 5, 86, 90, 1123, 4567, 80, 2, 45, 33];
for (let i = 0; i < mySecArrary.length; i++) {
   const getArrary = mySecArrary[i];
   if (getArrary > 80) {
      console.log(getArrary);
   }
}

// function

function myNums(no1,no2,no3){
   const totalNo = no1*no2*no3;
   return totalNo;
}
console.log(myNums(2,3,4));

// object

let mobile ={
   name: 'iphone',
   price: 98000,
   color : 'red'
}
mobile.name = 'samsung';

console.log(mobile);





