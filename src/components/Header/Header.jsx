import React from 'react'
import { HeaderStyles, HeaderContainer } from './HeaderStyles'
import logoheader from "../../images/logoheader.png"
import { Link , Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleNavbar, closeNav} from '../../redux/NavbarSlice'
import { LogoContainer, ToLogin,Line,BussinessName  } from './HeaderStyles'

function Header() {

    const isNavbarOpen = useSelector((state) => state.navbar.isOpen);

    const dispatch = useDispatch()

  return (
<>
    <HeaderContainer>
      <HeaderStyles  className={isNavbarOpen ? 'navInvert' : ''}>
        <LogoContainer>
          <img src={logoheader} className='logo' alt="logo" />
          <BussinessName>Pappu</BussinessName>
       </LogoContainer>    
        <nav className='nav'>
            <ul className={`ul ${isNavbarOpen ? 'open' : ''}`} >
                <li ><Link className='link' onClick={() => dispatch(closeNav())} to="/">Home</Link></li>
                <li ><Link className='link'onClick={() => dispatch(closeNav())} to="about">About</Link></li>
                <li ><Link className='link'onClick={() => dispatch(closeNav())} to="contact">Contact</Link></li>
                <li ><Link className='link'onClick={() => dispatch(closeNav())} to="products">Products</Link></li>
                <Link to ='login' onClick={() => dispatch(closeNav())}><ToLogin className={` ${isNavbarOpen ? 'login' : ''}`}>LOGIN</ToLogin></Link>
            </ul>
        </nav>
        <button onClick={() => dispatch(toggleNavbar())} className='hamburger'><Line className={isNavbarOpen ? 'x' : ''}/><Line className={isNavbarOpen ? 'x2' : ''}/></button>
      </HeaderStyles>
    </HeaderContainer>
    <Outlet />
    </>
  )
}

export default Header