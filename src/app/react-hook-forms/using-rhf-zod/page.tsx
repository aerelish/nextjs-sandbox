import SimpleFormUsingRFHZod from "@/app/react-hook-forms/_components/simple-form-using-rhf-zod";

export default function Page() {
  return (
    <div className="min-w-full flex justify-center p-8">
      <div className="p-12 border border--border rounded-lg">
        <SimpleFormUsingRFHZod />
      </div>
    </div>
  );
}