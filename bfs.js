
function Graph () {
    this.nodes = {};
    
    this.size = function () {
        return Object.keys(this.nodes).length;
    }

    this.addNode = function (node) {
        this.nodes[node.value] = node;
    }

    this.removeNode = function (value) {
        delete this.nodes[value];
    }

    this.get = function (value) {
        return this.nodes[value];
    }
}

function Node (value,edges) {
    this.value = value;
    this.edges = edges;
    this.traversed = false;
}

function BFS(nodeValue,graph) {
    let traversedNodes = [];

    let queue = [];
    queue.enqueue = queue.unshift;
    queue.dequeue = queue.pop;

    let curNode = graph.get(nodeValue);

    queue.unshift(curNode.value);
    traversedNodes.push(curNode.value);

    return traversedNodes.join('\n');
}

let graph = new Graph();
graph.addNode( new Node('A',['B','S']) );
graph.addNode( new Node('B',[]) );
graph.addNode( new Node('S',['C','G']) );
graph.addNode( new Node('C',['D','E','F']) );
graph.addNode( new Node('G',['H']) );
graph.addNode( new Node('D',[]) );
graph.addNode( new Node('E',[]) );
graph.addNode( new Node('F',[]) );
graph.addNode( new Node('H',['E']) );

console.log();

