import React from 'react';
import { Card } from 'semantic-ui-react'
import Comment from '../comments/Comment'
import { CardInfoContainer } from '../styledComponents/appStyles'

const CommentList = ({comments, deleteComment, updateComment }) => (
  
    <Card.Group centered>
      {comments.map (h =>
        <Card>
          <Comment
            key={h.id}
          
            {...h}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
        </Card>
        )}
    </Card.Group>
  )
  
  export default CommentList