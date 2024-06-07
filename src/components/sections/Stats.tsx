import React, { RefObject } from 'react'
import Container from '../layout/Container'

type Props = {
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void,
    contactRef: RefObject<HTMLDivElement>;

}

const Stats = (props: Props) => {
    const { scrollToSection, contactRef } = props;
    return (
        <Container>
            <div className='flex  lg:flex-row lg:items-center py-[50px] flex-col-reverse w-full  '>

                {/* hidden  */}
                <div className=' w-full xl:w-[50%] p-[30px] hidden '>
                    <div className=' relative w-full  h-full'>
                        {/* w 333  */}
                        <div className=' p-[] border border-gray-400 absolute top-[469px] left-[20px] h-[155px] w-[333px]  '>
                            <div className=' font-semibold text-[72px] text-neutral-800 '>123</div>
                            <div className=' text-[24px] text-neutral-500 '>Projects Completed</div>
                        </div>
                        {/* w 276  */}
                        <div className=' bg-white z-20 border border-gray-400 absolute right-[40px] top-[364px] h-[155px] w-[276px]  '>
                            <div>123</div>
                            <div>Projects Completed</div>
                        </div>
                        {/* w 280  */}
                        <div className=' bg-white z-20 border border-gray-400 absolute right-0 top-[122px] h-[155px] w-[280px]  '>
                            <div>123</div>
                            <div>Projects Completed</div>
                        </div>
                        {/* w 361  */}
                        <div className=' border border-gray-400 h-[155px] w-[361px] absolute left-0 top-[221px]  '>
                            <div>123</div>
                            <div>Projects Completed</div>
                        </div>


                    </div>
                </div>

                <div className=" w-full lg:w-[50%] p-[30px] ">
                    <div className=' w-full h-full grid grid-cols-1 gap-[30px] sm:grid-cols-2 '>
                        <div className=' p-[20px] relative border border-gray-400  '>
                            <div className=" absolute  top-[-20px] left-[-20px]  ">
                                <img src="/img/project-complete.png" className='  ' alt="" />
                            </div>
                            <div className=' font-semibold text-[72px] text-neutral-800 leading-[60px] '>123</div>
                            <div className=' text-[24px] text-neutral-500 border-s-[5px] px-[10px] border-[#F9995D] '>Projects Completed</div>
                        </div>
                        <div className=' relative p-[20px] border border-gray-400  '>
                            <div className=" absolute  top-[-5px] right-[-20px]  ">
                                <img src="/img/happy-client.png" className='  ' alt="" />
                            </div>
                            <div className=' font-semibold text-[72px] text-neutral-800 leading-[60px] '>84</div>
                            <div className=' text-[24px] text-neutral-500 border-s-[5px] px-[10px] border-[#F9995D] '>Happy Clients</div>
                        </div>
                        <div className=' relative p-[20px] border border-gray-400  '>
                            <div className=" absolute  top-[-20px] right-[-20px]  ">
                                <img src="/img/reward.png" className='  ' alt="" />
                            </div>
                            <div className=' font-semibold text-[72px] text-neutral-800 leading-[60px] '>37</div>
                            <div className=' text-[24px] text-neutral-500 border-s-[5px] px-[10px] border-[#F9995D] '>Awards Win</div>
                        </div>
                        <div className=' relative p-[20px] border border-gray-400  '>
                            <div className=" absolute  bottom-[-20px] right-[-20px]  ">
                                <img src="/img/year-business.png" className='  ' alt="" />
                            </div>
                            <div className=' font-semibold text-[72px] text-neutral-800 leading-[60px] '>30</div>
                            <div className=' text-[24px] text-neutral-500 border-s-[5px] px-[10px] border-[#F9995D] '>Years in Business</div>
                        </div>

                    </div>
                </div>

                <div className=' w-full h-full  lg:w-[50%] p-[30px]  '>
                    <div className=' flex flex-col gap-[20px] '>
                        <div className=' font-bold text-[43.9px] font-logo text-[#2947A9] '>30 Years Experience</div>
                        <div className=' font-normal font-logo text-[14.63px] text-neutral-600 '>Our company has been the leading provided construction services to clients throughout the USA since 1988.</div>
                        <div>
                            <button onClick={() => scrollToSection(contactRef)} className=' bg-[#2947A9] rounded-l text-[13.17px] px-[14.63px] py-[11.71px] text-white font-semibold font-logo '>Contact Us</button>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Stats