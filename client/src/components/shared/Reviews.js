import React from 'react';
import { Container, Icon } from 'semantic-ui-react';
import { HeaderText, SubText, } from '../styledComponents/appStyles';
import { Link } from 'react-router-dom';
import HandymenList from '../../components/handymens/HandymenList';
import Handymen from '../../components/handymens/Handymen';
import { CardInfoContainer } from '../styledComponents/appStyles'
import { Card } from 'semantic-ui-react'

const Reviews = (handymens, services, rating ) => (
  <Container>
    <HeaderText>Reviews</HeaderText>
    <SubText>Handy Many Below to See his Reviews</SubText><br/>
    <div style={{textAlign: 'center'}}>
      
    
      
    </div>
  </Container>
)

export default Reviews
