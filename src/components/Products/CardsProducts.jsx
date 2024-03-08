import React from 'react'
import {data} from '../../data/data.js'
import products from '../../assets/video/products.mp4'
import CardProduct from './CardProduct.jsx'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import ShowMoreBtn from '../UI/ShowMoreBtn.jsx'
import { CardsProductsStyles,CardsWrapperHeading,CardsWrapper } from './CardsProductsStyles.js'

function CardsProducts() {

  useEffect(()=>{
    window.sr = ScrollReveal();
        
    sr.reveal('h2',{
      origin: 'left',
      distance: '50px',
      duration: 2000,
      opacity:0,
    })
    sr.reveal('video',{
      origin: 'right',
      distance: '50px',
      duration: 2000,
      opacity:0,
    })
  })
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
      <ShowMoreBtn value='SHOW MORE'></ShowMoreBtn>
    </CardsProductsStyles>
  )
}

export default CardsProducts