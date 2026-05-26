
class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val){
        let newNode = new Node(val)
        if (!this.length){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length += 1
    }
    
    pop(){
        if (!this.length){
            return undefined
        }
        let poppedNode = this.tail
        if (this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
        }
        this.length -= 1
        poppedNode.prev = null
        console.log(poppedNode)
    }
    
}

let list = new DoublyLinkedList()

console.log(list.push(10))
console.log(list.push(15))
console.log(list.push(20))

console.log(list.pop())
console.dir(list, {depth: null})

























