function generatePyramid(number){
    for(let i = 1; i<=number; i++){
        let lineContent = '';
        for(let space = 1; space <= number - i; space++){
            lineContent = lineContent + ' ';
        }
        for(let count = 1; count <= i; count++){
            lineContent = lineContent + count;
        }
        for(let reverseCount = i - 1; reverseCount >= 1; reverseCount--){
            lineContent = lineContent + reverseCount;
        }
        console.log(lineContent)

    }
}
console.log("Pyramid of number 5 is");
generatePyramid(5)
console.log("Pyramid of number 6 is");
generatePyramid(6)