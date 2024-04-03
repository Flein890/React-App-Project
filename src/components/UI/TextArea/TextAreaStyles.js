import styled from 'styled-components'

export const ErrorMessage  = styled.span`
    color: #f20;`

export const TextAreaForm = styled.textarea`
border-radius: 50px;
border:1px solid #cacaca;
padding: 12px 13px;
/* height: 40px; */
max-height: 80px;
width: 100%;
background-color: #fff;
font-family: 'Montserrat';
resize: vertical;

&:focus{
    outline: none;
    border:1px solid black;
}`
export const InputContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align:center`