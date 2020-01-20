/*
    Implement a function to check if a linked list is a palindrome
*/

let linkedList1 = {
    value:7,
    next: {
        value:1,
        next:{
            value:6,
            next:null
        }
    }
};

let linkedList2 = {
    value:6,
    next: {
        value:2,
        next:{
            value:6,
            next:null
        }
    }
};

function isPalindrome(list) {
    let values = [];

    let curNode = list;
    while(curNode !== null) {
        values.push(curNode.value);
        curNode = curNode.next;
    }

    let rValues = values.slice(0);
    rValues.reverse();

    return values.join(" ") === rValues.join(" ");
}

console.log(isPalindrome(linkedList1));
console.log(isPalindrome(linkedList2));