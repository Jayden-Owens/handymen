import React from 'react';
import Service from './Service'

const ServiceList = ({services}) => (
  <div>
    {services.map (h =>
      <Service
        key={s.id}
        {...s}
      />
      )}
  </div>
)

export default ServiceList