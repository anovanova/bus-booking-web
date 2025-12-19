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
  tripLocation: z.string().min(1, "Trip Location is required").optional(),
  reservationDate: z.date().min(1, "Reservation Date is required").optional(),
  roundTrip: z.string().min(1, "Round Trip is required").optional(),
  roundTripReservationDate: z
    .date()
    .min(1, "Reservation Date is required")
    .optional(),
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
    type: "date",
    placeholder: "Reservation Date",
  },
  {
    name: "roundTrip" as const,
    label: "Round Trip?",
    type: "radio",
    choices: ["Yes", "No"],
  },
  {
    name: "roundTripReservationDate" as const,
    label: "Reservation Date",
    type: "date",
    placeholder: "Reservation Date",
  },
];

export default function TripReservationInfo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tripLocation: "",
      reservationDate: new Date(),
      roundTrip: "No",
      roundTripReservationDate: new Date(),
    },
  });

  const roundTripValWatch: string = form.watch("roundTrip")!;

  const formArray = () => {
    if (roundTripValWatch === "No" || form.getValues("roundTrip") === "No") {
      const newArray = formDefinitions.filter(
        (item) => item.name !== "roundTripReservationDate"
      );
      return newArray;
    }
    return formDefinitions;
  };

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
              {formArray().map((item, index) => {
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
