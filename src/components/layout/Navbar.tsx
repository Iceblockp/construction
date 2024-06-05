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
import { Section } from '../page/HomePage'


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

            <Container >
                <div className=' w-full h-full  '>
                    <div className=' flex w-full h-full items-center justify-between'>
                        <div className=' flex gap-[14px] '>
                            <div >

                                <svg width="29" height="36" viewBox="0 0 29 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4258 20.1434V27.2244L15.2519 34.8315V27.7496L28.4258 20.1434Z" fill="#2947A9" stroke="black" strokeWidth="0.731732" />
                                    <path d="M15.2519 1.34153L27.2405 8.26539L21.1107 11.8063L15.2519 8.42324V1.34153Z" fill="#0B267D" stroke="black" strokeWidth="0.731732" />
                                    <path d="M14.52 25.0112L9.84756 22.3137V15.2297L14.52 17.9302V25.0112Z" fill="#91A1D4" stroke="black" strokeWidth="0.731732" />
                                    <path d="M15.2519 25.0111V17.9303L28.4258 10.32V17.404L15.2519 25.0111Z" fill="#2947A9" stroke="black" strokeWidth="0.731732" />
                                    <path d="M14.5199 8.42319L8.6272 11.8243L2.5342 8.26266L14.5199 1.34149V8.42319Z" fill="#2947A9" stroke="black" strokeWidth="0.731732" />
                                    <path d="M7.47551 23.4722V23.6834L7.65848 23.7891L14.5199 27.7494V34.8313L1.34365 27.2242V10.3162L7.47551 13.856V23.4722Z" fill="#91A1D4" stroke="black" strokeWidth="0.731732" />
                                </svg>


                            </div>
                            <div className=' text-[30px] font-logo font-extrabold text-[#2947A9]  '><i>The</i>Box</div>
                        </div>
                        <div className=' hidden lg:flex text-[18px]  gap-[50px] items-center justify-between '>
                            {sections.map((section) => (
                                <div key={section.id} >
                                    <button className={` capitalize text-[18px]  font-logo border-gray-800 ${section.id == activeSection ? "text-[#2947A9] font-semibold" : "text-neutral-900"}`} onClick={() => scrollToSection(section.ref)}>{section.id}</button>
                                </div>
                            ))}
                        </div>
                        <div className=' flex items-center lg:hidden '>


                            <DropdownMenu >
                                <DropdownMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg></DropdownMenuTrigger>
                                <DropdownMenuContent className=' rounded-none w-[200px] border border-blue-200 px-4 space-y-2 py-2 '>
                                    {sections.map((section) => (

                                        <DropdownMenuItem onClick={() => scrollToSection(section.ref)} key={section.id}><button className={` capitalize text-[18px]  font-logo font-semibold border-gray-600 ${section.id == activeSection ? 'text-[#2947A9]' : "text-neutral-600"} `} >{section.id}</button></DropdownMenuItem>
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