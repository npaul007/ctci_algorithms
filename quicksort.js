function swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr) {
    let i = -1;

    let pivot = Math.floor((arr.length-1)/2);
    console.log(pivot)
    for(let j = 0; j < arr.length - 1; j++) {
        if( arr[j] < arr[pivot]) {
            i++;
            swap(arr,i,j);
        }

        if(j == arr.length - 2) {
            swap(arr,i,j);
        }
    }

    return arr;
}

let array = [7,2,1,8,6,3,5,4];
console.log(quickSort(array));