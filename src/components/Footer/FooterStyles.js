import styled from "styled-components"

export const FooterStyles = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat',system-ui ;
    color: #fff;
    background-color:#000;
    gap: 80px;
    padding: 80px 0;

    .container{
        display: flex;
        gap:120px;
    }
    
    .footer-left{
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;

     h3{
        font-size: 28px;
        font-weight: 600;
        /* width: 100px; */
     }
     img{

     }
    }
.footer-right{
    display: flex;
    justify-content:start;
    align-items: center;
    gap:50px;
    font-size: 19px;
    font-weight: 500;

    a{
        text-decoration: none;
        color: #fff;
    }
    ul{
        display: flex;
        gap: 15px;
        flex-direction: column;
    }

}
   .support{
    display: flex;
    gap:30px;
    justify-content: start;

    a{
        color: #777;
    }
    .email{
        color: #eee;
    }
   }
    `