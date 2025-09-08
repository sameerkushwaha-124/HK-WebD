import { useState } from 'react'
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

/**
 * You can not send req to backend unless backend allows to send request from the frontend.
 * you will get cors error 
 */




function App() {
  const [todos, setTodos] = useState([]);

  fetch('http://localhost:3000/todos', {method : "GET"})   // each time when you fetch calls and it changes 
  .then(async function (res){           // the value todos through out setTodo
    const jsonData = await res.json(); // and we know whenever the state changes components
    setTodos(jsonData.todos);         // get  re-render. so the solution to avoid infinite
                                       // re-render  is useEffect Hook.
  })



  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}/>
    </div>
  )
}

export default App;
