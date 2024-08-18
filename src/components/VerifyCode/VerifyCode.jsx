import React from 'react'
import { setVerified } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { verifyUserFunc } from '../../../db/fetch'
import { useNavigate } from 'react-router-dom'
import LoginBtn from '../UI/LoginBtn'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as Yup from 'yup'
import video from '../../assets/video/Greet.mp4'
import logo from '../../images/logo.png'
//components
import VerifyContainer from './VerifyStyles'
import LoginStyles ,{ HeadingSection,LoginContainer,Features,VideoWrapper,RightSide, FormContainer,Linkers,FooterStyles } from '../Login/LoginStyles'
import { Link } from 'react-router-dom'
import Input from '../UI/Input'
//codeSlice
import { switchBoolean, setBooleanToTrue } from '../../redux/codeSlice'





function VerifyCode() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const codeState = useSelector((state) => state.codeState);

    // console.log(codeState)

    
    // console.log(useSelector((state) => state.user.currentUser))
    const {currentUser} = useSelector((state) => state.user);

     const codeValidationSchema = Yup.object({
        code: Yup.string()
          .min(6, '6 characters code')
          .max(6, '6 characters code')
          .required('Field Required'),
      });

      
      const formik = useFormik({
          initialValues:{
              code:''
            },
            codeValidationSchema
            ,
            onSubmit: async (values) => {
                const user = await verifyUserFunc(currentUser.email, values.code);
                if (!user) {
                    dispatch(setBooleanToTrue())
                    return;
                    //hacer un estado que haga que cambie a false cuando el codigo no coincida asi abajo renderiza un componente
                }
                //desaparece el error de codigo
                dispatch(switchBoolean())
                //verifica al usuario
                dispatch(setVerified());    
                navigate("/");
            }
        })


        useEffect(() => {
            if (!currentUser) {
                navigate('/login');
            } else if (currentUser.verified) {
                navigate('/');
            }
        }, [currentUser, navigate]);
        
        const {errors, touched, handleSubmit} = formik;



    return (
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
        <VerifyContainer>
            <HeadingSection><img src={logo} alt="Logo" /></HeadingSection>
            <LoginContainer>
              <h2>Verify Your Account</h2>
                <FormContainer onSubmit={formik.handleSubmit}>
                   <Input 
                      type="code" 
                      name='code'
                      value={formik.values.email}
                      placeholder='Place your code here'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      hasError={errors.email && touched.email ? errors.email : null}
                      />

                  <LoginBtn onSubmit={handleSubmit} value='Verify' type='submit'></LoginBtn>
               </FormContainer>
               {codeState.code && <p style={{color:'red'}}>Invalid code</p>}
              <Linkers><Link to={'/login'}>Sign in</Link><span>or</span><Link to={'/register'}>Register</Link></Linkers>    
            </LoginContainer>

        <FooterStyles>©2024 Pappu. Made with love and magic by Franco Villanova</FooterStyles>
        </VerifyContainer>
    </LoginStyles>
  )
}

export default VerifyCode
