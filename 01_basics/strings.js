const name1="Sakshi "
const repoCount=10

// console.log(name1+repoCount+" Value"); //Not preffered

//USing String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //preffered synatx

const gameName= new String("Candy-Crush-cc");

// console.log(gameName.__proto__);//For Prototype

// console.log(gameName.length);
// console.log((gameName.toUpperCase()));
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// The split() method of String values takes a pattern and divides this string into an ordered list 
// of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

