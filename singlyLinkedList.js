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

  get(index){
        
        if (index < 0 || index >= this.length){
            return null
        }
        let counter = 0
        let currentNode = this.head
        
        while (index !== counter){
            counter += 1
            currentNode = currentNode.next
        }
        
        return currentNode
    }
}

let a = new SinglyLinkedList();

a.push(10);
a.push(15);
a.push(20);
a.push(25);
// console.log(a)

console.log(a.pop());

console.log(a.shift());
console.log(a.shift());
console.log(a.shift());
a.unshift(23);
console.log(a);

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
