const myParentheses = {
        "{": "}",
        "(": ")",
        "[": "]"
}
function isBalancedParentheses(string){
    const parenthesesArr = [];
    for(let char of string){
        if(myParentheses[char]){
            parenthesesArr.push(char);
        }
        else if(char === ")" || char === "}" || char === "]"){
            const lastOpeningParenthesis = parenthesesArr.pop();
            if(myParentheses[lastOpeningParenthesis] !== char){
                return false;
            }
        }
    }
    return true;

}

console.log("Is valid parenthesis [{()}]: ", isBalancedParentheses("[{()}]"));
console.log("Is valid parenthesis [{()]: ", isBalancedParentheses("[{()]"));
console.log("Is valid parenthesis [{(})]: ", isBalancedParentheses("[{(})]"));