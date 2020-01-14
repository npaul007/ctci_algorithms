/*
    Implement an algorithm to find the kth to last
    item in a singly linked list
*/

let linkedList = {
    value:5,
    tail:{
        value:2,
        tail:{
            value:2,
            tail:{
                value:6,
                tail:{
                    value:7,
                    tail:{
                        value:7,
                        tail:{
                            value:2,
                            tail:{
                                value:1,
                                tail:{
                                    value:1000,
                                    tail:null
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function getKthToLastItem(linkedList,k) {
    let dict = {};

    let i = 1;
    let curNode = linkedList;
    while( curNode.tail !== null ) {
        dict[i] = curNode.value;
        i++;
        curNode = curNode.tail;
    }

    let kthToLastItem = dict[i-k+1];
    return `The kth the last item in this singly linked list when k=${k}, is ${kthToLastItem}`;
}

console.log(getKthToLastItem(linkedList,2));