"use client";
import Button from "@/components/btn";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { handleForm } from "./action";

export default function Login() {
  const [state, action] = useFormState(handleForm, { potato: 1 });

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">Log in with email and password!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="Email" required />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.errors ?? []}
        />
        <Button text="Create Account" />
      </form>
    </div>
  );
}
