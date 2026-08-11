function is_leap_year(year){
      if(year < 0){
        throw RangeError("Year will be a positive number.")
      }else if(typeof year !== 'number'){
        throw TypeError("Please give a number.")
      }
      else{
        if(year % 4 === 0){
            return true;
        }else{
            return false;
        }
      }
}
console.log(is_leap_year(2000))
console.log(is_leap_year(2005))

// function isLeap(year){
//     return year % 4 === 0;
// }
 
// console.log(isLeap(2004));
// console.log(isLeap(2005));