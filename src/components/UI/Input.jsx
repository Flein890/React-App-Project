import React from 'react'
import { InputForm,ErrorMessage,InputContainer } from './InputStyles'

function Input ({ type,name,hasError,...field }) {
    return (
      <InputContainer>
        <InputForm 
        type={type} 
        name={name}
        error={hasError}
        {...field}
        />
  
        {hasError && <ErrorMessage>{hasError}</ErrorMessage>}
      </InputContainer>
    );
  };
export default Input