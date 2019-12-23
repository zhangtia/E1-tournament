import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = ({ fnct, anoth }) => {
  /*return (
    <Button onClick={fnct} type="button">
      Toggle Show
  </Button>
  );



  const {
    buttonLabel,
    className
  } = props;*/


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={anoth}>Do Something</Button>
      <Button color="danger" onClick={toggle}>open</Button>
      <Modal isOpen={modal} toggle={toggle} className="its 4am">
        <ModalHeader toggle={toggle}>header</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={fnct}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "PREVIOUS",
    };
  }

  fnc = () => {
    //alert("fnc!");
    this.setState(state => ({ isShow: "NEWWWWWWWW" }));
  }

  anotha = () => {
    //alert("fnc!");
    this.setState(state => ({ isShow: "ANOTHA ONE" }));
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button color="link"><Link to="/groups">Start: Capture The Breaker!</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;