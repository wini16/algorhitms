const { PriorityQueue } = require('./priorityQueue');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }


  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }


  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }


  printPath(start, obj) {
    if (!obj[start]) {
      return [start];
    }

    return [...this.printPath(obj[start], obj), ...start];
  }


  calcPath(start, end) {
    const pq = new PriorityQueue();
    const distances = {};
    const previous = {};
    const visited = {};
    
    for (const v in this.adjacencyList) {
      if (this.adjacencyList.hasOwnProperty(v)) {
        distances[v] = v === start ? 0 : Infinity;
        pq.insert(v, distances[v]);
        previous[v] = null;
      }
    }
    
    while (pq.values.length) {
      const current = pq.pop().value;

      if (current === end) {
        break;
      }

      if (distances[current] === Infinity) {
        return;
      }

      this.adjacencyList[current].forEach(v => {
        if (visited[v.node]) {
          return;
        }

        let distance = v.weight + distances[current];
        
        if (distance < distances[v.node]) {
          distances[v.node] = distance;
          previous[v.node] = current;
          pq.insert(v.node, distance);
        }
      });
      
      visited[current] = 1;
    }
    
    console.log('distances: ', distances);
    console.log(this.printPath(end, previous));
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('E', 'B', 3);
graph.addEdge('A', 'C', 2);
graph.addEdge('C', 'D', 2);
graph.addEdge('E', 'D', 3);
graph.addEdge('F', 'D', 1);
graph.addEdge('C', 'F', 4);
graph.addEdge('E', 'F', 1);

graph.calcPath('A', 'E');