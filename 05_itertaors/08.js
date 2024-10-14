//Reduce

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc, curVal){
//     console.log(`accumulator: ${acc}, curr val: ${curVal}`);
//     return acc+curVal
// }, 3)

// const myTotal=myNums.reduce((acc, curr)=> acc+curr, 3)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"Js course",
        price:2999
    },
    {
        itemName:"Data scientist course",
        price:12999
    },
    {
        itemName:"Python Course",
        price:2999
    },
    {
        itemName:"Mobile dev course",
        price:5999
    },
    {
        itemName:"DSA course",
        price:2799
    }
]

const totalPrice=shoppingCart.reduce((acc, item)=> acc+item.price, 0)
console.log(totalPrice);
