import React from 'react';
import Service from './Service'

const ServiceList = ({services}) => (
  <div>
    {services.map (h =>
      <Service
        key={h.id}
        {...h}
      />
      )}
  </div>
)

export default ServiceList