import React from 'react'
import Container from '../layout/Container'
import { Input } from '../ui/input'

type Props = {}

const Bottom = (props: Props) => {
    return (
        <Container>
            <div className=" py-[62px] w-full h-full flex flex-col lg:flex-row lg:justify-between gap-10 ">
                <div className=' flex flex-col gap-[10px] '>
                    <div className=' flex '>
                        <div className=" w-[20%] font-medium font-logo text-[14.63px] text-[#2947A9] ">
                            ADDRESS:
                        </div>
                        <div className=' px-[10px] text-[14.63px] font-logo text-neutral-800 '>
                            6391 Elgin St. Celina, Delaware 10299
                        </div>
                    </div>
                    <div className=' flex '>
                        <div className=" w-[20%] font-medium font-logo text-[14.63px] text-[#2947A9] ">
                            PHONE:
                        </div>
                        <div className=' px-[10px] text-[14.63px] font-logo text-neutral-800 '>
                            +84 1102 2703
                        </div>
                    </div>
                    <div className=' flex '>
                        <div className=" w-[20%] font-medium font-logo text-[14.63px] text-[#2947A9] ">
                            EMAIL:
                        </div>
                        <div className=' px-[10px] text-[14.63px] font-logo text-neutral-800 '>
                            hello@thebox.com
                        </div>
                    </div>
                    <div>
                        <div className=' font-logo text-[21.95px] text-[#2947A9] font-[700] '><i>The</i>Box</div>
                    </div>
                </div>
                <div className='  '>
                    <div className=' flex flex-col gap-[10px] '>
                        <div className=' font-medium text-[14.63px] font-logo text-[#2947A9] '>NEWSLETTER:</div>

                        <div className=' font-medium text-[14.63px] text-[#2947A9] font-logo '>SOCIAL:</div>
                        <div className=' flex gap-3 '>
                            <div className=" size-[29.27px] bg-neutral-700 rounded-full flex justify-center items-end  ">
                                <svg className=' fill-white size-[22px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </div>
                            <div className=" size-[29.27px] bg-neutral-700 rounded-full flex justify-center items-center ">
                                <svg className=' size-[17px] fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                            </div>
                            <div className=" size-[29.27px] bg-neutral-700 rounded-full flex justify-center items-center ">
                                <svg className=' size-[17px] fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Bottom