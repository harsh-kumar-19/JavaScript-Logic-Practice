function swapNumbersWithoutThirdVar(num1,num2){
    console.log(`Before Swapping num1 and num2 are ${num1} and ${num2}.`);
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    return {num1, num2};
}

console.log("After Swapping num1 and num2 are :", swapNumbersWithoutThirdVar(5,6));

console.log("Swapping using with third varaible.")
function swapNumbersWithThirdVar(num1,num2){
    console.log(`Before Swapping num1 and num2 are ${num1} and ${num2}.`);
    let temp = num1;
    num1 = num2;
    num2 = temp;
    return {num1, num2};
}

console.log("After Swapping num1 and num2 are :", swapNumbersWithoutThirdVar(5,6));
console.log("After Swapping num1 and num2 are :", swapNumbersWithoutThirdVar(10,7));