import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

interface InputProps {
    field_id: string;
    field_label: string;
    field_placeholder?: string;
    field_value?: string;
}

const Input: React.FC<InputProps> = ({ field_id, field_label, field_placeholder, field_value }) => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("Input must be used within a FormContext.Provider");
    }
    const { handleChange } = context;
    return (
        <div className="mb-3">
            <label htmlFor={field_id} className="form-label">{field_label}</label>
            <input 
                type="text" 
                className="form-control" 
                id={field_id} 
                aria-describedby={`${field_id}Help`} 
                placeholder={field_placeholder || ''} 
                value={field_value || ''}
                onChange={event=>handleChange(field_id, event)} 
            />
        <div id={`${field_id}Help`} className="form-text">We'll never share your {field_label.toLowerCase()} with anyone else.</div>
    </div>
  );
}

export default Input;
