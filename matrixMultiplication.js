function matrixMultiplication(matrix1,matrix2){
    const r1 = matrix1.length;
    const r2 = matrix2.length;
    const c2 = matrix2[0].length;
    const rowInResult = r1;
    const colInResult = c2;
    let result = [];
    for(let i = 0; i<rowInResult; i++){
        for(let j = 0; j<colInResult; j++){
            let cellValue = 0;
            for(let n = 0; n<r2; n++){
                cellValue += matrix1[i][n] * matrix2[n][j];
            }
            if(!result[i]){
                result[i] = [];
            }
            result[i][j] = cellValue;
        }
    }
    return result;
}
console.log("Matrix multiplication of [[1,2],[3,4]],[[5,6],[7,8]] is: ", matrixMultiplication([[1,2],[3,4]],[[5,6],[7,8]]));
console.log("Matrix multiplication of [[1,2],[3,4],[1,5]],[[5,6,0],[7,8,5]] is: ", matrixMultiplication([[1,2],[3,4],[1,5]],[[5,6,0],[7,8,5]]));