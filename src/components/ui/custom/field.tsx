import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const renderComponentByType = ({
  field,
  definition,
}: {
  field: ControllerRenderProps<FieldValues, string>;
  definition: {
    name: string;
    label: string;
    placeholder?: string | undefined;
    choices?: string[] | undefined;
    type: string;
  };
  disabled?: boolean;
}) => {
  switch (definition.type) {
    case "password":
      return (
        <Input
          placeholder={definition.placeholder}
          type={"password"}
          {...field}
        />
      );
    case "radio":
      return (
        <RadioGroup
          name={field.name}
          value={field.value}
          onValueChange={field.onChange}
        >
          <div className="flex gap-8">
            {definition.choices!.map((item, index) => {
              return (
                <div className="flex items-center gap-2" key={index}>
                  <RadioGroupItem value={item} id={item} />
                  <Label htmlFor={item} className="font-normal">
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      );
    case "date":
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!field.value}
              className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
            >
              <CalendarIcon />
              {field.value ? (
                format(field.value, "PPP")
              ) : (
                <span>{definition.placeholder}</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
            />
          </PopoverContent>
        </Popover>
      );
    default:
      return (
        <Input
          type={definition.type}
          placeholder={definition.placeholder}
          {...field}
        />
      );
  }
};

function Field<
  Schema extends Record<
    string,
    | string
    | number
    | readonly string[]
    | undefined
    | Date
    | boolean
    | Record<
        string,
        string | number | readonly string[] | undefined | boolean | File
      >
    | Record<
        string,
        string | number | readonly string[] | undefined | boolean | File
      >[]
  >
>({
  control,
  definition,
}: {
  control: Control<FieldValues, Schema>;
  definition: {
    name: Path<Schema>;
    label: string;
    placeholder?: string;
    choices?: string[] | undefined;
    type: string;
  };
}) {
  return (
    <FormField
      control={control}
      name={definition.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{definition.label}</FormLabel>
          <FormControl>
            {renderComponentByType({ field, definition })}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { Field };
