import React from 'react';
import { Container, Icon } from 'semantic-ui-react'
import { HeaderText, SubText } from '../styledComponents/appStyles'
import { Link } from 'react-router-dom'

const Home = () => (
  <Container>
    <HeaderText>Welcome to the Handy Man App!</HeaderText>
    <SubText>Click on the icon below to enter the Handy Man App</SubText><br/>
    <div style={{textAlign: 'center'}}>
      <Link to="/handymens"><Icon link name="user secret" size="massive"/></Link>
    </div>
  </Container>
)

export default Home

