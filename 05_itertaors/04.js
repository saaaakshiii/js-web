//for-each loop

const array=["js", "java", "python", "ruby", "c++"]

// array.forEach( function (val){
//     console.log(val); //call back function(function name not required)
// })

// array.forEach((val)=>{
//     console.log(val); //using arrow function
// })

// function printMe(item){
//     console.log(item);
// }

// array.forEach(printMe) //only refernce

// array.forEach((item, index, array)=>{
//     console.log(item, index, array);
// })

const myObj=[
    {
        langName:"Javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    }
]

//accessing array of objects
myObj.forEach((item)=>{
    console.log(item.langFileName);
})