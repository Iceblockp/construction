import React from 'react'
import Container from '../layout/Container'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className=' h-[646px] bg-gray-500 w-full relative '>
            <div className=' w-full h-full relative '>
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
                        <div className=' flex w-full text-center '>
                            <button className=' w-[50%] h-[40px] text-white bg-neutral-800 border-white border-e '>Next</button>
                            <button className=' w-[50%] h-[40px] font-logo text-white bg-neutral-800 '>Next</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection