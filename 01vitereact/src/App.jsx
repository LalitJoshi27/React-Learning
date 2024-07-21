
import Example from "./example"
  function App(){
    const username= "chai and code"
  return (
    <>
     <Example/>
     <h1>chai or react {username}</h1> 
     </>
  )
}

export default App
// We can return only one tag in jsx.
// So we use fragments in react 
// <>
//</> Empty tag is used for wrapping multiple tag in React
// {}: Evaulated Expression:Final Outcome if we are using any variable inside in the curlly bracket then the value of variable will be used

