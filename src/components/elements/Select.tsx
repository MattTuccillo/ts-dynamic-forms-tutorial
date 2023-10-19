import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';
import { Option } from '../../App';

interface SelectProps {
    field_id: string;
    field_label: string;
    field_placeholder?: string;
    field_value?: string;
    field_options?: Option[];
}

const Select: React.FC<SelectProps> = ({ field_id, field_label, field_placeholder, field_value, field_options }) => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("Select must be used within a FormContext.Provider");
    }
    const { handleChange } = context;
    return (
        <>
            <label htmlFor={field_id} className="form-label">{field_label}</label>
            <select className="form-select" 
                    onChange={event=>handleChange(field_id, event)}
                    aria-label={field_label}
                    id={field_id}
            >
                <option>Open this select menu</option>
                {field_options && field_options.map((option, i) => (
                    <option value={option.option_label} key={i}>
                        {option.option_label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Select;
