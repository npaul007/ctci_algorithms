
function Graph () {
    this.nodes = {};
    
    this.addNode = function (node) {
        this.nodes[node.value] = node;
    }

    this.removeNode = function (value) {
        delete this.nodes[value];
    }
}

function Node (value,edges) {
    this.value = value;
    this.edges = edges
}

function BFS(node) {

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

console.log(graph);

