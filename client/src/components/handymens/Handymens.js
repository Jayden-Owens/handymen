import React, { Component } from 'react';
import { HeaderText, SubText } from '../styledComponents/appStyles';
import HandymenList from './HandymenList'
import HandymenForm from './HandymenForm'
import axios from 'axios'

class Handymens extends Component {
  state = { handymens: [] }

  componentDidMount() {
    // TODO make a call to our rails server to get Items
    axios.get("/api/handymens")
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
    axios.post('/api/handymens', {handymen})
      .then( res => {
        const {handymens} = this.state;
        this.setState({ handymens: [...handymens, res.data ]});
      })
  }

  updateHandymen = (id) => {
    // TODO make api call to update todo
    // TODO update state
  }

  deleteHandymen = (id) => {
    // TODO make api call to delete todo
    // TODO remove it from state
  }

  render() {
    const { handymens } = this.state
    console.log(handymens)
    return (
      <>
        <HeaderText>Handy Men</HeaderText>
        <SubText>Add Handy Man</SubText>
        <HandymenForm 
          addHandymen={this.addHandymen}
        />
        <HandymenList
          handymens={handymens}
        />
      </>
    )
  }
}

export default Handymens