// implement a Stack Class using,internally, a Linked List class
// implement push(value) -- add value to end of LL
// and pop() methods -- take value from end of LL-- return that value

// implement peek() and isEmpty() methods on the Stack class
const Node = require('./node');
const List = require('./linked-list');


module.exports = class Stack {
  constructor() {
    this.storage = new List();
  } 
  // can also think of head as the end from which to push and pop
  push(value) {
    // if (!this.storage.head) {
    //   this.storage.head = new Node(value);
    // }
    // const nextValue = this.storage.head.next;
    // this.storage.head = new Node(value);
    // this.storage.head.next = nextValue;
    // // adds to list
    // this.storage.append(value);
    this.storage.insertAtTail(value);
    console.log('this push is', this.storage);
    return this;
  }// push
  pop() {
    // const nextValue = this.storage.head.next;
    // const pop = this.storage.head;
    // this.storage.head = nextValue;
    // // this.storage.tail = previous node, needs a more robust selection
    // return pop;
    // removes from list
    // const popVal = this.storage.head;
    // const nextVal = this.storage.next;
    // this.storage.head = nextVal;
    // return popVal;
    // const val = this.storage.tail.value;
    this.storage = this.storage.removeFromTail();
    console.log('this is ', this);
    return this;
  }// pop
  peek() {
    const val = this.storage.tail.value;
    return val;
    // return a copy of the node
  }// peek
  isEmpty() {
    if (this.storage.head === null) {
      return true;
    }
    return false;
       
    // return boolean;
  }
};
// refector for append -- shoudl be east
