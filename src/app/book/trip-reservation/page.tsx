"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Field } from "@/components/ui/custom/field";
import { useContext } from "react";
import { BookDispatchContext } from "@/app/contexts/bookContext";

const formSchema = z.object({
  tripLocation: z.string().min(1, "Username is required").optional(),
  reservationDate: z.string().min(1, "Password is required").optional(),
});

const formDefinitions = [
  {
    name: "tripLocation" as const,
    label: "Trip Location",
    type: "text",
    placeholder: "Trip Location",
  },
  {
    name: "reservationDate" as const,
    label: "Reservation Date",
    type: "text",
    placeholder: "Reservation Date",
  },
];

export default function TripReservationInfo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tripLocation: "",
      reservationDate: "",
    },
  });

  const onNext = (values: z.infer<typeof formSchema>) => {};
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full text-center">
          <h1 className="text-xl font-semibold tracking-wide">
            Trip Reservation Information
          </h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onNext)} className="space-y-8">
            <div className="flex w-full flex-col gap-4">
              {formDefinitions.map((item, index) => {
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
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
}
