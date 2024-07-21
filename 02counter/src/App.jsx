import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)
 // let counter= 5
 const addvalue=()=> {
  if(counter<20){
   counter= counter+1;
   setCounter(counter)
   console.log("VaLue Added",counter);
 }
}
 const removevalue=()=>{
  if(counter>0){
  setCounter(counter-1)
  console.log("VaLue Added",counter);
 }
}
 
  return (
    <>
     <h1>Lalit Joshi And React</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addvalue}>AddValue{counter}</button>
     <br></br>
     <button onClick={removevalue}>RemoveValue{counter}</button>
    </>
  )
}

export default App
