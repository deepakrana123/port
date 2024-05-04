"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mt-4 w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        type="text"
        placeholder="First name"
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none
        focus:ring-2 focus:ring-50 custom-bg"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none
        focus:ring-2 focus:ring-50 custom-bg"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none
        focus:ring-2 focus:ring-50 custom-bg"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
       className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none
       focus:ring-2 focus:ring-50 custom-bg"
       placeholder="Message"
        {...register("message", { required: true, max: 256, min: 50 })}
      />
      <input type="submit" value="Cast your message" className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm
      backdrop-blur-sm text-foreground focus:outline-none
      focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize" />
    </form>
  );
} 
