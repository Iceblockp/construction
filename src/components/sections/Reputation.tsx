import React from 'react'
import Container from '../layout/Container'

type Props = {}

const Reputation = (props: Props) => {
    return (
        <Container>
            <div className=' my-[20px] '>
                <div className='my-[40px] text-center'>Our Reputation</div>
                <div className=' mb-[50px] p-[50px] grid grid-cols-1 lg:grid-cols-3 gap-[50px] justify-around '>

                    <div className=' w-full p-[18px] border border-neutral-200  flex flex-col gap-5'>
                        <div className=" w-[40px] h-[40px] bg-yellow-500 "></div>
                        <div className=' font-bold text-[20px] text-neutral-700 '>Best Service</div>
                        <div className=' text-neutral-400 '>Hello are you okey now? I hope your are okay</div>
                    </div>
                    <div className=' w-full p-[18px] border border-neutral-200  flex flex-col gap-5'>
                        <div className=" w-[40px] h-[40px] bg-yellow-500 "></div>
                        <div className=' font-bold text-[20px] text-neutral-700 '>Best Service</div>
                        <div className=' text-neutral-400 '>Hello are you okey now? I hope your are okay</div>
                    </div>
                    <div className=' w-full p-[18px] border border-neutral-200  flex flex-col gap-5'>
                        <div className=" w-[40px] h-[40px] bg-yellow-500 "></div>
                        <div className=' font-bold text-[20px] text-neutral-700 '>Best Service</div>
                        <div className=' text-neutral-400 '>Hello are you okey now? I hope your are okay</div>
                    </div>



                </div>
            </div>
        </Container>
    )
}

export default Reputation