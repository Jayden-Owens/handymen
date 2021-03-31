import { Component } from 'react';
import {Form} 
import Comments from './Comments';


class CommentForm extends Component {


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateComment, id, toggleForm } = this.props 
      updateComment(id, this.state)
      this.setState({ title: "", body: "", rating: "" })
      toggleForm()
    } else {
     
      this.props.addComment(this.state)
    }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Title"
          placeholder="Title of Comment"
          required
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Review"
          placeholder="Review of Service"
          required
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
          <Form.Select 
        name="rating"
        value={rating}
        onChange={(e, { value}) => this.state.rating(value)}
        label="Rating for Service"
        options={reviewopts}
      />
  )
}
const reviewopts = [
  { key: "1", text: "1 Star", value: 1 },
  { key: "2", text: "2 Star", value: 2 },
  { key: "3", text: "3 Star", value: 3 },
  { key: "4", text: "4 Star", value: 4 },
  { key: "5", text: "5 Star", value: 5 },
]

        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default CommentForm;
