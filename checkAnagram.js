function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        throw new TypeError("Please give string type.")
    }
    let obj1 = {};
    let obj2 = {};
    [...str1].forEach(element => {
        if(!obj1[element]){
            obj1[element] = 0;
        }
        obj1[element]++;
    });
    console.log(obj1);

    [...str2].forEach(element => {
        if(!obj2[element]){
            obj2[element] = 0;
        }
        obj2[element]++;
    });
    console.log(obj2)
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

console.log("pools, spool :", isAnagram("pools", "spool"));
console.log("Harsh, ashis :", isAnagram("Harsh", "ashis"));
console.log("night, thing :", isAnagram("night", "thing"));