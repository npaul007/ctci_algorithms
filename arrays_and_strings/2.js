/*
    Give two strings, write a method to decide 
    if one is a permutation of the other
 */

function Node (value) {
    this.value = value;
    this.tail = null;
}

function getHashTable(string) {
    let dict = {};

    for(let i = 0; i < string.length; i++) {
        let node = new Node(string.charAt(i));
        if( dict[string.charAt(i)] ) {
            let curNode = dict[string.charAt(i)];
            while( curNode.tail !== null ) {
                curNode = curNode.tail;
            }
            curNode = node;
        }
        else {
            dict[string.charAt(i)] = node;
        }
    }

    return dict;
} 

function permutation (s1,s2) {
    let isPermutation = true;

    let s1Hash = getHashTable(s1);
    let s2Hash = getHashTable(s2); 

    if(s1.length !== s2.length) {
        return false;
    }

    let i = 0;
    while ( i < s1.length ) {
        if( s1Hash[s1.charAt(i)].value !== s2Hash[s1.charAt(i)].value ) {
            isPermutation = false;
            i = s1.length;
        }    
        i++;
    }

    return isPermutation;
}

console.log("'abcd' and 'bcad'",permutation("abcd","bcad"));
console.log("'food' and 'dofo'",permutation("food","dofo"));
console.log("'bar' and 'bare'",permutation("bar","bare"));