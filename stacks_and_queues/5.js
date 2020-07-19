/*
    Write a program to sort a stack such that the smallest items are
    on the top. You can use an additional temp stack, but you may not copy
    elements into any other data structure.
*/

const Stack = require('./stack');

let stack1 = new Stack();
let stack2 = new Stack();

let data = [1,4,3];

// populating stack1 w/ data
while(data.length > 0) {
    stack1.add(data.shift());
}

function removeItemFromStack(stack,index) {
    
}

while( stack1.isEmpty() == false ) {
    let min = stack1.stack[0];

    let i = 0;
    let rIndex = -1;
    while( i < stack1.stack.length ) {
        if( stack1.stack[i] < min ) {
            min = stack1.stack[i];
            rIndex = i;
        }
        i++;
    }

    console.log(min);
}

console.log(stack1.stack,stack2);