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


input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] { appearance:textfield; }
`

export const FormikStyles = styled(Formik)`
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* justify-content:center; */
  /* width: 100%; */
 
`

export const DatosStyled = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 height: 100vh;
 justify-content:center;
 align-items: center;
 gap: 2em;
 /* background-color: #9942DB; */
 background-color: #8330C4;
 overflow-y: hidden;
 position: relative;
 `
 export const ContactTitle = styled.h3`
    font-size: 3em;
    font-weight: 700;
    font-family: 'Montserrat',system-ui ;
    z-index: 500;
 `
 export const PurpleBackgroundBar = styled.div`
    width: 150vw;
    height: 110vh;
    background-color: #FAFAFA;
    position: absolute;
    top: 0;
    left: -25%;
    z-index: 0;
    /* transform:rotate(45deg); */
    animation: goUp 1s backwards ease-in-out;
    animation-fill-mode: backwards;
   

    @keyframes goUp {
      0%{
        transform: rotate(45deg);
      }
      100%{
        transform: rotate(0deg);
      }
    }
 `