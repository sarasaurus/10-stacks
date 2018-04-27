## Largest Product from 2D Array
Write the following methods for the Linked List class:

__.append(value)__ which adds a new node with the given value to the end of the list
__.insertBefore(value, newVal)__ which add a new node with the given newValue immediately before the first value node
__.insertAfter(value, newVal)__ which add a new node with the given newValue immediately after the first value node

You have access to the Node class and all the properties on the Linked List class.

## Examples: 

__.append(value)__
Input	Args	Output
head -> [1] -> [3] -> [2] -> X	5	head -> [1] -> [3] -> [2] -> [5] -> X
head -> X	1	head -> [1] -> X
__.insertBefore(value, newVal)__
Input	Args	Output
head -> [1] -> [3] -> [2] -> X	3, 5	head -> [1] -> [5] -> [3] -> [2] -> X
head -> [1] -> [3] -> [2] -> X	1, 5	head -> [5] -> [1] -> [3] -> [2] -> X
head -> [1] -> [2] -> [2] -> X	2, 5	head -> [1] -> [5] -> [2] -> [2] -> X
head -> [1] -> [3] -> [2] -> X	4, 5	Exception
__.insertAfter(value, newVal)__
Input	Args	Output
head -> [1] -> [3] -> [2] -> X	3, 5	head -> [1] -> [3] -> [5] -> [2] -> X
head -> [1] -> [3] -> [2] -> X	2, 5	head -> [1] -> [3] -> [2] -> [5] -> X
head -> [1] -> [2] -> [2] -> X	2, 5	head -> [1] -> [2] -> [5] -> [2] -> X
head -> [1] -> [3] -> [2] -> X	4, 5	Exception


## Solution
![white board image](./assets/ll_insertions.jpg)


## Checklist
- [x] write 3 tests using jest
- [] ensure tests are passing

## Big O
for all methods 
Big O of Time = BigO(N), where N = length of the linked list the method is applied to
Big O of Space =BigO(1), nothing new is created, unless the input where to be huge
