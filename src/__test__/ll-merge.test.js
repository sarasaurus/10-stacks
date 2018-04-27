'use strict';

const LinkedList = require('../ll_kth_from_end');

const merge = require('../ll-merge');
const util = require('util');

describe('ll-merge.js', () => {
  const testListA = new LinkedList();
  const testListB = new LinkedList();
  const testListC = new LinkedList();
  testListA.append(1);
  testListA.append(3);
  testListA.append(2);
  testListB.append(5);
  testListB.append(9);
  testListB.append(4);
  testListC.append(11);
  testListC.append(12);
  console.log('testlist A!', testListA);
  console.log('testlist B!', testListB);
  console.log('testlist C!', testListC);
  it('list A and list B are Equal in Length', () => {
    console.log('testlist A!', testListA);
    expect(merge.mergeLists(testListA, testListB).head.value).toEqual(1);
    expect(merge.mergeLists(testListA, testListB).head.next.value).toEqual(5);
  });
  it('List A is shorter', () => {
    expect(merge.mergeLists(testListC, testListB).head.value).toEqual(11);
    expect(merge.mergeLists(testListC, testListB).head.next.next.value).toEqual(12);
    expect(merge.mergeLists(testListC, testListB).head.next.next.next.value).toEqual(9);
    expect(merge.mergeLists(testListC, testListB).head.next.next.next.value).toEqual(4);
    console.log();
  });
  test('List B is shorter', () => {
    expect(merge.mergeLists(testListC, testListB).head.value).toEqual(1);
    expect(merge.mergeLists(testListC, testListB).head.next.value).toEqual(11);
    expect(merge.mergeLists(testListC, testListB).head.next.next.next.value).toEqual(12);
    expect(merge.mergeLists(testListC, testListB).head.next.next.next.next.value).toEqual(2);
  });
});