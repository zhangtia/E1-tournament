import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';
import Prelim from './Prelim.js';
import PrelimEdit from './PrelimEdit.js';
import CTBBattle from './CTBBattle.js';
import bkt from './bkt.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/groups/:id' component={GroupEdit}/>
          <Route path='/prelim' exact={true} component={Prelim}/>
          <Route path='/prelim/:id' component={PrelimEdit}/>
          <Route path='/ctbbattle' exact={true} component={bkt}/>
        </Switch>
      </Router>
    )
  }
}

export default App;