import React from 'react'
import { LoginBtnStyles } from './LoginBtnStyles'

const LoginBtn = ({onSubmit,value}) => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    onSubmit();
  }
  return (
   <LoginBtnStyles to='login' onClick={(e)=>handleSubmit(e)} type='submit'>{value}</LoginBtnStyles>
  );
};

export default LoginBtn