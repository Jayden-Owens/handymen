import React, {Component } from 'react';
import { Form } from 'semantic-ui-react';

class ServiceForm extends Component {
  state = { name: "", specialty: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addHandymen(this.state);
    this.setState({ service_type: '', price: '', hours: ''})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Service Type"
          placeholder="Add Type Of Service"
          required
          name="service_type"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Price"
          placeholder="Add Price of Services"
          required
          name="price"
          value={this.state.specialty}
          onChange={this.handleChange}
        />
               <Form.Input
          label="Hours"
          placeholder="Add Hours"
          required
          name="hours"
          value={this.state.specialty}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ServiceForm