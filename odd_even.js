function check_Even_Odd(num){
    if(num % 2 == 0){
        console.log(`Number is even.`)
    }else{
        console.log(`Number is odd.`)
    }
}
check_Even_Odd(5);
check_Even_Odd(-5);
check_Even_Odd(0);


// Ternary operator using
// function checkIf_Even_Odd(num){
//     return num % 2 === 0 ? "Even number" : "Odd number";
// }
// console.log(checkIf_Even_Odd(5))