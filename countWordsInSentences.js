function countWordsInSentence(str){
    str = str.trim();
    let cntWord = 1;
    for(let i = 0; i<str.length; i++){
        if(str[i] === ' ' && str[i-1] !== ' '){
            cntWord++;
        }
    }
    return cntWord;
}
console.log("Words in sentence : 'This is a sentence' is ", countWordsInSentence("This is a sentence"))
console.log("Words in sentence : 'What is the date today is' ", countWordsInSentence("What     is the date today"))
console.log("Words in sentence : '  What is the date today is   ' ", countWordsInSentence("   What is the date today   "))

console.log("2nd method.")
function cntWords(sentence){
    sentence = sentence.trim();

const splittedSentence = sentence.split(' ')
const nonEmptySentence = splittedSentence.filter((element) => { return element != ''});

return nonEmptySentence.length;
}
console.log("Words in sentence : 'This is    a sentence' is ", cntWords("This is    a sentence"))
console.log("Words in sentence : 'What is the date today is' ", cntWords("What is the date today"))
console.log("  Words in sentence   : '  What is the date today is   ' ", cntWords("  What is the date today  "))
console.log("Words in sentence : 'This   is    a sentence' is ", cntWords("This   is    a sentence"))
