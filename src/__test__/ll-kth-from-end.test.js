'use strict';

const LinkedList = require('../ll_kth_from_end');

describe('ll_kth_from_end.js', () => {
  test('#k = 0', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(8);
    testList.append(2);
    console.log('testlist!', testList);
    expect(testList.kthFromEnd(0).value).toEqual(2);
  });
  test('#k = 2', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(8);
    testList.append(2);
    expect(testList.kthFromEnd(2).value).toEqual(3);
  });
  test('#k = 6', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(8);
    testList.append(2);
    expect(() => { testList.kthFromEnd(6); }).toThrowError('exception');
  });
});
