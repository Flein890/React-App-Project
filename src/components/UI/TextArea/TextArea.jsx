import React from 'react'
import { TextAreaForm,ErrorMessage,InputContainer } from './TextAreaStyles';
import Input from '../Input';

function TextArea ({ type,name,hasError,...field }) {
        return (
            <InputContainer>
                <TextAreaForm 
                type={type} 
                name={name}
                error={hasError}
                {...field}
                />
    
                {hasError && <ErrorMessage>{hasError}</ErrorMessage>}
            </InputContainer>
        );
    };

export default TextArea