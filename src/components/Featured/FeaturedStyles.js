import styled from "styled-components";


export const FeaturedWrapperStyles = styled.div`
   display: grid;
   background-color: #EDE1FF;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  padding: 40px 40px 0 40px;
  gap: 40px;
  /* margin-top:40px; */
  margin:40px;
  place-items:center;
  border-radius: 48px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    width:1px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    /* background: #8330C4; */
    /* background:#fafafa; */
    background: #000;
    border-radius: 5px;
  }

`;

export const CardStyles = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 48px;
    justify-content: center;
    align-items: center;
    background-color: #fafafa; ;
    padding: 1rem 1.7rem;
    width: 400px;
    height: 200px;
    gap:1rem;
    font-family: 'Montserrat',system-ui ;
    justify-content:space-around;
    img{
        width:30%;
        object-fit: scale-down;
      }
        `
