import React from 'react'
import { CheckoutBtnStyles } from './CheckoutBtnStyles'
import { toggleModal } from '../../redux/modalSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toggleHiddenCart } from '../../redux/cartMenuSlice.js'

function CheckoutBtn({value,disabled}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  //funcion para que si el usuario no esta verificado no pueda comprar
  const getUser = async() =>{
    if(!user || user.verified === false || user === null){
      navigate("/verify")
      dispatch(toggleHiddenCart())
    }

  }
  useEffect(() => {
    getUser();
  },[dispatch])

  const cartItems = useSelector ((state)=> state.cart.cartItems)
  const user = useSelector((state) => state.user.currentUser)

  return (
    <CheckoutBtnStyles style = {{cursor: disabled ? 'not-allowed' : 'pointer', backgroundColor: disabled ? '#666' : '#8330C4'}}  onClick={cartItems.length && user.verified ? ()=> dispatch(toggleModal()): null}>{value}</CheckoutBtnStyles>
  )
}

export default CheckoutBtn