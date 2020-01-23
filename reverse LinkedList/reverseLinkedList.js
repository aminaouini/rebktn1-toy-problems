/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/

// Helpers

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

var reverseLinkedList = function (linkedList) {
  var result;
  while (linkedList.value) {
    if (result) {
      let help = new Node(linkedList.value);
      help.next = result;
      result = help
    } else if (!result) {
      result = new Node(linkedList.value)
    }

    linkedList = linkedList.next
  }
  return result;
};