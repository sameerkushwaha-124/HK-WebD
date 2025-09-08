import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler(){
    setCount(function (count){ return  count + 1}); 
    setCount(function (count){ return  count + 1}); 
    setCount(function (count){ return  count + 1}); 
    console.log(count);
  }

  return (
    <>
        <button onClick={onClickHandler}> count {count}</button>
      
    </>
  )
}

export default App


/**
🔹 Why doesn’t the component re-render after the first setCount?
React batches updates in the same event.
React sees you’re inside one event handler (onClickHandler).
It will not re-render immediately for every setCount.
Instead, it collects (batches) all the updates and re-renders once at the end.

🔹 State update kab hota hai?
State ki value tabhi update hoti hai jab component re-render hota hai.

🔹 setCount ke call kaise kaam karte hain?
Re-render se pehle jo bhi setCount calls hote hain, wo queue (update queue) me store hote hain.  
Jab component re-render hota hai, React un queued updates ko apply karta hai.

Queue: is case me queue ke andar 3 updater functions hain:
   prev => prev + 1
   prev => prev + 1
   prev => prev + 1

React inhe ek ek karke apply karega:
   Start: 0
   After 1st: 1
   After 2nd: 2
   After 3rd: 3

👉 Isliye final state = 3, aur UI me 3 dikhega.
Console.log(count) phir bhi purana (0) dikhayega, kyunki wo current render ke snapshot se aata hai.
*/
