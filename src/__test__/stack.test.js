'use strict';

const Stack = require('../modules/stack');

const testStack = new Stack();
testStack.push(1);
testStack.push(3);
testStack.push(8);
testStack.push(2);
console.log(JSON.stringify(testStack, null, 4));
const emptyStack = new Stack();

describe('testing the stack class', () => {
  describe('PUSH should push nodes into the storage property', () => {
    test('storage property should populate', () => {
      expect(testStack.storage.head.value).toEqual(1);
      expect(testStack.storage.head.next.value).toEqual(3);
      expect(testStack.storage.tail.value).toEqual(2);
    });
  });
  describe('POP should delete the last node from the storage property', () => {
    test('the last node on the storage property is 2', () => {
      const popStack = new Stack();
      popStack.push(1);
      popStack.push(3);
      popStack.push(8);
      popStack.push(2);
      expect(popStack.pop().value).toEqual(2);
    });
    test('pop ran twice, should delete twice', () => {
      const popStack = new Stack();
      popStack.push(1);
      popStack.push(3);
      popStack.push(8);
      popStack.push(2);
      popStack.pop();
      popStack.pop();
      expect(popStack.storage.tail.value).toEqual(3);
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
      expect(popStack.storage.tail.value).toEqual(1);
    });
  });
  describe('PEEK should return a copy of a node from the end of the storage property', () => {
    test('should return a copy of the node but the storage should not decrease', () => {
      expect(testStack.peek()).toEqual(2);
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
