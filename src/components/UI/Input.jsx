import React from 'react'
import { InputForm,ErrorMessage } from './InputStyles'

function Input ({ type,name,isError,...field }) {
    return (
      <div>
        <InputForm 
        type={type} 
        name={name}
        error={isError}
        {...field}
        />
  
        {isError && <ErrorMessage>{isError}</ErrorMessage>}
      </div>
    );
  };
export default Input