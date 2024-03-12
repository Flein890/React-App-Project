 import styled from "styled-components";

 export const AddModalStyles = styled.div`
 position: fixed;
 bottom: 0;
 background-color: #000;
 color: white;
 padding: 20px 0;
 width: 100vw;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all .2s;
 transform: translateY(100px);
animation: goUp .8s ease-in-out running alternate;
 gap: 5px; 
 svg{
    width: 30px;
    height: 30px;
 }

 .addmodal{
   transform: translateY(0px);
   background-attachment: #fff;
 }

 @keyframes goUp {
   0%{
     transform: translateY(100px);
   }
   25%{
     transform: translateY(0px);
   }
   50%{
     transform: translateY(0px);
   }
   75%{
     transform: translateY(0px);
   }
   100%{
     transform: translateY(100px);
   }
 }
 `