import React from 'react'
import LoginStyles from './LoginStyles'
import {Link,NavLink} from 'react-router-dom'
import { LeftSide,LoginContainer,FormContainer,Linkers,FooterStyles,HeadingSection } from './LoginStyles'
import { RightSide, VideoWrapper,Features } from './LoginStyles'
import logo from '../../images/logo.svg'
import video from '../../assets/video/Greet.mp4'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import LoginBtn from '../UI/LoginBtn'
import Input from '../UI/Input'
import {Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginFunc } from '../../../db/fetch'
import { setCurrentUser } from '../../redux/userSlice'

function Login() {

  const dispatch=useDispatch()

const passRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').matches(emailRegexp, 'Please enter a valid email').required(),
    password: Yup.string().matches(passRegexp, 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters').required("Email Required"),
  })
  
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema
    ,
    onSubmit: async (values,{resetForm}) => {
      const user = await loginFunc(values.email,values.password);
      if(user){
        dispatch(setCurrentUser({
          ...user.user,
          token:user.token
        }))
        resetForm()
      }
      console.log(user)
      console.log(useSelector(state => state.user.currentUser))
      console.log(values)
      // console.log('datos enviados')
      
    }
  })

  const {errors, touched, handleSubmit} = formik
  

  return (
    <>
      <LoginStyles>
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
  
         <Outlet></Outlet>

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
                      value={formik.values.email}
                      placeholder='Email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      hasError={errors.email && touched.email ? errors.email : null} //chequear el touched
                      />
                   <Input 
                      type="password"
                      name='password'
                      value={formik.values.password}
                      placeholder='Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      hasError={errors.password && touched.password ? errors.password : null} //sin el touched "funciona"
                      /> 
                  <LoginBtn onSubmit={handleSubmit} value='Login' type='submit'></LoginBtn>
               </FormContainer>
              <Linkers><Link to={'/'}>Forgot Password?</Link><span>or</span><Link to={'/register'} >Register</Link></Linkers>    
            </LoginContainer>
            <FooterStyles>Copyright © Pappu. Made with love and magic by Franco </FooterStyles>  
           </LeftSide>
     

        
      </LoginStyles>
    </>
  )
}

export default Login