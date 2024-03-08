import React from 'react'
import {useDispatch} from 'react-redux'
import { CardContainer, BuyInfo  } from './CardsProductsStyles'
import {addToCart} from '../../redux/cartMenuSlice'

function CardProduct({image, name, description,price,id}) {
const dispatch = useDispatch()

  return (
    <CardContainer>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <BuyInfo>
            <span>${price}</span>
            <button onClick={() => dispatch(addToCart({id, name, price, image}))}>BUY</button>
        </BuyInfo>
    </CardContainer>
  )
}

export default CardProduct