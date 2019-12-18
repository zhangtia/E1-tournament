import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import ModalExample from './CTBBattle.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "PREVIOUS",
    };
  }

  fnc() {
    this.setState(state => ({ isShow: "NEWWWWWWWW" }));
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button color="link"><Link to="/groups">Start: Capture The Breaker!</Link></Button>
          <ModalExample buttonLabel={"custom stuff"} custom={this.fnc} />
          <Button onClick={alert(this.state.isShow)}>HELLO</Button>
        </Container>
      </div>
    );
  }
}

export default Home;