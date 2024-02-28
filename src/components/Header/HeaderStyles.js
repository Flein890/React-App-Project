import styled from 'styled-components'

export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`

export const HeaderStyles = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500&display=swap');

    background: rgba(255, 255, 255, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.3px);
    -webkit-backdrop-filter: blur(6.3px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 2em;
    height: 60px;
    margin-top:40px;
    position: fixed;
    font-family: 'Montserrat',system-ui ;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    padding-left: 15px;
    z-index: 1000;

.hamburguer
{
    display: none;
}    
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.ul{
    display:flex;
    list-style: none;
   gap: 30px;
   padding: 0;
   font-size:1.2em;
}
.link{
    color:#000;
    text-decoration: none;
}

.logo{
    width: 30px;
}

@media (max-width: 976px) {
    &{
        width: 100vw;
        margin-top: 0;
        border-radius: 0;
        box-shadow: none;
        justify-content: space-between;
        background-color: #fafafa;
    }
    .ul{
        display: none;
    }
    .hamburguer{
        display: flex;
        span{
            width: 50px;
            height: 3px;
            background-color: #000;
        }
    }

}

`
export const BussinessName = styled.span`
font-weight: 500;
display: none;

@media (max-width: 976px) {
    display: block;
}
`

export const LogoContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
justify-content: center;
`

export const ToLogin = styled.button`
padding: 10px 25px;
border-radius: 2em;
font-family: 'Montserrat',system-ui ;
background-color: #8330C4;
cursor: pointer;
outline: none;
border: none;
color:#fff;

&:hover{
    
}
`