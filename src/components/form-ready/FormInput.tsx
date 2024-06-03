import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface FormInputProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    name: Path<T>;
    placeholder: string;
    className: any
};
const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
    const { form, name, placeholder, className } = props;
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input className={className} placeholder={placeholder} {...field} />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormInput