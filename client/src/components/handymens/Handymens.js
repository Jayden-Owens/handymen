import React, { Component } from 'react';
import { FormContainer, HeaderText, SubText } from '../styledComponents/appStyles';
import HandymenList from './HandymenList'
import HandymenForm from './HandymenForm'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import { CardContainer } from '../styledComponents/appStyles'


class Handymens extends Component {
  state = { handymens: [] }

  componentDidMount() {
    // TODO make a call to our rails server to get Items
    axios.get("/api/handymen")
      .then( res => {
        this.setState({handymens: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addHandymen = (handymen) => {
    // TODO make api call to rails server to add item
    // TODO update state
    axios.post('/api/handymen', {handymen})
      .then( res => {
        const {handymens} = this.state;
        this.setState({ handymens: [...handymens, res.data ]});
      })
  }

  updateHandymen = (id, handymen) => {
    // TODO make api call to update todo
    // TODO update state
    axios.put(`/api/handymen/${id}`, { handymen })
      .then( res => {
        const handymens = this.state.handymens.map( h => {
          if (h.id === id)
            return res.data
          return h;
        });
        this.setState({ handymens })
      })
  }

  deleteHandymen = (id) => {
    axios.delete(`/api/handymen/${id}`)
      .then( res => {
        const { handymens } = this.state;
        this.setState({ handymens: handymens.filter(h => h.id !== id) })
      })
      .catch( err => console.log(err))
  }

  render() {
    const { handymens } = this.state
    return (
      <>
        <Container>
          <HeaderText>Handy Men</HeaderText>
          <FormContainer>
            <SubText>Add Handy Man</SubText>
            <HandymenForm 
              addHandymen={this.addHandymen}
              updateHandymen={this.updateHandymen}
            />
          </FormContainer>
          <br/>
          <CardContainer>
            <HandymenList
              handymens={handymens}
              deleteHandymen={this.deleteHandymen}
              updateHandymen={this.updateHandymen}
            />
          </CardContainer>
        </Container>
      </>
    )
  }
}

export default Handymens