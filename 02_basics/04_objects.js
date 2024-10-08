//Singleton or Objects using constructor

// const tinderUser=new Object()
const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="lilly";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

//Nesting of Objects

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            firstName:"Sakshi",
            lastName:"Singh"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1={1: "a", 2: "b"};
const obj2={3: "a", 4:"b"};
const obj4={5: "a", 6:"b"};

// const obj3={obj1, obj2}
// const obj3=Object.assign({}, obj1, obj2, obj4);

const obj3={...obj1, ...obj2, ...obj4};
// console.log(obj3);

//Array of objects
const users =[
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email:"t@gmail.com"
    },
    {
        id: 3,
        email:"u@gmail.com"
    }
]

users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


//+++++++++++ Objects Destructuring +++++

const flower={

    flowerName:"rose",
    color:"Pink",
    plantType:"shrub"
}

// (flower.color)

const {flowerName: fn1}= flower

// console.log(flowerName);
console.log(fn1);

// JSON API

// {
//     "name":"Rose",
//     "color":"Pink",
//     "type" :"Shrub"
// }

// [
//     {},
//     {},
//     {}
// ]