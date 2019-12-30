import React, { Component } from 'react';
import { Button, InputGroup, Table, Container, Form, ButtonGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

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

    Ntoast = () => {

        const [show, setShow] = useState(true);

        const toggle = () => setShow(!show);

        return (
            <div aria-live="polite" aria-atomic="true" style={{ position: 'relative' }}>
                <Toast isOpen={show} style={{ position: 'fixed', bottom: 0, right: 0 }}>
                    <ToastHeader toggle={toggle}>Hint</ToastHeader>
                    <ToastBody>
                        <p>This is during judging of preliminaries!</p>
                        <p>3 judges will give each breaker a score to determine seeding in knockout stages</p>
                    </ToastBody>
                </Toast>
            </div>
        );
    }

    render() {
        const { groups, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        //groups.sort(this.custom_comp);

        if (groups.length < 32) {
            return (
                <div>
                    <AppNavbar />
                    <Container fluid>
                        <h3>Please have at least 32 competitors to begin!</h3>
                        <Button color="primary" tag={Link} to="/groups">Return</Button>
                    </Container>
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
                <this.Ntoast />
                <Container fluid>
                    <div className="float-right">
                        <Button color="primary" tag={Link} to={"/ctbbattle"}>Start Battles</Button>
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