"use client";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlTypes } from '../types/urlTypes';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

    const iconx = [
        { name: 'github', icon: faGithub, color: '#ffff', URL: urlTypes.GITHUB },
        { name: 'linkedin', icon: faLinkedin, color: '#ffff', URL: urlTypes.LINKEDIN },
    ]

    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
                            Hola, Soy {" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Evelyn.',
                                1000,
                                'Desarrolladora Front-end.',
                                1000,
                                //'Diseñadora UI/UX.',
                                //1000,
                                'Desarrolladora Móvil.',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                        Soy desarrolladora de aplicaciones móviles y web.
                        Mi objetivo es fusionar diseño y tecnología para ofrecer interfaces intuitivas y encantadoras.
                    </p>

                    <div className="flex px-1 py-3 w-full sm:w-fit">
                        {iconx.map((item, index) => (
                            <div key={index} className="grid p-2" >
                                <Link href={item.URL} target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={item.icon} color={item.color} className='text-3xl' />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-purple-300 hover:bg-purple-400 text-white'>
                        <Link 
                            href={urlTypes.CV}
                            target='_blank' rel='noopener noreferrer'
                            className='block bg-[#121212] hover:bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-5 py-2'
                        >
                            Descargar CV
                        </Link>
                    </button>
                </div>
                <div className='col-span-5 place-self-center'>
                    <div className='rounded-full bg-[#181818] w-[260px] h-[260px] lg:w-[410px] lg:h-[410px] relative'>
                        <Image
                            src='/images/me.jpg'
                            //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[170px] h-[170px] "
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] object-cover'
                            alt='me'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
