'use client'
import Navbar from '@/components/layout/Navbar'
import { AboutUs, Ads, Bottom, ContentUs, Footer, HeroSection, Projects, Reputation, Services, Stats } from '@/components/sections'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}
export type Section = {
    ref: any,
    id: string
}

const HomePage = (props: Props) => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const serviceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState<string>('')

    const sections: Section[] = [
        { ref: homeRef, id: 'home' },
        { ref: aboutRef, id: 'about' },
        { ref: serviceRef, id: 'service' },
        { ref: projectRef, id: 'project' },
        { ref: contactRef, id: 'contact' },
    ]

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: Array.from(Array(101).keys(), t => t / 100)
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            })
        }, options);

        sections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });


        return () => {
            sections.forEach((section) => {
                if (section.ref.current) {
                    observer.unobserve(section.ref.current);
                }
            })
        }

    }, [sections]);


    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {

        if (sectionRef.current) {
            const offsetTop = sectionRef.current.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }




    return (
        <div>
            <div className=' sticky top-0 z-30 w-full bg-white border-b border-gray-200 '>
                <Navbar
                    sections={sections}
                    activeSection={activeSection}
                    scrollToSection={scrollToSection}

                />
            </div>
            <div id='home' ref={homeRef}>
                <HeroSection />
            </div>
            <div>
                <Reputation />
            </div>
            <div id='about' ref={aboutRef}>
                <AboutUs />
            </div>
            <div id='service' ref={serviceRef}>
                <Services />
            </div>
            <div>
                <Stats contactRef={contactRef} scrollToSection={scrollToSection} />
            </div>
            <div>
                <Ads />
            </div>
            <div id='project' ref={projectRef}>
                <Projects />
            </div>
            <div id='contact' ref={contactRef}>
                <ContentUs />
            </div>
            <div>
                <Bottom />
            </div>
            <div>
                <Footer />
            </div>


        </div>
    )
}

export default HomePage