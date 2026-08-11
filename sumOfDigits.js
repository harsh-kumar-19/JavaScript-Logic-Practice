// function sumOfDigits(number){
//     if(number < 0){
//         throw Error("Number must be greater than 0")
//     }
//     let sum = 0;
//     while((number) > 0){
//     let lastDigit = number % 10;
//     sum += lastDigit;
//     number = Math.floor(number / 10);
//     }
//     return sum;
// }
// console.log(sumOfDigits(11805));
// console.log(sumOfDigits(0));
// console.log(sumOfDigits(2515));

// 2nd method
function calculateSumOfDigits(num){
    if(num < 0){
        throw Error("Number must be greater than 0")
    }
    const numToString = num.toString();
    const splitString = numToString.split('');
    let sumOfDigits = 0;
    splitString.forEach(number => {
        sumOfDigits += parseInt(number);
    
    });
    return sumOfDigits;
}
console.log(calculateSumOfDigits(256));
console.log(calculateSumOfDigits(0));
console.log(calculateSumOfDigits(7));