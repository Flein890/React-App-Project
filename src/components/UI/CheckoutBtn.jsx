import React from 'react'
import { CheckoutBtnStyles } from './CheckoutBtnStyles'
import { toggleModal } from '../../redux/modalSlice'
import { useDispatch,useSelector } from 'react-redux'

function CheckoutBtn({value}) {
  const dispatch = useDispatch();
  const cartItems = useSelector ((state)=> state.cart.cartItems)
  return (
    <CheckoutBtnStyles onClick={cartItems.length ? ()=>dispatch(toggleModal()) : console.log('no hay nada')}>{value}</CheckoutBtnStyles>
  )
}

export default CheckoutBtn