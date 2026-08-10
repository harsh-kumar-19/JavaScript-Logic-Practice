// function areaOfRectangle(length, breadth){
//     if(length <= 0){
//     console.log(`Please give a valid length.`);
    
//     }else if(breadth <= 0){
//         console.log(`Please give a valid breadth.`);
        
//     }else{
//     const area = length * breadth;
//     console.log(`Area of rectangle is ${area}.`);
//     }
// }

// areaOfRectangle(15,25);
// areaOfRectangle(20, -100);

function calculateRectangle(length, breadth){
    if(length <= 0){
        throw new RangeError("Please give a valid length.");
    }
    if(breadth <= 0){
        throw new RangeError("Please give a valid breadth.");
    }
    const area = length * breadth;
    console.log(`Area of rectangle is ${area}.`);
}

calculateRectangle(-15,10);