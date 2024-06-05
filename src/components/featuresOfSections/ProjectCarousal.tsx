import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion"

type Props = {}
type Project = {
    data: string,
    isDetail: boolean
}

const ProjectCarousal = (props: Props) => {

    const initialProjects: Project[] = [

        {
            data: "first",
            isDetail: false
        },
        {
            data: "second",
            isDetail: false
        },
        {
            data: "third",
            isDetail: false
        },
        {
            data: "fourth",
            isDetail: false
        },
        {
            data: "five",
            isDetail: false
        },
        {
            data: "six",
            isDetail: false
        },
        {
            data: "seven",
            isDetail: false
        },
        {
            data: "eight",
            isDetail: false
        }
    ];
    const [projects, setProjects] = useState(initialProjects)

    const chunkArray = (array: Project[], chunkSize: number) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize).map((item, index) => ({ ...item, number: index + 1 }))
            result.push(chunk);
        }
        return result;
    }

    const viewDetail = (id: string) => {
        const updateProjects = projects.map((el) => el.data == id ? { ...el, isDetail: true } : { ...el, isDetail: false });
        setProjects(updateProjects);
    }
    const closeDetail = (id: string) => {
        const closedProjects = projects.map((el) => el.data == id ? { ...el, isDetail: false } : { ...el, isDetail: false });
        setProjects(closedProjects);
        // console.log(closedProjects)
    }

    let manageData = chunkArray(projects, 4);

    // console.log(projects);




    return (
        <div className=' w-full h-full p-[50px] lg:p-[70px] '>
            <Carousel className="w-full flex flex-col ">
                <CarouselContent className=''>
                    {manageData.map((items, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 w-full bg-blue-300 relative h-full grid grid-cols-2 sm:grid-cols-2 gap-4">
                                {
                                    items.map((item) => (
                                        <div className=' w-full h-[121px] sm:h-[242px]'>

                                        </div>
                                    ))
                                }
                                {
                                    items.map((item) => (
                                        <div className={`bg-pink-300 absolute border border-black ${item.isDetail ? (` w-[85%] h-[85%] z-40 duration-500   ${(item.number == 1 && "top-[7.5%] left-[7.5%]  ") || (item.number == 2 && "top-[7.5%] right-[7.5%]") || (item.number == 3 && "left-[7.5%] bottom-[7.5%]") || (item.number == 4 && "right-[7.5%] bottom-[7.5%]")} `) : (` w-[47%] h-[47%]  ${(item.number == 1 && "top-0 left-0 ") || (item.number == 2 && "top-0 right-0") || (item.number == 3 && "left-0 bottom-0") || (item.number == 4 && "right-0 bottom-0")} `)} `}>
                                            <div onClick={() => viewDetail(item.data)} className={` w-full h-full  `}></div>
                                            {item.isDetail && (
                                                <div onClick={() => closeDetail(item.data)} className=' absolute top-0 right-0 bg-red-300 cursor-pointer '>close</div>
                                            )}

                                        </div>
                                    ))
                                }



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