import React from 'react'
import Container from '../layout/Container'
import { ProjectCarousal } from '../featuresOfSections'

type Props = {}

const Projects = (props: Props) => {
    return (
        <Container>
            <div className=' flex flex-col lg:flex-row w-full h-full my-[100px] '>
                <div className=' w-full lg:w-[20%] '>
                    <div className=' w-full h-full flex flex-col lg:items-start items-center '>
                        <div className=' font-bold text-[26.34px] py-2 text-neutral-800 '>Projects</div>
                        <div className=' flex flex-col gap-3 '>
                            <div className=' border-s-2 border-[#2947A9] font-bold px-3 text-[17.56px] text-[#2947A9] '><button>All</button></div>
                            <div className=' font-medium text-[17.56px] text-neutral-200 px-3 '><button>Commercial</button></div>
                            <div className=' font-medium text-[17.56px] text-neutral-200 px-3 '><button>Residential</button></div>
                            <div className=' font-medium text-[17.56px] text-neutral-200 px-3 '><button>Other</button></div>

                        </div>

                    </div>

                </div>

                <div className=' w-full lg:w-[80%] '>
                    <div className=' w-full h-full'>
                        <ProjectCarousal />
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Projects