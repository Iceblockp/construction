import React from 'react'
import Container from '../layout/Container'
import { ServiceFive, ServiceFour, ServiceOne, ServiceSix, ServiceThree, ServiceTwo } from '../icons'

type Props = {}

const Services = (props: Props) => {
    return (
        <div className=' bg-neutral-50 pb-[150px] '>
            <Container>
                <div className='  py-[44px] text-center font-bold text-[36px] text-neutral-800 '>Services</div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] px-[25px] md:px-0  '>
                    <div className=' w-full md:w-[198.3px] mx-auto bg-white h-[132.44px] border border-gray-400 flex flex-col items-center '>
                        <div className=' size-[44px] my-[20px] border-b-2 border-neutral-100 flex justify-center items-center '>
                            <ServiceOne />
                        </div>
                        <div className=' font-semibold text-[14.63px] text-[#2947A9] '>Construction</div>
                    </div>

                    <div className=' w-full md:w-[198.3px] mx-auto bg-[#2947A9] h-[132.44px] border border-gray-400 flex flex-col items-center '>
                        <div className=' size-[44px] my-[20px] border-b-2 border-white flex justify-center items-center '>
                            <ServiceTwo />
                        </div>
                        <div className=' font-semibold text-[14.63px] text-white '>Renovation</div>
                    </div>
                    <div className=' w-full md:w-[198.3px] mx-auto bg-white h-[132.44px] border border-gray-400 flex flex-col items-center'>
                        <div className=' size-[44px] my-[20px] border-b-2 border-neutral-100 flex justify-center items-center '>
                            <ServiceThree />
                        </div>
                        <div className=' font-semibold text-[14.63px] text-[#2947A9] '>Construction</div>
                    </div>
                    <div className=' w-full md:w-[198.3px] mx-auto bg-[#2947A9] h-[132.44px] border border-gray-400 flex flex-col items-center'>
                        <div className=' size-[44px] my-[20px] border-b-2 border-white flex justify-center items-center '>
                            <ServiceFour />
                        </div>
                        <div className=' font-semibold text-[14.63px] text-white '>Repair Services</div>
                    </div>
                    <div className=' w-full md:w-[198.3px] mx-auto bg-white h-[132.44px] border border-gray-400 flex flex-col items-center'>
                        <div className=' size-[44px] my-[20px] border-b-2 border-neutral-100 flex justify-center items-center '>
                            <ServiceFive />
                        </div>
                        <div className=' font-semibold text-[14.63px] text-[#2947A9] '>Architecture</div>
                    </div>
                    <div className=' w-full md:w-[198.3px] mx-auto bg-[#2947A9] h-[132.44px] border border-gray-400 flex flex-col items-center'>
                        <div className=' size-[44px] my-[20px] border-b-2 border-white flex justify-center items-center '>
                            <ServiceSix />
                        </div>
                        <div className=' font-semibold text-[14.63px] text-white '>Electric</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services