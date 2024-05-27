// dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString()); //show only day and date.
console.log(myDate.toLocaleDateString()); //show only date.
console.log(typeof myDate); //object type.

let mycreatedDate = new Date(2024,4,27);
console.log(mycreatedDate.toDateString());

let mycreatedDate2 = new Date(2024,4,27,11,45);
console.log(mycreatedDate2.toLocaleString());

// let myDate2 = new Date("2024-05-27"); // YY/MM/DD print.
let myDate2 = new Date("05,27,2024");
console.log(myDate2.toLocaleDateString());

//+++++++++++++++++++++++++++++++ time +++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(mycreatedDate2.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: 'long'
}));