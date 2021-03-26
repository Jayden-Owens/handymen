import React from 'react';
import Handymen from './Handymen'

const HandymenList = ({handymens}) => (
  <div>
    {handymens.map (h =>
      <Handymen
        key={h.id}
        {...h}
      />
      )}
  </div>
)

export default HandymenList