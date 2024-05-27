const score = 400;
console.log(score);

const balance = new Number (300);
console.log(balance);

const numtostringds = balance.toString();
console.log(numtostringds);
console.log(numtostringds.length);
console.log(balance.toFixed(2));
const anothernumber = 123.864;
console.log(anothernumber.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(5,8,2));
console.log(Math.max(21,3,64));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);