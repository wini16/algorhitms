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