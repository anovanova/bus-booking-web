"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Field } from "@/components/ui/custom/field";

const formSchema = z.object({
  username: z.string().min(1, "Username is required").optional(),
  password: z.string().min(1, "Password is required").optional(),
});

const formDefinitions = [
  {
    name: "username" as const,
    label: "Username",
    type: "text",
    placeholder: "Username",
  },
  {
    name: "password" as const,
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
];

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onLogin = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full text-center">
          <h1 className="text-xl font-semibold tracking-wide">Information</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onLogin)} className="space-y-8">
            <div className="flex w-full flex-col gap-2">
              {formDefinitions.map((item, index) => {
                console.log(item);
                return (
                  <Field<z.infer<typeof formSchema>>
                    key={index}
                    control={form.control}
                    definition={item}
                  />
                );
              })}
            </div>
            <div className="w-full">
              <Button className="w-full">Next</Button>
              <div className="py-4">
                <p className="text-neutral-500">
                  Don&apos;t have an account?{" "}
                  <Link className="text-sky-600" href="/register">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
}
