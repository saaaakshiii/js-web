//"this" refers to the current context

const user={
    username: "Sakshi",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
    }

}

// user.welcomeMsg();
// user.username="Lilly";
// user.welcomeMsg();

// console.log(this); //Empty object as O/P as there is no context in global
//The global object in the browser is WINDOW

// function chai()
// {
//     //"this" works only in objects and not in functions

//     let username="Sakshi"
//     console.log(this.username);
// }

// chai();

// const chai=function()
// {
//     let username="Sakshi"
//     console.log(this.username);
// }

// chai();

// const chai= () =>
// {
//     let username="Sakshi"
//     console.log(this);
// }

// chai();

//Basic Arrow Function
// const addtwo= (num1, num2)=> {
//     return num1+num2;
// }

//Implicit Return (Return keyword not required)

// const addtwo= (num1, num2) => num1+num2 
// const addtwo= (num1, num2) => (num1+num2) 

const addtwo= (num1, num2) => ({username: "Sakshi"}) //Object is being returned

console.log(addtwo(3,4));

const myArray=[2,5,3,7,8];