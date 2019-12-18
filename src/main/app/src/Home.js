import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import ModalExample from './CTBBattle.js'

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/groups">Start: Capture The Breaker!</Link></Button>
          <ModalExample/>
        </Container>
      </div>
    );
  }
}

export default Home;