const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // This is not a right way

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros); // They combine two arryas and gives a new array

console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // same as a concat uses 

console.log(all_new_heros);


const another_arrya = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5], 8], 9];
const new_another_array = another_arrya.flat(Infinity);

console.log(new_another_array);


console.log(Array.isArray("satyam"));
console.log(Array.from("satyam")); // They covert one string to Array
console.log(Array.from({name: "satyam"})); //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // creat a Array 