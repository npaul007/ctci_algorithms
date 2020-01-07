/*
    write a function that checks if a word is a palindrone
*/

function isPalindrome(word) {
    let wordBackwords = [];

    for(let i = word.length - 1; i >= 0; i--) {
        wordBackwords.push(word.charAt(i).toLowerCase());
    }

    return wordBackwords.join("") == word.toLowerCase();
}

console.log(isPalindrome("foof"));
console.log(isPalindrome("bar"));
console.log(isPalindrome("Madam"));