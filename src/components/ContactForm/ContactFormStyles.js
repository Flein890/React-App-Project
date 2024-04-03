import styled from "styled-components";
import { Formik , Form as FormikForm } from 'formik';

export const FormStyles = styled(FormikForm)`
display: flex;
flex-direction: column;
gap: 20px;
/* max-width: 500px; */
/* justify-content: center; */
/* align-items: center; */
width:40%;
z-index: 500;
background-color: #FAFAFA;
padding: 20px;
border-radius: 20px;


input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] { appearance:textfield; }

@media (max-width: 768px) {
  width: 80%;
}
@media (max-width: 576px) {
  width: 100%;
}
`

export const FormikStyles = styled(Formik)`
 text-align: center;
 
`
export const HeadingSection = styled.div`
display:flex;
align-items: center;
gap: 10px;
height: 50px;
align-self: start;
z-index: 1500;
@media (max-width: 768px){
    display: none;
}

img{
    height: 40px;
}
@media (max-width: 976px){
  display: none;
}
`
export const FooterStyles = styled.div`
color:#999;
font-size: 14px;
align-self: start;
z-index: 900;
/* position: absolute;
    bottom:35px; */
@media (max-width: 576px){
   padding: 5px;
}
`


export const DatosStyled = styled.div`
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 height:100vh ;
 justify-content:center;
 align-items: center;
 /* gap: 2em; */
 /* background-color: ; */
 background-color: #8330c4;
 overflow-y: hidden;
 position: relative;
 padding: 40px;
 justify-content: space-between;
 font-family: 'Montserrat',system-ui;
 @media (max-width:576px){
  justify-content: center;
  padding: 0;
 }
 `
 export const ContactTitle = styled.h4`
    font-size: 3em;
    font-weight: 700;
    font-family: 'Montserrat',system-ui ;
    z-index: 500;
    @media (max-width: 576px){
      font-size: 2.3em;
    }
 `
 export const FormAndTitleContainer = styled.div`
    z-index: 900;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `


 export const PurpleBackgroundBar = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    /* transform:rotate(170deg); */
    animation: goUp 1s backwards ease-in-out;
    animation-fill-mode: backwards;
  
   

    @keyframes goUp {
      0%{
        transform: rotate(170deg);
      }
      100%{
        transform: rotate(180deg);
      }
    }
 `