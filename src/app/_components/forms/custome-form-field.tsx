"use client";
import { cn } from "@/lib/utils";
import type { Control, ControllerRenderProps } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";

interface CustomFormFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  fieldType: FormFieldType;
  placeholder?: string;
  label?: string;
  iconEl?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
}

const RenderInputField = ({
  field,
  props,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, string>;
  props: CustomFormFieldProps;
}) => {
  const { fieldType, placeholder, iconEl, disabled = false } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div
          className={cn(
            "flex h-9 w-full items-center rounded-md border border-input bg-transparent transition-colors",
            "focus-within:ring-1 focus-within:ring-ring focus-within:disabled:cursor-not-allowed focus-within:disabled:opacity-50",
          )}
        >
          {iconEl && iconEl}
          <FormControl>
            <Input
              disabled={disabled}
              {...field}
              placeholder={placeholder}
              className="custom-input"
            />
          </FormControl>
        </div>
      );
  }
};

export const CustomeFormFiled = (props: CustomFormFieldProps) => {
  const { control, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {label && <FormLabel>{label}</FormLabel>}
          <RenderInputField field={field} props={props} />

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
