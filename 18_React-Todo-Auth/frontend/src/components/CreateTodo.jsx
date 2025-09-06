/**
 import React from "react";

function CreateTodo() {
  function onClickHandler() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // here am saying that which formate of data i am sending.
      },
      body: JSON.stringify({ title, description }), // fetch always send string data in post.
     })
      .then(async function (res) {
        const jsonData = await res.json();
        alert("Todo created");
      })
      .catch(function (error) {
        alert("we got error to create todo.");
      });
  }

  return (
    <div>
      <input id="title" type="text" placeholder="Title" style={{ margin: 10, padding: 10 }} />
      <br />
      <input id="description" type="text" placeholder="Description" style={{ margin: 10, padding: 10 }} />
      <br />
      <button style={{ margin: 10, padding: 10}} onClick={onClickHandler}>
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
 */



// another way



import React from "react";
import { useState } from "react";

function CreateTodo() {
  // react query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onClickHandler() {

    // axios.post("http://localhost:3000/todo", {
    //   title : title,
    //   description : description
    // })

    // or 

    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // here am saying that which formate of data i am sending.
      },
      body: JSON.stringify({ title, description }), // fetch always send string data in post.
     })
      .then(async function (res) {
        const jsonData = await res.json();
        alert("Todo created");
      })
      .catch(function (error) {
        alert("we got error to create todo.");
      });
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);  // means something like cosnt title = document.getElementById("title").value;
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  return (
    <div>
      <input id="title" type="text" placeholder="Title" style={{ margin: 10, padding: 10 }} onChange={onChangeTitle} />
      <br />
      <input id="description" type="text" placeholder="Description" style={{ margin: 10, padding: 10 }} onChange={onChangeDescription} />
      <br />
      <button style={{ margin: 10, padding: 10}} onClick={onClickHandler}>
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;