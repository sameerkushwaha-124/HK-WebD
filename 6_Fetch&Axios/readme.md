# 📘 JavaScript Fetch API - Nested Promises Explained

This project demonstrates how to use the native JavaScript `fetch()` API to make HTTP requests and handle asynchronous data using nested `.then()` chains.

It’s built around a function called `getRecentPost2()` which fetches a post from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake API and displays the result on a webpage.

---

## ✨ Features

- Uses the native `fetch()` API (no external libraries)
- Demonstrates handling of **nested promises**
- Shows how to use `.then()` to process a response stream
- Explains why we use `.json()` after `fetch()`
- Outputs data to the DOM using `innerHTML`

---
```js
function getRecentPost2() {
  const res1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res1); // Step 1: Promise<Response> 

  res1.then(function(res2) {
    console.log(typeof res2); // "object" → Response object
    const jsonData = res2.json(); // Step 2: Promise<JSON>

    jsonData.then(function(res3) {
      console.log(typeof res3); // "object" → actual data
      document.getElementById("posts2").innerHTML = res3.body;
    });
  });
}


```
Simple hain yaar: 
1. jab bhi fetch call hoga ek promise response ayega.
2. jise ham .then se process kar ke response object layenge.
3. response object ko .json() se convert karke again .then se actual data get kar lenge.