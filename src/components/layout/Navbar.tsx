import React from 'react'
import Container from './Container'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Section } from '@/app/page'


type Props = {
    sections: Section[],
    activeSection: string,
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void,
}

const Navbar = (props: Props) => {
    const { sections, activeSection, scrollToSection } = props;
    // console.log(activeSection);
    return (
        <div className=' h-[80px] w-full flex items-center '>

            <Container>
                <div className=' w-full '>
                    <div className=' flex w-full justify-between'>
                        <div className=' flex gap-[14px] '>
                            <div >box</div>
                            <div className=' text-[30px] font-logo font-extrabold text-[#2947A9]  '><i>The</i>Box</div>
                        </div>
                        <div className=' hidden lg:flex text-[18px]  gap-[50px] items-center justify-between '>
                            {sections.map((section) => (
                                <div key={section.id} >
                                    <button className={` capitalize text-[18px] text-neutral-900 font-logo border-gray-800 ${section.id == 'contact' ? 'text-[#F9995D] font-semibold' : ""} ${section.id == activeSection ? "border-b" : ""}`} onClick={() => scrollToSection(section.ref)}>{section.id}</button>
                                </div>
                            ))}
                        </div>
                        <div className=' flex items-center lg:hidden '>


                            <DropdownMenu>
                                <DropdownMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {sections.map((section) => (

                                        <DropdownMenuItem key={section.id}><button className={` capitalize text-[18px] text-neutral-900 font-logo border-gray-600 ${section.id == activeSection ? 'border-b' : ""} `} onClick={() => scrollToSection(section.ref)}>{section.id}</button></DropdownMenuItem>
                                    ))}

                                </DropdownMenuContent>
                            </DropdownMenu>


                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Navbar