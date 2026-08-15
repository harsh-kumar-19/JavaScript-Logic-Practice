function isStrongPassword(password){
    password = password.trim();
    if(password.length < 8) return false;
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberExists = '0123456789';
    const specialCharacters = '!@#$%&';

    let lowerCaseCharacter = false;
    let upperCaseCharacter = false;
    let numberExist = false;
    let specialCharacter = false;
    for(let char of password){
        if(lowerCaseCharacters.includes(char)){
            lowerCaseCharacter = true;
        }else if(upperCaseCharacters.includes(char)){
            upperCaseCharacter = true;
        }else if(numberExists.includes(char)){
            numberExist = true;
        }else if(specialCharacters.includes(char)){
            specialCharacter = true;
        }
    }
    if(lowerCaseCharacter && upperCaseCharacter && numberExist && specialCharacter){
        return true;
    }
    return false;
    
}

console.log("is password strong :-> Harsh@123: ", isStrongPassword("Harsh@123"));
console.log("is password strong :-> harsh@123: ", isStrongPassword("harsh@123"));
console.log("is password strong :-> rsh@123: ", isStrongPassword("rsh@123"));