import styled from 'styled-components';

 const CartIconStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
    /* border-radius: 50%; */
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: #FFE3D3;
    cursor: pointer;
    /* position:absolute; */
    top: 45px;
    right: 50px;
    position: fixed;
    cursor: pointer;    
    z-index: 1000;

    @media(max-width:976px){
      width: 30px;
      height: 30px;
      background-color: transparent;
      top: 15px;
      right: 70px;
    }
    
    `

    export const Bubble = styled.div`
    position: absolute;
    top: -5px;
    font-family:'Montserrat','sans-serif';
    right: -5px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content:    center;
    background-color:#FFE3D3;
    font-size: 13px;
    font-weight: bold;
    user-select: none;
    border-radius: 50%;
    @media(max-width:976px){
      width: 15px;
      height: 15px;
      font-size: 12px;
    }
    `

    export default CartIconStyles