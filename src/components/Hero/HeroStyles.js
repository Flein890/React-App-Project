import styled from "styled-components";
import bg from '../../images/bg.jpg';

export const HeroStyles = styled.div`
  /* background-image: url(${bg}); */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  justify-content: center;
  font-family: 'Monsterrat',system-ui ;
  height: 100vh;
  width: 100%;
  position: relative;

  h1{
    margin-top:6rem;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 7rem;
    max-width: 800px;
    text-align: center; 
    line-height: 90px;
    font-family: 'Montserrat';
  }
  p{
    text-align: center;
    font-size: 1.65em;
    max-width: 800px;
    font-weight: 400;
  }
  video{
    position: absolute;
    opacity:.7;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    z-index: -100;
  }

`

export const DownArrow = styled.button`
width: 80px;
height: 80px;
border: 1px solid #000;
border-radius: 50%;
text-align: center;
cursor: pointer;
position: absolute;
bottom: 60px;
left: 60px;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
img{
  width: 40px;
  height: 40px;
}
`