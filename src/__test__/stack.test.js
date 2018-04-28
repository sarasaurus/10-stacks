'use strict';

// const LinkedList = require('../modules/linked-list');
const Stack = require('../modules/stack');

// beforeEach(() => {
//   // Clears the database and adds some testing data.
//   // Jest will wait for this promise to resolve before running tests.
//   return globalDatabase.clear().then(() => {
//     return globalDatabase.insert({testData: 'foo'});
//   });
// });
const testStack = new Stack();
testStack.push(1);
testStack.push(3);
testStack.push(8);
testStack.push(2);
const emptyStack = new Stack();

describe('testing the stack class', () => {
  describe('PUSH should push nodes into the storage property', () => {
    test('storage property should populate', () => {
      expect(testStack.storage.head.value).toEqual(1);
      expect(testStack.storage.head.next.value).toEqual(3);
      expect(testStack.storage.tail.value).toEqual(2);
    });
    // test('storage property should populate from the end', () => {
    //   expect(testStack.storage.tail.value).toEqual(1);
    // });
  });
  describe('POP should delete the last node from the storage property', () => {
    test('the last node on the storage property is 2', () => {
      const popStack = new Stack();
      popStack.push(1);
      popStack.push(3);
      popStack.push(8);
      popStack.push(2);
      popStack.pop();
      expect(popStack.storage.tail.value).toEqual(2);
    });
    test('pop ran twice, should delete twice', () => {
      const popStack = new Stack();
      popStack.push(1);
      popStack.push(3);
      popStack.push(8);
      popStack.push(2);
      popStack.pop();
      popStack.pop();
      expect(popStack.storage.tail.value).toEqual(8);
    });
    test('pop ran three times, should delete three nodes', () => {
      const popStack = new Stack();
      popStack.push(1);
      popStack.push(3);
      popStack.push(8);
      popStack.push(2);
      popStack.pop();
      popStack.pop();
      popStack.pop();
      expect(popStack.storage.tail.value).toEqual(3);
    });
  });
  describe('PEEK should return a copy of a node from the end of the storage property', () => {
    test('should return a copy of the node but the storage should not decrease', () => {
      // let value = testStack.peek
      expect(testStack.peek()).toEqual(2);
    });
  });
  describe('ISEMPTY should return true if storage is empty or false, if it is not', () => {
    test('should return true', () => {
      expect(emptyStack.isEmpty()).toBeTruthy();
    });
    test('should return false', () => {
      expect(testStack.isEmpty()).toBeFalsy();
    });
  });
});
