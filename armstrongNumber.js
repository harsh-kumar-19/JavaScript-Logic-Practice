function isArmstrongCheck(number){
    let digits = [];
    let sum = 0;
    let orgNumber = number;
    while(number>0){
        let lastDigit = number % 10;
        digits.push(lastDigit);
        number = Math.floor(number/10)
    }
    digits.forEach(d => {
    sum += Math.pow(d,digits.length);
    });
    if(sum !== orgNumber){
        return false;
    }
    return true;

}
console.log("153 is a armstrong number: ", isArmstrongCheck(153));
console.log("15 is a armstrong number: ", isArmstrongCheck(15));
