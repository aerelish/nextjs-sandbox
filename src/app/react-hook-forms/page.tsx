'use client'

import { useState } from "react";

import { useFormContext } from "@/app/react-hook-forms/_components/form-context";

import SimpleForm from "@/app/react-hook-forms/_components/simple-form-no-rhf";
import SimpleFormRHF from "@/app/react-hook-forms/_components/simple-form-no-rhf";

export default function Page() {

  const [page, setPage] = useState(<SimpleForm />);
  const { form } = useFormContext();

  const renderSwitch = (form: 'no-rhf' | 'using-rhf') => {

    switch (form) {
      case "no-rhf":
        setPage(<SimpleForm />);
      case "using-rhf":
        setPage(<SimpleFormRHF />);
      default:
        setPage(<SimpleForm />);;
    }
    return page;

  };

  return (
    <div className="min-w-full flex justify-center p-8">
      <div className="p-12 border border--border rounded-lg">
        {renderSwitch(form)}
      </div>
    </div>
  );
}