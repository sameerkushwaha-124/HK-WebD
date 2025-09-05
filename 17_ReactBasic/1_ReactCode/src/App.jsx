import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count + 1);
  }
  return (
    <>
        <button onClick={onClickHandler} >count {count}</button>
    </>
  )
}



export default App

