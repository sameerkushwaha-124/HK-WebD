import { useState } from 'react'

// any time parents render it's child also get rerender as well irespective of child get the same state variable.
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CustomButtonComponent count={count} setCount={setCount}></CustomButtonComponent>
    </>
  )
}

function CustomButtonComponent(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return(
    <>
        <button onClick={onClickHandler}>Count {props.count}</button>
    </>
  )
}

export default App
