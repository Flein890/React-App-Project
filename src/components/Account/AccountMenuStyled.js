import styled from "styled-components";

export const AccountMenuStyled = styled.div`
display: flex;
flex-direction: column;
align-items: start;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: 0.02em;
position: fixed;
top: 100px;
right: 60px;
z-index: 1500;
background-color: #eee;
padding: 15px 25px;
gap: 15px;
border-radius: 36px;

`

export const Welcome = styled.h3`
font-family: 'Montserrat';
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: 0.02em;
color: #000;
`

export const LogOutBtn = styled.button`
width:100%;
background-color: #111;
color: #fff;
border: none;
padding: 10px 15px;
border-radius: 36px;
cursor: pointer;
`