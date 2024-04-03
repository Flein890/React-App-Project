import React from 'react'
import { CheckoutBtnStyles } from './CheckoutBtnStyles'
import { toggleModal } from '../../redux/modalSlice'
import { useDispatch,useSelector } from 'react-redux'

function CheckoutBtn({value,disabled}) {
  const dispatch = useDispatch();
  const cartItems = useSelector ((state)=> state.cart.cartItems)
  return (
    <CheckoutBtnStyles style = {{cursor: disabled ? 'not-allowed' : 'pointer', backgroundColor: disabled ? '#666' : '#8330C4'}}  onClick={cartItems.length ? ()=>dispatch(toggleModal()): null}>{value}</CheckoutBtnStyles>
  )
}

export default CheckoutBtn