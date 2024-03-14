import React from 'react'
import { CartItemStyles,CartInfoContainer,Tittle,Price } from './CartStyles'
import { FaPlus } from "react-icons/fa6";
import {FaMinus} from 'react-icons/fa6'
import {IoMdTrash} from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { HandlerAmount,Quantity } from './CartStyles';
import { addToCart,removeFromCart } from '../../redux/cartMenuSlice'
import { toggleProductModal } from '../../redux/productModal';

function CartItem({price,name,id,image,quantity}) {
  const dispatch = useDispatch()
  return (
<CartItemStyles> 
      <CartInfoContainer>
           <img style={{width:'50px'}} src={image} alt={name} />
           {/* <Tittle>{name}</Tittle> */}
      </CartInfoContainer>
           <Price>Price: ${price}</Price>
      <CartInfoContainer>
         <HandlerAmount onClick={() => dispatch(removeFromCart({id}))}>{quantity===1 ? <IoMdTrash onClick={() => dispatch(toggleProductModal())}/> : <FaMinus/>}</HandlerAmount>
         <Quantity>{quantity}</Quantity>
         <HandlerAmount onClick={() => dispatch(addToCart({id,name,price,image}))}><FaPlus/></HandlerAmount>
      </CartInfoContainer>
</CartItemStyles>

   
  )
}

export default CartItem