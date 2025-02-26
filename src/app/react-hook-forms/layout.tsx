'use client'

import { Button } from "@/components/ui/button";
import { useFormContext } from "@/app/react-hook-forms/_components/form-context";

export default function Layout({children}: {children: React.ReactNode}) {

  const { setForm } = useFormContext();

  return (
    <div className="min-h-screen flex flex-col items-center p-32">
      <div className="text-3xl font-medium p-4">
        <h1>React Hook Forms</h1>
      </div>
      <div className="flex gap-x-1">
        <Button variant="link" onClick={() => setForm('no-rhf')}>Regular</Button>
        <Button variant="link" onClick={() => setForm('using-rhf')}>With RHF</Button>
      </div>
      {children}
    </div>
  );

}