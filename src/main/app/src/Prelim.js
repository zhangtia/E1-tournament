import React, { Component } from 'react';
import { useState } from 'react';
import { Button, InputGroup, Table, Container, Form, ButtonGroup, Input, Label } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


class Prelim extends Component {
    constructor(props) {
        super(props);
        this.state = { groups: [], isLoading: true };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('api/groups')
            .then(response => response.json())
            .then(data => this.setState({ groups: data, isLoading: false }));
    }

    async remove(id) {
        await fetch(`/api/group/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedGroups = [...this.state.groups].filter(i => i.id !== id);
            this.setState({ groups: updatedGroups });
        });
    }

    async removeall() {
        await fetch(`/api/group`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        fetch('api/groups')
            .then(response => response.json())
            .then(data => this.setState({ groups: data, isLoading: false }));
    }

    custom_comp(a, b) {
        return b.score - a.score;
    }

    render() {
        const { groups, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        //groups.sort(this.custom_comp);

        if (groups.length < 32) {
            alert("Please have 32 competitors to continue!")
                const {
                  buttonLabel,
                  className
                } = props;
                const [modal, setModal] = useState(false);
                const [backdrop, setBackdrop] = useState(true);
              
                const toggle = () => setModal(!modal);
              
                const changeBackdrop = e => {
                  let value = e.target.value;
                  if (value !== 'static') {
                    value = JSON.parse(value);
                  }
                  setBackdrop(value);
                }
            return (
                <div>
                  <Form inline onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                      <Label for="backdrop">Backdrop value</Label>{' '}
                      <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                        <option value="static">"static"</option>
                      </Input>
                    </FormGroup>
                    {' '}
                    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
                  </Form>
                  <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                      <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </div>
              );                 
        }

        const groupList = groups.map(group => {
            return <tr key={group.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{group.name}</td>
                <td>{group.address}</td>
                <td>{group.score}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/prelim/" + group.id}>Update Score</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        //alert("Current first place is " + groups[0].name + " with " + groups[0].score + " points in prelims!");


        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className="float-right">
                        <Button color="primary" tag={Link} to={"/prelim"}>THIS IS PRELIM IT WORKED</Button>
                    </div>
                    <h3>Competitors</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Name</th>
                                <th width="20%">Crew</th>
                                <th>Score</th>
                                <th width="30%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default Prelim;