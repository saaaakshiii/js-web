// Immediately Invoked Function Expressions (IIFE)
// Used to remove the pollution caused by global scope varibles 

(function chai(){
    //named iife
    console.log(`DB Connected`);   
})();

//Arrow Function
((name) =>{
    
    //simple/ unnamed iife
    console.log(`DB CONNECTED TWO, ${name}`);
})('sakshi')

