// Singleton -object made from construtor
// Object.create
//Object Literals

const mySym= Symbol("key1");

const jsUser={
    name1: "Sakshi",
    "full name":"Sakshi Singh",
    age: 18,
    [mySym]:"mykey1",
    location: "Indore",
    email: "sakshi@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof(jsUser[mySym]));

jsUser.email="sakshi2333@gmail.com"
// Object.freeze(jsUser);
jsUser.email="sakshi@microsoft.com";
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name1}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
