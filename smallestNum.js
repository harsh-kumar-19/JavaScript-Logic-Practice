// function smallestNumber(a,b,c){
//     if(a <= b && a <= c){
//         console.log(`Smallest number is ${a}`);
//     }else if(b <= a && b <= c){
//         console.log(`Smallest number is ${b}`);
//     }else{
//         console.log(`Smallest number is ${c}`);
//     }
// }
// smallestNumber(7,5,6);
// smallestNumber(5,5,5);
// smallestNumber(5,-3,-5);
// smallestNumber(2,5,5)
// smallestNumber(2,2,5)

function smallestOfThreeNum(a,b,c){
    let smallestNum = a;
    if(b < smallestNum){
        console.log(`Smallest number is ${b}.`);   
    }
    else if(c < smallestNum){
        console.log(`Smallest number is ${c}.`);   
    }else{
        console.log(`Smallest number is ${a}`);
        
    }
}

smallestOfThreeNum(5,7,2);
smallestOfThreeNum(5,2,2);
smallestOfThreeNum(-5,7,2);
