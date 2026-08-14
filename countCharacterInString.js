function countCharacters(string){
    string = string.toLowerCase();
    let myObject = {};
    [...string].forEach(char => {
        if(!myObject[char]){
            myObject[char] = 0;
        }
    myObject[char]++;
    });
    return myObject;
}

console.log("Harsh Kumar: ", countCharacters("Harsh Kumar"));
console.log("Ajay Sharma 11: ", countCharacters("Ajay Sharma 11"));

console.log("2nd method:")
function countChar(str){
    str = str.toLowerCase();
    const splittedStr = str.split('');
    const result = splittedStr.reduce((acc, char) => {
        if(!acc[char]){
            acc[char] = 0;
        }
        acc[char] = acc[char] + 1;
        return acc;
        
    },{});
    return result;
}
console.log("Harsh Kumar: ", countChar("harsh kumar"));