import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return (
    console.log("Printed")
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


