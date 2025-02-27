'use client'

import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// ideally would place this in a dedicated schema folder
const formSchemaExample = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
// refine here is basically adding the more complicated validation like validate in RHF
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  // this is an array so if want to show error in multiple place
  path: ["confirmPassword"], 
});

export default function SimpleFormUsingRFHZod() {

  // with zod, adding resolver for rhf
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
    reset,
  } = useForm({
    resolver: zodResolver(formSchemaExample),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-w-80 flex flex-col gap-y-3">
      <h1 className="text-sm text-center pb-6"> SIMPLE FORM USING RHF+ZOD </h1>    
      <Input 
        type="email" 
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-sm text-red-500 px-1">{`${errors.email.message}`}</p>
      )}
      <Input 
        type="password" 
        placeholder="Password"
        {...register("password")} 
      />
      {errors.password && (
        <p className="text-sm text-red-500 px-1">{`${errors.password.message}`}</p>
      )}
      <Input 
        type="password" 
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p className="text-sm text-red-500 px-1">{`${errors.confirmPassword.message}`}</p>
      )}
      <div className="flex justify-end">
        <Button 
          type="submit"
          disabled={isSubmitting} 
          className="w-1/2"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}