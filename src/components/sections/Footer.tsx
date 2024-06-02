import React from 'react'
import Container from '../layout/Container'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='  bg-[#2947A9] '>
            <Container>
                <div className='flex items-center h-[51.22px]'>
                    <div className="text-white font-normal font-logo text-[11.71px]  " >

                        TheBox Company 2022. All Rights Reserved
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Footer