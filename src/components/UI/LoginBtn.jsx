import React from 'react'
import { LoginBtnStyles } from './LoginBtnStyles'

const LoginBtn = ({onSubmit}) => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    onSubmit();
  }
  return (
   <LoginBtnStyles to='login' onClick={(e)=>handleSubmit(e)} type='submit'>Login</LoginBtnStyles>
  );
};

export default LoginBtn