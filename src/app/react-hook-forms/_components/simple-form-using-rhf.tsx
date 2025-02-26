'use client'

import React, { useState } from "react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SimpleForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Password does not match!"]);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-80 flex flex-col gap-y-3">
      <h1 className="text-sm text-center pb-6"> SIMPLE FORM USING RHF </h1>    
      <Input 
        type="email" 
        placeholder="Email" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
        type="password" 
        placeholder="Password" 
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}  
      />
      <Input 
        type="password" 
        placeholder="Confirm Password" 
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li 
              key={error} 
              className="text-center text-sm text-red-500 px-1">
              {error}
            </li>
          ))}
        </ul>
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