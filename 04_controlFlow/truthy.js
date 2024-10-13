const userEmail=[]

// if(userEmail) console.log("Got user email");
// else console.log("don't have user email");


//Falsy values
//false ,0 ,-0, BigInt 0n, "", null, undefined, NAN;
//Else all are truthy values

//Truthy val(spcl mention)
//"0"(zero in the form of a string), 'false'(false in a string), " ", [], {}(object), function(){} (empty function)

//To check if array passed is valid or not

// if(userEmail.length===0) console.log("email not found");

const emptyObj={};

//To check if an object is empty
// if(Object.keys(emptyObj).length===0)
//     console.log("Email not found");
    
//NUllish coalescing operator (??): null or undefined. If the value to be assigned is null, assign diff value

let val1;
// val1= null??10
// console.log(val1);

// val1=5??10
// console.log(val1);

//Ternery Operator

const iceTeaPrice=10;

iceTeaPrice<=80?console.log("okie"): console.log("okayy");

