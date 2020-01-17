/*
    You have two numbers represented by linked list
    where each node contains a single digit. The digits are
    stored in reverse order, such that the 1's digit is at the head of the list
    write a function that adds the two numbers and returns the sum as a linked list
*/

let int1 = {
    value:7,
    next: {
        value:1,
        next:{
            value:6,
            next:null
        }
    }
};

let int2 = {
    value:5,
    next: {
        value:9,
        next:{
            value:2,
            next:null
        }
    }
};

function getInteger(node) {
    let arr = [];
    while(node !== null) {
        arr.unshift(String(node.value));
        node = node.next;
    }
    return Number(arr.join(""));
}

function Node(value) {
    this.value = value;
    this.next = null;
}

function getSumOfTwoIntegers(integer1,integer2) {
    let i1 = getInteger(integer1);
    let i2 = getInteger(integer2);

    let sum = i1+i2;
    let arr = String(sum).split("").reverse();

    let node = new Node(arr.shift());
    while( arr.length > 0 ) {
        let n = new Node(arr.shift());
        let nodeToAddTo = node;
        while( nodeToAddTo.next !== null ) {
            nodeToAddTo = nodeToAddTo.next;
        }
        nodeToAddTo.next = n;
    }

    return JSON.stringify(node);
}

console.log(getSumOfTwoIntegers(int1,int2));