import React, { Component } from 'react';
import { Button, InputGroup, Table, Container, Form, InputGroupAddon, Input, Label } from 'reactstrap';
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

    async score(event) {
        event.preventDefault();
        const { item } = this.state;
        await fetch(`/api/group/${item.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/groups');
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
                    <InputGroup>
                    <Input type="double" name="score" id="score" value={group.score || ''}/>
                        <InputGroupAddon addonType="append"><Button color="secondary">Update Score</Button></InputGroupAddon>
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