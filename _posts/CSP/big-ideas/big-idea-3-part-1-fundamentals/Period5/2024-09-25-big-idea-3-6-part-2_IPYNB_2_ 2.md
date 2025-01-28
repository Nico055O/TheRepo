---
layout: post
type: hacks
title: 3.6 Conditionals Part 2
Description: If Else Statements
menu: nav/csp_units/csp_unit3_p5_fundamentals.html
submenu: lesson3_6
author: Nathan T
permalink: csp/big-idea/p5/3-6-2
comments: True
---

## Conditionals with if else statements

If {} Else {}

An if else statement lets a program execute a different action based on whether a specific condition is true or not.

# Conditionals with else if statements
If you have multiple conditions you can use an else if statement in case the if statement was false. This will allow you to chain more outcomes for your code. 

## Flowchart Example
<div style="text-align: center;"> <img src="{{site.baseurl}}/images/csp-period-5-flowcharts/if-else-statement.png" alt="If Else Flowchart"> </div>

# Popcorn Hack 1
What else if code would you add if you wanted the code to prompt "zero" if someone input 0.

## Python Example


```python
%%python
# Example
number = 5

if number > 0:
    print("Positive")
else:
    print("Not positive")

```

    Positive


## Javascript Example

# Popcorn Hack 2
How would you change this code to make it show whether numbers are odd or even instead of positive or not positive?


```python
%%js
// Example 1
let number = 5;

if (number > 0) {
    console.log("Positive");
} else {
    console.log("Not positive");
}

// Example 2: Using a ternary operator
number = 5;
let message = number > 0 ? "Positive" : "Not positive";
console.log(message);

// Example 3: Defining a number and using nested ternary operators
number = -3;
message = number > 0 ? "Positive" : (number === 0 ? "Zero" : "Negative");
console.log(message);
```


    <IPython.core.display.Javascript object>


# Popcorn Hack 3
The following is a basic if else statement condition. Interact with this cell by changing what the number equals to see the code cell print out the message!


```python
%%python

number = 5
message = "Positive" if number > 0 else "Not positive"
print(message)

# Define a number
number = -3

message = (
    "Positive" if number > 0 
    else "Zero" if number == 0 
    else "Negative"
)

# Print the result
print(message)
```

# Hacks

### Create a basic hack that determines whether you are a child, teenager or adult when you input your age. 
##### Objective: Create a simple program that classifies an individual as a "Child," "Teenager," or "Adult" based on their age input.
If Statement: Check if the age is between 3 and 12 (inclusive). If true, classify the user as a "Child."
Else If Statement: If the first condition is false, check if the age is between 13 and 17. If this condition holds, classify the user as a "Teenager."
Else Statement: If neither of the above conditions is true, classify the user as an "Adult" (this includes anyone aged 18 and older).

Hint: child is ages 3-12, teenager is ages 13-17, adult is ages 18 and up.
This hack is a good way to practice basic programming concepts of conditional statements
