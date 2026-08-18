function isPalindromeInString(string){
    string = string.toLowerCase();
    const reversedString = string.split('').reverse().join('');
    if(string === reversedString){
        return true;
    }else return false;
}

function allPalindromeSubstring(string){
    let palindromeSubstring = [];
    for(let i = 0; i<string.length; i++){
        for(let j = i+1; j<=string.length; j++){
            const substring = string.slice(i,j);
            if(isPalindromeInString(substring) && substring.length > 1){
                if(!palindromeSubstring.includes(substring)){
                palindromeSubstring.push(substring);
                }
            }
        }
    }
    return palindromeSubstring;
}
console.log("All palindrome substring in harsh are: ", allPalindromeSubstring("harsh"));
console.log("All palindrome substring in radar are: ", allPalindromeSubstring("radar"));
console.log("All palindrome substring in ababapalindromemadam are: ", allPalindromeSubstring("ababapalindromemadam"));