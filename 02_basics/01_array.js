// arrya :- array is a object.
// arrya in javascript is resizable.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["hanuman", "ram", "shiv"]

const myArr2 = new Array(1,0,2,3,4,5)

console.log(myArr[4]);
console.log(myHeros);
console.log(typeof myArr); // Array is a object type 

// Array methods

myArr.push(6); // Add given value in Array
myArr.pop(); // Remove last value in Array
myArr.unshift(-1); // Insert the given value in start of the Array
myArr.shift(); // Remove the first value in Array 
console.log(myArr);

console.log(myArr.includes(8)); // Finding the given element in Array then answer give in true or false

console.log(myArr.indexOf(6)); // see the element through the giving index postion 

const newArray = myArr.join(); // Join bind and convert the Array into string

console.log(myArr);
console.log(newArray); 
console.log(typeof newArray); // string type

// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3); // They return a copy part of given section
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3); // They remove the element of given Array and return selected part 
console.log(myn2);
console.log("C", myArr);