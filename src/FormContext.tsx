import { createContext } from 'react';

export interface FormContextType {
    handleChange: (id: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  }

export const FormContext = createContext<FormContextType | null>(null);