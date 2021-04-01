import { Component } from 'react';
import { Form, Rating } from 'semantic-ui-react';
import Comments from '../comments/Comments';


class CommentForm extends Component {
  state = { title: "", body: "", rating: "" };

  componentDidMount() {
    if (this.props.id) {
      const { id, title, body, rating } = this.props;
      this.setState({ id, title, body, rating });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateComment, id, toggleEdit } = this.props;
      updateComment(id, this.state);
      toggleEdit();
    } else {
      this.props.addComment(this.state);
    }
    this.setState({ title: "", body: "", rating: "" });
  };
  render() {
    const { title, body, rating } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          required
          placeholder="title"
        />
        <Form.TextArea
          type="text"
          name="body"
          value={body}
          onChange={this.handleChange}
          required
          placeholder="Text"
        />
        <Form.Input
          type="<NumericInput min={1} max={5} value={1}/>"
          name="rating"
          value={rating}
          onChange={this.handleChange}
          required
          placeholder="rating"
        />
        <button type="submit">Submit</button>
      </Form>








    );
  }
}
export default CommentForm;