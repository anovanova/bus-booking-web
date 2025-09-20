import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Login() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full text-center">
          <h1 className="text-xl font-semibold tracking-wide">Login</h1>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className="w-full">
          <Button className="w-full">Login</Button>
          <div className="py-4">
            <p className="text-neutral-500">
              Don&apos;t have an account?{" "}
              <span className="text-sky-600">Register</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
