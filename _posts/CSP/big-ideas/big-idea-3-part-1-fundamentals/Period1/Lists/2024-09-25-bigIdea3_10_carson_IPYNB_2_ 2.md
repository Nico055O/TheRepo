---
layout: post
title: Big Idea 3.10 Part 3- Modifying Lists
description: Learn more about how to modify lists and check their length!
type: hacks
toc: False
comments: True
author: Carson
permalink: /csp/big-idea/p1/3-10-3
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
   background-color: var(--accent-pink) !important;
   color: white !important;
   padding: 2px 4px !important;
   border-radius: 4px !important;
}


table td {
   background-color: var(--dark-pink) !important;
}
</style>

## Modifying Elements
Since lists in Python are zero-indexed, meaning the first element is at index `0`, the second at index `1`, etc, here, `aList[1]` refers to the second element, which is `'banana'`. This line updates that element to `'kiwi'`.


```python
# Python

aList = ['apple', 'banana', 'cherry']
aList[1] = 'kiwi'  # Change 'banana' to 'kiwi'
print(aList)  # Output: ['apple', 'kiwi', 'cherry']
```

Here, the index is set to 2, which corresponds to the third element of the array, `'cherry'`. Then, the value is updated at the specified index (2) from `'cherry'` to `'kiwi'`. 


```python
%%js
// Javascript

let alist = ['apple', 'banana', 'cherry', 'grape'];

// Specify the index you want to update
let index = 2; // For example, to update 'cherry'

// Update the value at the specified index
alist[index] = 'kiwi'; // Now 'cherry' is replaced with 'kiwi'

console.log(alist); // Output: ['apple', 'banana', 'kiwi', 'grape']
```

## Checking Length
The `len()` function is a built-in Python function that returns the number of items in an object, in this case, the list aList. Since aList contains four elements, `len(aList)` will return 4. This value is then stored in the variable `number_of_elements`.


```python
# Python

aList = ['apple', 'banana', 'kiwi', 'grape']
number_of_elements = len(aList)  # Gets the number of elements
print(number_of_elements)  # Output: 4
```

The `.length` property of the list is used to determine the number of items in aList. 


```python
%%js
// Javascript

let aList = ['apple', 'banana', 'kiwi', 'grape'];
let numberOfElements = aList.length; // Gets the number of elements
console.log(numberOfElements); // Output: 4
```

## Iterating through a List
Iterating a list means going through each element of the list one by one, allowing you to perform operations or access the elements sequentially. This line starts a `for` loop that iterates over each element in the `fruit` list. The variable `fruit` will take on the value of each element in the list, one at a time.


```python
# Python

aList = ['apple', 'banana', 'cherry']
for fruit in aList:
    print(fruit) # Output: apple, banana, cherry
```


```python
%%js
// Javascript

let aList = ['apple', 'banana', 'cherry'];


for (let fruit of aList) {
   // Replace this comment with your block of statements
   console.log(fruit); // Example statement
}
```

## Popcorn Hack
- Try changing one of your elements into something new


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
