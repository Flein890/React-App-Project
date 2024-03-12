import styled from "styled-components";

const CartStyles = styled.div`

    position: fixed;
    top: 100px;
    width: 450px;
    right: 50px;
    height: calc(100vh - 200px);
    background-color:#FFE3D3;
    /* color: white; */
    z-index: 1000;
    border-radius:36px ;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    overflow-y: scroll;
    padding: 20px;
    font-family: 'Montserrat',system-ui ;
    `
    
   export const CartTittle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    border-bottom: 1px solid #000;
    padding:10px 0 20px 0;
    `

    export const CartContainer = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 20px;
    `

    export const CartItemStyles = styled.div`
    display: flex;
    /* color: white; */
    background-color: #fff;
    padding:20px;
    border-radius: 30px;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    `
    export const CartInfoContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    /* width: 33%; */
    `
    export const Tittle = styled.h3`
    font-size: 12px;
    font-weight: 600;
    `
    export const Price = styled.span`
    font-size: 13px;
    font-weight: 600;    `
export const TotalContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    border-top: 1px solid #000;
    padding-top: 20px;
    `
    export const Total = styled.p`
    font-size: 20px;
    font-weight: 600;
    `
export const HandlerAmount = styled.div`
align-self: center; 
cursor: pointer;`

export const Quantity = styled.span`
user-select: none;
font-size: 20px;
font-weight: 600;
width: 40px;
text-align:center
`
export const Anything = styled.p`
display: flex;
justify-content: start;
align-items: center;
gap: 5px;
`

    export default CartStyles