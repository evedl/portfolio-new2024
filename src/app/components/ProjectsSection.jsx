'use client';
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';


const projectData = [
    {
        id: 1,
        title: 'Aplicacio móvil CMAPAS',
        description: 'Aplicación móvil para la gestion del servicio de agua y alcantarillado, pago del servico, entre otras funciones.',
        imgURL: '/images/projects/4.jpg',
        tag: ['Todos', 'Móvil'],
        gitUrl: 'https://github.com/evedl',
        previewUrl: '/',
    },
    {
        id: 2,
        title: 'IECG',
        description: 'Plataforma web para el Instituto de Cultura del estado de Guanajuato.',
        imgURL: '/images/projects/2.jpg',
        tag: ['Todos', 'Web'],
        gitUrl: 'https://github.com/evedl/IECG',
        previewUrl: '/',
    },
    {
        id: 3,
        title: 'Portafolio con HTML y CSS',
        description: 'Portafolio personal hecho con HTML y CSS realizado en el Bootcamp de Tecnolochicas PRO.',
        imgURL: '/images/projects/1.jpg',
        tag: ['Todos', 'Web'],
        gitUrl: 'https://github.com/evedl/evedl.github.io',
        previewUrl: 'https://evelyndeleon.netlify.app/',
    },
    {
        id: 4,
        title: 'Clonación de Google',
        description: 'Clonación de la página de inicio de Google con HTML y CSS.',
        imgURL: '/images/projects/3.jpg',
        tag: ['Todos', 'Web'],
        gitUrl: 'https://github.com/evedl/clonacionGoogle',
        previewUrl: 'https://cloningpagegoogle.netlify.app/',
    },
    {
        id: 5,
        title: 'Calculadora con Modo Oscuro',
        description: 'Calculadora con modo oscuro realizada con JS.',
        imgURL: '/images/projects/5.jpg',
        tag: ['Todos', 'Web'],
        gitUrl: 'https://github.com/evedl/Calculator---Dark-mode',
        previewUrl: 'https://calculator-dark-modeee.netlify.app/',
    },
]

const ProjectsSection = () => {

    const [tag, setTag] = useState('Todos')

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    )

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-10 md:mb-12'>
                Mis proyectos.
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name='Todos'
                    isSelected={tag === 'Todos'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name='Web'
                    isSelected={tag === 'Web'}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name='Móvil'
                    isSelected={tag === 'Móvil'}
                />

            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgURL={project.imgURL}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
