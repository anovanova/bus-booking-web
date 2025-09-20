import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full text-center">
          <h1 className="text-xl font-semibold tracking-wide">Register</h1>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
        <div className="w-full">
          <Button className="w-full">Register</Button>
        </div>
      </main>
    </div>
  );
}
