import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --bgBlack: #2a2a2a;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    user-select: #8330C4;
}
*::selection{
    background-color: #8330C4;
    color:#fff;
}


html{
    scroll-behavior: smooth;
   
}
body{
    margin: 0;
    padding: 0;
    font-family: 'Monsterrat', system-ui ;
    background: #FAFAFA;
    /* color: var(--white); */
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    /* width: 100%; */
    
}
::-webkit-scrollbar {
    display: none;
}
`