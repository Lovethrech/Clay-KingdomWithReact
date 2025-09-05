import React from 'react';
import './App.css';

function App() {
  const [personName, setPersonName]=React.useState('');

  return(
    <div className="app-main">
      <h1>Hello {personName} </h1>
      <input type="text" onChange={(e)=> setPersonName(e.target.value)} />
    </div>
    // 5366133327274050
  );
}

export default App
