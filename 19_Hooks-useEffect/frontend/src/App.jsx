import { useEffect, useState } from 'react'

const id = 0;
function App() {
  const [todos, setTodos] = useState([]); // if you do not have any state variable defined then you component act as static component.
  
  useEffect(function (){   // you can not do aysncify in useEffect so that you need to use promise(in place of async/await). or use useAsyncEffect() hook to use async await.

    // setInterval(function(){
      fetch("http://localhost:3000/api/random/todos")
        .then(function(res){
           const jsonData = res.json();
           jsonData.then(function (data){
           setTodos(data) // here we are setting the state variable so that component will re-render.          
         })               // but fetch will run only once or useEffect will run only once because of empty dependency array.
      })
    // },5000)
  },[]); // and if we remove the dependency array useEffect will run infinitly. 
         // if we have empty dependency array which means it runs only onece when
         //  it get mounts on the screen first time.
         
  return (
    <>
      {todos.map(function(todo, index){ // writing return in map is compulsary.
        return <Todo id={index} title={todo.title} description={todo.description}></Todo>
      })}
    </>
  )
}

function Todo({id, title, description}){
  return <>
    <h1>{id} {title}</h1>
    <h4>{description}</h4>
  </>
}

export default App;
