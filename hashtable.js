function Node (value) {
    this.value = value;
    this.tail = null;
}

function createHashTable(values) {
    let hashTable = {};

    for(let i = 0; i <values.length; i++) {
        let index = values[i] % 3;
        let node = new Node(values[i]);

        if( hashTable[index] ) { 
            let item = hashTable[index];
            while( item.tail !== null ) {
                item = item.tail;
            }
            item.tail = node;
        } 
        else {
            hashTable[index] = node;
        }
    }

    return hashTable;
}

let values = [2,4,6,1,7,5,11,23,41,32];

let mappedHashTable = createHashTable(values);

console.log(mappedHashTable);