
# Project Name Stacks
**Author**: Sarah B
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)
## Overview
- implement a Stack Class using,internally, a Linked List class

- push(value) - __BigO Space__ = 1 __BigO Time__ = 1
- pop() - __BigO Space__ = 1 __BigO Time__ = depending on implimentation as much as the length of the storage property
- peek() - __BigO Space__ = 1 __BigO Time__ = 1
- isEmpty() - __BigO Space__ = 1 __BigO Time__ = 1

## Installing and Using the Data Structure
This is a Stack 'class', basically a Stack object with these methods on its storage property:
* .pop 
* .push
* .peek 
* and .isEmpty 

 to use it first instantiate a new instance of the stack class either in the stack.js file or a new file where you have required in the stack.js module and storing it in the variable 'Stack'.
__Then:__
const newStack = new Stack();
and call the methods on its storage property:
newStack.storage.push(value);
will add a new value to the the storage property
newStack.storage.pop will remove that same value from the storage property.
if push is called multiple times, pop will remove the most recently pushed value: __LIFO__ (Last In First Out)
peek will return a copy of the value in the last node
and isEmpty will return a boolean, _true_ if the storage property is empty and _false_ if it is not.

__To run tests:__
type 'npm run testjest' in the CLI
 
## Architecture
* dependancies include npm
* To use this file, fork the repo, then npm i to install the necessary dependancies
## Change Log
4-30-18 -- Stack class is still buggy, PUSH, ISEMPTY and PEEK are more or less working, but POP is still in development

