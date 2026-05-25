class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    this.length += 1;
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // console.log(this.head, this.tail)
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) return undefined;
    let firstNode = this.head;
    this.head = firstNode.next;
    firstNode.next = null;

    this.length -= 1;
    if (!this.length) {
      this.tail = null;
    }

    return firstNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;

    this.head = newNode;
    if (!this.length) {
      this.tail = this.head;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;

    while (index !== counter) {
      counter += 1;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, value) {
    let setNode = this.get(index);

    if (setNode) {
      setNode.val = value;
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

    let previousNode = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length += 1;
    return true;
  }

  remove(index){
    if (index < 0 || index >= this.length){
      return undefined
    }

    if (index === 0){
      this.shift()
      return true
    }

    if (index === this.length - 1){
      this.pop()
      return true
    }

    let previousNode = this.get(index - 1)
    let nextNodeOfPrevious = previousNode.next
    let nextNextNode = nextNodeOfPrevious.next

    previousNode.next = nextNextNode
    this.length -= 1
    return true

  }

  reverse(){
    let previousNode = this.head
    let currentNode = previousNode.next
    let nextNode = currentNode.next

    while (nextNode.next){
      currentNode.next = previousNode
      previousNode.next = nextNode
    }
  }
}

let a = new SinglyLinkedList();

a.push(10);
a.push(15);
a.push(20);
a.push(25);
// console.log(a)

// console.log(a.pop());

// console.log(a.shift());
// console.log(a.shift());
// console.log(a.shift());
// a.unshift(23);
// console.log(a.insert(1, 111));
// console.log(a, { depth: null });
// console.log(a.remove(3))
console.log(a.reverse())
console.dir(a, { depth: null });

// {
//     val: 10
//     next : {
//         val: 15,
//         next: {
//             val : 20
//             next: null
//         }
//     }
// }
