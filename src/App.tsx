
import React from 'react';
import './App.css';
import Button from './components/shared/Button';
import Home from './pages/Home';
import Router from './router';

function App() {
  return (
    <div className="container">
      <h1 className="logo">Blueworking</h1>
      <Button texto="meu texto"/>
      <div className="content">
        <Router/>
      </div>
    </div>
  );
}



export default App;
