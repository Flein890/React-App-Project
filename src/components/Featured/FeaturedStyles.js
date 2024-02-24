import styled from "styled-components";


export const FeaturedWrapperStyles = styled.div`
   display: grid;
   background-color: #000;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  gap: 40px;
  padding-top: 40px;
  margin: 40px 0 40px 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #8330C4;
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;

export const CardStyles = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 48px;
    justify-content: center;
    align-items: center;
    background-color: #EDE1FF ;
    /* background-color:red; */
    padding: 1rem 1.7rem;
    width: 300px;
    height: 200px;
    gap:1rem;
    font-family: 'Montserrat',system-ui ;
    justify-content:space-between;
    img{
        width:50%;
        object-fit: scale-down;
      }
        `

 export const Card = styled.div`
        `