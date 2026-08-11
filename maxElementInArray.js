function maxElementInArray(array,n){
    if(!array || n === 0){
        throw new Error("Array length should be greater than 0.")
    }
    let maxi = array[0];
    for(let i = 1; i<n; i++){
        if(!isNaN(array[i] && typeof array[i] === 'number')){
            throw new Error("Please give all elements in array a valid number.")
        }
        if(array[i] > maxi){
            maxi = array[i];
        }
    }
    return maxi;
}
console.log(maxElementInArray([5,8,7,4,1,9,15,2],8))
console.log(maxElementInArray([2],1))
console.log(maxElementInArray([null],0))
console.log(maxElementInArray([],0))
console.log(maxElementInArray([5,4,4,8,9,'dhfjg'],6))