"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute } from "react";
import { Control, FieldValue } from "react-hook-form";

export type FormInputProps = {
  type?: HTMLInputTypeAttribute;
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  control: Control<FieldValue<any>>;
};

const FormInput = ({
  type = "text",
  name,
  label = "",
  placeholder = "",
  description = "",
  control,
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
