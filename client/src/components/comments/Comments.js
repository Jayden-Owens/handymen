import React, { Component } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import Comment from './Comment';
import Services from '../services/Services';


class Comments extends Component {
    state = { comments: []};

    componentDidMount() {
      const { servicesId } = this.props.location
        axios.get(`/api/services/${servicesId}/comments`)
          .then( res => {
            this.setState({ comments: res.data })
          })
          .catch( err => console.log(err))
      }
      
    addComment = (Comment) => {
        const { servicesId } = this.props
        axios.comment(`/api/services/${servicesId}/comments`, { Comment })
          .then( res => {
            const { comments } = this.state 
            this.setState({ comments: [...comments, res.data ]})
          })
          .catch( err => console.log(err))
      }
    deleteComment = (id) => {
        const { servicesId } = this.props
        axios.delete(`/api/services/${servicesId}/comments/${id}`)
          .then( res => {
            const { comments } = this.state 
            this.setState({ comments: comments.filter( c => c.id !== id )})
          })
          .catch( err => console.log(err))
      }
    
      render() {
        const { comments } = this.state
        const { servicesId } = this.props.location
        return (
          <>
            { comments.map( c => 
              <Comments key={c.id} {...c} deleteComment={this.deleteComment} />
            )}
          </>
        )
      }
    
}
export default Comments