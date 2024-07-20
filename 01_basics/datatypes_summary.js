/* 
    Primitive Data Types-

1. String --> Call by value
2. Number
3. Boolean
4. Null --> Empty
5. Undefined
6. Symbol
7. BigInt

    Referance Data Type (Non-Primitive)

1. Arrays
2. Objects
3. Functions

*/ 

const id=Symbol('123')
const anotherId=Symbol('123');

console.log(id===anotherId);

const bigNumber=52537135671358137912n;



//Arrays, Objects and Functions

const fruits=["Apple", "Mango", "Banana"];
let myObj={
    name: "Sakshi",
    age: 19,

}

console.log(typeof myObj);
console.table(fruits);

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof id);