import React from 'react'
import Container from '../layout/Container'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className=' h-[646px] w-full relative '>

            <Carousel className=" w-full h-full z-20 relative  overflow-hidden ">
                <CarouselContent className=' absolute w-full h-full ml-0  top-0 left-0'>
                    <CarouselItem className=' w-full h-full pl-0 ' >
                        <div className=' w-full h-full bg-[url("/img/construction-one.png")] bg-cover bg-center '></div>

                    </CarouselItem>
                    <CarouselItem className=' w-full h-full pl-0 ' >
                        <div className=' w-full h-full bg-[url("/img/construction-two.png")] bg-cover bg-center '></div>

                    </CarouselItem>
                    <CarouselItem className=' w-full h-full pl-0 ' >
                        <div className=' w-full h-full bg-[url("/img/construction-three.png")] bg-cover bg-center '></div>


                    </CarouselItem>
                    <CarouselItem className=' w-full h-full pl-0 ' >
                        <div className=' w-full h-full bg-[url("/img/construction-four.png")] bg-cover bg-center '></div>


                    </CarouselItem>

                </CarouselContent>

                <div className=' w-full h-full relative bg-[#ffffff81] '>
                    <Container>
                        <div className=' flex w-full h-full'>
                            <div className=' w-[400px] md:w-[600px] h-full flex items-center '>
                                <div className=' font-semibold font-logo text-[52px] md:text-[72px] text-[#292E3D] '>Building Things is our mission.</div>
                            </div>

                        </div>
                    </Container>
                    <div className=' absolute top-0 left-0 w-full h-full flex justify-end items-end '>
                        <div className=' bg-[#3559C7] w-[300px] md:w-[416px] '>
                            <div className=' px-[52px] text-center text-white '>
                                <div className=' my-[20px] font-bold text-[14px] md:text-[20px] '>Feature Projects</div>
                                <div className=' mb-[20px] font-normal text-[16px] md:text-[24px] '>The National University of Architecture</div>
                            </div>
                            <div className=' flex w-full text-center justify-between '>
                                <div className=' w-[200px] relative h-[40px] text-white bg-neutral-800 border-white border-e '>
                                    <CarouselPrevious className=' hover:bg-neutral-700 hover:text-white bg-neutral-800 text-white left-0 h-full w-full rounded-none ' />

                                </div>
                                <div className=' w-[200px] relative h-[40px] font-logo text-white bg-neutral-800 '>
                                    <CarouselNext className=' hover:text-white hover:bg-neutral-700 bg-neutral-800 text-white left-0 h-full w-full rounded-none ' />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Carousel>

        </div>
    )
}

export default HeroSection