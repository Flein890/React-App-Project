import React, { useEffect } from 'react'
import { CartItemStyles,CartInfoContainer,Tittle,Price } from './CartStyles'
import { FaPlus } from "react-icons/fa6";
import {FaMinus} from 'react-icons/fa6'
import {IoMdTrash} from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { HandlerAmount,Quantity } from './CartStyles';
import { addToCart,removeFromCart } from '../../redux/cartMenuSlice'
import { toggleProductModal } from '../../redux/productModal';
import { useSelector } from 'react-redux';



function CartItem({price,name,id,image,quantity}) {
  const dispatch = useDispatch()
  
  const productModal = useSelector((state)=> state.productModal.removeModal) //si es falso ejecuta removeitems


  const remove = useSelector((state)=> state.cart.remove)

//   const auxRemove = ( ) =>{
//      dispatch(removeFromCart({id}))
//   }

  useEffect(()=>{
     console.log(remove)
   },[remove])

  //  console.log(productModal)

 
  return (<>
<CartItemStyles> 
      <CartInfoContainer>
           <img style={{width:'50px'}} src={image} alt={name} />
           {/* <Tittle>{name}</Tittle> */}
      </CartInfoContainer>
           <Price>Price: ${price}</Price>
      <CartInfoContainer>
         <HandlerAmount>{quantity===1 ? <IoMdTrash onClick={() =>{{
            dispatch(toggleProductModal());

            productModal ?  dispatch(removeFromCart({id})) : console.log('faslooooooooooooooo')

            }}}/> : <FaMinus onClick={() => dispatch(removeFromCart({id}))}/>}</HandlerAmount>
         <Quantity>{quantity}</Quantity>
         <HandlerAmount onClick={() => dispatch(addToCart({id,name,price,image}))}><FaPlus/></HandlerAmount>
      </CartInfoContainer>
</CartItemStyles>

 </>

   
  )
}

export default CartItem