import React, {Component } from 'react';
import { Form } from 'semantic-ui-react';

class HandymenForm extends Component {
  state = { name: "", specialty: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addHandymen(this.state);
    this.setState({ name: '', specialty: ''})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="HandymanName"
          placeholder="Add name of Handy Man"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="HandymanSpecialty"
          placeholder="Add specialty of Handy Man"
          required
          name="specialty"
          value={this.state.specialty}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default HandymenForm