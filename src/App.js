import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import  History from './History';
import  Home from './Home';
import './App.css';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div className="App">
         <ul className="Welcome">
            <li><NavLink activeClassName="active" to="/my-history">Notre Histoire</NavLink></li>
            <li><NavLink activeClassName="active" to="/" >Accueil</NavLink></li>
        </ul>

        <Switch>
          
          <Route path="/my-history" component={History}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
     </BrowserRouter> 
      
    );
  }
}

export default App;
