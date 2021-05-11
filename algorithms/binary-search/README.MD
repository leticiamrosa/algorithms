### Binary Search

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. 
* Binary search compares the target value to the middle element of the array.
* If they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. 
* If the search ends with the remaining half being empty, the target is not in the array.
* The binary search just work when the list it is sorted

---
Time Complexity: O(log(n)) - since we split search area by two for every next iteration.

[Youtube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
