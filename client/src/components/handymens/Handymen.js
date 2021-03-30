import React from 'react';
import { SubText } from '../styledComponents/appStyles';
import Services from '../services/Services';

const Handymen = ({ id, name, specialty }) => {
  return(
    <>
      <SubText>Name: {name}</SubText>
      <SubText>Specialty: {specialty}</SubText>
      <hr/>
    </>
  )
}

export default Handymen