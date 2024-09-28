//Dates

let mydate=new Date();

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());

// console.log(typeof mydate);

// let myCreatedDate= new Date(2023, 0, 23); //Months start from 0 in JS
// console.log(myCreatedDate.toDateString());

// let date1= new Date(2023, 2, 14, 5, 9);
// let date1= new Date("2023-05-23"); //Month starts from 1 in this format
let date1= new Date("01-14-2023");
// console.log(date1.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(date1.getTime());

// console.log(Date.now()); //Displays current date in ms
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1); //Because months have 0 based indexing
console.log(newDate.getDay());

// console.log(newDate.toLocaleString('default', {
//     weekday: "long"
// }));

console.log(newDate.toLocaleString());


