/*
    Write code to partition a linked list around a value x such that
    all nodes less than x come before all nodes greater than or equal
    to x.

    input: 3 - 5 - 8 - 5 - 10 - 2 - 1 (partition = 5)
    sample output: 3 - 1 - 2  - 10 - 5 - 5 - 8
*/

let linkedList = {
    value:3,
    next:{
        value:5,
        next:{
            value:8,
            next:{
                value:5,
                next:{
                    value:10,
                    next:{
                        value:2,
                        next:{
                            value:1,
                            next:null
                        }
                    }
                }
            }
        }
    }
};

function deleteNode(node) {
    let next = node.next;
    node.value = next.value;
    node.next = next.next;
}

function partitionAroundX(linkedList,x) {
    let head = linkedList;
    let tail = linkedList;

    let node = linkedList;
    while( node !== null ) {
        let next = node.next;
        if(node.value < x) {
            node.next = head;
            head = node;
        }
        else {
            tail.next = node;
            tail = node;
        }

        node = next;
    }
    tail.next = null;

    return JSON.stringify(head);
}

console.log(partitionAroundX(linkedList,5));