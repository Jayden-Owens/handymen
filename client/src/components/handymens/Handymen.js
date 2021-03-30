import React from 'react';
import { SubText } from '../styledComponents/appStyles'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react';


const Handymen = ({ id, name, specialty, deleteHandymen}) => {
  return(
    <>
      <Card.Content>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>Specialty: {specialty}</Card.Meta>
        <Button>
          <Link
            to={{
              pathname: `/handymen/${id}/services`
            }}
          >
            View Services Offered
          </Link>
        </Button>
        <Button
          onClick={() => deleteHandymen(id)}
        >
          Delete : {id}
        </Button>
      </Card.Content>
      <hr/>
    </>
  )
}

export default Handymen