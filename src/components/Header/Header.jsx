import React from 'react'
import { HeaderStyles, HeaderContainer } from './HeaderStyles'
import logo from '../../images/logo.svg'
import LoginBtn from '../UI/LoginBtn'
import { Link , Outlet } from 'react-router-dom'
function Header() {
  return (
    <>
    <HeaderContainer>
      <HeaderStyles>
        <img src={logo} alt="" className='logo' />
        <nav className='nav'>
            <ul className='ul'>
                <li><Link className='link active' to="/">Home</Link></li>
                <li><Link className='link' to="about">About</Link></li>
                <li><Link className='link' to="contact">Contact</Link></li>
                <li><Link className='link' to="products">Products</Link></li>
            </ul>
        </nav>
        <LoginBtn></LoginBtn>
      </HeaderStyles>
    </HeaderContainer>
    
       
    </>
  )
}

export default Header