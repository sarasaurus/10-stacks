const List = require('./linked-list');


module.exports = class Stack {
  constructor() {
    this.storage = new List();
  } 
  push(value) {
    this.storage.insertAtTail(value);
    return this;
  }
  pop() {
    let popVal = null;
    popVal = this.storage.removeFromTail();
    return popVal;
  }
  peek() {
    return this.storage.tail.value;
  } 
  isEmpty() {
    if (this.storage.head === null) {
      return true;
    }
    return false;
  }
};

