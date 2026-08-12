function isPrime(number){
    if(number <= 1){
        throw new Error(`${number} is not a prime number.`)
        
    }
    if(number === 2) return true;
    let result = true;
    for(let i = 2; i<number; i++){
        if(number % i === 0){
            result = false;
            break;
        }
    }
    return result;
}
console.log(`25 is prime: `,isPrime(25));
console.log(`2 is prime: `,isPrime(2));
console.log(`15 is prime: `,isPrime(15));

console.log("optimization:")
function isPrime(number){
    if(number <= 1){
        throw new Error(`${number} is not a prime number.`)
        
    }
    if(number === 2) return true;
    let result = true;
    if(number % 2 === 0){
        return false;
    }
    for(let i = 3; i<number; i+=2){
        if(number % i === 0){
            result = false;
            break;
        }
    }
    return result;
}
console.log(`25 is prime: `,isPrime(25));
console.log(`2 is prime: `,isPrime(2));
console.log(`15 is prime: `,isPrime(15));
console.log(`16 is prime: `,isPrime(16));
