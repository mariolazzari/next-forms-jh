"use server";

import { Registration, registrationSchema } from "@/types/registrationSchema";

export const onDataAction = async (data: Registration) => {
  const parsed = registrationSchema.safeParse(data);

  if (parsed.success) {
    console.log("User registered");
    return { message: "User registered", user: parsed.data };
  } else {
    return {
      message: "Invalid data",
      issues: parsed.error.issues.map(issue => issue.message),
    };
  }
};

export const onFormAction = async (
  prevState: {
    message: string;
    user?: Registration;
    issues?: string[];
  },
  formData: FormData
) => {
  "use server";
  const data = Object.fromEntries(formData);
  const parsed = await registrationSchema.safeParseAsync(data);

  if (parsed.success) {
    console.log("User registered");
    return { message: "User registered", user: parsed.data };
  } else {
    return {
      message: "Invalid data",
      issues: parsed.error.issues.map(issue => issue.message),
    };
  }
};
