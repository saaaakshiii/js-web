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

function calculateCartPrice(num1)
{
    return num1;
}

console.log(calculateCartPrice(2));
