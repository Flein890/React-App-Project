import React from 'react'
import Input from '../UI/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import LoginBtn from '../UI/LoginBtn'
import { FormikStyles, DatosStyled, ContactTitle, FormStyles,PurpleBackgroundBar,FormAndTitleContainer} from './ContactFormStyles'
import { HeadingSection } from './ContactFormStyles'
import logo from '../../images/logo.png'
import TextArea from '../UI/TextArea/TextArea'
import { FooterStyles } from './ContactFormStyles'

function ContactForm() {
  
  window.sr= ScrollReveal();
  useEffect(() => {
    sr.reveal('input', {
      duration: 2000,
      origin: 'left',
      distance: '50px',
      delay:500,
      
    })
    sr.reveal('textarea', { //the button of send does not recongnize this 'class'name
      duration: 2000,
      origin: 'left',
      distance: '50px',
      delay:500
    })
    sr.reveal('h4', {
      duration: 2000,
      origin: 'top',
      distance: '50px',
      opacity:0
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
  cellphone: Yup.number().required('Required'),
  message: Yup.string().required('Required')
})

const formik = useFormik({
  initialValues: contactInitialValues,
  validationSchema,
  onSubmit: (values,actions) => {
    // console.log(values)
     actions.resetForm();

  }
})

const {errors, touched, handleSubmit} = formik

  return (
    <DatosStyled>
        <HeadingSection>
              <img src={logo} alt="logo" />
           </HeadingSection>    

           <FormAndTitleContainer>
           <ContactTitle> Contact Us!</ContactTitle>
     
     <FormikStyles
     initialValues={contactInitialValues}
     validationSchema={validationSchema}
     onSubmit={values => console.log(values)}>

      <FormStyles>
      <Input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Name" 
        hasError={errors.name && touched.name ? errors.name : null} />
      <Input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
        hasError={errors.email && touched.email ? errors.email : null} />
      <Input
        type="number"
        name="cellphone"
        value={formik.values.cellphone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Cellphone"
        hasError={errors.cellphone && touched.cellphone ? errors.cellphone : null} />
      <TextArea
        type="textarea"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Tell us something...."
        hasError={errors.message && touched.message ? errors.message : null} />
      <LoginBtn type="submit" onSubmit={handleSubmit} value='Submit'/>
      </FormStyles>
    
  
     </FormikStyles>
           </FormAndTitleContainer>
     
    <FooterStyles>Copyright © Pappu. Made with love and magic by Franco</FooterStyles>
    <PurpleBackgroundBar></PurpleBackgroundBar>
    </DatosStyled>
   
  )
}

export default ContactForm