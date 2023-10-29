import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Task from './Task';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/> 
      <main className="listTask">
      <Task/>
      </main>
           
    </div>
  );
}

export default App;
