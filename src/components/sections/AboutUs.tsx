import React from 'react'
import Container from '../layout/Container'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <Container>
            <div className='  w-full relative mb-[150px] '>
                <div className=' w-full lg:w-[70%] h-[669px] bg-gray-500 '></div>

                <div className=' h-full flex items-center mt-[-100px] lg:mt-0 relative lg:absolute right-0 top-0 '>
                    <div className=" bg-[#2947A9] w-full sm:w-[488px] mx-auto  ">
                        <div className=' w-full h-full px-[40px] py-[50px] '>
                            <div className=' font-bold text-[36px] font-logo text-white '>About us</div>
                            <div className=' text-[20px] text-white mb-[40px]  '>
                                <p>For more than 30 years we have been delivering world-class construction and we&apos;ve built many lasting relationships along the way.</p>
                                <br />
                                <p>For more than 30 years we have been delivering world-class construction and we&apos;ve built many lasting relationships along the way.</p>
                            </div>
                            <div>
                                <button className=' rounded-xl  bg-white px-[20px] py-[16px] text-[#2947A9] '>More on Our History</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default AboutUs