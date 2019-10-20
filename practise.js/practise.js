<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>   
<script>
  //You can't redeclare let variable but they can be reassigned
  // const can't be redeclared or reassigned.unless it contains an array or object, you can mutate it


//call and apply are alternative methds to invoking questions
let name = "Femi";

console.log(name.length);

let favNum = 50;
console.log(favNum.toString());

if (true) /*expression*/{
console.log('this is true!')
}
console.log('this will run anyway');

//Comparison operators
//< <= >= === !=
if (100 > 1) /*expression*/{
console.log('this is true!')
}


//Another example
 let age = 21;
 
 if (age >= 21) {
 console.log('happy drinking')
 }
 
 //function of If 
 function topSpeed(speed){
 if (speed > 10){
 console.log ('Wooooooo');
 }else
 console.log ('Duhhhhhh');
 }
 topSpeed(15);
 //license
 
 function exerciseFour(age){
  let typeOfLicense;

  if (age >= 16){
    return 'Full License';
  }
  else if (age === 15){
    return 'Permit';
  }
  else {
    return 'None';
  }
  return typeOfLicense;
}

//A loop - a block of code that runs until a condition has been meta
for (let i =0; i < 10; i++){
//declaration; conditional statement; increment
console.log("This is i:", i)
}

function sayHello(friendsName){
console.log ('Hello, my name is ' + friendsName + '!');
}
sayHello('Ayo');
sayHello('Femi');
sayHello('Tinu');

//an array(is an object) is a data structure consisting of collection of elements
let names = ['Tola', 'Femi', 'Tayo', 'Ayo', 'Dele'];
// console.log(names[3]);
// names[2] = 'Teni';
let oldNames = names.pop();
console.log(names);
// Accessing the last item in the array
console.log(names[names.length-1]);
//array property .length(length of array)
//Array methods .push(add to the end) .pop(removes from the end) .shift(remove 1st item) .unshift(add to the beginning)
//Looping over an array
let cars = ['Ford', 'Mercedes', 'Tesla', 'Toyota', 'BMW'];
cars.length
for (let i = 0; i < cars.length; i++){
console.log(cars[i] + " is a car")
}
// Object - unordered list of key - value pairs
let user = {
  name: 'Tola',
  age: '24',
  gender: 'female',
  email: 'atillie@gmail.com'
}
//Just like in an array you can change items in an object
console.log(user.age);

// Method
// let friendship = {
//   name: 'Tola',
//   age: '24',
//   gender: 'female',
//   email: 'atillie@gmail.com',
//   saysHello: function(){
//     console.log('Hi!')
//   },
//   saysBye: function(){
//     console.log('Bye!')
//   }
// };

// friendship.saysHello()
// friendship.saysBye()

//this
let friendship = {
  name: 'Tola',
  age: '24',
  gender: 'female',
  email: 'atillie@gmail.com',
  saysHi: function(){
    console.log(`I am ${this.gender}`)
  }
};
friendship.saysHi()

//String interpolation
let myAge = 20
console.log(`I'm ${myAge} years old!`)

//Use for in loops ONLY for objects, a normal for loop for arrays
//For in loops in an object
let details = {
  name: 'Tola',
  age: '24',
  gender: 'female',
  email: 'atillie@gmail.com',
  };
for (let key in details){
  console.log(key)
  console.log(`I am ${details[key]}`)
}
//A loop - a block of code that runs until a condition has been meta
for (let i =0; i < 10; i++){
//declaration; conditional statement; increment
console.log("This is i:", i)
}

