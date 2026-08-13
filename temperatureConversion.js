function celciusToFahrenheit(temp){
    if(typeof temp !== 'number'){
        throw new TypeError("Please give a valid number.")
    }
    const tempInFahrenheit = (temp * 9/5) + 32;
    return tempInFahrenheit.toFixed(1);
}

console.log("27°c in fahrenheit is:", celciusToFahrenheit(15),"°F");
console.log("45°c in fahrenheit is:", celciusToFahrenheit(45),"°F");
console.log("30°c in fahrenheit is:", celciusToFahrenheit(30),"°F");