function calculateAllFactor(number){
    if(number <= 0 || Number.isInteger(number)){
        throw new Error("Number should be greater than 0.")
    }else if(typeof number !== 'number'){
        throw new TypeError("Please give a valid number.")
    }
    let factors = [];
    for(let i = 1; i<=number; i++){
        if(number % i === 0){
            factors.push(i) ;
        }
    }
    return factors;
}

console.log("Factors of 25: ",calculateAllFactor(25));
console.log("Factors of 64: ",calculateAllFactor(64));
console.log("Factors of 246: ",calculateAllFactor(246));
console.log("Factors of '123': ",calculateAllFactor('123'));
console.log("Factors of '123.25': ",calculateAllFactor(123.25));