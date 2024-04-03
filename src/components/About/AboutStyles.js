import styled from 'styled-components';

export const AboutStyles = styled.div`
width: 100%;
align-items: center;
justify-content: center;
padding: 170px;
background-color: #F0DCFF; // #F5F4EE; 
font-family: Montserrat;
@media (max-width: 768px){
    padding:150px 0px 100px 0px;
}
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 80px;
gap: 80px;

`
export const ColorSpan = styled.span`
background-color:#C9FFC5;
border-radius: 48px;
padding: -10px;
`
export const AboutTitle = styled.h2`
font-size:3.7em;
font-weight: 700;
line-height: 105%;
text-align:center;
 letter-spacing: -.05em;
unicode-bidi: isolate;
@media (max-width: 768px){
    font-size: 2.5em;
}
`
export const Video = styled.video`
border-radius: 12rem;
max-width: 600px;
@media (max-width: 768px){
    max-width: 400px;
}
@media (max-width:576px){
    max-width: 300px;
}
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
grid-template-rows: auto auto;
grid-gap: 53px 80px;
place-items:center;
@media (max-width: 576px){
    grid-template-columns: 1fr;
}
`

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: space-between;
`
export const DataTitle = styled.h3`
font-size: 1.4em;
font-weight: 700;`

export const DataP = styled.p`
font-size:1em;
font-weight:500`