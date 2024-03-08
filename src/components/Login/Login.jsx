import React from 'react'
import LoginStyles from './LoginStyles'
import {Link} from 'react-router-dom'
import { LeftSide,LoginContainer,FormContainer,Linkers,FooterStyles,HeadingSection } from './LoginStyles'
import { RightSide, VideoWrapper,Features } from './LoginStyles'
import logo from '../../images/logo.svg'
import video from '../../assets/video/Greet.mp4'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import LoginBtn from '../UI/LoginBtn'
import Input from '../UI/Input'

function Login() {

  const passRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').matches(emailRegexp, 'Please enter a valid email').required(),
    password: Yup.string().matches(passRegexp, 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters').required(),
  })
  
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema
    ,
    onSubmit: (values,{resetForm}) => {
      console.log('datos enviados')
      console.log(values)
      resetForm()
    }
  })

  const {errors, touched, handleSubmit} = formik

  return (
    <>
      <LoginStyles>
  
          <LeftSide>
           <HeadingSection>
              <img src={logo} alt="logo" />
              <h3>Pappu</h3>
           </HeadingSection>    
           <LoginContainer>
              <h2>Email Login</h2>
                <FormContainer onSubmit={formik.handleSubmit}>
                   <Input 
                      type="email" 
                      name='email'
                      placeholder='Email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isError={errors.email && touched.email ? errors.email : null} //chequear el touched
                      />
                   <Input 
                      type="password"
                      name='password'
                      placeholder='Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isError={errors.password && touched.password ? errors.password : null} //sin el touched "funciona"
                      /> 
                  <LoginBtn onSubmit={handleSubmit} type='submit'>jujjj</LoginBtn>
               </FormContainer>
              <Linkers><Link to={'/'}>Forgot Password?</Link><span>or</span><Link to={'/register'}>Register</Link></Linkers>    
            </LoginContainer>
            <FooterStyles>Copyright © Pappu. Made with love and magic by Franco </FooterStyles>  
           </LeftSide>

         <RightSide>
            <VideoWrapper>
              <video autoPlay loop muted playsInline src={video}></video>
            </VideoWrapper>
            <Features>
            <span><i className="fa-regular fa-circle-check"></i>Book more meetings</span>
            <span><i className="fa-regular fa-circle-check"></i>Build more trust and convert more sales</span>
            <span><i className="fa-regular fa-circle-check"></i>Build stronger relationship using PAPU</span>
            </Features>
         </RightSide>
      </LoginStyles>
    </>
  )
}

export default Login