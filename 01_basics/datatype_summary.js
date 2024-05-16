// primitive

// 7 types : string, number, Boolearn, Null, Undefined, symbol, Bigint.

const score = 100;
const scoreValue = 100.3;

const IsLoggedIn = false;
const OutSideTemp = null;
let userEmail;

const id = Symbol("123");
const otherid = Symbol("123");

console.log(id == otherid);

const bignumber = 2354751454548225456125n;

// reference (non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]


let myobj = {
    name : "satyam",
    age : 20
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof OutSideTemp); // object
console.log(typeof scoreValue); //number
console.log(typeof myfunction); //function
console.log(typeof heros); //object