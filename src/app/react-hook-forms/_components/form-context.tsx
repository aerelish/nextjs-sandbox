'use client'

import React, {createContext, useContext, useState} from "react";

// initializing types so that ts know which types we are using
type Form = 'no-rhf' | 'using-rhf';

type FormContext = {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
}

const FormContext = createContext<FormContext | null>(null)

export default function FormContextProvider({children}: {children: React.ReactNode}) {
  const [form, setForm] = useState<Form>('no-rhf')
  return (
    <FormContext.Provider value={{form, setForm}}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider')
  }
  return context
}