import React from 'react'
import Container from '../layout/Container'

type Props = {}

const Services = (props: Props) => {
    return (
        <div className=' bg-neutral-50 pb-[150px] '>
            <Container>
                <div className='  py-[44px] text-center font-bold text-[36px] text-neutral-800 '>Services</div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] px-[25px] md:px-0  '>
                    <div className=' w-full md:w-[271px] mx-auto bg-white h-[181px] border border-gray-400 '>hello</div>
                    <div className=' w-full md:w-[271px] mx-auto bg-[#2947A9] h-[181px] border border-gray-400 '>hello</div>
                    <div className=' w-full md:w-[271px] mx-auto bg-white h-[181px] border border-gray-400 '>hello</div>
                    <div className=' w-full md:w-[271px] mx-auto bg-[#2947A9] h-[181px] border border-gray-400 '>hello</div>
                    <div className=' w-full md:w-[271px] mx-auto bg-white h-[181px] border border-gray-400 '>hello</div>
                    <div className=' w-full md:w-[271px] mx-auto bg-[#2947A9] h-[181px] border border-gray-400 '>hello</div>
                </div>
            </Container>
        </div>
    )
}

export default Services