---
layout: post
title: Big Idea 3.10 Part 4- Different Values in Lists
description: Learn more about lists
type: hacks
toc: False
comments: True
author: Brandon
permalink: /csp/big-idea/p1/3-10-4
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

## Find the minimum value in a list
The `min()` function is a function that returns the smallest item from an iterable (like a list). Here, `min(my_list)` scans through all the elements in aList and identifies the minimum value.


```python
# Python

aList = [3, 1, 4, 1, 5, 9, 2]
minimum_value = min(aList)
print(minimum_value)  # Output: 1
```

You can also find the minimum through a loop. First, we initialize the variable `minimum_value` with the first element of the list, which is 3. This serves as our starting point for comparison. The `for` begins a for loop that iterates through each element in aList. The variable `num` will take on the value of each element in the list during each iteration. Inside the loop, we check if the current element `(num)` is less than the current `minimum_value`. If `num` is smaller, we update `minimum_value` to be `num`. 



```python
# Python
aList = [3, 1, 4, 1, 5, 9, 2]
minimum_value = aList[0]  # Start with the first element

for num in aList:
    if num < minimum_value:
        minimum_value = num

print(minimum_value)  # Output: 1
```

## Sum of Even Numbers of a list
This code effectively demonstrates how to iterate through a list, check for even numbers, and calculate their sum using a simple conditional statement.


```python
# Python

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum = 0
for score in nums:
   if score % 2 == 0: # Check if the remainder when divided by 2 is 0 (even number)
       even_sum += score # If previous requirement is fulfilled, add to sum
print("Sum of even numbers in the list:", even_sum)
```


```python
%%js
// Javascript

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_sum = 0;

for (let score of nums) {
   if (score % 2 === 0) {
       even_sum += score; // Add score to even_sum if it's even
   }
}

console.log("Sum of even numbers in the list:", even_sum);
```

## Homework
- Find the sum of even numbers in the list `aList = [2, 5, 6, 1, 9, 3]`
- Find the minimum and maximum values in the list `aList = [2, 5, 6, 1, 9, 3]`


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
