class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    poppedNode.prev = null;
    console.log(poppedNode);
  }

  shift() {
    if (!this.length) {
      return null;
    }

    let firstNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode.next;
      this.head.prev = null;

      firstNode.next = null;
    }

    this.length -= 1;
    return firstNode;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;

      this.head = newNode;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = null;
    let counter = null;

    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;

      while (counter !== index) {
        counter += 1;
        current = current.next;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;

      while (counter !== index) {
        counter -= 1;
        current = current.prev;
      }
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.shift();
      return true;
    }

    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    let poppedItem = this.get(index);

    let poppedBefore = poppedItem.prev
    let poppedNext = poppedItem.next;

    poppedBefore.next = poppedNext;
    poppedNext.prev = poppedBefore;
    this.length -= 1;

    poppedItem.next = null;
    poppedItem.prev = null;
    return poppedItem;
  }
}

let list = new DoublyLinkedList();

// console.log(list.push(10));
// console.log(list.push(15));
// console.log(list.push(20));
list.push(10);
list.push(15);
list.push(20);
list.push(25);
list.push(30);
list.push(35);

// console.log(list.pop())

// console.log(list.shift())
// console.log(list.unshift(30));
// console.log(list.get(2));

// console.log(list.set(0, 2232));
// console.log(list.insert(3, 245));
console.log(list.remove(3))
console.dir(list, { depth: null });
