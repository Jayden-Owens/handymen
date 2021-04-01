import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import CommentList from './CommentList'
import { CardContainer, FormContainer, HeaderText, SubText } from '../styledComponents/appStyles'
import { Container } from 'semantic-ui-react'
import CommentForm from './CommentForm'



class Comments extends Component {
    state = { comments: []};

    componentDidMount() {
    if (this.props.match){
      axios.get(`/api/services/${this.props.match.params.id}/comments`)
          .then( res => {
            this.setState({ comments: res.data })
          })
          .catch( err => console.log(err))

    }
        
      }
      
    addComment = (comment) => {
        const { serviceId } = this.props
        axios.post(`/api/services/${this.props.match.params.id}/comments`, {comment})
          .then( res => {
            const { comments } = this.state 
            this.setState({ comments: [...comments, res.data ]})
          })
          .catch( err => console.log(err))
      }
    deleteComment = (id) => {
        const { servicesId } = this.props
        axios.delete(`/api/services/${this.props.match.params.id}/comments/${id}`)
          .then( res => {
            const { comments } = this.state 
            this.setState({ comments: comments.filter( c => c.id !== id )})
          })
          .catch( err => console.log(err))
      }
    
      updateComment = (id, comment) => {
        const { servicesId } = this.props
        axios.put(`/api/services/${this.props.match.params.id}/comments/${id}`, { comment })
          .then( res => {
            const comments = this.state.comments.map( h => {
              if (h.id === id)
                return res.data
              return h;
            });
            this.setState({ comments })
          })
        }
      render() {
        const { comments} = this.state
        const { serviceId, service_type } = this.props
      
        return (
          <>
           <Container>
          <HeaderText>Comments about Service</HeaderText>
          <h1>{service_type}</h1>
         
          <br/>
            <CardContainer>
            <CommentList
              comments={comments}
              deleteComment={this.deleteComment}
              updateComment={this.updateComment}
            />
          </CardContainer>
          <FormContainer>
            <SubText>Add Comment</SubText>
            <CommentForm 
              addComment={this.addComment}
              updateComment={this.updateComment}
            />
          </FormContainer>
          </Container>
          </>
        )
      }
    
}
export default withRouter(Comments)