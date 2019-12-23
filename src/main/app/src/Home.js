import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Button, Row, Col } from 'reactstrap';


<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Sonnet />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Sonnet />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

class Home extends Component {

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