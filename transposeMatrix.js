function transposeMatrix(arr) {
    const result = [];
    const rows = arr.length;
    let cols = Math.max(...arr.map(row => row.length)); 
    for(let i = 0; i<rows; i++){
        for(let j = 0; j<cols; j++){
            if(!result[j]){
                result[j] = [];
            }
            result[j][i] = arr[i][j] || 0;
        }
    }
    return result;
    
}
console.log("Transpose of matrix:[[2,3,4],[8,3,6 ]] is : ", transposeMatrix([[2,3,4],[8,3,6 ]]))
console.log("Transpose of matrix:[2,7,4,15],[8,5,9,0]] is : ", transposeMatrix([[2,7,4,15],[8,5,9,0]]))
console.log("Transpose of matrix:[2,7],[8,5,9,0]] is : ", transposeMatrix([[2,7],[8,5,9,0]]))