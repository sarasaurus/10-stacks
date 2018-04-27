'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let currentNode;
    if (!this.head) {
      this.head = new Node(value);
      return this;
    } 
    currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    } 
    currentNode.next = new Node(value);
    return this;
  }// append

  kthFromEnd(k) {
    if (this.head !== null) {
      let counter = 0;
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
        counter += 1;
      }// while
      console.log('counter plus 1: ', counter);
      if (counter - k >= 0) {
        currentNode = this.head;
        for (let i = 0; i <= counter - k - 1; i++) {
          currentNode = currentNode.next;
          console.log('counter after the loop', counter - k);
        }// for
        return currentNode;
      }// if traverse doesnt exist:
      throw new Error('exception');
    }// if head doesnt exist:
    throw new Error('exception');
  }
};// module
