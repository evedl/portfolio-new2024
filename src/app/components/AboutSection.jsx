'use client';
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import Image from 'next/image';


const tabContent = [
    {
        title: 'Habilidades',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Git</li>
            </ul>
        )
    },

    {
        title: 'Experiencia',
        id: 'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Desarrollador Móvil | CMAPAS (Gobierno del Estado de Salamanca, gto)</li>
                <li>Plataforma Web | Gobierno del Estado de Guanajuato</li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-9 items-center py-8 px-4 xl:gap-2 sm:py-16 xl:px-16'>
                <Image src="/images/si.jpg" width={350} height={350}
                    className=' rounded-3xl justify-self-center' />

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        Sobre mi.
                    </h2>
                    <p className='text-base lg:text-xlg'>
                        Soy una desarrolladora con experiencia en el desarrollo de aplicaciones web y móviles.
                        Tengo experiencia trabajando con tecnologías como React, React.js, JavaScript, Node.js, Express y Git.
                        Me encanta la programación y la tecnología, siempre estoy aprendiendo algo nuevo.
                        Aprendo y me adapto rápidamente a nuevas tecnologías y entornos.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}
                        >
                            {''}
                            Habilidades {''}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('experience')}
                            active={tab === 'experience'}
                        >
                            {''}
                            Experiencia {''}
                        </TabButton>
                    </div>
                    <div className='mt-3'>
                        {tabContent.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection