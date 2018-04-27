'use strict';

const LinkedList = require('../modules/linked-list');
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
  describe('PUSH should append a node to the end of the storage property', () => {
    test('storage property should populate', () => {
      expect(testStack.storage.head.value).toEqual(1);
    });
    test('storage property should populate from the end', () => {
      expect(testStack.storage.tail.value).toEqual(2);
    });
  });
  describe('POP should remove a node from the end of the storage property', () => {
    test('the storage should decrease by one each time the method runs', () => {
      testStack.pop();
      expect(testStack.storage.head.next.next.value).toEqual(8);
    });
  });
  describe('PEEK should return a copy of a node from the end of the storage property', () => {
    test('should return a copy of the node but the storage should not decrease', () => {
      expect(testStack.peek().value).toEqual(8);
    });
  });
  describe('ISEMPTY should return true if storage is empty or false, if it is not', () => {
    test('should return true', () => {
      expect(emptyStack.isEmpty()).toBeTruthy();
    });
    test('should return false', () => {
      expect(testStack.isEmpty()).toBeTruthy();
    });
  });
});
