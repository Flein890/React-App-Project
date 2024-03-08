import React from 'react'
import { CheckoutBtnStyles } from './CheckoutBtnStyles'

function CheckoutBtn({value}) {
  return (
    <CheckoutBtnStyles>{value}</CheckoutBtnStyles>
  )
}

export default CheckoutBtn