import React from 'react'
import { HeaderStyles, HeaderContainer } from './HeaderStyles'
import logo from '../../images/logo.svg'
import LoginBtn from '../UI/LoginBtn'
import { Link , Outlet } from 'react-router-dom'
import Button from '../UI/Button'
import { BussinessName } from './HeaderStyles'
import { LogoContainer, ToLogin } from './HeaderStyles'
function Header() {
  return (
    <>
    <HeaderContainer>
      <HeaderStyles>
        <LogoContainer>
          <img src={logo} alt="" className='logo' />
          <BussinessName>Papu</BussinessName>
       </LogoContainer>
       
        <nav className='nav'>
            <ul className='ul'>
                <li><Link className='link active' to="/">Home</Link></li>
                <li><Link className='link' to="about">About</Link></li>
                <li><Link className='link' to="contact">Contact</Link></li>
                <li><Link className='link' to="products">Products</Link></li>
            </ul>
        </nav>
        
        <Link to ='login'><ToLogin>LOGIN</ToLogin></Link>
        <a className='hamburger' href=""><span></span><span></span></a>
      </HeaderStyles>
    </HeaderContainer>
    
       
    </>
  )
}

export default Header