import React from 'react'
import {data} from '../../data/data.js'
import products from '../../assets/video/products.mp4'
import CardProduct from './CardProduct.jsx'
import { CardsProductsStyles,CardsWrapperHeading,CardsWrapper } from './CardsProductsStyles.js'

function CardsProducts() {
  return (
    <CardsProductsStyles>
      <CardsWrapperHeading>
         <h2>Choose an editor</h2>
         <video src={products} autoPlay muted loop playsInline preload='auto'></video>
      </CardsWrapperHeading>
      <CardsWrapper>
         {data.map((item)=>(
           <CardProduct key={item.id} {...item}/>
         ))}
      </CardsWrapper>
    </CardsProductsStyles>
  )
}

export default CardsProducts