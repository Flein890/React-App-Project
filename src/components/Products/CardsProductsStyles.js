import styled from 'styled-components'

export const CardsProductsStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:45px;
    font-family: 'Montserrat';
    font-style: normal;
    padding:150px 0;
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
    }
    @media (max-width: 768px) {
        gap: 10px;
        h2{
            font-size: 5rem;
            line-height: 65px;
        }
    }
    @media (max-width: 500px) {
        h2{
            font-size: 4rem;
            line-height: 55px;
            width:60%;
        }
        video{
            width: 80px;
            height: 80px;
        }
    }
    `

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
    font-family: 'Montserrat';
    
    button{
        background-color: #8330C4;
        cursor: pointer;
        border: none;
        color: #fff;
        padding: 10px 30px;
        border-radius: 78px ;
        font-family: 'Montserrat';
        transition: all .2s;
        
        /* width: 100%; */
    }
    button:hover{
        color: #000;
        background-color: #fff;
        outline: 1px solid #000;
    }
    `