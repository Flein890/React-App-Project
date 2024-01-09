import React from 'react'
import { HeaderStyles, HeaderContainer } from './HeaderStyles'
import bg from '../../images/bg.jpg'
import LoginBtn from '../UI/LoginBtn'
function Header() {
  return (
    <>
    <HeaderContainer>
      <HeaderStyles>
        <img src={bg} alt="" className='logo' />
        <nav className='nav'>
            <ul className='ul'>
                <li><a className='active link' href='#'>Home</a></li>
                <li><a className='link' href='#'>About</a></li>
                <li><a className='link' href='#'>Contact</a></li>
            </ul>
        </nav>
        <LoginBtn></LoginBtn>
      </HeaderStyles>
    </HeaderContainer>
    
       
    </>
  )
}

export default Header