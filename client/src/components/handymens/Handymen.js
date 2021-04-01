import React, {Component} from 'react';
import { SubText } from '../styledComponents/appStyles'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react';
import Services from '../services/Services'
import HandymenForm from './HandymenForm';

class Handymen extends Component {

  state = {editing: false}

  toggleEdit = () => {
    const { editing } = this.state
    this.setState({editing: !editing})
  }

  render () {
    const { editing } = this.state
    const { id, name, specialty, deleteHandymen} = this.props

  return(
    
    <>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Specialty: {specialty}</Card.Meta><br/>
        <Button
        
        >
          <Link
            to={{
              pathname: `/handymen/${id}/services`,
              state: {handymenId: id}
            }}
          >
            View Services Offered
          </Link>
         
        </Button><hr/>
        <Button
          onClick={() => deleteHandymen(id)}
          color="red"
        >
          Delete
        </Button>

        { editing ?
          <HandymenForm {...this.props} toggleEdit={this.toggleEdit} />
          :
          <Button
          onClick={() => this.toggleEdit()}
          color="blue"
          >
          Update
        </Button>
        }
      </Card.Content>
      <hr/>
    </>
  )}
}
export default Handymen