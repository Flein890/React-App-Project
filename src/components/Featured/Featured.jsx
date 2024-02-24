import React from 'react'
import { FeaturedWrapperStyles, CardStyles,Card } from './FeaturedStyles'
import {data} from '../../data/data.js'
import FeaturedCard from './FeaturedCard.jsx'
function Featured() {
  return (
    <FeaturedWrapperStyles gridLength={6}>
      {data.map((item)=> (
        <FeaturedCard key={item.id} {...item}  />
      ))};
    </FeaturedWrapperStyles>
    
  )
}

export default Featured