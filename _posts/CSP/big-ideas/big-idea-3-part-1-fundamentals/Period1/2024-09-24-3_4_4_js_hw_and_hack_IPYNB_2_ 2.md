---
toc: True
layout: post
title: 3.4 String Operations
permalink: /csp/big-idea/p1/3-4-4-js-hw-hack
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
    <img style="animation: bounce2 3s ease infinite; max-width: 25%; filter: saturate(200%);" src="{{site.baseurl}}/images/p1group1images/img4.png">
    <br>
    <br>
    <p style="animation: bounce 3s ease infinite; background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);-webkit-text-fill-color: transparent; -webkit-background-clip: text;"> ____________________________________________________________________________________________________________________________________________</p>
</html>

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
    <p style="animation: bounce 3s ease infinite; background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);-webkit-text-fill-color: transparent; -webkit-background-clip: text;"> ____________________________________________________________________________________________________________________________________________</p>
</html>

<html>
    <body>
        <br>
        <h2>Measuring String Length</h2>
        <li>The len() function in Python allows us to find the length of a string</li>
        <li>Use '.length' in JavaScript to do this as well</li>
        <br>
    </body>
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
</html>

## Sample Hack - String Analyzation
- Determine metrics about strings (length, chars, palidrome(?), etc.)


```python
%%js
const string1 = "Brawl Stars is a fun game!";
const string2 = "Star Brawl war Brats";


console.log("String 1: " + string1);
const length1 = string1.length;
console.log("Length: " + length1);


function countVowels(inputString) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of inputString) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


console.log("Vowel Count: " + countVowels(string1));


function averageWordLength(inputString) {
    const words = inputString.split(/\s+/);
    if (words.length === 0) {
        return 0;
    }
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return totalLength / words.length;
}


console.log("Average Word Length: " + averageWordLength(string1));


function isPalindrome(inputString) {
    const sanitizedString = inputString.replace(/\s+/g, '').toLowerCase();
    return sanitizedString === sanitizedString.split('').reverse().join('');
}


console.log("Palindrome or Not? " + isPalindrome(string1));
console.log("String 2: " + string2);
const length2 = string2.length;
console.log("Length: " + length2);
console.log("Vowel Count: " + countVowels(string2));
console.log("Average Word Length: " + averageWordLength(string2));
console.log("Palindrome or Not? " + isPalindrome(string2));
```


    <IPython.core.display.Javascript object>


## Homework is to create a JavaScript hack for Password Validator
