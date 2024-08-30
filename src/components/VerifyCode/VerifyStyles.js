import styled from "styled-components";

export const VerifyContainer = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 50vw;
    padding:40px;
    
    @media (max-width: 976px){
         justify-content:center ;
       
         height: 100vh;
         width: 100vw;  
        }

`
                                                                
    export default VerifyContainer