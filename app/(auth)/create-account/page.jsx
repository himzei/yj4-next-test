import Input from "@/components/Input";
import Button from "@/components/btn";

export default function page() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">Fill in the form below to Join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input
          name="username1"
          type="text"
          placeholder="Username"
          required
          minLength={3}
          maxLength={10}
        />
        <Input name="email" type="email" placeholder="Email" required />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <Input
          name="password2"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <Button loading={false} text="Create Account" />
      </form>
    </div>
  );
}
