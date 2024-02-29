import React from 'react'
import { HeaderStyles, HeaderContainer } from './HeaderStyles'
import logo from '../../images/logo.svg'
import { Link , Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { close, open } from '../../redux/NavbarSlice'
import { LogoContainer, ToLogin,Line,BussinessName  } from './HeaderStyles'
function Header() {
    const isNavbarOpen = useSelector((state) => state.isOpen);
    const dispatch = useDispatch()

  return (
    <>
    <HeaderContainer>
      <HeaderStyles  className={isNavbarOpen ? 'navInvert' : ''}>
        <LogoContainer>
          <img src={logo} alt="" className='logo' />
          <BussinessName>Pappu</BussinessName>
       </LogoContainer>    
        <nav className='nav'>
            <ul className={`ul ${isNavbarOpen ? 'open' : ''}`}>
                <li onClick={() => dispatch(close())}><Link className='link' to="/">Home</Link></li>
                <li onClick={() => dispatch(close())}><Link className='link' to="about">About</Link></li>
                <li onClick={() => dispatch(close())}><Link className='link' to="contact">Contact</Link></li>
                <li onClick={() => dispatch(close())}><Link className='link' to="products">Products</Link></li>
                <Link onClick={() => dispatch(close())} to ='login'><ToLogin className={` ${isNavbarOpen ? 'login' : ''}`}>LOGIN</ToLogin></Link>
            </ul>
        </nav>
        <button onClick={() => dispatch(isNavbarOpen ? close() : open())} className='hamburger' href=""><Line className={isNavbarOpen ? 'x' : ''}/><Line className={isNavbarOpen ? 'x2' : ''}/></button>
      </HeaderStyles>
    </HeaderContainer>
    
       
    </>
  )
}

export default Header