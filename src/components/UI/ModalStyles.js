import styled from "styled-components";

export const Overlay = styled.div`
width: 100vw;
height:100vh;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0,0,0,.5);
z-index: 1000;
display: flex;
align-items: center;
justify-content: center;
`

export const ModalContainer=styled.div`
width: 500px;
min-height:100px;
position: relative;
border-radius: 32px;
background-color: #fff;
box-shadow: rgba(100,100,111,0.2) 0 7px 29px 0;
z-index: 2000;
padding: 20px;
`
export const HeaderModal= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #8330C4;

h3{
    font-weight: 500;
    font-size: 16px;
    color: #8330C4;
}
`
export const CloseBtn=styled.div`

&:hover{
    background:#f2f2f2;
}
svg{
    position: absolute;
top: 20px;
right: 20px;
width: 20px;
height: 20px;
border:none;
cursor: pointer;
transition: .3s ease all;
color: #8330C4;
}
`

export const Content=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
gap: 15px;
width: 100%;
button{
    border-radius: 48px;
    background-color: #8330C4;
    color: #fff;
    padding: 10px 20px;
    width: 100%;
    border: none;
    cursor: pointer;

}
`