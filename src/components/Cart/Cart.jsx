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
import Modal from '../UI/Modal.jsx'
import { toggleModal } from '../../redux/modalSlice'
import { BsBrightnessAltHigh } from "react-icons/bs";
import { Anything } from './CartStyles'

function Cart() {
  const dispatch = useDispatch()
  
const modalOpen = useSelector((state) => state.modal.modalOpen);

  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const cartItems = useSelector ((state)=> state.cart.cartItems)


  useEffect(() => {
    if(modalOpen){
      dispatch(toggleModal())
    }
  },[dispatch])
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
                  <Anything>This place is empty, try buying something... <BsBrightnessAltHigh /></Anything>
                )}
        </CartContainer>    
        <TotalContainer>
          <Total>Total: ${roundToTwoDecimal(totalPrice)}</Total>
            <CheckoutBtn value={'Checkout'} disabled={!cartItems.length}/>
        </TotalContainer>
    </CartStyles>
    </>
    }
    {modalOpen &&  <>
      <Modal>
      <h2>Purchase this product/s?</h2>
      <p>You are going to buy the selected products</p>
      <button onClick={() => dispatch(clearCart()) && dispatch(toggleModal())}>Buy</button>
    </Modal></>}  
   
    </>
  )
}

export default Cart