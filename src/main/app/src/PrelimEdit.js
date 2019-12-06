import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class PrelimEdit extends Component {

  emptyItem = {
    name: '',
    address: '',
    city: '',
    stateOrProvince: '',
    country: '',
    postalCode: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const group = await (await fetch(`/api/group/${this.props.match.params.id}`)).json();
      this.setState({item: group});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;
    alert("judge 1 - " + this.state.item.score1);
    alert("judge 2 - " + this.state.item.score2);
    alert("judge 3 - " + this.state.item.score3);
    //alert("STATE SCORE - " + this.state.item.score);
    if (item.id === 0) {
        await fetch('/api/group', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
    }
    else {
        await fetch(`/api/group/${item.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
    }
    this.props.history.push('/prelim');
}

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Competitor' : 'Add Competitor'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={item.name || ''}
                   onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Judge 1</Label>
            <Input type="number" name="score1" id="score" value={item.score || ''}/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Judge 2</Label>
            <Input type="number" name="score" id="score2" value={item.score || ''}/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Judge 3</Label>
            <Input type="number" name="score3" id="score3" value={item.score || ''}/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/prelim">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(PrelimEdit);