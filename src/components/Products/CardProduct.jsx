import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { CardContainer, BuyInfo  } from './CardsProductsStyles'
import {addToCart} from '../../redux/cartMenuSlice'
import { open,close } from '../../redux/addSlice'
import { useEffect } from 'react'


function CardProduct({image, name, description,price,id}) {

  const addState = useSelector((state)=> state.add.translate)
 
const dispatch = useDispatch()

useEffect(() => {
  setTimeout(() => {
    dispatch(close())
  },1000)
  console.log(addState)
},[addState])



  return (
    <CardContainer>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <BuyInfo>
            <span>${price}</span>
            <button onClick={() => dispatch(addToCart({id, name, price, image})) && dispatch(open())}>ADD TO CART</button>
        </BuyInfo>
    </CardContainer>
  )
}

export default CardProduct