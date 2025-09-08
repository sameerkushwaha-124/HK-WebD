import { useState } from 'react'

// inspite of create a new element you can directly write a html in side return and 
// that will get appended to the dom tree no worries about that react will take care.

function App() {
  const [count, setCount] = useState(0);
  // using setCount method we can set value on each state change

  return (
    <>
      
        <button onClick={function (){
          setCount(function(count) { // if you are using this syntax then return is must if you                            
               return count + 1      // do not return which mean you are setting function 
          })                         // definition to count. which is not correct.
        }                          
        }>
          count is {count}
        </button>
    </>
  )
}

export default App
