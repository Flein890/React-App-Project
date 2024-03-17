import React from 'react'
import { TextAreaForm,ErrorMessage } from './TextAreaStyles';

function TextArea ({ type,name,isError,...field }) {
        return (
            <div>
                <TextAreaForm 
                type={type} 
                name={name}
                error={isError}
                {...field}
                />
    
                {isError && <ErrorMessage>{isError}</ErrorMessage>}
            </div>
        );
    };

export default TextArea