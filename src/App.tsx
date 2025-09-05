import React from 'react';
import './App.css';

function App() {
  const {personName, setPersonName}=React.useState('');

  return(
    <h1>Hello {personName}</h1>
    <input type="text" onChange={(e)=>{}} />
  );
}

export default App
