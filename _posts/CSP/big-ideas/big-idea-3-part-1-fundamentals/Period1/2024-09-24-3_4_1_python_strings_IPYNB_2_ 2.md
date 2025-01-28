---
toc: True
layout: post
title: 3.4 String Operations
permalink: /csp/big-idea/p1/3-4-1-python-strings
description: 3.4 Team Teach String Operations
menu: nav/csp_units/csp_unit3_p1_fundamentals.html
comments: True
---

<html>
    <style>
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            10%, 30%, 60%, 90% {
                transform: translateY(-30px);
            }
            40%, 70% {
                transform: translateY(-15px);
            }
        }
        @keyframes bounce2 {
            /* bounce */
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            10%, 30%, 60%, 90% {
                transform: translateY(-30px);
            }
            40%, 70% {
                transform: translateY(-15px);
            }
            /* flips */
            0%, 25% {
                transform: rotateZ(0deg);
            }
            25%, 50% {
                transform: rotateY(180deg);
            }
            50%, 75% {
                transform: rotateZ(180deg);
            }
            75%, 100% {
                transform: rotateY(0deg);
            }
        }
        h2{
            color: #ffd9d9;
        }
    </style>
    <br>
    <br>
    <br>
    <br>
    <br>
    <img style="animation: bounce2 3s ease infinite; max-width: 25%; filter: saturate(200%);" src="{{site.baseurl}}/images/p1group1images/img1.png">
    <br>
    <br>
    <p style="animation: bounce 3s ease infinite; background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);-webkit-text-fill-color: transparent; -webkit-background-clip: text;"> ____________________________________________________________________________________________________________________________________________</p>
</html>


<br>
<h2>Measuring String Length</h2>
<li>The len() function in Python allows us to find the length of a string</li>
<li>Use '.length' in JavaScript to do this as well</li>
<br>
<style>
    h1 {
        color: #ff00fb;
        padding-left: 10px;
    }
    h2 {
        color: #ff00fb;
        padding-left: 10px;
    }
    div {
        background-color: #33c9ff;
        border-radius: 10px;
    }
    li {
        color: #864d00;
        padding-left: 30px;
        font-size: 18px;
    }
</style>


```python
print(len("Hello"))
```

    5



<br>
<h2>String Case Convertion</h2>
<li>Uppercase: Convert to uppercase using .upper() in Python, .toUpperCase() in JS</li>
<li>Lowercase: Convert to lowercase using .lower() in Python, .toLowerCase() in JS</li>
<br>
<style>
    h2 {
        color: #ff00fb;
        padding-left: 10px;
    }
    div {
        background-color: #33c9ff;
        border-radius: 10px;
    }
    li {
        color: #864d00;
        padding-left: 30px;
        font-size: 18px;
    }
</style>


```python
print("hello".upper())
print("HELLO".lower())
```

    HELLO
    hello



<br>
<h2>String Slicing</h2>
<li>Through string slicing, we can access a part of the string using indexes</li>
<li>Each character in a string gets assigned a index, starting from 0</li>
<li>Syntax in Python is [startindex:endindex]</li>
<li>Syntax in JS is .slice(startindex, endindex)</li>
<br>
<style>
    h2 {
        color: #ff00fb;
        padding-left: 10px;
    }
    div {
        background-color: #33c9ff;
        border-radius: 10px;
    }
    li {
        color: #864d00;
        padding-left: 30px;
        font-size: 18px;
    }
</style>


```python
print("Hello Brawler"[0:5])
```

    Hello


<html>
    <body>
        <br>
        <h2>Finding Substrings</h2>
        <li>Searches for a substring and returns its position within a overlaying string</li>
        <li>.find() in Python</li>
        <li>.indexOf() in JS</li>
        <br>
    </body>
    <style>
        h2 {
            color: #ff00fb;
            padding-left: 10px;
        }
        div {
            background-color: #33c9ff;
            border-radius: 10px;
        }
        li {
            color: #864d00;
            padding-left: 30px;
            font-size: 18px;
        }
    </style>
</html>


```python
print("Hello Brawler".find("Brawler"))
```

    6



<br>
<h2>Replacing Substrings</h2>
<li>Can replace different parts of a string with something else</li>
<li>.replace() in Python and JS</li>
<br>
<style>
    h2 {
        color: #ff00fb;
        padding-left: 10px;
    }
    div {
        background-color: #33c9ff;
        border-radius: 10px;
    }
    li {
        color: #864d00;
        padding-left: 30px;
        font-size: 18px;
    }
</style>


```python
print("Hello Brawler".replace("Brawler", "Mihir"))
```

    Hello Mihir


