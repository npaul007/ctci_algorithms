function quickSort (arr) {
    if(arr.length <= 1) {
        return arr;
    }
    else {
        let left = [];
        let right = [];
        let pivot = arr.pop();
        let len = arr.length;
        let newArr = [];
    
        for(let i = 0; i < len; i++) {
            if( arr[i] <= pivot ) {
                left.push(arr[i])
            } else {
                right.push(arr[i]);
            }
        }
    
        return newArr.concat(quickSort(left),pivot,quickSort(right));
    }
}

let array = [7,2,1,8,6,3,5,4];
console.log(quickSort(array));