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

  push(value) {
    this.storage.append(value);
    // adds to list
  }// push
  pop() {
    const pop = this.storage.tail;
    delete this.storage.tail;
    return pop;
    // removes from list
  }// pop
  peek() {
    const value = this.storage.tail;
    return value;
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
