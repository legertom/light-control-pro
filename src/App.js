import React from 'react';
import './App.css';
import LightList from './components/LightList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hue Light Control</h1>
      </header>
      <main>
        <LightList />
      </main>
    </div>
  );
}

export default App;
