import React, { Component } from 'react';
import { Button, InputGroup, Table, Container, Form, FormGroup, Input, Label } from 'reactstrap';
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

    render() {
        const { groups, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const groupList = groups.map(group => {
            return <tr key={group.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{group.name}</td>
                <td>{group.address}</td>
                <td>{group.score}</td>
                <td>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="score"
                            aria-label="score"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className="float-right">
                        <Button color="primary" tag={Link} to={"/prelim"}>THIS IS PRELIM IT WORKED</Button>
                        <Button color="danger" onClick={() => this.removeall()}>Delete All</Button>
                        <Button color="success" tag={Link} to="/groups/new">Add Competitor</Button>
                    </div>
                    <h3>Competitors</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Name</th>
                                <th width="20%">Crew</th>
                                <th>Score</th>
                                <th width="10%">Actions</th>
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