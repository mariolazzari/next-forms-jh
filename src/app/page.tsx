import { RegistrationForm } from "./RegistrationForm";
import { schema, Schema } from "./registrationSchema";

export default async function Home() {
  const onDataAction = async (data: Schema) => {
    "use server";
    const parsed = schema.safeParse(data);

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

  return (
    <div className="mx-auto max-w-xl">
      <RegistrationForm onDataAction={onDataAction} />
    </div>
  );
}
