import React from 'react';
import Handymen from './Handymen'
import { Card } from 'semantic-ui-react'
import Comment from '../comments/Comment'
import { CardInfoContainer } from '../styledComponents/appStyles'

const HandymenList = ({handymens, deleteHandymen, updateHandymen }) => (
  
  <Card.Group centered>
    {handymens.map (h =>
      <Card>
        <Handymen
          key={h.id}
        
          {...h}
          deleteHandymen={deleteHandymen}
          updateHandymen={updateHandymen}
        />
      </Card>
      )}
  </Card.Group>
)

export default HandymenList