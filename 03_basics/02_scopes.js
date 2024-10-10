// var c=300;
let a=300;

if(true)
{
    let a=10;
    const b=20;

    // console.log("Inner: ",a);
    
    // var c=30; //Scope problem
}

// console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const username="Sakshi"

    function two()
    {
        const website="youtube.com"
        console.log(username);
    }
    // console.log(website);

    // two();
}

// one();

if(true)
{
    const username="Sakshi";

    if(username==="Sakshi")
    {
        const website=" yotuube";
        // console.log(username+website);
    }

    // console.log(website);
}

// console.log(username);

// +++++++ Interesting ++++

//Function

console.log(addone(5)); //NO error
function addone(num)
{
    return num+1;
}

//Expression--> Variable holding a funtion (a variable can hold anything in JS)

addtwo(5); //Error will be generated
const addtwo= function(num){
    return num+2;
}

