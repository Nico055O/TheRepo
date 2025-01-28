---
toc: False
comments: True
permalink: /csp/big-idea/p3/3-5-4
layout: post
title: 3.5 Booleans; Hacks (Period 3)
description: Homework hacks for 3.5
author: Trevor V
menu: /nav/csp_units/csp_unit3_p3_fundamentals.html
---

<style>
  /* Global styling for the notebook with dark background */
  body {
      font-family: 'Arial', sans-serif;
      background-color: #3e2723; /* Dark brown background */
      color: #efebe9; /* Light beige text for contrast */
  }

  /* Styling headers with lighter brown tones */
  h1, h2, h3, h4, h5 {
      color: #efebe9; /* Light beige for headers */
      border-bottom: 2px solid #795548; /* Medium brown border */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #4e342e; /* Darker brown for code background */
      color: #d7ccc8; /* Light brown for inline code */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #4e342e;
      color: #efebe9;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #795548; /* Medium brown for border */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #bcaaa4; /* Lighter brown for keywords */
  }

  .hljs-string, .hljs-attr, .hljs-symbol, .hljs-bullet, .hljs-addition {
      color: #a1887f; /* Soft brown for strings */
  }

  .hljs-title, .hljs-section, .hljs-attribute {
      color: #d7ccc8; /* Light brown for titles and sections */
  }

  .hljs-variable, .hljs-template-variable {
      color: #8d6e63; /* Darker brown for variables */
  }

  .hljs-comment, .hljs-quote, .hljs-deletion {
      color: #6d4c41; /* Dark brown for comments */
  }

  .hljs-number, .hljs-regexp, .hljs-literal, .hljs-type, .hljs-built_in, .hljs-builtin-name {
      color: #a1887f; /* Soft brown for numbers and built-ins */
  }

  .hljs-meta {
      color: #5d4037; /* Dark brown for meta information */
  }

  .hljs-emphasis {
      font-style: italic;
  }

  .hljs-strong {
      font-weight: bold;
  }

  /* Highlight blockquotes in medium brown */
  blockquote {
      border-left: 4px solid #8d6e63; /* Medium brown */
      padding-left: 10px;
      color: #efebe9;
      font-style: italic;
      background-color: #4e342e;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #a1887f; /* Soft brown for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #efebe9;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #795548; /* Medium brown */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #d7ccc8; /* Light brown links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #8d6e63; /* Dark brown on hover */
  }

  /* Adjust the styling for markdown lists */
  ul {
      list-style-type: square;
      color: #efebe9;
  }

  /* Styling tables with dark brown theme */
  table {
      border-collapse: collapse;
      width: 100%;
      background-color: #4e342e;
  }
  
  table, th, td {
      border: 1px solid #6d4c41; /* Dark brown for borders */
      padding: 8px;
      color: #efebe9;
  }

  th {
      background-color: #795548; /* Medium brown for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #a1887f; /* Soft brown links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #8d6e63; /* Dark brown on hover */
  }
</style>


# Hack 1

- Create a function that determines if you should go outside. 
- The function will take in 2 parameters, the **temperature** and **isRaining**. 
- If the temperature is **below 100 degrees** and **isRaining is true**, then the function should **return true**. 
- If the temperature is **above 32 degrees** and **isRaining is false**, then the function should **return true**. 
- Otherwise, the function should **return false**.

Use this template:
```javascript
function goOutside(temperature, isRaining) {
    // Your code here
}
```

## Example:

Javascript:
```javascript
function goOutside(temperature, isRaining) {
    // Your code here
}
```

Python:
```python
def goOutside(temperature, isRaining):
    # Your code here
```

### References:
- [Javascript Functions](https://www.w3schools.com/js/js_functions.asp)
- [Python Functions](https://www.w3schools.com/python/python_functions.asp)
- [Conditional Statements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

# Hack 2

- Use **De Morgan's Law** to create an expression that simplifies the following expressions:
```javascript
// Expression 1
let stayInside = !(isRaining && isCold)

// Expression 2
let stayInside = !(isRaining || isCold)
```
- Remember that De Morgan's Law states that the complement of the union of two sets A and B is equal to the intersection of the complement of the sets A and B.
- Or more simply: `!(A || B) === !A && !B` and `!(A && B) === !A || !B`
