import react from 'react'
import video from '../../assets/video/Greet.mp4'
import logo from '../../images/logo.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../UI/Input'
import { Link } from 'react-router-dom'
import LoginBtn from '../UI/LoginBtn'
import LoginStyles, { FormContainer,Linkers,FooterStyles,LeftSide,VideoWrapper,Features, RightSide,HeadingSection,LoginContainer  } from '../Login/LoginStyles'
import { registerFunc } from '../../../db/fetch'
import { setCurrentUser } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Register () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const passRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            
    const validationSchema = Yup.object({
      username: Yup.string().required(),
      email: Yup.string().email('Invalid email').matches(emailRegexp, 'Please enter a valid email').required(),
      password: Yup.string().matches(passRegexp, 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters').required(),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required()
    })
    
    const formik = useFormik({
      initialValues:{
        username:'',
        email:'',
        password:'',
        confirmPassword:''
          },
      validationSchema
      ,
      onSubmit:async(values,actions)=>{
        // console.log(values)
    const user =await registerFunc(values.username,values.email,values.password);
    // formik.handleSubmit
    actions.resetForm();
    if(user){
      dispatch(setCurrentUser({
        ...user.user,
        token:user.token
      }));
      //si se puede crear el usuario va a la pagina de verificacion
      navigate('/verify')
    }

   }}
      // onSubmit: (values,{resetForm}) => {
      //   //tengo q ejecutar la funcion del post aca para que se envien los values supongo
      //   // console.log('datos enviados')
      //   // console.log(values)
      //   // resetForm()
        
      // }
    )
  
    const {errors, touched, handleSubmit} = formik
    return(
        <>
        <LoginStyles>

          <RightSide>
           <VideoWrapper>
              <video autoPlay loop muted playsInline src={video}></video>
            </VideoWrapper>
            <Features>
            <span><i className="fa-regular fa-circle-check"></i>Book more meetings</span>
            <span><i className="fa-regular fa-circle-check"></i>Build more trust and convert more sales</span>
            <span><i className="fa-regular fa-circle-check"></i>Build stronger relationship using PAPPU</span>
            </Features>
           </RightSide>


           <LeftSide>
            <HeadingSection>
              <img src={logo} alt="logo" />
           </HeadingSection>  
           <LoginContainer>
               <h2>Register</h2>
               <FormContainer>
                <Input
                      type="text"
                      name='username'
                      value={formik.values.username}
                      placeholder='Username'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      hasError={errors.username && touched.username ? errors.username : null}
                 />
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
                      <Input
                      type='password'
                      name='confirmPassword'
                      value={formik.values.confirmPassword}
                      placeholder='Confirm Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      hasError={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                      />
                  <LoginBtn onSubmit={handleSubmit} value='Register' type='submit'></LoginBtn>
               </FormContainer>
          <Link to={'/login'}>Already have an account? Sign In</Link> 
            </LoginContainer>  
            <FooterStyles>Copyright © Pappu. Made with love and magic by Franco </FooterStyles>  
           </LeftSide>
        </LoginStyles>
        </>
    )
}
export default Register