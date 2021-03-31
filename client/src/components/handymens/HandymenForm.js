import React, {Component } from 'react';
import { Form } from 'semantic-ui-react';

class HandymenForm extends Component {
  state = { name: "", specialty: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateHandymen, toggleEdit } = this.props
      updateHandymen(this.props.id, this.state)
      toggleEdit()
    } else {
      this.props.addHandymen(this.state);
    }
    this.setState({ name: '', specialty: ''})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  componentDidMount() {
    if (this.props.id) {
      const { id, name, specialty } = this.props
      this.setState({ id, name, specialty })
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Name"
          placeholder="Add name of Handy Man"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Specialty"
          placeholder="Add specialty of Handy Man"
          required
          name="specialty"
          value={this.state.specialty}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    )
  }
}

export default HandymenForm