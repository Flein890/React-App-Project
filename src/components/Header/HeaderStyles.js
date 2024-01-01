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
    padding: 0px 15px;
    z-index: 1000;

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
    width: 50px;
    padding-right: 30px;
}


`
