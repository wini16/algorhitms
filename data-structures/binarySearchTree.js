class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function checkAndInsert(newNode, checkedNode) {
  if (newNode.value > checkedNode.value) {
    if (!checkedNode.right) {
      return checkedNode.right = newNode;
    }

    return checkAndInsert(newNode, checkedNode.right);
  }

  if (newNode.value < checkedNode.value) {
    if (!checkedNode.left) {
      return checkedNode.left = newNode;
    }

    return checkAndInsert(newNode, checkedNode.left);
  }
}

function checkFind(search, checkedNode) {
  if (!checkedNode) {
    return false;
  }

  if (checkedNode.value === search) {
    return true;
  }

  if (search < checkedNode.value) {
    return checkFind(search, checkedNode.left);
  }

  return checkFind(search, checkedNode.right);
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      checkAndInsert(newNode, this.root);
    }

    return this;
  }

  find(value) {
    return checkFind(value, this.root);
  }

  BFS() {
    if (!this.root) {
      return [];
    }
    
    const queue = [];
    const visited = [];

    queue.push(this.root);

    while (queue.length) {
      const visiting = queue.shift();
      visited.push(visiting);

      if (visiting.left) {
        queue.push(visiting.left);
      }

      if (visiting.right) {
        queue.push(visiting.right);
      }
    }

    return visited;
  }

  preOrder() {
    if (!this.root) {
      return [];
    }
    const visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return visited;
  }

  postOrder() {
    if (!this.root) {
      return [];
    }
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
      
      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }

  inOrder() {
    if (!this.root) {
      return [];
    }
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return visited;
  }
}

var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(7);
bst.insert(2);
bst.insert(5);
bst.insert(12);
bst.insert(20);
bst.insert(1);
bst.insert(19);

console.log(bst.preOrder());