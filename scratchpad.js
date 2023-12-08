list = [3,2,100,1,5]

function mergeSort (arr) {
    let mid = arr.length / 2;

    if( arr.length === 1 ) {
        return arr;
    }

    let left = arr.splice(0,mid);
    let right = arr;

    return merge(mergeSort(left),mergeSort(right));
}

function merge (left,right) {
    let sortedArray = [];

    while( left.length && right.length ) {
        if(left[0] < right[0]) {
            sortedArray.push(left.shift());
        }
        else {
            sortedArray.push(right.shift());
        }
    }

    return [...sortedArray,...left,...right];
}

console.log(mergeSort(list));