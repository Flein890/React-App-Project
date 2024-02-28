import React from 'react'
import { InputForm } from './InputStyles'

function Input ({ type,name,isError,...field }) {
    return (
      <div>
        <InputForm 
        type={type} 
        name={name}
        error={isError}
        {...field}
        />
  
        {isError && <span>{isError}</span>}
      </div>
    );
  };
export default Input