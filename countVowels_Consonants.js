function count_Vowels_Consonants(str){
    let countVowel = 0;
    let countConsonant = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            countVowel++;
        }
    }
    countConsonant = str.length - countVowel;
    return {countVowel, countConsonant}
}
console.log("Number of vowels and cosonants in Harsh is: ", count_Vowels_Consonants("harsh"))
console.log("Number of vowels and cosonants in umberalla is: ", count_Vowels_Consonants("umberalla"))
console.log("Number of vowels and cosonants in onion is: ", count_Vowels_Consonants("onion"))

function calculateVowelConsonant(str){
    str = str.toLowerCase();
    // str = str.replace(' ',''); // just do first space 
    str = str.replace(/ /g,''); // all space
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";

    let cntVowel = 0;
    let cntConsonant = 0;
    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            cntVowel++;
        // }else if(consonants.includes(str[i])){
        }else if(/^[a-z]$/.test(str[i])){
            cntConsonant++;
        }else{
            console.log(str[i], "Its neither be vowel nor consonant.");
            
        }
    }
    return {cntVowel, cntConsonant};

}

// console.log("harsh: ",calculateVowelConsonant("harsh"))
console.log("harsh Kumar: ",calculateVowelConsonant("harsh Kumar"))
console.log("harsh kumar 123: ",calculateVowelConsonant("harsh kumar 123"))
console.log("harsh: ",calculateVowelConsonant("harsh"))