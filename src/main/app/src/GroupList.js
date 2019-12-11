import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class GroupList extends Component {

    constructor(props) {
        super(props);
        this.state = { groups: [], isLoading: true, deltarget: 0, opn: false };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('api/groups')
            .then(response => response.json())
            .then(data => this.setState({ groups: data, isLoading: false}));
    }

    setdeltgt(x) {
        this.setState({ deltarget: x, opn: true });
    }

    async remove(id) {
        this.setState({ opn: false });
        await fetch(`/api/group/${id}`, {
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

    async loadcomptrs() {
        this.removeall();
        var i;
        for (i = 0; i < 40; ++i) {
            var sc1 = 10 * Math.random();
            var sc2 = 10 * Math.random();
            var sc3 = 10 * Math.random();
            var sc = (sc1 + sc2 + sc3) / 3;
            const stuff = { "name": Math.random().toString(36).substring(2, 8), "address": "", "score": sc, "score1": sc1, "score2": sc2, "score3": sc3 };
            await fetch('/api/group', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(stuff),
            });
        }

        fetch('api/groups')
            .then(response => response.json())
            .then(data => this.setState({ groups: data, isLoading: false }));
    }


    render() {
        const { groups, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        //alert(groups.length);
        const groupList = groups.map(group => {
            return <tr key={group.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{group.name}</td>
                <td>{group.address}</td>
                <td>{group.score}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="danger" id="delone" onClick={() => this.setdeltgt(group.id)}>Delete</Button>
                        <UncontrolledPopover trigger="legacy" placement="left" target="delone" isOpen={this.state.opn}>
                            <PopoverHeader>CONFIRM DELETE</PopoverHeader>
                            <PopoverBody>
                                <p>Delete competitor data, proceed?</p>
                                <Button size="sm" color="danger" onClick={() => this.remove(this.state.deltarget)}>Confirm Delete</Button>
                            </PopoverBody>
                        </UncontrolledPopover>
                        <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className="float-left">
                        <Button color="primary" onClick={() => this.loadcomptrs()}>LOAD</Button>
                    </div>
                    <div className="float-right">
                        <Button color="primary" tag={Link} to={"/prelim"}>Start Preliminary</Button>
                        <Button color="danger" id="delall">Delete All</Button>
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="delall">
                            <PopoverHeader>CONFIRM DELETE ALL</PopoverHeader>
                            <PopoverBody>
                                <p>This action will delete all competitor data, proceed?</p>
                                <Button color="danger" onClick={() => this.removeall()}>Confirm Delete All</Button>
                            </PopoverBody>
                        </UncontrolledPopover>
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

export default GroupList;