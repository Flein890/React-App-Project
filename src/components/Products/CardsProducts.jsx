import React from 'react'
import {data} from '../../data/data.js'
import products from '../../assets/video/products.mp4'
import CardProduct from './CardProduct.jsx'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import Categories from '../Categorias/Categories.jsx'
import ShowMoreBtn from '../UI/ShowMoreBtn.jsx'
import { useSelector,useDispatch } from 'react-redux'
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

  //I bring the selected category from the store to filter the products
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  console.log(selectedCategory)

  return (

    <CardsProductsStyles>
      <CardsWrapperHeading>
         <h2>Choose an editor</h2>
         <video src={products} autoPlay muted loop playsInline preload='auto'></video>
      </CardsWrapperHeading>
      <Categories/>
      <CardsWrapper>
         {data.filter((item)=> selectedCategory ? item.category === selectedCategory : true).map((item)=>(
           <CardProduct key={item.id} {...item}/>
         ))}
      </CardsWrapper>
      <ShowMoreBtn value='SHOW MORE'></ShowMoreBtn>
    </CardsProductsStyles>
  )
}

export default CardsProducts