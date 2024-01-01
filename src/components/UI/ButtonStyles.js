import styled from "styled-components"

export const ButtonStyles = styled.button`
    border: none;
    font-family: 'Montserrat',system-ui ;
    border-radius: 2em;
    background-color: #8330C4;
    color: white;
    padding: 25px 50px;
    cursor: pointer;
    font-size: 1.4em;
    transition: all .2s;
    
    &:hover{
        animation: bubble 0.5s infinite alternate;
        background-color: #9942DB;
    }

   

    @keyframes bubble{
        0%{
            transform: scaleX(1);
        }
        50%{
            transform: scaleX(1.05);
        }
        100%{
            transform: scaleX(1);
        }
    }
    `