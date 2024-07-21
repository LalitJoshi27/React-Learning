import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
     <div>
      <h1>CustomAPP:</h1>
     </div>
  )
}
const ReactElement1= (
  <a href="https://google.com" target="_blank">Click Here</a>
)
const anotherElement= "LalitJoshi"
const ReactElement2=  React.createElement(
  'a',{href:"https://google.com",target:"_blank"}, // {} : is used for attributes of a tag compulsoty to write
  "click me to visit Google",anotherElement // Evaulated Expression
)
ReactDOM.createRoot(document.getElementById('root')).render(
    //<MyApp /> // It is a function 
    // MyApp() : we can write this also.
    ReactElement2
   // <App/>
)
