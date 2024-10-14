const myNums=[1,2,3,4,5,6,7,8,9,10]

//map iterates through every ele. does not work acc to the condition
// const newNUms=myNums.map((num)=> num+10)

//Chaining

const newNUms=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>=40);
console.log(newNUms);
