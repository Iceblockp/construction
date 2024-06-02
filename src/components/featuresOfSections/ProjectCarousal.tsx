import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {}

const ProjectCarousal = (props: Props) => {
    return (
        <div className=' w-full h-full p-[50px] lg:p-[70px] '>
            <Carousel className="w-full flex flex-col ">
                <CarouselContent className=''>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className=' bg-gray-500 w-full h-[242px]'></div>
                                <div className=' bg-gray-500 w-full h-[242px]'></div>
                                <div className=' bg-gray-500 w-full h-[242px]'></div>
                                <div className=' bg-gray-500 w-full h-[242px]'></div>


                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className='  flex justify-between '>
                    <div className=' relative w-[200px] h-12'>
                        <CarouselPrevious className=' hover:bg-neutral-700 hover:text-white bg-neutral-800 text-white left-0 h-full w-full rounded-none ' />

                    </div>
                    <div className=' relative w-[200px] h-12 '>

                        <CarouselNext className=' hover:text-white hover:bg-neutral-700 bg-neutral-800 text-white left-0 h-full w-full rounded-none ' />
                    </div>



                </div>

            </Carousel>
        </div>
    )
}

export default ProjectCarousal