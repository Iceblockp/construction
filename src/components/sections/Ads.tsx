import React from 'react'
import Container from '../layout/Container'

type Props = {}

const Ads = (props: Props) => {
    return (
        <div className=' py-[50px] bg-black '>
            <Container>
                <div className='flex items-center flex-col gap-[30px] sm:flex-row  '>
                    <div className=' w-[70%] '>
                        <div>
                            <div className=' font-bold text-[26.34px] font-logo text-white '>Free consultation with exceptional quality</div>
                            <div className=' font-logo font-normal text-[17.56px] text-white '>Just one call away: <span className=' underline'>+84 1102 2703</span></div>
                        </div>
                    </div>
                    <div className=' w-full flex justify-center sm:w-[30%] '>
                        <div>
                            <button className=' px-[14.63px] py-[11.71px] text-white border font-semibold text-[13.17px] border-white rounded-l  '>Get your consultation</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Ads