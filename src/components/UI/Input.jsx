import React from 'react'
import { InputForm,ErrorMessage } from './InputStyles'

function Input ({ type,name,hasError,...field }) {
    return (
      <div>
        <InputForm 
        type={type} 
        name={name}
        error={hasError}
        {...field}
        />
  
        {hasError && <ErrorMessage>{hasError}</ErrorMessage>}
      </div>
    );
  };
export default Input