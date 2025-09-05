// Import useState hook from React for managing state
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym", // Title of the todo item
      description: "Hit the gym regularly", // Description of the todo item
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos, // Spread the existing todos array
      {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
      },
    ]);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input id="title" type="text" placeholder="Add Todo Title" />
      <input id="description" type="text" placeholder="Add Todo Description" />
      <button onClick={addTodo}>Add Todo</button>
      <br />

      {todos.map(function (todo) {
        <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

// Functional component to display each todo item
function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3> {/* Display the title of the todo */}
      <p>{props.description}</p> {/* Display the description of the todo */}
    </div>
  );
}

// Export the App component as default
export default App;
