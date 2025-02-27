import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col items-center p-32">
      <div className="text-3xl font-medium p-8">
        <h1>React Hook Forms</h1>
      </div>
      <div className="flex text-sm gap-x-4">
        
        <Button variant="link">
          <Link 
            href="/react-hook-forms"
          >
            Simple Form
          </Link>
        </Button>
        
        <Button variant="link">
          <Link 
            href="/react-hook-forms/using-rhf"
          >
            With RHF
          </Link>
        </Button>

        <Button variant="link">
          <Link 
            href="/react-hook-forms/using-rhf-zod"
          >
            With RHF+ZOD
          </Link>
        </Button>

      </div>
      {children}
    </div>
  );
}