function sayHello(friendsName){
console.log ('Hello, my name is ' + friendsName + '!');
}
sayHello('Ayo');
sayHello('Femi');
sayHello('Tinu');
// CLASS
/*function Info(name, email, password){
let info = {
name : name,
email: email,
password: password
}
return info
}
let infoSara = Info('Sara', 'sara@gmail.com','12345abc')
console.log(infoSara)*/
// constructor using new
//objects
function Info(nameString, emailString, passwordString){
//this keyword creates a new object
this.name = nameString;
this.email = emailString;
this.password = passwordString;
this.saysHi = function(){
return "Hello " + this.name + "!"
}
}
let infoSara = new Info('Sara', 'sara@gmail.com','12345abc')
let infoRaj = new Info('Raj', 'raja@gmail.com','12345abc')
console.log(infoRaj)
console.log(infoSara.saysHi())

function Data(name,age){
  this.name = name;
  this.age = age;
}
var infoFemi = new Data('Femi', 26);
console.log(infoFemi);
//function class constructor
// function Vehicle(name, paintColor, engineSize, seats){
// this.name = name;
// this.color = paintColor;
// this.motor = engineSize;
// this.capacity = seats;
// this.info = function(){
// return `This vehicle is called the ${this.name}, it seats ${this.capacity},
// has a ${this.motor} motor, and is available in ${this.color}.`
// }
// }
// let f150 = new Vehicle('f150', 'silver', 'v8', 5)
// let jetta = new Vehicle('Jetta', 'green', 'v6', 5)
// console.log(jetta.info())
// console.log(f150.info())

//PROTOTYPES
function Vehicle(name, paintColor, engineSize, seats){
this.name = name;
this.color = paintColor;
this.motor = engineSize;
this.capacity = seats;
}

Vehicle.prototype.honks = function(){
return `${this.name} honks!`
}
Vehicle.prototype.info = function(){
return `This vehicle is called the ${this.name}, it seats ${this.capacity},
has a ${this.motor} motor, and is available in ${this.color}.`
}
let f150 = new Vehicle('f150', 'silver', 'v8', 5)
let jetta = new Vehicle('Jetta', 'green', 'v6', 5)
console.log(jetta.info())
console.log(f150.honks())

function addTwoNumbers (num1, num2){
  return num1 + num2;
}
console.log(addTwoNumbers(1,2));

var obj = {
  name: "Femi",
  age: 26,
  sex: "male"
}

const add = (a,b) => { 
 return a + b;
} 
console.log(add(2,4))

const added = (a,b) => a + b; 

console.log(added(5,4))

//Function try out
// const Players = function add(a,b){
//   return a+b;
// }
// console.log(add(100,20))
const Players = (a,b) => {
  return a+b;
}
console.log(add(100,20))
//Mapping of an object
var people = [
  { name: "Femi", age: 26 },
  { name: "Yemi", age: 28 },
  { name: "Kemi", age: 30 }
];

// function ff(person) {
//   return person.name;
// }
// var peoplesAges = people.map(ff);
// console.log(peoplesAges);
//To display names
var peoplesNames = people.map((per) => per.name);
console.log(peoplesNames);

// use for each to display all of the names
people.forEach (person => {
  console.log(`${person.name} is my friend`)
})

//To produce arrays taking a couple of years off each age
var younger = people.map((per) => ({name: per.name, age: per.age -2}));
console.log(younger);
//To produce people over 27
var Sterling = people.filter((person) => person.age > 26);
console.log(Sterling);
//Sum of all the ages
const SumOfAges = people.reduce((acc,person) => {
  return acc + person.age;
}, 0);
console.log(SumOfAges);
//filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//NB - const & let have block scopes
//var has FUNCTION scope Smart Jane

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum',];
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(arrLength) {
  console.log(arrLength);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

sumNums(10, 10, function(x, y) {
  console.log(x + y);
});

sumNums(10, 10, function(x, y) {
  console.log(x + y);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

multiplyNums(10, 2, function(x, y) {
  console.log(x * y);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)){
    return cb(true);
  } else {
    return cb(false);
  }
}

contains('Pencil', items, function(result){
  console.log(result);
});

//all variables created outside an object or function is top level variable
var theOuterThis = this;
var topLevelVariable = 100;
console.log(window.topLevelVariable);

</script>
</body>
</html>