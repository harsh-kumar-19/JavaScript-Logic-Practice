// function reverse_A_String(str){
//     if('string' !== typeof str){
//         throw new Error("Please give a string");
//     }
//     let revStr = "";
//     for(let i = str.length-1; i >= 0; i--)
//     {
//         revStr += str[i];
//     }
//     return revStr;
// }

// console.log(reverse_A_String("Harsh"));
// console.log(reverse_A_String("Software Development"));

console.log("Reverse Second Method:");
function reverse_A_String2(str){
    const splittedStr = str.split("");
    const reversed = splittedStr.reverse();
    const reversedJoin = reversed.join('')
    return reversedJoin;
}
console.log(reverse_A_String2("Harsh"));
console.log(reverse_A_String2("Software Development"));

function reverseStr(str){

}