const name = "satyam";
const repocount = 50;

// console.log(name + repocount + " values");  this method is not use because these is old method.

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gamename = new String ("satyam-ff-com")

console.log(gamename [3]);
console.log(gamename.toUpperCase());
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.charAt(1));
console.log(gamename.indexOf('f'));

const newstring = gamename.substring(0,5);
console.log(newstring);

const anotherstring = gamename.slice(-5,1);
console.log(anotherstring);

const newstringone = "    satyam     m";
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://satyam.com/satyam%20keshri"
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(gamename.split('-'));