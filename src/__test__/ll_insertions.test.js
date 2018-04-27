'use strict';

const LinkedList = require('../ll_insertions');

describe('ll_insertions.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
  test('#appendd', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);
    testList.append(10);
    expect(testList.head.next.value).toEqual(10);
  });
  test('#insertBefore', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.insertBefore(2, 5);
    expect(testList.head.next.value).toEqual(5);
    expect(testList.head.next.next.value).toEqual(2);
  });
  test('#insertAfter', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.insertAfter(2, 5);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(3);
  });
});
