import React from 'react'

/**
 * todos = [
 *   {title : "Go To Gym", description : "At 7 O Clock" },
 *   {title : "Go To School", description : "At 10 O Clock"}
 * ]
 * 
 */

const Todos = ({todos}) => {

  return (
    <div>
      <hr />
       {todos.map(function(todo){
          return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button> {todo.complete == true ? "completed" : "Mark as Complete"} </button>
          </div>
       })}
    </div>
  )
}

export default Todos
