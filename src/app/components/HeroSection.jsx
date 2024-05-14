import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {

    const iconx = [
        { name: 'github', icon: faGithub, color: '#ffff', URL: 'https://github.com' },
        { name: 'linkedin', icon: faLinkedin, color: '#ffff', URL: 'https://linkedin.com' },
    ]

    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        Hola, Soy Evelyn.
                    </h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                        Soy desarrolladora front-end de aplicaciones móviles y web.
                        Mi objetivo es fusionar diseño y tecnología para ofrecer interfaces intuitivas y encantadoras
                    </p>

                    <div className="flex items-center">
                        {iconx.map((item, index) => (
                            <div key={index} className="grid p-2" >
                                <Link href={item.URL}>
                                    <FontAwesomeIcon icon={item.icon} color={item.color} className='text-white text-3xl' />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button>
                    </button>
                    <button className='px'>
                        Descargar CV
                    </button>
                </div>
                <div className='col-span-5 place'>
                    <div className='rounded-full bg-[#181818] w-[260px] h-[260px] lg:w-[410px] lg:h-[410px] relative'>
                        <Image
                            src='/images/me.jpg'
                            //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[170px] h-[170px] "
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] object-cover'
                            alt='sme'
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
