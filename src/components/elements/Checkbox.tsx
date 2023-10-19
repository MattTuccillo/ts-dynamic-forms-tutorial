import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

interface CheckboxProps {
    field_id: string;
    field_label: string;
    field_value?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ field_id, field_label, field_value }) => {
  const context = useContext(FormContext);
    if (!context) {
        throw new Error("Checkbox must be used within a FormContext.Provider");
    }
  const { handleChange } = context;
  return (
    <div className="mb-3 form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            id={field_id}
            checked={field_value==="checked" ? true : false}
            onChange={event=>handleChange(field_id, event)}
        />
        <label className="form-check-label" htmlFor={field_id}>
          {field_label}
        </label>
    </div>
  );
}

export default Checkbox;
