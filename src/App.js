import React from 'react';
import './App.css';
import logo from './logo.svg';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>React Portfolio</h2>
      </header>

      <Footer/>
    </div>
  );
}

export default App;
