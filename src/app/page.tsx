import { onDataAction, onFormAction } from "@/actions/registration";
import { RegistrationForm } from "./RegistrationForm";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl">
      <RegistrationForm
        onDataAction={onDataAction}
        onFormAction={onFormAction}
      />
    </div>
  );
}
