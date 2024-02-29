import styled from 'styled-components'

export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;

.navInvert{
        background-color: #000;
        color: #fff;
        /* transition: all .2s; */
    }
`

export const Line = styled.div`
height: 2px;
width: 20px;
background-color: #000;
transition: all .2s;
`


export const BussinessName = styled.span`
font-weight: 700;
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
@media (max-width: 976px){
    padding: 10px 30px;
    font-size: 1.2rem;
    font-weight: 500;
}
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
    padding-right: 15px;
    z-index: 1000;

    .hamburger{
        display: none;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
 
        gap: 8px;
        flex-direction:column ;
        @media (max-width: 976px) {
            display: flex;
        } 
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
   align-items: center;
}
.link{
    color:#000;
    text-decoration: none;
}

.logo{
    width: 30px;
}

.x{
transform: rotate(45deg) translateY(7px);
background-color: #fafafa;
}
.x2{
    transform: rotate(-45deg) translateY(-7px);
    background-color: #fafafa;
}



@media (max-width: 976px) {
    &{
        width: 100vw;
        margin-top: 0;
        border-radius: 0;
        box-shadow: none;
        justify-content: space-between;
        background-color: #fafafa;
        padding:0 15px 0 15px;
        border: none;
        outline: none;
    }
    .ul{
        display: none;
        transform: translateX(-1500px);
    }


}

.open{
        display: flex;
        height: 100vh;
        background-color   : #000;
        width: 100%;
        position: absolute;
        top: 59px;
        margin: 0;
         left: 0;
        padding-left:30px;
        flex-direction: column;
        align-items: start;
        justify-content:center ;
        transform: translateY(0px);
        transition: all .2s ease-out;
        z-index: 500;
        .link{
            color: #fff;
           font-size: 2rem;
           font-weight: 500;
           transition: color .2s;
        }
        .link:hover{
            color: #8330C4;
        }
        .login{
            margin-top:100px ;
        }        
    }

`
