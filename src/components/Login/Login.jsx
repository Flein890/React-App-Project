import React from 'react'
import LoginStyles from './LoginStyles'
import {Outlet,Link} from 'react-router-dom'
import { LeftSide,LoginContainer,FormContainer,Linkers,FooterStyles,HeadingSection,InputForm,LoginBtn } from './LoginStyles'
import { RightSide, VideoWrapper,Features } from './LoginStyles'
import logo from '../../images/logo.svg'
import bg from '../../images/bg-login.png'
import video from '../../assets/video/Greet.mp4'
function Login() {
  return (
    <>
      <LoginStyles>
  
          <LeftSide>
           <HeadingSection>
              <img src={logo} alt="" />
              <h3>Papu</h3>
           </HeadingSection>    
           <LoginContainer>
              <h2>Email Login</h2>
                <FormContainer>
                   <InputForm type="email" placeholder='Email'/>
                   <InputForm type="password" placeholder='Password'/>
                   <Link to={'/'}><LoginBtn>Login</LoginBtn></Link>
               </FormContainer>
              <Linkers><Link to={'/'}>Forgot Password?</Link><span>or</span><Link to={'/register'}>Register</Link></Linkers>    
            </LoginContainer>
            <FooterStyles>Copyright © Papu. Made with love and magic by Franco </FooterStyles>  
           </LeftSide>

         <RightSide>
            <VideoWrapper>
              <video src={video}></video>
            </VideoWrapper>
            <Features>
            <span><i class="fa-regular fa-circle-check"></i>Book more meetings</span>
            <span><i class="fa-regular fa-circle-check"></i>Build more trust and convert more sales</span>
            <span><i class="fa-regular fa-circle-check"></i>Build stronger relationship using PAPU</span>
            </Features>
         </RightSide>
      </LoginStyles>
    </>
  )
}

export default Login