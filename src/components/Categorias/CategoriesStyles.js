import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex;
    gap: 25px;
    `
export const CategorieToSelect = styled.div`
background-color: transparent;
cursor: pointer;
padding:10px;
border: 1px solid #000;
border-radius: 48px;
font-size: .8em;
transition: all .2s ease;
text-align: center;
width: 150px;

background-color: ${({ selected }) => selected ? '#8330C4' : 'transparent'};
color: ${({selected}) => selected ? '#fff' : '#000'};
  cursor: pointer;

  span{
    font-weight: 600;
    text-align: center;
  }

`