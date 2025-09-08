import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count + 1); // as there is two ways to set value one is directly passing value
                        // other is passing function which will receive older value and return
                        //  new value setCount((oldValue) => oldValue + 1);
    console.log(count); // here it will log older value because setState is async(behave like) in nature
                        // it will update the state from the queued value when the component render. that's why it log older value.
  }

  return (
    <>
        <button onClick={onClickHandler} >count {count}</button>
    </>
  )
}



export default App;

/** 
 Re-render se pahl jo bhi update hota hain vo queue me hota hain. when ever componet get 
re-render it takes updated value from the queue and set it to the state.
 * 
 Queue : [count + 1, count + 1, count + 1] ultimately count + 1 = 1 hi hoga kyoki count ki value 
 toh 0 hi thi. this happend in case of direct value setting. in case of function passing to
 setCount, it goes complete function inside queue and updates when the function rerendered.
*/


/**
Re-render se pehle jitne bhi setCount calls hote hain, wo React ek update queue me store karta hai.
Component jab re-render hota hai, tab React us queue ke updates ko apply karta hai aur naya state set karta hai.

👉 Agar hum direct value form use karein:
    setCount(count + 1);
Queue me [1, 1, 1] jayega (kyunki current render me count = 0 tha).
Final state = 1

👉 Agar hum updater function form use karein:
    setCount(prev => prev + 1);
Queue me [prev => prev + 1, prev => prev + 1, prev => prev + 1] jayega.
React inhe ek-ek karke latest value pe apply karega:
   Start = 0 → 1 → 2 → 3
Final state = 3
*/
