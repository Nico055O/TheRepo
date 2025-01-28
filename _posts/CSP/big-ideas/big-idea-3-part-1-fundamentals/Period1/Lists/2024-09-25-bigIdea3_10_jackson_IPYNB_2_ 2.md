---
layout: post
title: Big Idea 3.10 Part 2- Inserting & Deleting Elements From Lists
description: Learn more about adding and removing elements from lists!
type: hacks
toc: False
comments: True
author: Jackson
permalink: /csp/big-idea/p1/3-10-2
menu: nav/csp_units/csp_unit3_p1_fundamentals.html
---

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
  }
</style>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #e3768a, 0 0 10px #ae76e3, 0 0 15px #7d76e3, 0 0 20px #6385cf;
  }
  to {
    text-shadow: 0 0 20px #6385cf, 0 0 30px #7d76e3, 0 0 40px #ae76e3, 0 0 50px #e3768a;
  }
}
</style>


<style>
:root {
    --light-pink: #e0b4d4;
    --medium-pink: #4a5a94;
    --dark-pink: #302e63;
    --accent-pink: #ff99cc;
    --background-pink: #ffe6f0;
}

body {
    color: var(--dark-pink) !important;
}

article {
    background-color: var(--light-pink) !important;
    color: var(--dark-pink) !important;
    border: 2px solid var(--medium-pink) !important;
    padding: 20px !important;
    border-radius: 8px !important;
}

a {
    color: var(--accent-pink) !important;
}

a:hover {
    color: var(--light-pink) !important;
}

h1, h2, h3, h4 {
    color: white !important;
}

blockquote {
    background-color: #272726 !important;
    color: var(--dark-pink) !important;
    padding: 10px 20px !important;
    margin: 10px 0 !important;
    border-radius: 4px !important;
}

code {
    background-color: var(--medium-pink) !important;
    color: white !important;
    padding: 2px 4px !important;
    border-radius: 4px !important;
}

table td {
    background-color: var(--dark-pink) !important;
}
</style>

## Inserting Elements
The `insert` method is intended to add an element to the list at a specified index. The first argument should be an integer (the index), and the second argument should be the value you want to insert.


```python
# Python

alist = ['apple', 'banana', 'cherry']
alist.insert(index, value)
alist.insert('1', 'kiwi')  # alist is now ['apple', 'kiwi', 'banana', 'cherry']
```

The `indexOf` method searches the array for the specified element, in this case, 'apple'. The `splice` method is used to insert elements into the array. 


```python
%%js
// Javascript

let alist = ['apple', 'banana', 'cherry'];

// Find the index of 'apple'
const index = alist.indexOf('apple');  // index will be 0 because 'apple' is at the first position of the array.

// Insert 'a' before 'apple'
if (index !== -1) {
   alist.splice(index, 0, 'kiwi'); // 0 indicates no elements to remove
}

console.log(alist); // Output: ['kiwi', 'apple', 'banana', 'cherry']
```

## Removing Elements
The `remove` method is used to remove the first occurrence of a specified value from a list. In this case, you're trying to remove `'kiwi'`.


```python
# Python

aList.remove('kiwi')  # Removes 'kiwi' from the list
print(aList)  # Output: ['apple', 'banana', 'cherry',]
```

Once again use the `indexOf` method to find the index of `'kiwi'`. If 'kiwi' is found, the `splice` method is used. This method modifies the list. The first argument (index) is the starting index (where to begin removing items), and the second argument (1) is the number of items to remove. Here, it removes one item starting from index 3, effectively removing 'kiwi'.


```python
%%js
// Javascript

let aList = ['apple', 'banana', 'cherry', 'kiwi', 'grape']; // initial list
let index = aList.indexOf('kiwi'); // Find the index of 'kiwi'

if (index !== -1) {
   aList.splice(index, 1);  // Removes 'kiwi' from the list
}
console.log(aList);  // Output: ['apple', 'banana', 'cherry', 'grape']
```

## Deleting an element
This line uses the `del` statement to remove the item at index `2` from the list. 


```python
# Python
aList = ['apple', 'banana', 'cherry', 'grape'] # initial list
del aList[2]  # Deletes 'cherry' at index 2
print(aList)  # Output: ['apple', 'banana', 'grape']
```

This line uses the `splice` method to remove an element from the array. The splice method takes two arguments: The first argument `(2)` specifies the starting index from which to begin removing elements. Here, it points to the element at index `2`, which is `'cherry'`.
The second argument `(1)` indicates how many elements to remove starting from that index. In this case, it will remove `1` element.


```python
%%js
// Javascript

let aList = ['apple', 'banana', 'cherry', 'grape'];

// Delete the element at index 2
aList.splice(2, 1); // Removes 1 element at index 2

console.log(aList); // Output: ['apple', 'banana', 'grape']

```

## Popcorn Hack
- Try adding an element to your list
- Try deleting a different element from your list
