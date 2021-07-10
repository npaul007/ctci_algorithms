function heapPerm(arr,size) {
    if(size == 1) {
        console.log(arr);
        return;
    }

    for(let i = 0; i < size; i++) {
        heapPerm(arr,size-1);

        if( size % 2 == 1 ) {
            let temp = arr[0];
            arr[0] = arr[size-1];
            arr[size-1] = temp;
        }
        else {
            let temp = arr[i];
            arr[i] = arr[size-1];
            arr[size-1] = temp;
        }
    }
}

let array = [1,2,3,4];
heapPerm(array,array.length)