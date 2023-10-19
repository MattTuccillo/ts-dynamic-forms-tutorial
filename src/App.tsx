import formJSON from './formElement.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';

export interface Option {
  option_label: string;
}

export interface Field {
  field_id: string;
  field_label: string;
  field_type: string;
  field_value?: string;
  field_mandatory?: string;
  field_placeholder?: string;
  field_options?: Option[];
}

interface ElementStructure {
  page_label?: string;
  fields?: Field[];
}

function App() {
  const [elements, setElements] = useState<ElementStructure | null>(null);
  useEffect(() => {
    setElements(formJSON[0]);
  }, []);

  const { page_label, fields } = elements ?? {};
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(elements);
  }

  const handleChange = (id: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const newElements = {...elements};
    const updatedFields = newElements.fields?.map(field => {
      if (id === field.field_id) {
        let updatedField = { ...field };
        switch (field.field_type) {
          case 'checkbox':
            const currentValue = (event.target as HTMLInputElement).checked.toString();
            if (currentValue === "true") {
              updatedField['field_value'] = "checked";
            }
            if (currentValue === "false") {
              updatedField['field_value'] = "unchecked";
            }
            break;
          default:
            updatedField['field_value'] = event.target.value;
        }
        return updatedField;
      }
      return field;
    });
  
    newElements.fields = updatedFields;
    setElements(newElements);
  }
  

  return (
    <FormContext.Provider value={{ handleChange }}>
    <div className="App container">
      <h3>{page_label}</h3>
      <form onSubmit={handleSubmit}>
        {fields ? fields.map((field: Field, i: number) => <Element key={i} field={field} />) : null}

        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
    </FormContext.Provider>
  );
}

export default App;
