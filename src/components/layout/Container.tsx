import React from 'react'

type Props = {}

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' px-[14px] w-full h-full '>
            <div className=' mx-0 md:px-[100px] w-full h-full '>{children}</div>

        </div>
    )
}

export default Container