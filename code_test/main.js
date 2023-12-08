let num = [2, 7, 11, 15, 3, 5, 7, 5, 8];
let target = 10;

function getPairs (arr,target) {
    let map = {};
    for(let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }

    let pairs = [];
    for(let j = 0; j < arr.length; j++) {
        let needed = target - arr[j];
        if( map[needed] != undefined && map[needed] != j ) {
            let pair = [];
            pair.push(arr[j]);
            pair.push(needed);
            pairs.push(pair);
        }
    }

    return pairs;
}

console.log(getPairs(num,target));