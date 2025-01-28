---
toc: True
layout: post
title: 3.1 Variables and Strings
permalink: /csp/big-idea/3-1/p1
description: Team Teach String Operations
menu: nav/csp_units/csp_unit3_p1_fundamentals.html
comments: True
---

## What is a Variable?
- Variables are containers for storing data values subject to change
- Fundamental to EVERY and ANY decent program (in any language)


## Defining a Variable
- simply state the name of the variable, set equal to the desired value (numeric, text, whatever)


```python
# define your variables
x = 'ruffs'
y = 24

# print variables
print(x)
print(y)
```

    ruffs
    24



```python
%%js 

// define variables 
let x = 'ruffs'; // defines a var, can be updated but not re-declared in the same scope
const u = 24; // defines a block-scoped constant, cannot be updated or re-declared.
var w = ['h', 'i']; // defines a var, can be updated or re-declared. It’s function-scoped

// log variables in console
console.log(x);
console.log(u);
console.log(w);
```

## Performing Operations; Usage of Variables
- Variables can be used as any other constant data would be


```python
# define your variables
x = 24
y = 12

# print statements using operations, just as you would for any other data
print(24+12)
print(x+y)
print(x*y)
print(x/y)
```

    36
    36
    288
    2.0



```python
%%js 

// define variables 
let x = 24;
let y = 32;

// log statements in console using operations, just as you would for any other data
console.log(24 + 12);
console.log(x + y);
console.log(x * y);
console.log(x / y);
```

## Variables for Input and Output 
- Variables are usually used for values that are not constant, and are subject to change (user inputs, positions, whatever)


```python
# define variables
brawler = input("what's your favorite brawler (#)?:")

# print variable
print("Your favorite brawler is:", brawler)
```

    Your favorite brawler is: Mico


- User input in JavaScript requires HTML


```python
%%html 

<div>
  <!--(for demo purposes)-->
  <!--label for the input field-->
  <label for="brawlerInput">What's your favorite brawler (#)?</label>
  
  <!--input field to capture the user's age -->
  <input type="number" id="brawlerInput" name="brawlerInput">
  
  <!--button to submit the input value-->
  <button onclick="submitBrawler()">Submit</button>
</div>

<!--display the output-->
<div id="output"></div>

<script>
  // function to handle the submission of the age input
  function submitBrawler() {
    // get the value from the HTML input field
    let brawler = document.getElementById('brawlerInput').value;
    
    // log the value to the console
    console.log(brawler);
    
    // display the value on the page
    document.getElementById('output').innerText = `Your favorite brawler is: ${brawler}`;
  }
</script>
```



<div>
  <!-- Label for the input field -->
  <label for="ageInput">What's your age (#)?</label>

  <!-- Input field to capture the user's age -->
  <input type="number" id="ageInput" name="ageInput">

  <!-- Button to submit the input value -->
  <button onclick="submitAge()">Submit</button>
</div>

<!-- Div to display the output -->
<div id="output"></div>

<script>
  // Function to handle the submission of the age input
  function submitAge() {
    // Get the value from the HTML input field
    let age = document.getElementById('ageInput').value;

    // Log the value to the console
    console.log(age);

    // Display the value on the page
    document.getElementById('output').innerText = `Your age is: ${age}`;
  }
</script>



## What is a String?
- A data type represented as a sequence of characters
- Immutable in majority of programming languages, but are subject to manipulation

## Defining a String
- To create a string, assign text data to a variable, using quotes to indicate it’s a string.


```python
# define your strings
greeting = "hello brawler"
usrname = "magic05"

# print strings
print(greeting)
print(usrname)
```


```python
%%js 

// define your strings
let greeting = "hello brawler";
let usrname = "magic05";

// log strings in console
console.log(greeting);
console.log(usrname);
```

## String Operations (basic)
- strings can be manipulated in a variety of ways, the simplest of which is concatenation


```python
# define your strings
greeting = "hello brawler"
usrname = "magic05"

# print concatenated strings
print(greeting + ", my name is " + usrname)
```

    hello brawler, my name is magic05



```python
%%js 

// define your strings
let greeting = "hello brawler";
let usrname = "magic05";

// print concatenated strings
console.log(greeting + ", my name is " + usrname);
```


    <IPython.core.display.Javascript object>


## Simple Hack - Profile Creation
- In this hack, we store basic information (strings) as variables, and concatenate them to create a general profile that may be subject to different users


```python
var1 = input("What is your name?:")
var2 = input("What is your age?:")
var3 = input("What is your favorite Brawl Stars brawler?:")

my_list = [var1, var2, var3]

my_set = {
    var1,
    var2,
    var3
}

print(my_list)
print(my_set)

print("Hi my name is " + var1 + ", I'm " +  var2 + " years old" + ", and my favorite brawler is " + var3)
```

    ['Pradyun', '15', 'Darryl']
    {'15', 'Pradyun', 'Darryl'}
    Hi my name is Pradyun, I'm 15 years old, and my favorite brawler is Darryl


## JS Hack Code


```python
%%js
const var1 = prompt("What is your name?:");
const var2 = prompt("What is your age?:");
const var3 = prompt("What is your favorite Brawl Stars brawler?:");


const myList = [var1, var2, var3];
console.log(myList);


const myDict = {
    name: var1,
    age: var2,
    favoriteFood: var3
};
console.log(myDict);


console.log("Hi, my name is " + var1 + ", I'm " + var2 + " years old, and my favorite brawler is " + var3 + ".");
```

## Homework Hack:
in this hack, you will be given a set of personal information, and your job is to format and display it properly, along with generating a unique ID associated to that person using string slicing and concatenation.

Data Set:
- Full Name: "John Doe"
- Age: 28
- Email Address: "john.doe@gmail.com"
- Hobby: "Food Tasting"
- Dietary Preferences: "Vegan"


```python
full_name = "John Doe"
age = 28
email = "john.doe@gmail.com"
hobby = "Food Tasting"
dietary_preferences = "Vegan"

initials = full_name[0] + full_name[full_name.find(" ") + 1] 
unique_id = initials + str(age) 

formatted_info = "Personal Info:\n" \
                 "- Full Name: " + full_name + "\n" \
                 "- Age: " + str(age) + "\n" \
                 "- Email: " + email + "\n" \
                 "- Hobby: " + hobby + "\n" \
                 "- Dietary Preferences: " + dietary_preferences + "\n" \
                 "- Unique ID: " + unique_id

print(formatted_info)

```

    Personal Info:
    - Full Name: John Doe
    - Age: 28
    - Email: john.doe@gmail.com
    - Hobby: Food Tasting
    - Dietary Preferences: Vegan
    - Unique ID: JD28


## Your Goal: Recreate as JavaScript!
