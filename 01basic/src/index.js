import React from 'react'; // core foundation libraray(for using refernces)
import ReactDOM from 'react-dom/client'; // Implementaion of react in web
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App /> 
    </>
  </React.StrictMode>
);

// Main entry of react app or web app
// For creating component or function we have to write name in UpperCase