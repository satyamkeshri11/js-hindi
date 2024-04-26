// let score = "33abc"
// let score = null
// let score = undefined
//let score = true
let score = 'satyam'

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN (not an number)
//null => 0
//undefined => NaN
//true => 1 ; False => 0
//'satyam' => NaN

let isloggedin = "5"

console.log(typeof isloggedin);

let booleanisloggedin = Boolean(isloggedin)

console.log(typeof booleanisloggedin);
console.log(booleanisloggedin);

// 1 => true ; 0 => false
// "" => false
// "satyam" => true

let somenumber = 33

console.log(typeof somenumber);
let stringnumber = String(somenumber)

console.log(typeof stringnumber);
console.log(stringnumber);


// ************************ Operation **********************
let value = 3
let negvalue = -value

console.log(negvalue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 2);
console.log(2 % 5);

let str1 = "Hello"
let str2 = " Satyam"

let srt3 = str1 + str2

console.log(srt3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log((1 + 2) * 5 % 9);

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gamecounter = 100
 gamecounter++;
//++gamecounter;
 console.log(gamecounter);