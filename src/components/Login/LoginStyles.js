import styled from 'styled-components'

const LoginStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    font-family: 'Montserrat',system-ui ;
    height: 100vh;
    width: 100%;
    `
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    justify-content: space-between;
    height: 100vh;
    width: 50vw;
    `
 export const LoginContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap:20px;
        text-align: center;
        width: 320px;

        h2{
            font-size: 40px;
            font-weight: 800;
        }
    `
export const InputForm = styled.input`
border-radius: 50px;
border:1px solid #cacaca;
padding: 12px 13px;
height: 40px;
width: 100%;
background-color: #fff;

&:focus{
    outline: none;
    border:1px solid black;
}
`

export const FormContainer = styled.form`
       display:flex;
       flex-direction: column;
       gap: 16px;
       `
export const Linkers = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const FooterStyles = styled.footer`
color:#999;
font-size: 14px;
align-self: start;`

export const HeadingSection = styled.div`
display:flex;
align-items: center;
gap: 10px;
height: 50px;
align-self: start;


img{
    height: 40px;
}
`
export const LoginBtn = styled.button`
background-color: #9e4cdc;
border-radius: 50px;
padding: 12px 13px;
color:#fff;
border: none;
width: 100%;
cursor: pointer;
`

//____________________________________________________-

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50vw;
    background-color: #9942DB;
    gap:40px;

    /* img{
        width: 100%;
        height: 100%;
    } */
    `
    export const VideoWrapper = styled.div`
    overflow: hidden;
    height: 16rem;
    border-radius: 18rem;
    background-color: #fff8e2;
    padding: 43px 1rem 1rem;
    
    video{
        box-sizing: border-box;
        height: 15rem;
        max-width: 100%;
    }
    `
export const Features = styled.div`
display: flex;
    flex-direction: column;
    grid-gap: 12px;
    gap: 12px;
    padding-top: 16px;
    padding-left: 15px;
    box-sizing: border-box;
    color: #fff;
    font-size: 20px;
    font-weight: 600;

    span{
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: start;
    }
`

export default LoginStyles