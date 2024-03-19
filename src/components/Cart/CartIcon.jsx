import React from 'react'
import { Bubble } from './CartIconStyles'
import CartIconStyles  from './CartIconStyles'
import { toggleHiddenCart } from '../../redux/cartMenuSlice.js'
import { useDispatch,useSelector } from 'react-redux'


function CartIcon() {

  const NavOpenToToggleIcon = useSelector((state)=> state.navbar.isOpen) //cuando es true desaparecemos el icono

  
    const dispatch = useDispatch()
    const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc,cur) =>(acc+=cur.quantity),0) 

  return (
    <>
      { !NavOpenToToggleIcon && 

        <CartIconStyles onClick={() => dispatch(toggleHiddenCart())}>
           <i className="fa-solid fa-cart-shopping"></i>
           <Bubble>{totalCartItems}</Bubble>
        </CartIconStyles>
}</>
   
    
  )
}

export default CartIcon