// function factorial_Of_A_Num(num){
//     if(num === 0) return 1;
//     else if(num < 0){
//         throw new RangeError("Number should be greater than or equal to 0.")
//     }else if(typeof num !== 'number'){
//         throw new TypeError("Please give a number.")
//     }
//     else{
//         let fact = 1;
//         for(let i = 1; i<=num; i++){
//              fact *= i;
//         }
//         return fact;
//     }
// }
// console.log(factorial_Of_A_Num(5));
// console.log(factorial_Of_A_Num(0));
// console.log(factorial_Of_A_Num(-1));
// console.log(factorial_Of_A_Num('5'));

console.log("Factorial using recursion:")
function calculateFactorialUsingRecursion(num){
    if(num < 0){
        throw new RangeError("Number should be greater than or equal to 0.")
    }else if(typeof num !== 'number'){
        throw new TypeError("Please give a number.")
    }
    if(num === 0 || num === 1){
            return 1;
    }
    return num * calculateFactorialUsingRecursion(num - 1);
}
console.log(calculateFactorialUsingRecursion(5));
console.log(calculateFactorialUsingRecursion(0));
console.log(calculateFactorialUsingRecursion(-1));
console.log(calculateFactorialUsingRecursion('5'));