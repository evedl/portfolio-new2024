import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import { urlTypes } from '../types/urlTypes';

const EmailSection = () => {


    const iconx = [
        { name: 'github', icon: faGithub, color: '#ffff', URL: urlTypes.GITHUB },
        { name: 'linkedin', icon: faLinkedin, color: '#ffff', URL: urlTypes.LINKEDIN },
    ]

    return (
        <section
            id='contact'
            className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
        >

            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>
                    ¡Hablemos!
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {' '}
                    Contáctame para iniciar tu proyecto.
                    Estoy disponible para trabajar y en busca de nuevas oportunidades,
                    mi bandeja de entrada siempre está abierta.
                </p>
                <div className='socials flex flex-grow gap-2'>
                    {iconx.map((item, index) => (
                        <div key={index} className="grid p-2" >
                            <Link href={item.URL} target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={item.icon} color={item.color} className='text-3xl' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <form className='flex flex-col' >
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Tu correo
                        </label>
                        <input
                            name='email'
                            type='email'
                            id='email'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='johnsmith@gmail.com'
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Hola!"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Hablemos de tu proyecto!"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>

        </section>
    )
}

export default EmailSection