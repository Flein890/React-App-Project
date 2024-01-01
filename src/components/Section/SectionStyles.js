import styled from "styled-components";

export const ContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap:40px;
    
    h2{
        font-size: 2.5em;
        font-family: 'Montserrat',system-ui ;

        span{
        background-color: #FFE3D3;
        border-radius:40px ;
        padding: 0 15px;
    }
    }
   `

export const SectionSyles = styled.section`
    display: flex;
    width: 100%;
   border-radius: 48px;
    background-color:#FEF2FF ;
    padding:0 100px;
`