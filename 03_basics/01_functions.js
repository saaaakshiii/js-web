function sayMyName()
{
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName();

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2)
{
    return number1+number2;
}

// console.log("Result: ",addTwoNumbers(3, 8));

function logInUserMessage(username="Sakshi")
{
    if(!username)
    {
        console.log("Please enter a valid username");
        return;        
    }
    
    return `${username}, just logged in`;
}

// console.log(logInUserMessage("S"));

function calculateCartPrice(val1, val2, ...num1)
{
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user={
    username: "Sakshi",
    prices: 199
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username:"Lilly",
//     price:399
// });

const myNewArray=[200,400, 100, 600];

function returnSecondValue(getArray)
{
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 500, 600]));

