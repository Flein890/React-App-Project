import React from 'react'
import { TextAreaForm,ErrorMessage } from './TextAreaStyles';

function TextArea ({ type,name,hasError,...field }) {
        return (
            <div>
                <TextAreaForm 
                type={type} 
                name={name}
                error={hasError}
                {...field}
                />
    
                {hasError && <ErrorMessage>{hasError}</ErrorMessage>}
            </div>
        );
    };

export default TextArea