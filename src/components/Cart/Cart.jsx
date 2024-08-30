import React from 'react'
import  CartStyles  from './CartStyles'
import { CartContainer } from './CartStyles'
import CartItem from './CartItem'
import CheckoutBtn from '../UI/CheckoutBtn'
import { CartTittle } from './CartStyles'
import { toggleHiddenCart,clearCart, removeFromCart } from '../../redux/cartMenuSlice.js'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { roundToTwoDecimal } from '../../redux/cart-code.js'
import { TotalContainer,Total } from './CartStyles'
import Modal from '../UI/Modal.jsx'
import { toggleModal } from '../../redux/modalSlice'
import { BsBrightnessAltHigh } from "react-icons/bs";
import { Anything } from './CartStyles'
import {toggleProductModal} from '../../redux/productModal.js'
import { trueProductModal,falseProductModal } from '../../redux/cartMenuSlice.js'
import { Overlay,CloseCart } from './CartStyles'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const dispatch = useDispatch();

  const productModal = useSelector((state)=> state.productModal.removeModal)
  
  const modalOpen = useSelector((state) => state.modal.modalOpen);

  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const cartItems = useSelector ((state)=> state.cart.cartItems);

  


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
        <Overlay onClick={() => dispatch(toggleHiddenCart())} />
       <CartStyles className={isCartOpen ? 'open' : ''}>
      <CloseCart><i className="fa-solid fa-xmark" onClick={() => dispatch(toggleHiddenCart())}></i></CloseCart>
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
            <CheckoutBtn  value={'Checkout'} disabled={!cartItems.length}/>
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
    
    {productModal &&  <>
  <Modal>
  <h2>Remove item from cart?</h2>
  <p>You are going to remove the selected product</p>
  <div>
    <button onClick={() => dispatch(falseProductModal()) && dispatch(toggleProductModal())}>Cancel</button>
    <button className='delete' onClick={() => dispatch(trueProductModal()) && dispatch(toggleProductModal())}>Delete</button>   {/**it must be true to delete*/}
  </div>   
</Modal></>} 

    </>
  )
}

export default Cart