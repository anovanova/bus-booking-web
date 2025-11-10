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

const renderComponentByType = ({
  field,
  definition,
}: {
  field: ControllerRenderProps<FieldValues, string>;
  definition: {
    name: string;
    label: string;
    placeholder: string;
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

    case "text":
      return <Input placeholder={definition.placeholder} {...field} />;
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
    placeholder: string;
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
