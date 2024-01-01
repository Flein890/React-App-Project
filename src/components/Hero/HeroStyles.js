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
    font-weight: 700;
    font-size: 7rem;
    max-width: 800px;
    text-align: center; 
    line-height: 90px;
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
