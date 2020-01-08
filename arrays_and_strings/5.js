/*
    Given two strings, write a function to check if they are one edit 
    or zero edits away
*/

function oneEditAway(string1,string2) {
    let dict1 = {};
    for(let i = 0; i < string1.length; i++) {
        dict1[string1.charAt(i)] = i;
    }

    let st2Matches = 0;
    for(let k = 0; k < string2.length; k++) {
        if( dict1[string2.charAt(k)] !== undefined ) {
            st2Matches++;
        }
    }
    
    let edits = string1.length - st2Matches;
    
    return ( edits == 0 || edits == 1 );
}

console.log(oneEditAway("pale","ple"));
console.log(oneEditAway("pale","pales"));
console.log(oneEditAway("pale","bake"));
