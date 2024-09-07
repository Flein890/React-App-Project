import styled from "styled-components"


export const AccountUserStyled = styled.div`

display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    background-color: #FFE3D3;
    cursor: pointer;
    /* position:absolute; */
    top: 45px;
    right: 100px;
    position: fixed;
    cursor: pointer;    
    z-index: 1000;

    @media(max-width:976px){
      width: 30px;
      height: 30px;
      background-color: transparent;
      top: 15px;
      right: 120px;
    }
    
    `