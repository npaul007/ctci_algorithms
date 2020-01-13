/*
    write code to remove duplicates from an unsorted linked list
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
                            tail:null
                        }
                    }
                }
            }
        }
    }
}

function removeDuplicates(node) {
    let log = {};

    let curNode = node;

    log[curNode.value] = "exists";

    while( curNode.tail !== null ) {
        if(curNode.tail !== null) {
            let iterate = true;
            if(log[curNode.tail.value] == undefined ) {
                log[curNode.tail.value] = "exists";
            }
            else  {
                if(curNode.tail.tail !== null) {
                    curNode.tail = curNode.tail.tail;
                }
                else {
                    curNode.tail = null;
                }
                iterate = false;
            }
            
            curNode = (iterate == true) ? curNode.tail : curNode;    
        }
    }

    return JSON.stringify(node);
}

console.log(`Before:\n${JSON.stringify(linkedList)}\nAfter:\n${removeDuplicates(linkedList)}`);