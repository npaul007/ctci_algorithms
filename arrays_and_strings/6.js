/*
    implement a method that performs string compression using counts of
    repeated characters:
        aabcccccaaa becomes a2b1c5a3
*/

function compressByCharCount(string) {
    let dict = {};

    let i = 0;
    let curChar = null;
    let change = 0;
    while( i < string.length ) {
        if(string.charAt(i) !== curChar) {
            curChar = string.charAt(i);
            change++;
        }

        if( dict[curChar+'-copy'+change] !== undefined ) {
            dict[curChar+'-copy'+change] += 1;
        }
        else {
            dict[curChar+'-copy'+change] = 1;
        }
        
        i++;
    }

    let outputString = "";
    Array.from(Object.keys(dict)).forEach(key => {
        let newKey = key.split("-")[0];
        outputString+= ( newKey + String(dict[key]) );
    });

    return outputString;
}

console.log(compressByCharCount("aabcccccaaa"));