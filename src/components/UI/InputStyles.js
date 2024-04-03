import styled from "styled-components";

export const InputForm = styled.input`
border-radius: 50px;
border:1px solid #cacaca;
padding: 12px 13px;
height: 40px;
width: 100%;
background-color: #fff;
font-family: 'Montserrat';


&:focus{
    outline: none;
    border:1px solid black;
}
`
export const ErrorMessage  = styled.span`
    color: #f20;`

export const InputContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align:center`