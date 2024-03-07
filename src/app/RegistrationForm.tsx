"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema, Schema } from "./registrationSchema";
import FormInput from "./FormInput";

type Props = {
  onDataAction: (data: Schema) => Promise<{
    message: string;
    user?: Schema;
    issues?: string[];
  }>;
};

export const RegistrationForm = ({ onDataAction }: Props) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: "",
      last: "",
      email: "",
    },
  });

  const onSubmt = async (data: Schema) => {
    // form data
    // const formData = new FormData()
    // formData.append("first", data.first)

    // const res = await fetch("/api/registerForm", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: data),
    // });

    // const res = await fetch("/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // const resData = await res.json();

    // console.log(resData);

    // server action

    console.log(await onDataAction(data));
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmt)}>
        <div className="flex gap-2">
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            description="Your email address"
          />

          <FormInput
            control={form.control}
            name="first"
            label="First"
            description="Your first name"
          />
        </div>

        <FormInput
          control={form.control}
          name="last"
          label="Last"
          description="Your last name"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
