'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from '../types/NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import MenuOverlay from './MenuOverlay';


const navLink = [
    { title: 'Sobre mi', path: '#about' },
    { title: 'Proyectos', path: '#projects' },
    //{ title: 'Contacto', path: '#contact' }
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        //para que el navbar se mantenga en la parte superior de la pantalla
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href='/' className='text-2xl md:text-4xl text-white font-semibold'>
                    Evedl
                </Link>

                {/* menu para moviles se oculta en desktop */}
                <div className='mobile-menu block md:hidden'>
                    {/* controla el estado y muestra el boton para abrir o cerrar menu 
                        si el menu esta cerrado (navbarOpen es false) muestra el icono de barras
                    */}
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className='flex items-center px-3 py-2  text-slate-200 hover:text-white'
                        >
                            <FontAwesomeIcon icon={faBarsStaggered} className='h-6 w-6 text-2xl' />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <FontAwesomeIcon icon={faXmark} className='h-6 w-6 text-2xl ' />
                        </button>
                    )
                    }
                </div>

                {/* menu para desktop */}
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLink.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* renderiza menuoverlay en moviles */}
            {navbarOpen ? <MenuOverlay links={navLink} /> : null}
        </nav>
    )
}

export default Navbar
