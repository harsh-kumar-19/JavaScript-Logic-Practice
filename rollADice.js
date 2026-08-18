function rollADice(noOfDices,noOfSides){
    let result = [];
    let count = 0;
    while(noOfDices > count){
        const num = Math.floor((Math.random() * noOfSides) + 1);
        result.push(num);
        count++;
    }
    return result;
    
}
console.log("number of dice = 2 , number of side = 6 : number got -> ", rollADice(2,6));
console.log("number of dice = 2 , number of side = 4 : number got -> ",rollADice(2,4));
console.log("number of dice = 4 , number of side = 6 : number got -> ",rollADice(4,6));