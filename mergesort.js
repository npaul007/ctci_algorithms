list = [1,3,2,6,100,5,8,6,9];

function mergeSort(array) {
	let half = array.length / 2;

	if(array.length === 1) {
		return array;
	}

	let left = array.splice(0,half);
	let right = array;

	return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right) {
	let sortedArray = [];
	while( left.length && right.length ) {
		if( left[0] < right[0] ) {
			sortedArray.push(left.shift());
		}
		else {
			sortedArray.push(right.shift());
		}
	}
	return [...sortedArray,...left,...right];
}

console.log(list);

console.log(mergeSort(list));