<br>
<h2>Splitting Strings</h2>
<li>Splits a string into a list of substrings based on a delimiter (most commonly a space or comma)</li>
<li>.split() in Python and JS</li>
<br>
<style>
    h2 {
        color: #ff00fb;
        padding-left: 10px;
    }
    div {
        background-color: #33c9ff;
        border-radius: 10px;
    }
    li {
        color: #864d00;
        padding-left: 30px;
        font-size: 18px;
    }
</style>


```python
print("Darryl,Mico,Fang".split(","))
```

    ['Darryl', 'Mico', 'Fang']


<br>
<h2>Splitting Strings</h2>
<li>Basically opposite of splitting strings</li>
<li>.join() in Python and JS</li>
<br>
<style>
    h2 {
        color: #ff00fb;
        padding-left: 10px;
    }
    div {
        background-color: #33c9ff;
        border-radius: 10px;
    }
    li {
        color: #864d00;
        padding-left: 30px;
        font-size: 18px;
    }
</style>



```python
print(",".join(['Darryl', 'Mico', 'Fang']))
```

    Darryl,Mico,Fang


## Sample Hack - String Analyzation
- Determine metrics about strings (length, chars, palidrome(?), etc.)


```python
string = "Brawl Stars is a fun game!"
string2 = "Star Brawl war Brats"
print("String 1: Brawl Stars is a fun game!")
length = len(string)
print("Length:", length)
def count_vowels(input_string):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in input_string:
        if char in vowels:
            count += 1
    return count
print("Vowel Count:", count_vowels(string))
def average_word_length(input_string):
    words = input_string.split()
    if not words:
        return 0
    total_length = sum(len(word) for word in words)
    average_length = total_length / len(words)
    return average_length
print("Average Word Count:", average_word_length(string))
def palindrome(input_string):
    string = input_string.replace(" ","").lower()
    return string == string[::-1]
print("Palindrome or Not?", palindrome(string))
print("String 2: Star Brawl war Brats")
length2 = len(string2)
print("Length:", length2)
print("Vowel Count:", count_vowels(string2))
print("Average Word Count:", average_word_length(string2))
print("Palindrome or Not?", palindrome(string2))
```

    String 1: Brawl Stars is a fun game!
    Length: 26
    Vowel Count: 7
    Average Word Count: 3.5
    Palindrome or Not? False
    String 2: Star Brawl war Brats
    Length: 20
    Vowel Count: 4
    Average Word Count: 4.25
    Palindrome or Not? True


## Sample Hack - Password Validator

The goal of this homework hack is to create a password validator. A couple examples are given below (Simple and Advanced)

## Simple Password Validator


```python
def password_validator(password):
    if len(password) < 8:
        return "Password too short. Must be at least 8 characters."

    if password == password.lower() or password == password.upper():
        return "Password must contain both uppercase and lowercase letters."

    if not any(char.isdigit() for char in password):
        return "Password must contain at least one number."

    # Optional
    password = password.replace("123", "abc")

    words = password.split(" ")
    customized_password = "-".join(words)

    return f"Password is valid! Here’s a fun version: {customized_password}"

# Example usage
password = "HelloWorld123"
print(password_validator(password))

```

    Password is valid! Here’s a fun version: HelloWorldabc



```python
print(password_validator("HELLO123"))
```

    Password must contain both uppercase and lowercase letters.



```python
print(password_validator("Hello123"))
```

    Password is valid! Here’s a fun version: Helloabc


## Advanced Password Validator


```python
import re

def password_validator(password):
    if len(password) < 8:
        return "Password too short. Must be at least 8 characters."
    
    if password == password.lower() or password == password.upper():
        return "Password must contain both uppercase and lowercase letters."
    
    if not any(char.isdigit() for char in password):
        return "Password must contain at least one number."
    
    if not re.search(r"[!@#$%^&*()_+]", password):
        return "Password must contain at least one special character (e.g. !, @, #, etc.)"
    
    common_passwords = ["password", "123456", "letmein", "qwerty"]
    if password.lower() in common_passwords:
        return "Password is too common. Choose something less predictable."
    
    sequential_patterns = ["123", "abc", "xyz"]
    for pattern in sequential_patterns:
        if pattern in password.lower():
            return "Password should not contain sequential characters like '123' or 'abc'."
    
    score = 0
    if len(password) >= 10:
        score += 1
    if re.search(r"[A-Z]", password) and re.search(r"[a-z]", password):
        score += 1
    if re.search(r"\d", password):
        score += 1
    if re.search(r"[!@#$%^&*()_+]", password):
        score += 1

    strength = "Weak"
    if score == 2:
        strength = "Medium"
    elif score >= 3:
        strength = "Strong"

    password = password.replace("Hello", "Hi")
    words = password.split(" ")
    customized_password = "-".join(words)

    return f"Password is valid and {strength}! Here’s a fun version: {customized_password}"

# Example usage
password = "HelloWorld13475!"
print(password_validator(password))


```

    Password is valid and Strong! Here’s a fun version: HiWorld13475!

