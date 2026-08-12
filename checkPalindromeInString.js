function isPalindromeInString(str){
    str = str.toLowerCase();
    const reversedString = str.split('').reverse().join('')
    if(str === reversedString){
        return true;
    }else return false;
}
console.log(isPalindromeInString("Madam"))
console.log(isPalindromeInString("harsh"))
console.log(isPalindromeInString("abba"))

console.log("2nd Method!")
function isPalindrome(str){
    let i
    for(i = 0; i<=str.length/2; i++){
    }
    return (str[i] === str[str.length - i - 1]);  
}
console.log("madam:", isPalindrome("madam"))
console.log("harsh:", isPalindrome("harsh"))
console.log("adda:", isPalindrome("adda"))
console.log("grow:", isPalindrome("grow"))

console.log("3rd Method!")
function isPalindrome3(str){
    str = str.toLowerCase();
    let start = 0;
    let end = str.length - 1;
    for(start,end; start < end; start++, end--){
        if(str[start] !== str[end]){
            return false;
        }      
    }
    return true;
}
console.log("Madam:", isPalindrome3("Madam"))
console.log("harsh:", isPalindrome3("harsh"))
console.log("adda:", isPalindrome3("adda"))
console.log("grow:", isPalindrome3("grow"))

