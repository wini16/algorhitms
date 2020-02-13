class Graph {
  constructor() {
    this.list = {};
  }


  addVertex(val) {
    if (!this.list[val]) {
      this.list[val] = [];
    }
  }


  addEdge(v1, v2) {
    if (this.list[v1] && this.list[v2]) {
      this.list[v1].push(v2);
      this.list[v2].push(v1);
    }
  }


  removeVertex(val) {
    if (this.list[val]) {
      this.list[val].forEach(ver => this.removeEdge(val, ver));
      delete this.list[val];
    }
  }


  removeEdge(v1, v2) {
    if (this.list[v1] && this.list[v2]) {
      this.list[v1] = this.list[v1].filter(el => el !== v2);
      this.list[v2] = this.list[v2].filter(el => el !== v1);
    }
  }


  dftRecursive(start) {
    const result = [];
    const visited = {};
    const traverse = v => {
      if (!v) {
        return;
      }
      if (visited[v]) {
        return;
      }

      visited[v] = 1;
      result.push(v);
      
      this.list[v].forEach(next => traverse(next));
    };

    traverse(start);

    return result;
  }


  dftIterative(start) {
    if (!start) {
      return;
    }
    
    const result = [];
    const s = [start];
    const visited = { [start]: 1 };
    let current;

    while (s.length) {
      current = s.pop();
      result.push(current);
      
      this.list[current].forEach(next => {
        if (!visited[next]) {
          visited[next] = 1;
          s.push(next);
        }
      });
    }

    return result;
  }


  bft(start) {
    if (!start) {
      return;
    }
    
    const result = [];
    const queue = [start];
    const visited = { [start]: 1 };
    let current;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this.list[current].forEach(next => {
        if (!visited[next]) {
          visited[next] = 1;
          queue.push(next);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.dftRecursive('A'));
console.log(g.dftIterative('A'));
console.log(g.bft('A'));