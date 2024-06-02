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
import { FieldValues, UseFormReturn } from 'react-hook-form';

type FormInputProps = {
    form: UseFormReturn<FieldValues, any, undefined>;
    name: string;
    placeholder: string;
    className: any
};
const FormInput = (props: FormInputProps) => {
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