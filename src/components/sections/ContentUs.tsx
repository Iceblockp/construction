"use client"
import React, { useRef } from 'react'
import Container from '../layout/Container'
import { FieldValue, useForm } from "react-hook-form"
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
import FormInput from '../form-ready/FormInput'
import { Textarea } from '../ui/textarea'
import emailjs from '@emailjs/browser';


type Props = {};
type FormParameter = {
    from_name: string,
    email: string,
    phone: string,
    reason: string,
    message: string
}
type FormData = {
    username: string,
    email: string,
    phone: string,
    reason: string,
    area: string
}

const ContentUs = (props: Props) => {
    const form = useForm({
        defaultValues: {
            username: '',
            email: '',
            phone: '',
            reason: '',
            area: '',
        }
    });

    const serviceId = 'service_fgixvrq';
    const templateId = 'template_oi5k3y5';
    const publicKey = 'SrPyRTuY5_30CUmSE';

    const onSubmit = (data: any) => {

        const formParameter: FormParameter = {
            from_name: data.username,
            email: data.email,
            phone: data.phone,
            reason: data.reason,
            message: data.area

        }


        emailjs.send(serviceId, templateId, formParameter, publicKey)
            .then(
                (response) => {
                    console.log('SUCCESS!');
                }
            ).catch((error) => {
                console.log("error")
            });

        form.reset();


    }
    return (
        <div className=' w-full h-full py-[44px] bg-neutral-50 '>
            <Container>
                <div className=' max-w-[434px] mx-auto '>
                    <div>
                        <div className=' font-bold font-logo text-[26.34px] text-neutral-800 '>What can us do for you?</div>
                        <div className=' mb-[25px] mt-[10px] font-normal font-logo text-neutral-800 text-[14.63px] '>We are ready to work on a project of any complexity, whether it&apos;s commercial or residential.</div>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                                    <div className=' flex justify-between gap-[25px] '>
                                        <FormInput className={' w-full'} form={form} name='username' placeholder='Your Name' />
                                        <FormInput className={''} form={form} name='email' placeholder='Email' />

                                    </div>
                                    <div className=' flex justify-between gap-[25px] '>
                                        <FormInput className={' w-full'} form={form} name='reason' placeholder='Reason for Contacting' />
                                        <FormInput className={''} form={form} name='phone' placeholder='Phone' />
                                    </div>
                                    <div>
                                        <FormField
                                            control={form.control}
                                            name='area'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea className=' w-full h-[98.78px] ' placeholder="Type your message here." {...field} />

                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" flex justify-center ">

                                        <button type="submit" className=' w-[198.3px] px-[14.63px] py-[11.71px] text-white text-center bg-[#2947A9] '>Submit</button>
                                    </div>

                                </form>
                            </Form>
                        </div>
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default ContentUs