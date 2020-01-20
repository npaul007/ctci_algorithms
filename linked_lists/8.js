/*
    Given a linked list which might contain a loop
    implement an algorithm that returns the node at
    the beginning of the loop ( if one exists )
*/

let linkedList = {
    value:"A",
    next:{
        value:"B",
        next:{
            value:"C",
            next:{
                value:"D",
                next:{
                    value:"E",
                    next:{
                        value:"C",
                        next:null
                    }
                }
            }
        }
    }
};

function getLoop(list) {
    let dict = {};
    let loop = "none";
    let curNode = list;
    while( curNode !== null ) {
        if( curNode !== null ) {
            if( dict[curNode.value] == undefined ) {
                dict[curNode.value] = "exists"
            }
            else {
                loop = curNode.value;
            }

            curNode = curNode.next;

            if( loop !== "none" ) {
                curNode = null;
            }
        }
    }

    return loop;
}

console.log(getLoop(linkedList))