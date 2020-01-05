/*
     Implement an algorithm to determine if a string has all unique characters.
      DO NOT USE ADDITION DATA STRUCTURES
*/
function isUnique(s) {
    let dict = {};
    let unique = true;

    let i = 0;
    while ( i < s.length) {
        if(dict[s.charAt(i)]) {
            unique = false;
            i = s.length;
        } 
        else {
            dict[s.charAt(i)] = i;
        }

        i++;
    }

    return unique;
}

console.log("Platapus",isUnique("Platapus"));
console.log("Lebron",isUnique("Lebron"));
