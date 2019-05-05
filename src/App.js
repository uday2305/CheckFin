import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import RiskProfile from './components/RiskProfileAssessment.jsx';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
              <Header/>
              <Route exact path ='/' component ={Home}/>
              <Route path ='/contact' component ={RiskProfile}/>
              <Footer/>
              </div>
        </BrowserRouter>
    );
  }
}
export default App;