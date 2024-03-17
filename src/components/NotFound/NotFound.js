import styled from "styled-components";

const NotFoundStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background:linear-gradient(to top,#d3d3d3 , #fafafa);
    gap: 15px;
`;
export const NotFoundTitle = styled.h2`
    font-size: 9em;
    font-weight: 700;
    font-family: 'Montserrat',system-ui ;
    z-index: 500;
    /* color: #777; */
    text-align: center;
`
export const Oops = styled.span`
    font-size: 1.5em;
    font-weight: 700;
    font-family: 'Montserrat',system-ui ;
    z-index: 500;
    text-align: center;
    color: #777;
`
export const NotFoundText = styled.span`
    font-size: 1.5em;
    font-weight: 700;
    font-family: 'Montserrat',system-ui ;
    z-index: 500;
    color: #777;
    text-align: center;

`
export const Resource = styled.span`
    font-size: 1em;
    font-weight: 700;
    font-family: 'Montserrat',system-ui ;
    z-index: 500;
    color: #777;
    text-align: center;
`
export default NotFoundStyled