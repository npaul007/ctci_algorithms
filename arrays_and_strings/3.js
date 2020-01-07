/*
    Wirte a method to replace all spaces in a string with '%20'
*/

function replaceSpaces(string) {
    let charList = [];

    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) == " ") {
            charList.push('%20');
        }
        else {
            charList.push(string.charAt(i));
        }
    }

    return charList.join("");

}

console.log(replaceSpaces("Mr John Smith"));