import styled from 'styled-components'

export const CardsProductsStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:45px;
    font-family: 'Montserrat';
    font-style: normal;
    padding:100px 0;
    /* border-top-right-radius: 48px;
    border-top-left-radius: 48px; */
    /* background-color: #fff; */
    `

export const CardsWrapperHeading = styled.div`
    display:flex;
    gap: 20px;
    justify-content:center;
    align-items: end;
    
    h2{
        font-size:96px;
        width: 50%;
        line-height: 80px;
        font-weight: 600;
    }
    
    video{
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }`

    export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
   max-width: 1000px
  
    `

    export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 48px;
    padding: 30px;
    width: 300px;
    height: 500px;
    gap:15px;
    font-family: 'Montserrat',system-ui ;
    background-color: #fff;
    justify-content:space-between;
    img{
        width: 100%;
        height: 220px;

    }
    p{
        color:#777;
    }
    span{
        font-weight: 600;
    }
    `

    export const BuyInfo = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    
    button{
        background-color: #8330C4;
        cursor: pointer;
        border: none;
        color: #fff;
        padding: 15px 30px;
        border-radius: 78px ;
        /* width: 100%; */
    }`