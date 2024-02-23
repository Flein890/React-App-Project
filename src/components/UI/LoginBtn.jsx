import React from 'react'
import { LoginBtnStyles } from './LoginBtnStyles'
import { Link } from 'react-router-dom'
function LoginBtn() {
  return (<Link to="login"><LoginBtnStyles>LOG IN</LoginBtnStyles></Link>
    
  )
}

export default LoginBtn