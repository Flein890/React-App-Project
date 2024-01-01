import React from 'react'
import { CardContainer, BuyInfo  } from './CardsProductsStyles'

function CardProduct({image, name, description,price}) {
  return (
    <CardContainer>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <BuyInfo>
            <p>${price}</p>
            <button>BUY</button>
        </BuyInfo>
    </CardContainer>
  )
}

export default CardProduct