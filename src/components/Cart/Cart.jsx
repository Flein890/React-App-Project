import React from 'react'
import  CartStyles  from './CartStyles'
import { CartContainer } from './CartStyles'
import CartItem from './CartItem'
import CheckoutBtn from '../UI/CheckoutBtn'
import { CartTittle } from './CartStyles'
import { toggleHiddenCart,clearCart } from '../../redux/cartMenuSlice.js'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { roundToTwoDecimal } from '../../redux/cart-code.js'
import { TotalContainer,Total } from './CartStyles'

function Cart() {
  const dispatch = useDispatch()
  
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const cartItems = useSelector ((state)=> state.cart.cartItems)

//  console.log(useSelector((state)=> state.cart))

  useEffect(() => {
    if(isCartOpen){
      dispatch(toggleHiddenCart())
    }
  },[dispatch])

  const totalPrice = cartItems.reduce((acc,item)=>{
    return (acc+=item.price * item.quantity)
  },0)

  return (
    <>
    {isCartOpen && <>

       <CartStyles className={isCartOpen ? 'open' : ''}>
        <CartTittle>Cart</CartTittle>
        <CartContainer>
          {cartItems.length ? (
                  cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                  ))
                ) : (
                  <p>NO HAY PLATA</p>
                )}
        </CartContainer>    
        <TotalContainer>
          <Total>Total: ${roundToTwoDecimal(totalPrice)}</Total>
            <CheckoutBtn value={'Checkout'} disabled={!cartItems.length}/>
        </TotalContainer>
    </CartStyles>
    </>
    }
   
    </>
  )
}

export default Cart