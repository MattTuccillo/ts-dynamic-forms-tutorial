import React from 'react';
import Input from './elements/Input';
import Select from './elements/Select';
import Checkbox from './elements/Checkbox';
import { Field } from '../App';

interface ElementProps {
    field: Field;
}

const Element: React.FC<ElementProps> = ({ field }) => {

    switch (field.field_type) {
        case 'text':
            return <Input 
                field_id = {field.field_id} 
                field_label = {field.field_label}
                field_placeholder = {field.field_placeholder}
                field_value = {field.field_value}/>;
        case 'select':
            return <Select 
                field_id = {field.field_id} 
                field_label = {field.field_label}
                field_placeholder = {field.field_placeholder}
                field_value = {field.field_value}
                field_options={field.field_options}/>;
        case 'checkbox':
            return <Checkbox 
                field_id = {field.field_id} 
                field_label = {field.field_label}
                field_value = {field.field_value}/>;
        default:
            return <div>element</div>;
    }
};

export default Element;
