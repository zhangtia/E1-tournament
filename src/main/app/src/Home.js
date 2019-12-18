import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (/*props*/{ fnct }) => {

  const {
    buttonLabel,
    custom,
    className
  } = props;

  <button onClick={fnct} type="button">
    Toggle Show
</button>

  /*

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
  <ModalHeader toggle={toggle}>"header"</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={custom}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );*/
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "PREVIOUS",
    };
  }

  fnc = () => {
    this.setState(state => ({ isShow: "NEWWWWWWWW" }));
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button color="link"><Link to="/groups">Start: Capture The Breaker!</Link></Button>
          <ModalExample fnct={this.fnc} />
          <Button onClick={() => alert(this.state.isShow)}>HELLO</Button>
        </Container>
      </div>
    );
  }
}

export default Home;