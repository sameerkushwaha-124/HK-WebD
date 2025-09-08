import { useState } from 'react'

function App(props) { // always object Even if you pass only one prop or no props at all, props is still an object.

  const {a, b} = JSON.stringify(props); // incorrect debuggin because it will convert it to string so destructuring will not followed. 

  // right ways is const {a, b} = props;

  return (
    <>

    <h1>{props.a} and {props.b}</h1>

    </>
  )
}

 <App a={2} b={5}/>  // incorect because we can pass props from its parent only.
// Yes — in React, data flows one way: from parent to child.
// This is known as "unidirectional data flow", and it's a core principle of React.


export default App


//-----------------------------------------------------------------------------------


// ✅ JSON.stringify() is only meant to convert JavaScript values into a JSON-formatted string.

// But let's break it down:

const obj = { name: "Alice", age: 25 };
const json = {
  'name' : 'Alice'
}
console.log(json.name); // 👉 'Alice'
console.log(JSON.stringify(json)); // 👉 '{"name":"Alice"}'

const str = JSON.stringify(obj);
console.log(str); // 👉 '{"name":"Alice","age":25}'



const arr = [1, 2, 3];
console.log(JSON.stringify(arr)); // 👉 '[1,2,3]'



console.log(JSON.stringify("hello")); // 👉 '"hello"'
console.log(JSON.stringify(42));      // 👉 '42'
console.log(JSON.stringify(true));    // 👉 'true'
