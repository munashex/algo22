class Node {
  contructor(val) {
    this.val = val, 
    this.next = null
  }
}

class SinglyLinkedList {
  contructor() {
    this.head = null, 
    this.tail = null, 
    this.length = 0
  } 

  push(val){
    var newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this;
}

reverse() {
  let node = this.head 
  this.head = this.tail
  this.tail = node 
  let prev = null 
  let next; 
  for(let i = 0; i < this.length; i++) {
    next = node.next 
    node.next = prev 
    prev = node  
    node = next
  }
  return this
}
 
print() {
  let arr = [] 
  let current = this.head 

  while(current) {
    arr.push(current.val) 
    current = current.next
  } 
  console.log(arr)
} 
}

let list = new SinglyLinkedList() 

list.push(2) 
list.push(3)
list.push(4)
console.log(list.print()) 



class Node {
  constructor(val) {
    this.val = val 
    this.left = null 
    this.right = null
  }
} 

class BinarySearchTree {
  constructor() {
    this.root = null 
  } 

  insert(val) {
    let newNode = new Node(val) 
    
    if(!this.root) {
      this.root = newNode 
      return this
    } 
 
    let current = this.root 

    while(current) {
      if(val < current.val) {
        if(current.left === null) {
          current.left = newNode 
          return this
        } 
        current = current.left
      }else {
       if(current.right === null){
         current.right = newNode 
         return this
       } 
       current = current.right
      } 
      }
    } 

    find(val) {
      if(!this.root) return false 

      let current = this.root  
      let found = false

      while(current && !found) {
        if(val < current.val) {
        current =   current.left  
        }else if(val > current.val) {
           current = current.right
        } else {
          found = true
        }
      } 
      if(!found) return false
      return current
    }
  } 



 
let tree = new BinarySearchTree() 
tree.insert(39)  
tree.insert(20) 
tree.insert(46)  
tree.insert(41) 
tree.insert(50) 
tree.insert(18) 
tree.insert(23)
console.clear()
console.log(tree.find(39))