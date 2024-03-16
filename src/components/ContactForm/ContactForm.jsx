import React from 'react'
import {Field} from 'formik'
import Input from '../UI/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import LoginBtn from '../UI/LoginBtn'
import { FormikStyles, DatosStyled, ContactTitle, FormStyles,PurpleBackgroundBar} from './ContactFormStyles'
function ContactForm() {
  
  window.sr= ScrollReveal();
  useEffect(() => {
    sr.reveal('input', {
      duration: 2000,
      origin: 'left',
      distance: '100px',
      delay:500,
      
    })
    sr.reveal('button', {
      duration: 2000,
      origin: 'left',
      distance: '100px',
      delay:500
    })
    sr.reveal('h3', {
      duration: 2000,
      origin: 'top',
      distance: '100px'
    })
  })


  const contactInitialValues = {
    name: '',
    email: '',
    cellphone:'',
    message: ''
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  cellphone: Yup.string().required('Required'),
  message: Yup.string().required('Required')
})

const formik = useFormik({
  initialValues: contactInitialValues,
  validationSchema
})

const {errors, touched, handleSubmit} = formik



  return (
    <DatosStyled>
      <ContactTitle> Contact Us!</ContactTitle>
     
       <FormikStyles
     initialValues={contactInitialValues}
     validationSchema={validationSchema}
     onSubmit={values => console.log(values)}>

      <FormStyles>
      <Input className='1'  type="text" name="name" placeholder="Name" errors={errors.name && touched.name ? errors.name : ''} />
      <Input className='2' type="email" name="email" placeholder="Email" />
      <Input className='3' type="number" name="cellphone" placeholder="Cellphone" />
      <Input className='4'type="text" name="message" placeholder="Message" />
      <LoginBtn className='5' onSubmit={handleSubmit} value='SEND'/>
      </FormStyles>
      
    
    </FormikStyles>
    <PurpleBackgroundBar></PurpleBackgroundBar>
    </DatosStyled>
   
  )
}

export default ContactForm