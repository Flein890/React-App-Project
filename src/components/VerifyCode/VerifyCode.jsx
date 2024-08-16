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

function VerifyCode() {
    const dispatch = useDispatch();
    console.log(useSelector((state) => state.user.currentUser))
    const {currentUser} = useSelector((state) => state.user);
    const navigate = useNavigate();

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
    <div>
      <div>HOAOLDKWAPOJDOIWAJDLAKWJDLJAWLKJADOIJ</div>
    </div>
  )
}

export default VerifyCode
