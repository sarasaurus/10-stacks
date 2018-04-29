'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } 
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = null;
    return this;
  }

  removeFromTail() {
    if (!this.head) {
      return new Error('no list!');
    } 
    let currentNode = this.head;
    let prev;
    while (currentNode.next) {
      prev = currentNode;
      this.tail = currentNode;
      currentNode = currentNode.next;
    } // now currentNode = the last node
    // cucrrentNode === this.tail;
    // this.tail.value should now equal previous nodes value, and this.tail.next stays null
    prev.next = null;
    this.tail = prev;


    return this;
  }

  insertAtHead(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      // this._length++;
      return this;
    }
    newHead.next = this.head;
    this.head = newHead;
    // this._length++;
    return this;
  }
  removeFromHead() {
    if (!this.head) {
      throw new Error('List is Empty!');
    }
    newHead.next = this.head;
    // this._length--;
    return this;
  }
  // // Big O(N)-- where N = length of the linked list 
  // insertAtEnd(value) {
  //   const node = new Node(value);
  //   if (!this.head) {
  //     this.head = node;
  //     this._length++;
  //     return this;
  //   }
  //   let currentNode = this.head;
  //   while (currentNode.next) {
  //     currentNode = currentNode.next;
  //   }
  //   currentNode.next = node;
  //   this._length++;
  //   return this;
  // }
  // // Big O(N)-- where N = length of the linked list 
  // remove(searchValue) {
  //   if (this.head === null) return;
  //   if (this.head.value === searchValue) {
  //     this.head = this.head.next;
  //     this._length--;
  //     return;
  //   }
  //   const currentNode = this.head;
  //   while (currentNode.next) {
  //     if (currentNode.next.value === searchValue) {
  //       currentNode.next = currentNode.next.next;
  //       this._length--;
  //       return;
  //     }
  //   }
  // }
  // // Big O(N) where N = length of the linked list
  // kthFromEnd(k) {
  //   if (this.head !== null) {
  //     let counter = 0;
  //     let currentNode = this.head;
  //     while (currentNode.next) {
  //       currentNode = currentNode.next;
  //       counter += 1;
  //     }// while
  //     console.log('counter plus 1: ', counter);
  //     if (counter - k >= 0) {
  //       currentNode = this.head;
  //       for (let i = 0; i <= counter - k - 1; i++) {
  //         currentNode = currentNode.next;
  //         console.log('counter after the loop', counter - k);
  //       }// for
  //       return currentNode;
  //     }// if traverse doesnt exist:
  //     throw new Error('exception');
  //   }// if head doesnt exist:
  //   throw new Error('exception');
  // }
  // insertBefore(value, newValue) {
  //   const newNode = new Node(newValue);
  //   if (this.head.value === value) {
  //     this.head.value = newValue;
  //   } else {
  //     let currentNode = this.head;
  //     while (currentNode.next) {
  //       const previousNode = currentNode;
  //       currentNode = currentNode.next;
  //       if (currentNode.value === value) {
  //         previousNode.next = newNode;
  //         newNode.next = currentNode;
  //         return this;
  //       } throw Error; 
  //     }
  //   }
  // }
  
  // insertAfter(value, newValue) {
  //   let newNode = new Node(newValue);
  //   if (this.head.value === newValue) {
  //     newNode.next = this.head;
  //     newNode = this.head;
  //   } else {
  //     let currentNode = this.head;
  //     while (currentNode.next) {
  //       currentNode = currentNode.next;
  //       if (currentNode.value === value) {
  //         newNode.next = currentNode.next.next;
  //         currentNode.next = newNode;
  //         return this;
  //       } throw Error;
  //     }
  //   }
  // }
};// module
