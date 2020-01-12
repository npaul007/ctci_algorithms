/*
    Given an image represented by an N * M matrix,
    where each pixel in the image is represented by an integer,
    write a method to rotate the image by 90 degrees. Can you do this in place?
*/

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function rotateMatrix90(matrix) {
    let rotatedMatrix = [];
    
    for(let i = 0; i < matrix.length; i++) {
        let j = matrix.length - 1;
        let newRow = [];
        while ( j >= 0 ) {
            newRow.push(matrix[j][i]);
            j--;
        }
        rotatedMatrix.push(newRow);
    }

    return rotatedMatrix.join("\n");
}

console.log(rotateMatrix90(matrix));

/*
    [7,4,1]
    [8,5,2]
    [9,6,3]
*/