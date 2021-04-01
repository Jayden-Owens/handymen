import React, {Component} from 'react'
import Comments from "./Comments";
import CommentForm from "./CommentForm"
import { Rating } from 'semantic-ui-react'
import { Card, Button } from 'semantic-ui-react';

class Comment extends Component {

    
    state = {editing: false}

  toggleEdit = () => {
    const { editing } = this.state
    this.setState({editing: !editing})
  }
  render () {
    const { editing } = this.state
    const { id, title, body, rating, deleteComment, service_type} = this.props
    const RatingExampleStar = () => (
      <Rating icon='star' defaultRating={3} maxRating={5} />
    )

  return(
    

        <>
            <h1>{service_type}</h1>
            <h3>{title}</h3>
            <h3>Rating: {rating} </h3>
            <p>{body}</p>
            <Button
          onClick={() => deleteComment(id)}
          color="red"
        >
          Delete
                </Button>

                { editing ?
                <CommentForm {...this.props} toggleEdit={this.toggleEdit} />
                :
                <Button
                onClick={() => this.toggleEdit()}
                color="blue"
                >
                Update
                </Button>
                }
        </>
    )
}
}
export default Comment;