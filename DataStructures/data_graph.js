class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.get(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(a, b) {
    this.adjacencyList.get(a).push(b);
    this.adjacencyList.get(b).push(a);
  }

  removeEdge(a, b) {
    let aNewEdges = this.adjacencyList.get(a).filter(edge => edge !== b);
    this.adjacencyList.set(a, aNewEdges);
    let bNewEdges = this.adjacencyList.get(b).filter(edge => edge !== a);
    this.adjacencyList.set(b, bNewEdges);
  }

  removeVertex(vertex) {
    [...this.adjacencyList.keys()].map(v => {
      if (v !== vertex) {
        this.removeEdge(vertex, v);
      }
    });
    this.adjacencyList.delete(vertex);
  }

  dfsRecursive(start) {
    // Store nodes you traverse
    let result = [];
    // Track visited vertexs
    let visited = new Map();
    // List of graph vertexes and their edges
    let adjancyList = this.adjacencyList;

    (function dfs(vertex) {
      // Test valid vertex
      if (!vertex) return null;
      // Set visited
      visited.set(vertex, true);
      // Push to results
      result.push(vertex);
      // Take a look at connections
      adjancyList.get(vertex).forEach(neighbor => {
        // If connection not visited
        // Recurse using non-visited node
        if (!visited.get(neighbor)) return dfs(neighbor);
      });
    })(start);

    console.log(result);
    return result;
  }

  dfsInterative(start) {
    let stack = [start];
    let visited = new Map();

    let result = [];
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      if (!visited.get(currentVertex)) {
        visited.set(currentVertex, true);
        result.push(currentVertex);

        this.adjacencyList.get(currentVertex).forEach(v => stack.push(v));
      }
    }

    console.log("result:", result);
    return result;
  }

  bfs(start) {
    let queue = [start];

    let visited = new Map();

    let results = [];

    let adjacencyList = this.adjacencyList;
    let currentVert;

    while (queue.length) {
      currentVert = queue.shift();
      results.push(currentVert);

      adjacencyList.get(currentVert).forEach(v => {
        if (!visited.get(v)) {
          visited.set(v, true);
          queue.push(v);
        }
      });
    }

    console.log("results:", results);
    return results;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// g.removeVertex("HK");
// g.dfsRecursive("A");
// g.dfsInterative("A");
g.bfs("A");
console.log(g.adjacencyList);
